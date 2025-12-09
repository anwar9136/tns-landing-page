import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + Disclaimer Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* Disclaimer Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center">
            Disclaimer
          </h1>
        </div>
      </div>
      
      {/* Disclaimer Content Section */}
      <section 
        className="py-16 md:py-20 lg:py-24 bg-white" 
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Disclaimer Image */}
            <div className="flex justify-center items-center">
              <img 
                src="https://www.royalitytechnology.com/wp-content/uploads/2023/06/hammer-the-judge-with-disclaimers-2023-02-08-18-03-53-utc-768x493.jpg"
                alt="Disclaimer"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Disclaimer Text Content */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  These recommendations are based on the theory of technical analysis and personal observations. This does not claim for profit.
                </p>
                
                <p>
                  We are not responsible for any losses made by traders. It is only the outlook of the market with reference to its previous performance. You are advised to take your position with your sense and judgment. We are trying to consider the fundamental validity of stocks as far as possible, but demand and supply affects it with vision variations.
                </p>
                
                <p>
                  If any other company also giving same script and recommendation then we are not responsible for that. We have not any position in our given scripts. Visiting our website, one should by agree to our terms and condition and disclaimer also.
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

export default Disclaimer;

