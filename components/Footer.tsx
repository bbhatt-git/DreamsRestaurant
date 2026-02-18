import React from 'react';
import { Flame, Facebook, Instagram, Twitter, MapPin, Phone, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-orange p-1.5 rounded-full">
                  <Flame className="h-5 w-5 text-white fill-current" />
               </div>
               <span className="text-2xl font-bold text-white font-serif">Dream Restaurant</span>
            </div>
            <p className="text-sm max-w-xs mb-6">
              Home of the best momos in Mahendranagar. Fresh, affordable, and unforgettable taste. Join us for an authentic dining experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-red transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-red transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-red transition-all"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider text-brand-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="hover:text-brand-orange transition-colors">Menu</Link></li>
              <li><Link to="/signature-dishes" className="hover:text-brand-orange transition-colors">Signature Dishes</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">Gallery</Link></li>
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider text-brand-orange">Contact Us</h4>
             <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Mahendranagar (Bhimdatta), Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Call for orders</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Open Daily</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Dreams Restaurant. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-brand-orange" />
            <span>Designed & Crafted by </span>
            <a 
              href="https://bbhatt.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors underline decoration-brand-orange/30 underline-offset-2"
            >
              Bhupesh Bhatt
            </a>
            <Sparkles className="w-3 h-3 text-brand-orange" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;