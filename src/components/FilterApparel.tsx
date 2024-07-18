import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterApparel: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleSliderChange = (value: number[]) => {
    setPriceRange(value);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      <button
        onClick={toggleFilterVisibility}
        className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg z-50 md:hidden"
      >
        Filter
      </button>

      {isFilterVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden" onClick={toggleFilterVisibility}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-xs mx-auto mt-20 relative">
            <button
              onClick={toggleFilterVisibility}
              className="absolute top-2 right-2 bg-black text-white p-2 rounded-full"
            >
              Close
            </button>
            <div className="mb-4">
              <h2 className="text-lg font-bold">Category</h2>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-black">Price</h2>
              <Slider
                range
                min={0}
                max={100}
                value={priceRange}
                onChange={handleSliderChange}
                railStyle={{ backgroundColor: '#ccc' }}
                handleRender={(node, props) => (
                  <div {...props} style={{ ...props.style, borderColor: '#000', backgroundColor: '#fff' }}>
                    {node}
                  </div>
                )}
              />
              <div className="flex justify-between mt-2 text-black">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-black">Size</h2>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <button className="bg-black border border-gray-300 rounded-lg py-2">XS</button>
                <button className="bg-black border border-gray-300 rounded-lg py-2">S</button>
                <button className="bg-black border border-gray-300 rounded-lg py-2">M</button>
                <button className="bg-black border border-gray-300 rounded-lg py-2">L</button>
                <button className="bg-black border border-gray-300 rounded-lg py-2">XL</button>
                <button className="bg-black border border-gray-300 rounded-lg py-2">XXL</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:block bg-white p-6 rounded-lg shadow-lg md:w-64 lg:w-80">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Category</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-black">Price</h2>
          <Slider
            range
            min={0}
            max={400}
            value={priceRange}
            onChange={handleSliderChange}
            railStyle={{ backgroundColor: '#ccc' }}
            handleRender={(node, props) => (
              <div {...props} style={{ ...props.style, borderColor: '#000', backgroundColor: '#fff' }}>
                {node}
              </div>
            )}
          />
          <div className="flex justify-between mt-2 text-black">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-black">Size</h2>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button className="bg-black border border-gray-300 rounded-lg py-2">XS</button>
            <button className="bg-black border border-gray-300 rounded-lg py-2">S</button>
            <button className="bg-black border border-gray-300 rounded-lg py-2">M</button>
            <button className="bg-black border border-gray-300 rounded-lg py-2">L</button>
            <button className="bg-black border border-gray-300 rounded-lg py-2">XL</button>
            <button className="bg-black border border-gray-300 rounded-lg py-2">XXL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterApparel;