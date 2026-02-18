import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const VisitUs: React.FC = () => {
  return (
    <section id="visit" className="py-20 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
             <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-4">
              VISIT US
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Come Experience the Taste</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Located in the heart of Mahendranagar (Bhimdatta), Dreams Restaurant is your go-to destination for authentic local flavors, great vibes, and unforgettable momos.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600">Mahendranagar (Bhimdatta), Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange text-white p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Opening Hours</h4>
                  <p className="text-gray-600">Open Daily - Ask for current hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Contact</h4>
                  <p className="text-gray-600">Call for reservations & orders</p>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
               {["Dine-in", "Group Friendly", "Drinks", "Hukka"].map(f => (
                   <span key={f} className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                       <CheckCircle className="w-3 h-3" /> {f}
                   </span>
               ))}
            </div>

            <div className="flex gap-4">
                <a href={RESTAURANT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                   <Navigation className="w-4 h-4" /> Get Directions
                </a>
                <button className="bg-brand-orange hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                   <Phone className="w-4 h-4" /> Contact Us
                </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative group">
             {/* Map Placeholder */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853549641775!2d80.1764!3d28.9556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU3JzIwLjIiTiA4MMKwMTAnMzUuMCJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy"
               className="filter grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-all">
                <div className="bg-brand-dark/80 text-white p-4 rounded-lg backdrop-blur-sm text-center">
                    <MapPin className="w-8 h-8 text-brand-red mx-auto mb-2" />
                    <p className="font-bold">Dreams Restaurant</p>
                    <p className="text-xs text-gray-300">Mahendranagar (Bhimdatta), Nepal</p>
                    <button className="mt-3 bg-brand-red text-xs px-3 py-1 rounded">View on Google Maps</button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitUs;
