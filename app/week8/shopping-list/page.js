"use client";
import React, { useState } from 'react';
import items from './items.json'; // Import or define the items data
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

const Page = () => {
  // Add a state variable for the selected item name
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (name) => {
    const cleanedName = name.split('🍗')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex">
      <div>
        <NewItem />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
