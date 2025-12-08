import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StudySection from './components/StudySection';
import TradingSection from './components/TradingSection';
import PremiumResources from './components/PremiumResources';
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
    </div>
  );
}

export default App;
