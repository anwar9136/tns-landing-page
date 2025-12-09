import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-100 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-16">
          {/* Left Column - TNS Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
              TNS Services
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Receive industry-standard information and practices through courses designed and conducted by professional traders.
            </p>
          </div>

          {/* Middle Column - Useful Links */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
              Useful links
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors cursor-pointer">
                  Training Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors cursor-pointer">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors cursor-pointer">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors cursor-pointer">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors cursor-pointer">
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Supported Payment Methods */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
              Supported Payment Methods
            </h3>
            <div className="mb-6">
              <img 
                src="https://www.royalitytechnology.com/wp-content/uploads/2023/06/credit-card-payment-600x300-2-300x89-1.png" 
                alt="Payment methods" 
                className="w-full max-w-md h-auto"
              />
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Over 53+ Net Banking options available and almost every bank available
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 md:pt-10 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Copyright © 2025 TNS Services. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
