import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { DishCategory, MenuItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<DishCategory>(DishCategory.MOMOS);

  const categories = Object.values(DishCategory);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-brand-dark relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-serif mb-4">Our Menu</h2>
          <p className="text-gray-400">Authentic taste, affordable prices.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-orange text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="bg-brand-gray rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-800 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {filteredItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b border-gray-800 pb-4 last:border-0 last:pb-0 group">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-gray-100 group-hover:text-brand-orange transition-colors">{item.name}</h4>
                      {item.isVegetarian && (
                        <span className="text-[10px] border border-green-500 text-green-500 px-1 rounded uppercase">Veg</span>
                      )}
                      {item.isSpicy && (
                         <span className="text-[10px] border border-red-500 text-red-500 px-1 rounded uppercase">Spicy</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 italic">{item.description}</p>
                  </div>
                  <div className="text-brand-orange font-bold whitespace-nowrap">
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
             <p className="text-sm text-gray-500">
               * Prices subject to change. Please ask for 0 spice level if you prefer mild food.
             </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Menu;
