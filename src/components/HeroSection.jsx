import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <main className="relative z-10 px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 md:pt-2 lg:pt-4 pb-0 sm:pb-12 md:pb-0">
      <div className="max-w-[95%] lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          {/* Pre-headline */}
          <p className="text-orange-400 md:text-orange-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase mb-2 sm:mb-3">
            MAKE YOUR FIRST MOVE TODAY
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-3 sm:mb-4">
            Online courses from
            <br />
            the experts.
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 mb-4 sm:mb-6">
            Step-by-step online learning, the academy of the future.
          </p>

          {/* Explore Courses Button */}
          <Link 
            to="/packages"
            className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base md:text-lg font-semibold transition-colors mt-2 sm:mt-4 w-full sm:w-auto text-center cursor-pointer"
          >
            Explore Courses
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full flex justify-center md:justify-end items-end self-end mt-6 md:mt-0">
          <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl md:-mr-8 lg:-mr-12 xl:-mr-16">
            <img 
              src="https://www.royalitytechnology.com/wp-content/uploads/2022/11/hero-img-1.png" 
              alt="Student with books giving thumbs up" 
              className="w-full h-auto object-contain object-bottom scale-100"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

