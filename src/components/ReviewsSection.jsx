import React, { useState } from "react";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      quote:
        "TNS Services training packages have revolutionized my trading skills. The courses are well-structured and taught by experienced professionals. I now trade with confidence and have seen a significant improvement in my returns",
      author: "Anurag Yadav",
      designation: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      quote:
        "Thanks to TNS Services, I have gained a deep understanding of stocks, commodities, and indices trading. The instructors are knowledgeable and provide practical insights. I highly recommend their training packages.",
      author: "Sakshi Bhise",
      designation: "Ahmedabad, Gujarat",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      quote:
        "TNS Services training has been a game-changer for me. The courses are comprehensive, covering all aspects of trading. I feel equipped to make informed decisions and have started seeing profitable trades.",
      author: "Rahul Mehta",
      designation: "Kolkata, West Bengal",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative z-10 bg-gray-100 py-16 md:py-20 lg:py-24" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            What's it Like Learning with Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3">
            Real feedback from real users.
          </p>
        </div>

        {/* Review Card Container */}
        <div className="relative flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:left-2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-md"
            aria-label="Previous review"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Review Card */}
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 pl-20 sm:pl-24 md:pl-28 lg:pl-36">
            {/* User Image - Inside Left */}
            <div className="absolute left-3 sm:left-4 md:left-6 top-4 sm:top-1/2 sm:-translate-y-1/2 z-10">
              <img
                src={currentReview.image}
                alt={currentReview.author}
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Review Content */}
            <div className="ml-2 sm:ml-4 md:ml-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-medium mb-6 sm:mb-8 leading-relaxed">
                {currentReview.quote}
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-1">
                  {currentReview.author}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium">
                  {currentReview.designation}
                </p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shadow-md"
            aria-label="Next review"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

