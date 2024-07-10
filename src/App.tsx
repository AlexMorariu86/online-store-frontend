// src/App.tsx
import React from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/product-list';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;
