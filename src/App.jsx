import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StudySection from './components/StudySection';
import TradingSection from './components/TradingSection';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1929] relative overflow-hidden">
      {/* Background Wavy Pattern */}
      <BackgroundPattern />
      
      {/* Header/Navbar */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Study Section */}
      <StudySection />
      
      {/* Trading Section */}
      <TradingSection />
    </div>
  );
}

export default App;
