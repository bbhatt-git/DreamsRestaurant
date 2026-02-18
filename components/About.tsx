import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, DollarSign, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: <Heart className="w-6 h-6 text-brand-red" />, title: "Friendly Service", desc: "We treat every guest like family." },
    { icon: <DollarSign className="w-6 h-6 text-brand-orange" />, title: "Affordable Prices", desc: "Great food doesn't have to be expensive." },
    { icon: <Award className="w-6 h-6 text-brand-red" />, title: "Fresh Ingredients", desc: "Quality you can taste in every bite." },
    { icon: <Users className="w-6 h-6 text-brand-orange" />, title: "Great for Groups", desc: "The perfect hangout spot for friends." },
  ];

  return (
    <section id="about" className="py-20 bg-[#FDF2F8]"> {/* Light warm background for contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595295330650-60b540eb354d?q=80&w=800&auto=format&fit=crop" 
                alt="Chef preparing momos" 
                className="w-full h-full object-cover transform hover:scale-105 transition-duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">4.1★</p>
              <p className="text-sm opacity-90">Google Rating</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-4">
              ABOUT US
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              A Local Favorite Since Day One
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dreams Restaurant has been the heart of Mahendranagar's food scene, serving mouth-watering momos and authentic local flavors that keep our customers coming back for more.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're known for our <strong className="text-brand-red">friendly hospitality</strong>, consistent taste, and affordable prices that make great food accessible to everyone. Whether you're grabbing a quick bite with friends or settling in for a hearty meal, we treat every guest like family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                    {/* <p className="text-xs text-gray-500">{feature.desc}</p> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
               <a href="#about-story" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                 Learn Our Story &rarr;
               </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
