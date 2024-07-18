import React from 'react';
import NavBar from '../components/NavBar';
import ProductList from '../components/product-list';
import FilterApparel from '../components/FilterApparel';

const Apparel: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="md:w-1/4">
          <FilterApparel />
        </div>
        <div className="md:w-3/4">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Apparel;