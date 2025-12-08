import React, { useRef, useEffect } from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      quote:
        "Royality Technology's training packages have revolutionized my trading skills. The courses are well-structured and taught by experienced professionals. I now trade with confidence and have seen a significant improvement in my returns",
      author: "Anurag Yadav",
      designation: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      quote:
        "Thanks to Royality Technology, I have gained a deep understanding of stocks, commodities, and indices trading. The instructors are knowledgeable and provide practical insights. I highly recommend their training packages.",
      author: "Sakshi Bhise",
      designation: "Ahmedabad, Gujarat",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      quote:
        "Royality Technology's training has been a game-changer for me. The courses are comprehensive, covering all aspects of trading. I feel equipped to make informed decisions and have started seeing profitable trades.",
      author: "Rahul Mehta",
      designation: "Kolkata, West Bengal",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      quote:
        "The platform is fast and reliable. The analytics tools helped me refine my trading strategy massively.",
      author: "Priya Sharma",
      designation: "Full-Time Trader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      rating: 4,
    },
  ];

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const momentumID = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.scrollBehavior = "auto";
    container.style.touchAction = "pan-y";

    const onPointerDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      scrollLeft.current = container.scrollLeft;
      lastX.current = e.clientX;
      velocity.current = 0;
      if (momentumID.current) cancelAnimationFrame(momentumID.current);
      container.classList.add("grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const x = e.clientX;
      const dx = x - lastX.current;
      lastX.current = x;
      velocity.current = dx;
      const walk = x - startX.current;
      container.scrollLeft = scrollLeft.current - walk;
    };

    const onPointerUp = () => {
      isDragging.current = false;
      container.classList.remove("grabbing");
      const deceleration = 0.92;
      const animate = () => {
        if (Math.abs(velocity.current) > 0.5) {
          container.scrollLeft -= velocity.current;
          velocity.current *= deceleration;
          momentumID.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(momentumID.current);
        }
      };
      momentumID.current = requestAnimationFrame(animate);
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <section className="relative z-10 bg-gray-100 py-16 md:py-20 lg:py-24" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 px-3 sm:px-6 md:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
          What’s it Like Learning with Us​
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3">
            Real feedback from real users.
          </p>
        </div>

        {/* Review Cards */}
        <div
          ref={containerRef}
          className="reviews-container flex gap-5 sm:gap-6 md:gap-10 px-6 sm:px-8 md:px-12 overflow-x-auto select-none cursor-grab active:cursor-grabbing"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card min-w-[85%] sm:min-w-[350px] md:min-w-[500px] h-auto bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <p className="text-base sm:text-lg md:text-2xl text-gray-800 font-semibold mb-6 leading-relaxed">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.author}
                  className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover border-4 border-gray-100"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-base sm:text-lg text-gray-900">
                      {review.author}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base font-medium mt-1">
                    {review.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-container::-webkit-scrollbar { display: none; }
        .reviews-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; }
        .reviews-container.grabbing { cursor: grabbing !important; }
      `}</style>
    </section>
  );
};

export default ReviewsSection;

