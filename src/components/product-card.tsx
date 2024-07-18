import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 justify-center">
      <div></div>
      <div className="group border-gray-100/30 flex max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md" style={{ width: '320px', height: '400px' }}>
        <a className="relative mx-3 mt-3 flex overflow-hidden rounded-xl" style={{ height: '200px' }} href="#">
          <img className="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
          {/* Uncomment below to add discount badge */}
          {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
        </a>
        <div className="mt-4 px-5 pb-5 flex flex-col justify-between flex-grow">
          <div>
            <a href="#">
              <h5 className="text-xl tracking-tight text-white">Nike Air MX Super 2500 - Red</h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-white">$449</span>
              </p>
            </div>
          </div>
          <a href="#" className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
