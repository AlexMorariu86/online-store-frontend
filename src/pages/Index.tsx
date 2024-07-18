// src/pages/Index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import skateHorizontal from '../assets/landing-page-photos/skate-horizontal.png';
import skateVertical from '../assets/landing-page-photos/skate-vertical.png';
import apparelHorizontal from '../assets/landing-page-photos/apparel-horizontal.png';
import apparelVertical from '../assets/landing-page-photos/apparel-vertical.png';
import accessoriesHorizontal from '../assets/landing-page-photos/accesories-horizontal.png';
import accessoriesVertical from '../assets/landing-page-photos/accesories-vertical.png';

const Index: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-7xl text-center font-bold mb-8">WILDLIFE</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link to="/skate" className="bg-white rounded-lg shadow-md overflow-hidden card flex flex-col items-center">
          <img
            src={skateHorizontal}
            alt="Mobile Image 1"
            className="block md:hidden card-image"
          />
          <img
            src={skateVertical}
            alt="Desktop Image 1"
            className="hidden md:block card-image"
          />
        </Link>

        {/* Card 2 */}
        <Link to="/apparel" className="bg-white rounded-lg shadow-md overflow-hidden card flex flex-col items-center">
          <img
            src={apparelHorizontal}
            alt="Mobile Image 2"
            className="block md:hidden card-image"
          />
          <img
            src={apparelVertical}
            alt="Desktop Image 2"
            className="hidden md:block card-image"
          />
        </Link>

        {/* Card 3 */}
        <Link to="/accessories" className="bg-white rounded-lg shadow-md overflow-hidden card flex flex-col items-center">
          <img
            src={accessoriesHorizontal}
            alt="Mobile Image 3"
            className="block md:hidden card-image"
          />
          <img
            src={accessoriesVertical}
            alt="Desktop Image 3"
            className="hidden md:block card-image"
          />
        </Link>
      </div>
    </div>
  );
};

export default Index;
