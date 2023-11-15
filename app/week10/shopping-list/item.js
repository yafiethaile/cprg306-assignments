import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  const handleClick = () => {
    // Call the onSelect function when the item is clicked
    onSelect(name, quantity, category);
  };

  return (
    <li onClick={handleClick} className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">Category: {category}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
    </li>
  );
};

export default Item;