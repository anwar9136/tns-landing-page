import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const RefundCancellation = () => {
  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + Refund & Cancellation Policy Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* Refund & Cancellation Policy Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center">
            Refund & Cancellation Policy
          </h1>
        </div>
      </div>
      
      {/* Refund & Cancellation Policy Content Section */}
      <section 
        className="py-16 md:py-20 lg:py-24 bg-white" 
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Refund & Cancellation Policy</h2>
                
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  <li>Every client can ask to refund his money and cancel the services within the first week after the service was bought and had not taken any training or Services.</li>
                  
                  <li>There will not be any partial or full refund and cancellation if the clients have taken the training against the sum of amount paid for Online Training & Online Webinar Learning.</li>
                  
                  <li>We will provide our best efforts to complete the Online Training Education.</li>
                  
                  <li>Learning May Vary depending up on individuals, their time spent to learn and ability to grasp.</li>
                  
                  <li>Any difficulties related to Online Training you may contact us on <a href="mailto:info@tnsservices.com" className="text-blue-600 hover:text-blue-700 underline cursor-pointer">info@tnsservices.com</a></li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Refund conditions</h2>
                
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  <li>Company will refund your money within a 48 hours and it depends on a bank procedure.</li>
                  
                  <li>Company will refunds your money with same format that you choose in a creating account.</li>
                  
                  <li>Refund transaction fee will be deduct from client's money if transaction fee required otherwise client will get back complete amount that he/she had paid.</li>
                  
                  <li>After refund client training account will be suspended on our website.</li>
                </ol>
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

export default RefundCancellation;

