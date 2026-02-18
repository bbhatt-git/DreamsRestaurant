import React from 'react';
import Hero from '../components/Hero';
import SignatureDishes from '../components/SignatureDishes';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <Testimonials />
    </>
  );
};

export default Home;