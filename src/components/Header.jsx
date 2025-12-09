import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 w-full max-w-full px-4 sm:px-6 md:px-12 py-4 flex items-center justify-end bg-[#0a1929]">
        {/* Logo - Absolutely positioned, doesn't affect layout */}
        <Link to="/" className="absolute left-4 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 cursor-pointer z-10">
          <img 
            src={logo} 
            alt="TNS Services Logo" 
            className="h-28 sm:h-32 md:h-36 lg:h-44 xl:h-52 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          <Link 
            to="/" 
            className={`transition-colors text-sm font-medium cursor-pointer ${
              location.pathname === '/' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Home Page
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors text-sm font-medium cursor-pointer ${
              location.pathname === '/about' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            About
          </Link>
          <Link 
            to="/packages" 
            className={`transition-colors text-sm font-medium cursor-pointer ${
              location.pathname === '/packages' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Packages
          </Link>
          <Link 
            to="/faq" 
            className={`transition-colors text-sm font-medium cursor-pointer ${
              location.pathname === '/faq' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors text-sm font-medium cursor-pointer ${
              location.pathname === '/contact' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/my-account" 
            className={`transition-colors text-sm font-medium cursor-pointer ${
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
          className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md items-center gap-2 transition-colors font-medium text-sm cursor-pointer"
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-colors font-medium text-xs sm:text-sm cursor-pointer"
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
            className="text-white p-2 cursor-pointer"
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
              className={`text-base font-medium py-2 px-4 rounded cursor-pointer ${
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
              className={`text-base font-medium py-2 px-4 rounded cursor-pointer ${
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
              className={`text-base font-medium py-2 px-4 rounded cursor-pointer ${
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
              className={`text-base font-medium py-2 px-4 rounded cursor-pointer ${
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
              className={`text-base font-medium py-2 px-4 rounded cursor-pointer ${
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
              className={`text-base font-medium py-2 px-4 rounded cursor-pointer ${
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md flex items-center justify-center gap-2 transition-colors font-medium text-base mt-2 cursor-pointer"
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

