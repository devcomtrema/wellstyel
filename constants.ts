
import { Product, Testimonial, Benefit, Language } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Glow Serum",
    category: "cosmetics",
    image: "https://picsum.photos/seed/p1/400/400",
    price: "€49.99",
    description: "A revitalizing serum with hyaluronic acid and vitamin C for a radiant complexion. Made in Amsterdam.",
    badge: "new",
  },
  {
    id: 2,
    name: "Dutch Tulip Body Lotion",
    category: "beauty",
    image: "https://picsum.photos/seed/p2/400/400",
    price: "€29.99",
    description: "Hydrating body lotion with a subtle scent of Dutch tulips. Leaves skin soft and supple.",
    badge: "premium",
  },
  {
    id: 3,
    name: "Performance Recovery Gel",
    category: "gym",
    image: "https://picsum.photos/seed/p3/400/400",
    price: "€34.99",
    description: "A cooling gel to soothe muscles after an intense workout. Enriched with natural extracts.",
  },
  {
    id: 4,
    name: "Silk Beauty Scarf",
    category: "accessories",
    image: "https://picsum.photos/seed/p4/400/400",
    price: "€59.99",
    description: "A 100% silk scarf, perfect for protecting your hair and adding a touch of elegance.",
    badge: "limited",
  },
  {
    id: 5,
    name: "Renewing Night Cream",
    category: "cosmetics",
    image: "https://picsum.photos/seed/p5/400/400",
    price: "€54.99",
    description: "An intensive night cream that repairs and rejuvenates skin while you sleep. European formula.",
  },
  {
    id: 6,
    name: "Pro-Grade Gym Towel",
    category: "gym",
    image: "https://picsum.photos/seed/p6/400/400",
    price: "€24.99",
    description: "Highly absorbent and quick-drying towel for your gym sessions. Durable and stylish.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Ana Silva",
        avatar: "https://picsum.photos/seed/t1/100/100",
        rating: 5,
        comment: "The quality of these products is incredible. You can really feel the European standard. My skin has never looked better!"
    },
    {
        id: 2,
        name: "Beatriz Costa",
        avatar: "https://picsum.photos/seed/t2/100/100",
        rating: 5,
        comment: "I'm in love with the Glow Serum! The delivery was fast and the customer service was excellent. Highly recommend Welwitchia Style."
    },
    {
        id: 3,
        name: "Carlos Martins",
        avatar: "https://picsum.photos/seed/t3/100/100",
        rating: 4,
        comment: "The performance gel is a must-have after my workouts. It works wonders. Will definitely be buying more from their collection."
    }
];

export const BENEFITS: Benefit[] = [
    { id: 'quality', icon: 'Quality', titleKey: 'benefits.card1.title', textKey: 'benefits.card1.text' },
    { id: 'delivery', icon: 'Delivery', titleKey: 'benefits.card2.title', textKey: 'benefits.card2.text' },
    { id: 'selection', icon: 'Selection', titleKey: 'benefits.card3.title', textKey: 'benefits.card3.text' },
    { id: 'service', icon: 'Service', titleKey: 'benefits.card4.title', textKey: 'benefits.card4.text' },
];

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'EN' },
    { code: 'pt', name: 'PT' },
    { code: 'es', name: 'ES' },
    { code: 'nl', name: 'NL' },
    { code: 'de', name: 'DE' },
];

export const NAV_LINKS = [
    { href: '#home', key: 'nav.home' },
    { href: '#origin', key: 'nav.origin' },
    { href: '#products', key: 'nav.products' },
    { href: '#benefits', key: 'nav.benefits' },
    { href: '#testimonials', key: 'nav.testimonials' },
    { href: '#contact', key: 'nav.contact' },
];
