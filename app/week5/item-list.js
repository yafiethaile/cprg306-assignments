import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; // Updated import syntax

const ItemList = () => {
  // Initialize the sortBy state variable with an initial value of "name"
  const [sortBy, setSortBy] = useState("name");

  // Use JavaScript's sort function to sort the items based on the sortBy state variable
  const sortedItems = [...itemsData]; // Use the imported data directly

  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0; // Default case, no sorting
  });

  // Function to handle sorting preference change
  const handleSortByChange = (preference) => {
    setSortBy(preference);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        {/* Sort by Name button */}
        <button
          onClick={() => handleSortByChange("name")}
          style={{
            backgroundColor: sortBy === "name" ? 'lightblue' : 'white',
          }}
        >
          Sort by Name
        </button>

        {/* Sort by Category button */}
        <button
          onClick={() => handleSortByChange("category")}
          style={{
            backgroundColor: sortBy === "category" ? 'lightblue' : 'white',
          }}
        >
          Sort by Category
        </button>
      </div>

    <ul>
        {sortedItems.map((item) => (
            <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
            />
        ))}
    </ul>
    </div>
  );
};

export default ItemList;