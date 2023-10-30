"use client";
import ItemList from './item-list'; 
import React from 'react';

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;