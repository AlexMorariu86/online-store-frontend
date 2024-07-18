import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className={`md:hidden fixed top-16 left-0 h-full bg-gray-900 text-white z-20 transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '240px', transition: 'transform 0.3s ease' }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/apparel"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
        >
          APPAREL
        </Link>
        <Link
          to="/skate"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
        >
          SKATE
        </Link>
        <Link
          to="/accessories"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
        >
          ACCESSORIES
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
