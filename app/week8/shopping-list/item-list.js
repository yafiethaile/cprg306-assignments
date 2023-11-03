import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  // Initialize state for sorting
  const [sortBy, setSortBy] = useState('name');

  // Handle sorting preference change
  const handleSortByChange = (preference) => {
    setSortBy(preference);
  };

  // Sort the items based on the sortBy state variable
  const sortedItems = [...items]; // Create a copy of the items array
  sortedItems.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0; // Default case, no sorting
  });

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        {/* Sort by Name button */}
        <button
          onClick={() => handleSortByChange('name')}
          style={{
            backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
          }}
        >
    
        </button>

        {/* Sort by Category button */}
        <button
          onClick={() => handleSortByChange('category')}
          style={{
            backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
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
            onSelect={() => onItemSelect(item.name, item.quantity, item.category)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;