import React from 'react';

const StudySection = () => {
  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 lg:py-24 bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Study. Practice. Excel.
          </h2>

          {/* Sub-headline */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Our experienced mentors are here to help you develop the necessary knowledge and skills as you move forward in your trading education.
          </p>

          {/* View Courses Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-base md:text-lg font-semibold transition-colors mt-4">
            View Courses
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="relative z-10 w-full max-w-lg">
            <img 
              src="https://www.royalitytechnology.com/wp-content/uploads/2023/05/pexels-karolina-grabowska-4491461.jpg" 
              alt="Woman at desk" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySection;

