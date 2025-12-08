import React from 'react';

const CTASection = () => {
  return (
    <section className="relative z-10 bg-purple-600 py-10 sm:py-12 md:py-16 lg:py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center justify-center py-4">
        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white mb-3 sm:mb-4 tracking-tight leading-tight">
          Invest in Your Financial Education Today
        </h2>
        
        {/* Sub-text */}
        <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-white mb-4 sm:mb-6 leading-relaxed px-2">
          Register for our training program and journey towards a professional trading career.
        </p>
        
        {/* Call-to-Action Button */}
        <button className="bg-white hover:bg-gray-50 text-black border-2 border-gray-800 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base md:text-base font-bold uppercase tracking-wide transition-colors w-full sm:w-auto">
          START LEARNING
        </button>
      </div>
    </section>
  );
};

export default CTASection;

