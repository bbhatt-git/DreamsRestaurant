import React from 'react';
import { SIGNATURE_DISHES } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignatureDishes: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-serif">Signature Dishes</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The flavors that made us famous across Mahendranagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-brand-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {dish.badge && (
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {dish.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">{dish.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-orange text-brand-orange font-bold rounded-lg hover:bg-brand-orange hover:text-white transition-all">
                View All Dishes
            </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;