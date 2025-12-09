import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import MyAccount from './pages/MyAccount';
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
      </Routes>
    </>
  );
}

export default App;
