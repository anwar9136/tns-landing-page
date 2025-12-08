import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StudySection from './components/StudySection';
import TradingSection from './components/TradingSection';
import PremiumResources from './components/PremiumResources';
import WhyChooseUs from './components/WhyChooseUs';
import GuaranteeSection from './components/GuaranteeSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewsSection from './components/ReviewsSection';
import StatisticsSection from './components/StatisticsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + Hero) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
      </div>
      
      {/* Study Section */}
      <StudySection />
      
      {/* Trading Section */}
      <TradingSection />
      
      {/* Premium Resources Section */}
      <PremiumResources />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Guarantee Section */}
      <GuaranteeSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* White Spacer */}
      <div className="bg-white py-8 md:py-12"></div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
