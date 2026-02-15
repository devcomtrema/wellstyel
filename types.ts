
export type Category = 'all' | 'cosmetics' | 'beauty' | 'gym' | 'accessories';

export type BadgeType = 'new' | 'premium' | 'limited';

export interface Product {
  id: number;
  name: string;
  category: Category;
  image: string;
  price: string;
  description: string;
  badge?: BadgeType;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Benefit {
  id: string;
  icon: 'Quality' | 'Delivery' | 'Selection' | 'Service';
  titleKey: string;
  textKey: string;
}

export interface Language {
  code: string;
  name: string;
}
