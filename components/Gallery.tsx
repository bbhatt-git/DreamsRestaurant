import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 text-center font-serif">Moments at Dreams</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
                key={idx} 
                className={`relative overflow-hidden rounded-lg group ${idx === 1 ? 'md:row-span-2' : ''} ${idx === 4 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 min-h-[200px]"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-bold tracking-wider">VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
