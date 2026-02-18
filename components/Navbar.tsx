import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Signature Dishes', href: '#signature' },
    { name: 'About Us', href: '#about' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/icon.png" 
              alt="Dreams Restaurant" 
              className="h-10 w-auto object-contain" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide font-serif">Dreams</span>
              <span className="text-[0.65rem] text-gray-400 uppercase tracking-widest leading-none">Restaurant</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-orange transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#visit"
              className="bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded-md font-semibold transition-all shadow-md transform hover:scale-105 flex items-center gap-2"
            >
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-brand-gray transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-dark"
            >
              {link.name}
            </a>
          ))}
          <a
             href="#visit"
             onClick={() => setIsOpen(false)}
             className="w-full mt-4 bg-brand-red text-white py-3 rounded-md font-bold text-center block"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;