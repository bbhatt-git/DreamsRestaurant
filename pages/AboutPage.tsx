import React from 'react';
import About from '../components/About';
import Gallery from '../components/Gallery';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <About />
      <Gallery />
    </div>
  );
};

export default AboutPage;