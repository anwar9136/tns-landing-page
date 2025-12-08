import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="relative z-10 px-6 md:px-12 py-4 flex items-center justify-between bg-[#0a1929]">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <span className="text-white text-xl font-bold leading-tight">TNS Services</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <Link 
          to="/" 
          className={`transition-colors text-sm font-medium ${
            location.pathname === '/' 
              ? 'text-blue-400' 
              : 'text-white hover:text-blue-400'
          }`}
        >
          Home Page
        </Link>
        <Link 
          to="/about" 
          className={`transition-colors text-sm font-medium ${
            location.pathname === '/about' 
              ? 'text-blue-400' 
              : 'text-white hover:text-blue-400'
          }`}
        >
          About
        </Link>
        <Link 
          to="/packages" 
          className={`transition-colors text-sm font-medium ${
            location.pathname === '/packages' 
              ? 'text-blue-400' 
              : 'text-white hover:text-blue-400'
          }`}
        >
          Packages
        </Link>
        <Link 
          to="/faq" 
          className={`transition-colors text-sm font-medium ${
            location.pathname === '/faq' 
              ? 'text-blue-400' 
              : 'text-white hover:text-blue-400'
          }`}
        >
          FAQ
        </Link>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          Contact
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          My Account
        </a>
      </nav>

      {/* Enroll Now Button */}
      <Link 
        to="/packages" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md flex items-center gap-2 transition-colors font-medium text-sm"
      >
        Enroll Now!
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </header>
  );
};

export default Header;

