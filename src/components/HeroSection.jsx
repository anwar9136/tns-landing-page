import React from 'react';

const HeroSection = () => {
  return (
    <main className="relative z-10 px-6 md:px-12 pt-0 md:pt-2 lg:pt-4 pb-0">
      <div className="max-w-[95%] lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          {/* Pre-headline */}
          <p className="text-orange-400 md:text-orange-300 text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase mb-1">
            MAKE YOUR FIRST MOVE TODAY
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-2">
            Online courses from
            <br />
            the experts.
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-xl mb-2">
            Step-by-step online learning, the academy of the future.
          </p>

          {/* Explore Courses Button */}
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-md text-base md:text-lg font-semibold transition-colors mt-4">
            Explore Courses
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full flex justify-end items-end self-end">
          <div className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl -mr-8 md:-mr-12 lg:-mr-16 xl:-mr-20">
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

