import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Very subtle wavy lines matching the reference */}
            <path 
              d="M0,100 Q50,80 100,100 T200,100" 
              stroke="#60a5fa" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.08"
            />
            <path 
              d="M0,120 Q50,140 100,120 T200,120" 
              stroke="#60a5fa" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.06"
            />
            <path 
              d="M0,140 Q50,160 100,140 T200,140" 
              stroke="#60a5fa" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.05"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
