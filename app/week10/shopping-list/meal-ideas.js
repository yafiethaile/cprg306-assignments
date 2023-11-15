"use client"; 

import React, { useEffect, useState } from 'react';

// Define a function to fetch meal ideas based on the ingredient
async function fetchMealIdeas(ingredient) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
    }

    const data = await response.json();

    // Extract and return the list of meals
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
}

const MealIdeas = ({ ingredient }) => {
  // Defines a state variable "meals" to hold the list of meal ideas
  const [meals, setMeals] = useState([]);

  // Defines the loadMealIdeas function
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use the useEffect hook to call loadMealIdeas when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;