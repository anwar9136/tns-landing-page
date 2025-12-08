import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 px-6 md:px-12 py-6 flex items-center justify-between bg-[#0a1929]">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-white text-xl font-bold leading-tight">TNS Services</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          Home Page
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          About
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          Packages
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          FAQ
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          Contact
        </a>
        <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
          My Account
        </a>
      </nav>

      {/* Enroll Now Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md flex items-center gap-2 transition-colors font-medium text-sm">
        Enroll Now!
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </header>
  );
};

export default Header;

