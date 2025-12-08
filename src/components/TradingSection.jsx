import React from 'react';

const TradingSection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative z-10 w-full max-w-lg">
            <img 
              src="https://www.royalitytechnology.com/wp-content/uploads/2023/05/pexels-sora-shimazaki-5668878.jpg" 
              alt="Man at desk" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6 order-1 md:order-2">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Take the Road
            <br />
            Towards an Excellent
            <br />
            Trading Career
          </h2>

          {/* Sub-headline */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            As one of our students, you'll be a part of a learning community committed to excellence.
          </p>

          {/* Learn More Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-base md:text-lg font-semibold transition-colors mt-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;

