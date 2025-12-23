
export interface JewelryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  priceRange: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
