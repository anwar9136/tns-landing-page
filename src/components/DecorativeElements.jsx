import React from 'react';

const DecorativeElements = () => {
  return (
    <>
      {/* Yellow Ribbon/Swirl - Upper Left */}
      <div className="animated-ribbon absolute top-20 left-8 md:left-16 w-32 h-32 md:w-40 md:h-40 z-0 pointer-events-none">
        <svg viewBox="0 0 200 150" className="w-full h-full text-yellow-400 opacity-85">
          <path 
            d="M10,70 Q30,30 60,45 Q90,60 120,40 Q150,20 180,50 L170,65 Q145,50 120,55 Q95,60 65,50 Q35,40 15,60 Z" 
            fill="currentColor" 
          />
          <path 
            d="M10,75 Q30,35 60,50 Q90,65 120,45 Q150,25 180,55 L170,70 Q145,55 120,60 Q95,65 65,55 Q35,45 15,65 Z" 
            fill="currentColor" 
            opacity="0.6" 
          />
        </svg>
      </div>

      {/* Yellow Star/Folded Paper with "4" - Upper Middle */}
      <div className="animated-star absolute top-32 left-1/3 md:left-1/2 w-24 h-24 md:w-28 md:h-28 z-0 pointer-events-none">
        <svg viewBox="0 0 120 120" className="w-full h-full text-yellow-300 opacity-75">
          <path 
            d="M60,15 L75,50 L110,50 L82,70 L97,105 L60,85 L23,105 L38,70 L10,50 L45,50 Z" 
            fill="currentColor" 
          />
          <text 
            x="60" 
            y="70" 
            textAnchor="middle" 
            className="fill-white text-2xl font-bold" 
            fontSize="24"
            opacity="0.9"
          >
            4
          </text>
        </svg>
      </div>

      {/* Teal/Cyan Dot - Upper Right */}
      <div className="animated-dot absolute top-1/2 right-1/4 md:right-1/3 w-14 h-14 md:w-16 md:h-16 z-0 pointer-events-none">
        <div className="w-full h-full bg-teal-400 rounded-full opacity-60 blur-sm"></div>
      </div>

      {/* Pink/Purple Brushstrokes - Bottom Right */}
      <div className="animated-brush absolute bottom-16 md:bottom-20 right-8 md:right-16 w-36 h-36 md:w-48 md:h-48 z-0 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-pink-400 opacity-65">
          <path 
            d="M15,150 Q45,130 75,140 Q105,150 135,135 Q165,120 185,145" 
            stroke="currentColor" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M25,170 Q55,160 85,165 Q115,170 145,160 Q175,150 195,175" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M20,185 Q50,180 80,182 Q110,184 140,178 Q170,172 190,190" 
            stroke="#a855f7" 
            strokeWidth="7" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            opacity="0.6" 
          />
        </svg>
      </div>
    </>
  );
};

export default DecorativeElements;

