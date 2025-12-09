import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const Packages = () => {
  const cardsRef = useRef([]);
  const premiumCardsRef = useRef([]);
  const enterpriseCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    [...cardsRef.current, ...premiumCardsRef.current, ...enterpriseCardsRef.current].forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      [...cardsRef.current, ...premiumCardsRef.current, ...enterpriseCardsRef.current].forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const plans = [
    {
      name: 'Startup',
      price: '₹9,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary'
      ]
    },
    {
      name: 'Economy',
      price: '₹40,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)'
      ]
    },
    {
      name: 'Professional',
      price: '₹80,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Priority Support'
      ]
    }
  ];

  const premiumPlans = [
    {
      name: 'Bronze',
      price: '₹1,60,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Currency Forecast',
        'Market Update'
      ]
    },
    {
      name: 'Silver',
      price: '₹2,40,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Currency Forecast',
        'Market Update',
        'Market Watch Bonds'
      ]
    },
    {
      name: 'Gold',
      price: '₹3,20,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Currency Forecast',
        'Market Update',
        'Market Watch Bonds',
        'Market Watch Commodities'
      ]
    }
  ];

  const enterprisePlans = [
    {
      name: 'Enterprise',
      price: '₹4,00,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Currency Forecast',
        'Market Update',
        'Market Watch Bonds',
        'Market Watch Commodities',
        'Market Watch Stocks'
      ]
    },
    {
      name: 'Enterprise Plus',
      price: '₹4,80,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Currency Forecast',
        'Market Update',
        'Market Watch Bonds',
        'Market Watch Commodities',
        'Market Watch Stocks',
        'Market Watch Currencies'
      ]
    },
    {
      name: 'Enterprise Premium',
      price: '₹5,60,000',
      features: [
        'E-books',
        'Education Materials',
        'Glossary',
        'Video Academy',
        'Calendar',
        'Market News (Newsfeed)',
        'Currency Forecast',
        'Market Update',
        'Market Watch Bonds',
        'Market Watch Commodities',
        'Market Watch Stocks',
        'Market Watch Currencies',
        'Consulting sessions included'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + Packages Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* Packages Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
            Packages
          </h1>
        </div>
      </div>
      
      {/* Pricing Cards Section */}
      <section 
        className="py-16 md:py-20 lg:py-24" 
        style={{ 
          backgroundColor: '#F7F9FC',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {plans.map((plan, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-[18px] p-[42px] cursor-pointer transition-all duration-350"
                style={{
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.09)',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.65s cubic-bezier(0.25, 0.1, 0.25, 1.0), transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.0), box-shadow 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 16px 42px rgba(0, 118, 255, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)';
                }}
              >
                {/* Plan Name */}
                <h3 
                  className="mb-5"
                  style={{
                    fontWeight: 700,
                    fontSize: '26px',
                    color: '#0C1A3E',
                    lineHeight: '1.2'
                  }}
                >
                  {plan.name}
                </h3>
                
                {/* Divider Line */}
                <div 
                  className="mb-5"
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(0,0,0,0.10)',
                    marginTop: '20px'
                  }}
                />
                
                {/* Price */}
                <div 
                  className="mb-8"
                  style={{
                    fontWeight: 800,
                    fontSize: '42px',
                    color: '#006CFF',
                    lineHeight: '1.2'
                  }}
                >
                  {plan.price}
                </div>
                
                {/* Features List */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#3B4A61',
                        lineHeight: '1.5'
                      }}
                    >
                      {/* Checkmark Icon */}
                      <svg 
                        className="flex-shrink-0 mt-0.5" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 20 20" 
                        fill="none"
                        style={{ color: '#00C97C' }}
                      >
                        <path 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          fill="currentColor"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Get Started Button */}
                <button
                  className="w-full rounded-[10px] text-white font-semibold transition-colors duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #006CFF, #00A8FF)',
                    fontWeight: 600,
                    fontSize: '18px',
                    padding: '14px 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0051E4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #006CFF, #00A8FF)';
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Pricing Cards Section */}
      <section 
        className="py-16 md:py-20 lg:py-24" 
        style={{ 
          backgroundColor: '#F7F9FC',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {premiumPlans.map((plan, index) => (
              <div
                key={index}
                ref={(el) => (premiumCardsRef.current[index] = el)}
                className="bg-white rounded-[18px] p-[42px] cursor-pointer transition-all duration-350"
                style={{
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.09)',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.65s cubic-bezier(0.25, 0.1, 0.25, 1.0), transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.0), box-shadow 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 16px 42px rgba(0, 118, 255, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)';
                }}
              >
                {/* Plan Name */}
                <h3 
                  className="mb-5"
                  style={{
                    fontWeight: 700,
                    fontSize: '26px',
                    color: '#0C1A3E',
                    lineHeight: '1.2'
                  }}
                >
                  {plan.name}
                </h3>
                
                {/* Divider Line */}
                <div 
                  className="mb-5"
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(0,0,0,0.10)',
                    marginTop: '20px'
                  }}
                />
                
                {/* Price */}
                <div 
                  className="mb-8"
                  style={{
                    fontWeight: 800,
                    fontSize: '42px',
                    color: '#006CFF',
                    lineHeight: '1.2'
                  }}
                >
                  {plan.price}
                </div>
                
                {/* Features List */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#3B4A61',
                        lineHeight: '1.5'
                      }}
                    >
                      {/* Checkmark Icon */}
                      <svg 
                        className="flex-shrink-0 mt-0.5" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 20 20" 
                        fill="none"
                        style={{ color: '#00C97C' }}
                      >
                        <path 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          fill="currentColor"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Get Started Button */}
                <button
                  className="w-full rounded-[10px] text-white font-semibold transition-colors duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #006CFF, #00A8FF)',
                    fontWeight: 600,
                    fontSize: '18px',
                    padding: '14px 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0051E4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #006CFF, #00A8FF)';
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise Pricing Cards Section */}
      <section 
        className="py-16 md:py-20 lg:py-24" 
        style={{ 
          backgroundColor: '#F7F9FC',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {enterprisePlans.map((plan, index) => (
              <div
                key={index}
                ref={(el) => (enterpriseCardsRef.current[index] = el)}
                className="bg-white rounded-[18px] p-[42px] cursor-pointer transition-all duration-350"
                style={{
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.09)',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.65s cubic-bezier(0.25, 0.1, 0.25, 1.0), transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.0), box-shadow 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 16px 42px rgba(0, 118, 255, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)';
                }}
              >
                {/* Plan Name */}
                <h3 
                  className="mb-5"
                  style={{
                    fontWeight: 700,
                    fontSize: '26px',
                    color: '#0C1A3E',
                    lineHeight: '1.2'
                  }}
                >
                  {plan.name}
                </h3>
                
                {/* Divider Line */}
                <div 
                  className="mb-5"
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(0,0,0,0.10)',
                    marginTop: '20px'
                  }}
                />
                
                {/* Price */}
                <div 
                  className="mb-8"
                  style={{
                    fontWeight: 800,
                    fontSize: '42px',
                    color: '#006CFF',
                    lineHeight: '1.2'
                  }}
                >
                  {plan.price}
                </div>
                
                {/* Features List */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#3B4A61',
                        lineHeight: '1.5'
                      }}
                    >
                      {/* Checkmark Icon */}
                      <svg 
                        className="flex-shrink-0 mt-0.5" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 20 20" 
                        fill="none"
                        style={{ color: '#00C97C' }}
                      >
                        <path 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          fill="currentColor"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Get Started Button */}
                <button
                  className="w-full rounded-[10px] text-white font-semibold transition-colors duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #006CFF, #00A8FF)',
                    fontWeight: 600,
                    fontSize: '18px',
                    padding: '14px 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0051E4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #006CFF, #00A8FF)';
                  }}
                >
                  Get Started
                </button>
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

export default Packages;

