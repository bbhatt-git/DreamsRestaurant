export enum DishCategory {
  MOMOS = "Momos",
  SNACKS = "Snacks & Fast Food",
  MAIN = "Main Course",
  RICE_NOODLES = "Rice & Noodles",
  DRINKS = "Drinks",
  SPECIALS = "Specials"
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: DishCategory;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  image?: string;
}

export interface SignatureDish {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
