import React, { useState } from 'react';

const FeaturesSection = () => {
  const [openCards, setOpenCards] = useState([false, false, false]);

  const features = [
    {
      title: "Courses for Every Experience Level",
      description: "We offer courses for individuals looking to learn the financial markets and strategies to handle trading risks better."
    },
    {
      title: "Learn from Industry Experts",
      description: "From placing your first trade to mastering complicated analysis methods, our instructors and team will guide you through building your skills and confidence."
    },
    {
      title: "More Than Knowledge Acquisition",
      description: "We also focused on developing your skills because studying about the industry alone won't get you to master the art of trading the markets."
    }
  ];

  const toggleCard = (index) => {
    setOpenCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="relative z-10 bg-white py-16 md:py-20 lg:py-24" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Isometric Illustration */}
          <div className="relative w-full flex justify-center md:justify-start">
            <div className="relative w-full max-w-xl">
              <img 
                src="https://www.royalitytechnology.com/wp-content/uploads/2020/11/slider-small.png" 
                alt="Trading illustration" 
                className="w-full h-auto object-contain scale-110"
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
              >
                {/* Header - Dark Purple */}
                <div 
                  className="bg-purple-900 p-4 md:p-5 flex items-center justify-between cursor-pointer hover:bg-purple-800 transition-colors"
                  onClick={() => toggleCard(index)}
                >
                  <h3 className="text-white font-semibold text-base md:text-lg pr-8">
                    {feature.title}
                  </h3>
                  {/* Green upward triangle icon - rotates when open */}
                  <svg 
                    className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform duration-300 ${openCards[index] ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 9.707a1 1 0 011.414 0L10 12.586l3.293-2.879a1 1 0 111.414 1.414l-4 3.5a1 1 0 01-1.414 0l-4-3.5a1 1 0 010-1.414z" />
                  </svg>
                </div>
                
                {/* Body - White - Collapsible */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openCards[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 md:p-5">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

