import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + About Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* About Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
            About
          </h1>
        </div>
      </div>
      
      {/* White Content Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Light blue wavy shape */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-20">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <path
                d="M0,200 Q150,100 300,200 T600,200 L600,600 L0,600 Z"
                fill="#60A5FA"
                opacity="0.3"
              />
            </svg>
          </div>
          
          {/* Orange circular outline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-15">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#F97316"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Two Images Side by Side */}
            <div className="flex flex-row gap-4 md:gap-6">
              {/* First Image */}
              <div className="relative w-1/2">
                <img
                  src="https://www.royalitytechnology.com/wp-content/uploads/2022/11/about-1.jpg"
                  alt="Graduate with 150 Years of Giant Leaps"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Second Image - Next to First */}
              <div className="relative w-1/2">
                <img
                  src="https://www.royalitytechnology.com/wp-content/uploads/2022/11/about-2.jpg"
                  alt="Person holding books"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-gray-800 text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold">
                  TNS Services is a comprehensive educational system conceived directly from the need for traders to learn about stocks and commodities trading at their own pace in a comfortable, interactive environment.
                </p>
                
                {/* Get Started Button */}
                <div className="flex items-center gap-3 pt-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <button className="border-2 border-blue-500 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-base md:text-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Text Content Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="space-y-6 md:space-y-8 text-gray-800 text-base md:text-lg leading-relaxed">
            <p>
              Founded by the trading experts who have been monitoring and reporting on the stocks and commodities market since 2006, TNS Services offers traders of all levels the courses they need to sharpen their trading skills and enhance their knowledge of the world of stocks and commodities.
            </p>
            
            <p>
              In addition to courses about specific technical trading strategies and stocks and commodities trading basics, TNS Services also offers a range of lessons dealing with the complexities of trading psychology, which enable traders to better understand their strengths, their weaknesses and themselves. TNS Services is an entirely free service that was built with the understanding that stocks and commodities trading requires a mix of collaborative research and independent thinking, and that each trader must find the strategy with which he is most comfortable.
            </p>
            
            <p>
              To this end, TNS Services provides a range of courses, complete with videos, quizzes and trade simulators to help traders identify their trouble spots and to focus on the different aspects of their stocks and commodities trading. TNS Services has developed its own unique stocks and commodities Strategy Simulations, a valuable tool created for users to assist them in defining their trading strategies for future trading.
            </p>
            
            <p>
              Throughout their studies, traders will be tested on the information they've learned so that they can see where they excel and where they need additional instruction. The lessons are constructed in such a way that the deeper a student delves into the material, the more levels he can reach. Each lesson is accompanied by additional reading material and links to related lessons and articles.
            </p>
            
            <p>
              Likewise, every TNS Services student will be able to ask questions and receive answers from other traders and financial professionals, so that every stocks and commodities trading concept will be totally comprehensible and beneficial to the participant.
            </p>
            
            <p>
              TNS Services is a pilot program and uses a Beta version. All registered members will receive notifications of additional lessons, stocks and commodities trading strategies and any new educational material we consider relevant. Since TNS Services is not owned by any brokerage, our users are able to review the material as often as possible until they feel 100% prepared to start trading on their own.
            </p>
            
            <p>
              At TNS Services, our goal is to help traders at all levels increase their confidence, their understanding of the market and their ability to trade profitably. We have built an exclusive program that we hope will reach the maximum number of traders and provide them with the best scholastic material available in the stocks and commodities arena. We value feedback and insights from our members and will continue to update and improve our program in an effort to provide the best holistic place for stocks and commodities trading.
            </p>
            
            <p className="font-bold text-lg md:text-xl">
              We look forward to helping you trade smartly!
            </p>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="bg-gray-100 py-16 md:py-20 lg:py-24" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              What's it Like Learning with Us
            </h2>
            <p className="text-base md:text-lg text-gray-500 mt-3">
              Real feedback from real users.
            </p>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Review Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                  alt="Ravi Sharma"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4"
                />
                {/* Star Rating - 4.5 stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  {/* Half star */}
                  <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 text-gray-300 fill-current absolute" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400 fill-current absolute" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                TNS Services's training packages have revolutionized my trading skills. The courses are well-structured and taught by experienced professionals. I now trade with confidence and have seen a significant improvement in my returns
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  Ravi Sharma
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
                  alt="Arjun Patel"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4"
                />
                {/* Star Rating - 4.5 stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  {/* Half star */}
                  <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 text-gray-300 fill-current absolute" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400 fill-current absolute" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                Thanks to TNS Services, I have gained a deep understanding of stocks, commodities, and indices trading. The instructors are knowledgeable and provide practical insights. I highly recommend their training packages.
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  Arjun Patel
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
                  alt="Manoj Singh"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4"
                />
                {/* Star Rating - 4.5 stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  {/* Half star */}
                  <div className="relative w-5 h-5">
                    <svg className="w-5 h-5 text-gray-300 fill-current absolute" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400 fill-current absolute" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                TNS Services's training has been a game-changer for me. The courses are comprehensive, covering all aspects of trading. I feel equipped to make informed decisions and have started seeing profitable trades.
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  Manoj Singh
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  Kolkata, West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default About;

