import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote, Utensils, Wallet, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            What Sets Us Apart
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 font-serif">Why People Love Us</h2>
          <p className="text-gray-400 mt-4">Join thousands of happy customers who've made us their favorite hangout spot.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
           {[
             { label: 'Best Momos', sub: 'In Mahendranagar', icon: <Utensils className="w-8 h-8 text-brand-orange mx-auto" /> },
             { label: 'Budget-Friendly', sub: 'Rs 1000-1500/person', icon: <Wallet className="w-8 h-8 text-brand-orange mx-auto" /> },
             { label: '4.1 Rating', sub: '197+ Reviews', icon: <Star className="w-8 h-8 text-brand-orange mx-auto fill-current" /> },
             { label: 'Group Friendly', sub: 'Perfect for hangouts', icon: <Users className="w-8 h-8 text-brand-orange mx-auto" /> },
           ].map((stat, i) => (
             <div key={i} className="bg-brand-gray p-6 rounded-xl text-center border border-gray-800">
               <div className="mb-2 flex justify-center">{stat.icon}</div>
               <div className="font-bold text-brand-orange text-lg">{stat.label}</div>
               <div className="text-xs text-gray-500">{stat.sub}</div>
             </div>
           ))}
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-brand-gray p-8 rounded-xl relative border border-gray-800 hover:border-brand-orange/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-brand-dark w-10 h-10 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                   <h5 className="text-white font-bold text-sm">{review.name}</h5>
                   <span className="text-gray-600 text-xs">Verified Customer</span>
                </div>
                <span className="text-xs text-gray-600">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-wrap justify-center gap-3">
             {["Best momos in town", "Delicious & Affordable", "Friendly Hospitality", "Fresh Food", "Great Place to Hangout", "Consistent Taste"].map(tag => (
                 <span key={tag} className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs border border-gray-700">
                     {tag}
                 </span>
             ))}
        </div>

        <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/search?q=Dreams+Restaurant+Mahendranagar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-all"
            >
                See All Reviews &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;