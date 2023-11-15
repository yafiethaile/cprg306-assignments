import React, { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from "./_services/shopping-list-service";
import { Link } from 'next/link';

function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "" });

  // Step 1: Create an async function loadItems
  const loadItems = async () => {
    try {
      if (user) {
        const userId = user.uid;
        const shoppingListItems = await getItems(userId);
        setItems(shoppingListItems);
      }
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  // Step 2: Add the useEffect hook
  useEffect(() => {
    // Call loadItems when the component is mounted
    loadItems();
  }, [user]); // useEffect dependencies: user

  // Step 3: Handle adding an item
  const handleAddItem = async () => {
    try {
      if (user) {
        const userId = user.uid;

        // Step 3.1: Call the addItem function to add the item to the shopping list
        const newItemId = await addItem(userId, newItem);

        // Step 3.2: Set the id of the new item
        const newItemWithId = { ...newItem, id: newItemId };

        // Step 3.3: Use setItems to set the state of items to include the new item
        setItems((prevItems) => [...prevItems, newItemWithId]);

        // Optional: Clear the newItem state for the next item
        setNewItem({ name: "", description: "" });
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        // User is logged in
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <Link href="/shopping-list">Shopping List</Link>
        </div>
      ) : (
        // User is not logged in
        <button onClick={handleSignIn}>Login with GitHub</button>
      )}
    </div>
  );
}

export default HomePage;