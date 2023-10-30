"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 

function Page() {
  // Initialize a state variable (e.g., items) with the data from items.json
  const [items, setItems] = useState(itemsData);

  // Create an event handler function (e.g., handleAddItem) that adds a new item to items
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      {/* Pass the handleAddItem event handler to the NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      
      {/* Pass the items state to the ItemList component */}
      <ItemList items={items} />
    </div>
  );
}

export default Page;