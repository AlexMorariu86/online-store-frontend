import React from 'react';
import ProductList from '../components/product-list';
import NavBar from '../components/NavBar';	
import FilterAccessories from '../components/FilterAccessories';

const Accessories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="md:w-1/4">
          <FilterAccessories />
        </div>
        <div className="md:w-3/4">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
