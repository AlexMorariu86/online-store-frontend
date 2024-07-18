import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import cartIcon from '../assets/cart.svg';
import searchIcon from '../assets/search.svg';
import authIcon from '../assets/auth-person.svg';
import WSBLogo from '../assets/WSBLogo.png';
import WSBDesktopLogo from 'C://Users//senon//Desktop//online-store-frontend//src//assets//WSBDekstopLogo.png';
import ShoppingCart from '../pages/ShoppingCart';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginScreenOpen, setIsLoginScreenOpen] = useState(false);
  const [isRegisterScreenOpen, setIsRegisterScreenOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleLoginScreen = () => {
    setIsLoginScreenOpen(prev => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
    if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
      setIsLoginScreenOpen(false);
    }
    if (registerRef.current && !registerRef.current.contains(event.target as Node)) {
      setIsRegisterScreenOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white border-b border-gray-700 w-full z-20 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/index">
              <img className="h-12 w-12 md:hidden cursor-pointer" src={WSBLogo} alt="Logo" />
            </Link>
             <Link to="/index" className="text-lg font-bold md:flex hidden items-center space-x-2">
              <img className="h-14 w-26 mr-auto" src={WSBDesktopLogo} alt="Wildlife SB Logo" />
            </Link> 
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/apparel" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              APPAREL
            </Link>
            <Link to="/skate" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              SKATE
            </Link>
            <Link to="/accessories" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              ACCESSORIES
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              <img src={searchIcon} className="h-6 w-6" alt="Search Icon" />
            </button>
            <button
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleLoginScreen}
            >
              <img src={authIcon} className="h-6 w-6" alt="Auth Icon" />
            </button>
            <Link
               to="/shoppingcart"
               className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
               >
               <img src={cartIcon} className="h-6 w-6" alt="Cart Icon" />
            </Link>
          </div>
        </div>
      </div>
      {(isMobileMenuOpen || isLoginScreenOpen || isRegisterScreenOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsLoginScreenOpen(false);
            setIsRegisterScreenOpen(false);
          }}
        />
      )}
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} menuRef={menuRef} />
      <LoginScreen
        isLoginScreenOpen={isLoginScreenOpen}
        loginRef={loginRef}
        onClose={() => setIsLoginScreenOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginScreenOpen(false);
          setIsRegisterScreenOpen(true);
        }}
      />
      <RegisterScreen
        isRegisterScreenOpen={isRegisterScreenOpen}
        registerRef={registerRef}
        onClose={() => setIsRegisterScreenOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterScreenOpen(false);
          setIsLoginScreenOpen(true);
        }}
      />
    </nav>
  );
};

export default NavBar;
