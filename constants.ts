import { DishCategory, MenuItem, SignatureDish, Review } from './types';

export const RESTAURANT_INFO = {
  name: "Dreams Restaurant",
  location: "Mahendranagar (Bhimdatta), Nepal",
  phone: "+977 980-0000000",
  rating: 4.1,
  reviewCount: 197,
  mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853549641775!2d80.1764!3d28.9556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU3JzIwLjIiTiA4MMKwMTAnMzUuMCJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
};

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: '1',
    name: 'Steamed Momos',
    description: 'Juicy, hand-wrapped dumplings filled with spiced chicken or fresh vegetables. Served with our secret spicy chutney.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop',
    badge: 'Must Try'
  },
  {
    id: '2',
    name: 'Chicken Kaffle',
    description: 'Crispy, fried perfection. A local favorite snack that pairs perfectly with a cold drink.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'C-MoMo',
    description: 'Chilly Momos tossed in a tangy, spicy sauce with bell peppers and onions. An explosion of flavor.',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Spicy Chowmein',
    description: 'Stir-fried noodles with crunchy vegetables and your choice of meat. A classic street food staple.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Chicken Thuppa',
    description: 'Hearty noodle soup with rich broth, veggies, and tender chicken chunks. Perfect for a cozy evening.',
    image: 'https://images.unsplash.com/photo-1571204655663-d02de856b3e8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Hukka & Drinks',
    description: 'Relax with friends over our premium hukka flavors and a selection of refreshing beverages.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=800&auto=format&fit=crop'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Momos
  { id: 'm1', name: 'Veg Steamed Momo', description: 'Served with spicy tomato chutney', price: 'Rs. 100', category: DishCategory.MOMOS, isVegetarian: true },
  { id: 'm2', name: 'Chicken Steamed Momo', description: 'Juicy minced chicken filling', price: 'Rs. 150', category: DishCategory.MOMOS },
  { id: 'm3', name: 'Veg C-Momo', description: 'Fried momos in spicy chili sauce', price: 'Rs. 140', category: DishCategory.MOMOS, isSpicy: true, isVegetarian: true },
  { id: 'm4', name: 'Chicken C-Momo', description: 'Fried chicken momos in spicy chili sauce', price: 'Rs. 190', category: DishCategory.MOMOS, isSpicy: true },
  { id: 'm5', name: 'Fried Momo (Veg/Chicken)', description: 'Crispy deep fried dumplings', price: 'Rs. 120 / 170', category: DishCategory.MOMOS },
  { id: 'm6', name: 'Jhol Momo', description: 'Momos drowned in a tangy, spicy broth', price: 'Rs. 160', category: DishCategory.MOMOS, isSpicy: true },

  // Rice & Noodles
  { id: 'r1', name: 'Veg Chowmein', description: 'Stir fried noodles with cabbage & carrots', price: 'Rs. 110', category: DishCategory.RICE_NOODLES, isVegetarian: true },
  { id: 'r2', name: 'Chicken Chowmein', description: 'Classic stir fried noodles with chicken', price: 'Rs. 160', category: DishCategory.RICE_NOODLES },
  { id: 'r3', name: 'Veg Fried Rice', description: 'Wok tossed rice with veggies', price: 'Rs. 120', category: DishCategory.RICE_NOODLES, isVegetarian: true },
  { id: 'r4', name: 'Chicken Fried Rice', description: 'Wok tossed rice with egg and chicken', price: 'Rs. 170', category: DishCategory.RICE_NOODLES },
  { id: 'r5', name: 'Chicken Thuppa', description: 'Noodle soup with rich spices', price: 'Rs. 180', category: DishCategory.RICE_NOODLES },

  // Snacks
  { id: 's1', name: 'Chicken Kaffle', description: 'Signature fried chicken snack', price: 'Rs. 250', category: DishCategory.SNACKS },
  { id: 's2', name: 'Chicken Chilly', description: 'Boneless chicken in spicy sauce', price: 'Rs. 300', category: DishCategory.SNACKS, isSpicy: true },
  { id: 's3', name: 'French Fries', description: 'Classic crispy fries', price: 'Rs. 100', category: DishCategory.SNACKS, isVegetarian: true },
  { id: 's4', name: 'Sausage Fry', description: 'Fried chicken sausages', price: 'Rs. 120', category: DishCategory.SNACKS },

  // Drinks
  { id: 'd1', name: 'Cola / Sprite', description: 'Chilled bottle', price: 'Rs. 60', category: DishCategory.DRINKS },
  { id: 'd2', name: 'Lassi', description: 'Sweet yogurt drink', price: 'Rs. 100', category: DishCategory.DRINKS },
  { id: 'd3', name: 'Hot Coffee', description: 'Nescafe', price: 'Rs. 50', category: DishCategory.DRINKS },
  { id: 'd4', name: 'Beer (Tuborg/Carlsberg)', description: 'Chilled pint/bottle', price: 'Rs. 450+', category: DishCategory.DRINKS },

  // Specials
  { id: 'sp1', name: 'Dreams Special Platter', description: 'Mix of momo, fries, and sausage', price: 'Rs. 500', category: DishCategory.SPECIALS },
  { id: 'sp2', name: 'Chicken Biryani', description: 'Aromatic rice with spiced chicken', price: 'Rs. 350', category: DishCategory.SPECIALS },
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Sajan K.', rating: 5, text: "Best momos in town, hands down. The chutney is addictive! A must visit if you are in Mahendranagar.", date: "2 weeks ago" },
  { id: '2', name: 'Priya M.', rating: 4, text: "Great vibes and affordable prices. We come here every weekend for the Chicken Kaffle.", date: "1 month ago" },
  { id: '3', name: 'Ramesh B.', rating: 5, text: "The hospitality here is unmatched. The owners treat you like family. Love the Thuppa too.", date: "3 months ago" },
  { id: '4', name: 'Tourist_UK', rating: 4, text: "Unexpectedly good food in this small town. The hygiene is good and the staff is friendly.", date: "5 months ago" },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop', // Momo close up
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', // Restaurant interior vibe
  'https://images.unsplash.com/photo-1626804475297-411f7c517178?q=80&w=800&auto=format&fit=crop', // Fried Rice
  'https://images.unsplash.com/photo-1568045618485-64531f82236a?q=80&w=800&auto=format&fit=crop', // Cheerful crowd/People
  'https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800&auto=format&fit=crop', // Biryani
  'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop', // Tasty Dish
];
