import React from 'react';
import { MapPin, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://shivapuricottage.com/wp-content/uploads/2016/02/Momos-e1597126880942-1040x590.jpg"
          alt="Steaming Momos"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-brand-red/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm">
            🔥 Famous for Best Momos in Mahendranagar
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif drop-shadow-lg">
            Home of the <span className="text-brand-orange">Best Momos</span> <br className="hidden md:block"/> in Mahendranagar
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Fresh ingredients. Unbeatable prices. An unforgettable taste that brings you back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Utensils className="w-5 h-5" />
              View Menu
            </Link>
            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Steam Effect Animation - Simplified CSS overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none opacity-30">
        <div className="steam-particle w-12 h-12 left-[20%] bottom-0 animate-steam" style={{ animationDelay: '0s' }}></div>
        <div className="steam-particle w-16 h-16 left-[50%] bottom-0 animate-steam" style={{ animationDelay: '1s' }}></div>
        <div className="steam-particle w-10 h-10 left-[70%] bottom-0 animate-steam" style={{ animationDelay: '0.5s' }}></div>
        <div className="steam-particle w-14 h-14 left-[35%] bottom-0 animate-steam" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;