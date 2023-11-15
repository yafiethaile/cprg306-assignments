import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    try{
        const db = admin.firestore();
        const itemsRef = db.collection('users').doc(userId);
        const itemsCollectionRef = userDocRef.collection('items');

        const itemsSnapshot = await itemsCollectionRef.get();

        const items = [];

        itemsSnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return items;
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
}

const userId = '1234';
getItems(userId)
.then((items) => {
    console.log('Retrieved', items);
})
.catch((error) => {
    console.log('Error', error);
});

addItem(userId, newItem)
  .then((newItemId) => {
    console.log('New item added with ID:', newItemId);
  })
  .catch((error) => {
    console.error('Error:', error);
  });