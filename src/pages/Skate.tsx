import React from 'react';
import NavBar from '../components/NavBar';
import ProductList from '../components/product-list';
import FilterSkate from '../components/FilterSkate';

const Skate: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <div className="flex">
        <div className="w-1/5 hidden md:block">
          <FilterSkate />
        </div>
        <div className="w-full md:w-4/5">
          <ProductList />
        </div>
      </div>
      <div className="md:hidden">
        <FilterSkate />
      </div>
    </div>
  );
};

export default Skate;
