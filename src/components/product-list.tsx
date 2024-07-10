import React from 'react';
import ProductCard from './product-card'; // Adjust the path based on your project structure

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Render ProductCard components */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
