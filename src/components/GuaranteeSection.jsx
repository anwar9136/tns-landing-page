import React from 'react';
import bgImage from '../assets/bg-14days.jpg';

const GuaranteeSection = () => {
  return (
    <section className="relative z-10 bg-[#0a1929] py-16 md:py-20 lg:py-24 overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      {/* Dark Overlay - Exact dark blue color */}
      <div className="absolute inset-0 bg-[#0a1929] opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 flex flex-col items-center justify-center py-4">
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-3 tracking-tight leading-tight uppercase md:whitespace-nowrap">
          14 DAYS MONEY BACK GUARANTEE
        </h2>
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-normal uppercase tracking-wide md:whitespace-nowrap"
          style={{
            color: 'white',
            background: 'linear-gradient(to bottom, #ffffff, #f0f5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
            display: 'inline-block'
          }}
        >
          GET THE COURSE TODAY!
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;

