import React, { useState, useEffect, useRef } from 'react';
import cartIcon from '../assets/cart.svg'; // Import the cart SVG icon
import searchIcon from '../assets/search.svg'; // Import the search SVG icon
import authIcon from '../assets/auth-person.svg'; // Import the auth SVG icon
import WSBLogo from '../assets/WSBLogo.png'; // Import the WSB logo

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginScreenOpen, setIsLoginScreenOpen] = useState(false);
  const [isRegisterScreenOpen, setIsRegisterScreenOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev); // Toggle the state
  };

  // Function to toggle login screen
  const toggleLoginScreen = () => {
    setIsLoginScreenOpen(prev => !prev); // Toggle the state
  };

  // Function to toggle register screen
  const toggleRegisterScreen = () => {
    setIsRegisterScreenOpen(prev => !prev); // Toggle the state
  };

  // Close menu when clicking outside
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
    // Add event listener on component mount
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="relative bg-gray-900 text-white border-b border-gray-700 w-full z-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Menu Button Container */}
          <div className="flex items-center">
            {/* Mobile Menu Button (Hamburger Icon) */}
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
            {/* Logo as a Button */}
            <a href="/index">
              <img className="h-12 w-12 md:hidden cursor-pointer" src={WSBLogo} alt="Logo" />
            </a>
            {/* Title (Visible on Desktop View) */}
            <div className="text-lg font-bold md:block hidden">WILDLIFE SB</div>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/apparel" // Updated href
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              APPAREL {/* Updated text */}
            </a>
            <a
              href="/skate"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              SKATE
            </a>
            <a
              href="/accessories"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              ACCESSORIES
            </a>
            {/* Additional Links can be added here */}
          </div>
          {/* Cart Icon (Always Visible) */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              <img src={searchIcon} className="h-6 w-6" alt="Search Icon" />
            </button>
            {/* Auth Icon */}
            <button
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleLoginScreen}
            >
              <img src={authIcon} className="h-6 w-6" alt="Auth Icon" />
            </button>
            {/* Cart Icon */}
            <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              <img src={cartIcon} className="h-6 w-6" alt="Cart Icon" />
            </button>
          </div>
        </div>
      </div>
      {/* Overlay */}
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
      {/* Mobile Menu (Hidden by Default) */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-16 left-0 h-full bg-gray-900 text-white z-20 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '240px', transition: 'transform 0.3s ease' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/apparel" // Updated href
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" // Increased text size to text-lg
          >
            APPAREL {/* Updated text */}
          </a>
          <a
            href="/skate"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" // Increased text size to text-lg
          >
            SKATE
          </a>
          <a
            href="/accessories"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium" // Increased text size to text-lg
          >
            ACCESSORIES
          </a>
          {/* Additional mobile menu items can be added here */}
        </div>
      </div>
      {/* Login Screen (Hidden by Default) */}
      <div
        ref={loginRef}
        className={`fixed inset-0 flex items-center justify-center z-20 transform ${
          isLoginScreenOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.3s ease' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-12 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl" // Increased font size and improved visibility
            onClick={() => setIsLoginScreenOpen(false)}
          >
            &times;
          </button>
          <h2 className="text-black text-3xl mb-6">Login</h2>
          <form>
            <div className="mb-6">
              <label className="text-black block text-lg font-medium mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="mb-6">
              <label className="text-black block text-lg font-medium mb-2" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700"
              onClick={(e) => e.stopPropagation()}
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setIsLoginScreenOpen(false);
                  setIsRegisterScreenOpen(true);
                }}
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* Register Screen (Hidden by Default) */}
      <div
        ref={registerRef}
        className={`fixed inset-0 flex items-center justify-center z-20 transform ${
          isRegisterScreenOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.3s ease' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-12 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl" // Increased font size and improved visibility
            onClick={() => setIsRegisterScreenOpen(false)}
          >
            &times;
          </button>
          <h2 className="text-black text-3xl mb-6">Register</h2>
          <form>
            <div className="mb-6">
              <label className="text-black block text-lg font-medium mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="mb-6">
              <label className="text-black block text-lg font-medium mb-2" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700"
              onClick={(e) => e.stopPropagation()}
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setIsRegisterScreenOpen(false);
                  setIsLoginScreenOpen(true);
                }}
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
