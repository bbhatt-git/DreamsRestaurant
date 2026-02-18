import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureDishes from './components/SignatureDishes';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Menu from './components/Menu';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-200 font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SignatureDishes />
        <About />
        <Testimonials />
        <Menu />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
