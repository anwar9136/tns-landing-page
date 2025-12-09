import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import MyAccount from './pages/MyAccount';
import Disclaimer from './pages/Disclaimer';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundCancellation from './pages/RefundCancellation';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';

function App() {
  return (
    <>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-cancellation-policy" element={<RefundCancellation />} />
      </Routes>
    </>
  );
}

export default App;
