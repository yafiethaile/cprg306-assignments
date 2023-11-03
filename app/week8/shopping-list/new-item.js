"use client";
import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  // Initialize state variables for name, quantity, and category
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission

    // Create an object with the name, quantity, and category
    const item = {
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop and pass the item object
    onAddItem(item);

    // Clear the form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-black px-4 py-2 border rounded focus:outline-none"
          />
        </label>

        {/* Quantity */}
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="text-black px-4 py-2 border rounded focus:outline-none"
          />
        </label>

        {/* Category */}
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black px-4 py-2 border rounded focus:outline-none"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded px-4 py-2 hover:bg-blue-600"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewItem;