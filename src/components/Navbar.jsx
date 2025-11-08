import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-amber-800">
              Siva Jewellery
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">
                Home
              </Link>
              <Link to="/collections" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">
                Collections
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-amber-600 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
