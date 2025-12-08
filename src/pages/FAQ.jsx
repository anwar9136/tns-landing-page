import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I complete a lesson or course?",
      answer: "Each course is comprised of a different number of lessons, depending on the amount of material that needs to be covered. A lesson is complete when a student correctly answers the quiz questions of the lesson. Courses are complete when all of the lessons within the course have been completed."
    },
    {
      question: "How should I use the Stocks And Commodities Strategy Simulations?",
      answer: "The Stocks And Commodities Strategy Simulations are designed to give you an understanding of two things:\n1. How it feels to trade the Stocks And Commodities Trading Strategies that we detail as part of the Training.\n2. As we show both winning and losing trades, some factors that tend to distinguish the higher-probability set-ups from the rest that you should watch out for before entering a trade.\n\nIt is easy to decide to trade a particular strategy once you understand it, but much harder to know whether you will be able to stick to it, and whether you are likely to get confused and make mistakes.\n\nThe Stocks And Commodities Strategy Simulations are not trading simulation machines; they are timelines that show you the progress of a real historical trading signal given by that strategy.\n\nThey can be studied over and over again. For best results, we recommend that the first time you view one of the Simulations you do not skip ahead, but study the slides carefully in chronological order, not moving on until you feel that you have understood what you are seeing."
    },
    {
      question: "Do you have a real TNS Services classroom somewhere?",
      answer: "No. We want to teach as many people as possible all over the world how to trade Stocks And Commodities, so we chose to locate virtually. This way we are able to be on your screen whenever you want us!"
    },
    {
      question: "What is the aim of the TNS Services?",
      answer: "Our aim is nothing less than teaching you how to become a profitable Stocks And Commodities trader, or if you are already profitable, to become more profitable and more consistent. Good traders never stop learning and markets never stop developing. Many Stocks And Commodities educational services out there focus on teaching one particular trading methodology. While some methods are better than others, we believe one size does not fit all. We aim to be a resource to teach you whatever you want to learn about the market, helping you develop your own style that suits your unique personality. There is no one single \"correct\" way to trade."
    },
    {
      question: "What do I receive when I register with the TNS Services?",
      answer: "Registering with the TNS Services entitles users to:\n• Q&A forum sessions with TNS Services trading experts\n• Stocks And Commodities Strategy Simulations\n• Special promotions from brokers\n• Tools to keep track of your progress\n• Your own profile overview\n• Tailor-made learning packages"
    },
    {
      question: "It seems like there are some subjects that you have not yet covered.",
      answer: "We will be updating the TNS Services with new lessons and material soon and will continue to do so over time. Registered users will get updates notifying them of new material as we publish it. you are very welcome to send us your feedback and we will do our best to include it in our upcoming versions."
    },
    {
      question: "How can I change my password?",
      answer: "Begin the normal login process and click on Forgot your password? and follow the instructions. This will allow you to get a new password."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + FAQ Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* FAQ Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center">
            FAQ
          </h1>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section 
        className="py-16 md:py-20 lg:py-24 bg-white" 
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300"
              >
                {/* Question Bar */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer p-5 md:p-6 flex items-center justify-between transition-colors"
                  style={{
                    backgroundColor: '#4C1D95'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5B21B6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4C1D95';
                  }}
                >
                  <h3 className="text-white font-semibold text-base md:text-lg pr-8 flex-1">
                    {faq.question}
                  </h3>
                  {/* Arrow Icon */}
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-black flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                
                {/* Answer Content - Collapsible */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 p-5 md:p-6 border-l-4" style={{ borderColor: '#4C1D95' }}>
                    <div 
                      className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line"
                    >
                      {faq.answer || 'Content will be added here...'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default FAQ;

