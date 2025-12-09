import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 w-full max-w-full px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between bg-[#0a1929]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-white text-lg sm:text-xl font-bold leading-tight">TNS Services</span>
        </Link>

        {/* Desktop Navigation Links */}
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
          <Link 
            to="/contact" 
            className={`transition-colors text-sm font-medium ${
              location.pathname === '/contact' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/my-account" 
            className={`transition-colors text-sm font-medium ${
              location.pathname === '/my-account' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            My Account
          </Link>
        </nav>

        {/* Desktop Enroll Now Button */}
        <Link 
          to="/packages" 
          className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md items-center gap-2 transition-colors font-medium text-sm"
        >
          Enroll Now!
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Mobile Header Actions */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Enroll Now Button */}
          <Link 
            to="/packages" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-colors font-medium text-xs sm:text-sm"
          >
            <span className="hidden sm:inline">Enroll</span>
            <span className="sm:hidden">Enroll</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Outside header to avoid overflow clipping */}
      {isMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 w-full max-w-full bg-[#0a1929] border-t border-gray-700 lg:hidden z-[60] shadow-lg max-h-[calc(100vh-73px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded ${
                location.pathname === '/' 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              Home Page
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded ${
                location.pathname === '/about' 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              About
            </Link>
            <Link 
              to="/packages" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded ${
                location.pathname === '/packages' 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              Packages
            </Link>
            <Link 
              to="/faq" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded ${
                location.pathname === '/faq' 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded ${
                location.pathname === '/contact' 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/my-account" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded ${
                location.pathname === '/my-account' 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-white hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              My Account
            </Link>
            <Link 
              to="/packages" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md flex items-center justify-center gap-2 transition-colors font-medium text-base mt-2"
            >
              Enroll Now!
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

