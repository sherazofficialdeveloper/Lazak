import { Product, BlogArticle, Category } from '../types/product';

/**
 * Current products are client-provided. 
 * Any future products can replace these images/text without changing layout. 
 * All categories and sections will automatically adapt.
 */

export const CATEGORIES: Category[] = [
  { id: 'c1', slug: 'kitchen-tools', name: 'Kitchen Tools', icon: 'Utensils', image: '/pic5.jpeg' },
  { id: 'c2', slug: 'grill-accessories', name: 'Grill Accessories', icon: 'Settings', image: '/pic2.jpeg' },
  { id: 'c3', slug: 'indoor-outdoor', name: 'Indoor / Outdoor Use', icon: 'Home', image: '/pack.jpeg' },
  { id: 'c4', slug: 'mid-range', name: 'Mid-Range', icon: 'Activity', image: '/pic5.jpeg' },
  { id: 'c5', slug: 'bbq-essentials', name: 'BBQ Essentials', icon: 'Flame', image: '/pack.jpeg' },
  { id: 'c6', slug: 'meat-packaging', name: 'Meat Packaging', icon: 'Package', image: '/pic2.jpeg' },
  { id: 'c7', slug: 'party-size', name: 'Small Pack / Party Size', icon: 'Users', image: '/pack.jpeg' },
  { id: 'c8', slug: 'budget-friendly', name: 'Budget Friendly', icon: 'DollarSign', image: '/pic5.jpeg' },
  { id: 'c9', slug: 'featured', name: 'Featured', icon: 'Star', image: '/pic2.jpeg' },
];

export const PRODUCTS: Product[] = [
  // Kitchen Grill / Jali Variants
  {
    id: 'p1-small',
    slug: 'small-kitchen-grill-jali',
    title: 'Small Jali',
    price: 29.99,
    description: 'Budget-friendly small kitchen grill/jali. Ideal for small roasting tasks and home cooking.',
    image: '/pic5.jpeg',
    rating: 4.5,
    reviews: 12,
    categories: ['kitchen-tools', 'grill-accessories', 'budget-friendly', 'featured'],
    features: ['Stainless Steel', 'Lightweight', 'Easy to Clean'],
    stock: 50,
    deliveryInfo: 'Ships in 3-5 business days.',
    variants: []
  },
  {
    id: 'p1-standard',
    slug: 'standard-kitchen-grill-jali',
    title: 'Standard Jali',
    price: 39.99,
    description: 'Medium quality standard kitchen grill/jali. Durable and reliable for everyday use.',
    image: '/pic5.jpeg',
    rating: 4.8,
    reviews: 28,
    categories: ['kitchen-tools', 'grill-accessories', 'mid-range', 'featured'],
    features: ['Stainless Steel', 'Heat Resistant', 'Easy to Clean'],
    stock: 85,
    deliveryInfo: 'Ships in 3-5 business days.',
    variants: []
  },
  {
    id: 'p1-premium',
    slug: 'premium-kitchen-grill-jali',
    title: 'Premium Jali',
    price: 49.99,
    description: 'High-quality premium kitchen grill/jali. Professional grade for the ultimate grilling experience.',
    image: '/pic2.jpeg',
    rating: 4.9,
    reviews: 45,
    categories: ['kitchen-tools', 'grill-accessories', 'mid-range', 'featured'],
    features: ['Premium Grade Steel', 'Extra Durable', 'Professional Finish'],
    stock: 30,
    deliveryInfo: 'Ships in 3-5 business days.',
    variants: []
  },
  // BBQ Meat Pack Bag Variants
  {
    id: 'p2-small',
    slug: 'small-bbq-meat-pack-bag',
    title: 'Small Pack',
    price: 19.99,
    description: 'Budget-friendly small BBQ meat packaging bag. Perfect for small party packs.',
    image: '/pack.jpeg',
    rating: 4.6,
    reviews: 18,
    categories: ['bbq-essentials', 'meat-packaging', 'party-size', 'budget-friendly', 'featured'],
    features: ['Hygienic Material', 'Compact Size', 'Easy Seal'],
    stock: 100,
    deliveryInfo: 'USA Nationwide delivery.',
    variants: []
  },
  {
    id: 'p2-standard',
    slug: 'standard-bbq-meat-pack-bag',
    title: 'Standard Pack',
    price: 49.99,
    description: 'Regular size standard BBQ meat packaging bag. Durable and hygienic for all BBQ needs.',
    image: '/pic2.jpeg',
    rating: 4.9,
    reviews: 42,
    categories: ['bbq-essentials', 'meat-packaging', 'party-size', 'mid-range', 'featured'],
    features: ['Durable Material', 'Hygienic Seal', 'Professional Branding'],
    stock: 150,
    deliveryInfo: 'USA Nationwide delivery.',
    variants: []
  },
  {
    id: 'p2-large',
    slug: 'large-bbq-meat-pack-bag',
    title: 'Large Pack',
    price: 69.99,
    description: 'Premium high-quality large BBQ meat packaging bag. Ideal for large BBQ parties and professional use.',
    image: '/pic5.jpeg',
    rating: 5.0,
    reviews: 25,
    categories: ['bbq-essentials', 'meat-packaging', 'party-size', 'mid-range', 'featured'],
    features: ['Extra Large Capacity', 'Heavy Duty', 'Premium Seal'],
    stock: 40,
    deliveryInfo: 'USA Nationwide delivery.',
    variants: []
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    slug: 'perfect-bbq-meat-packaging',
    title: 'The Importance of Proper BBQ Meat Packaging',
    excerpt: 'Learn why high-quality packaging is essential for maintaining meat freshness and flavor during transport.',
    date: 'March 2, 2026',
    image: '/pic2.jpeg',
    author: 'Chef Marcus'
  },
  {
    id: 'b2',
    slug: 'grill-maintenance-tips',
    title: '5 Tips for Maintaining Your Kitchen Grill',
    excerpt: 'Keep your grill in top condition with these simple cleaning and maintenance hacks.',
    date: 'February 28, 2026',
    image: '/pic5.jpeg',
    author: 'Sarah Grillmaster'
  },
  {
    id: 'b3',
    slug: 'choosing-the-right-chef-knife',
    title: 'Choosing the Right Chef Knife for Your Kitchen',
    excerpt: 'A comprehensive guide to selecting the perfect chef knife based on your cooking style and preferences.',
    date: 'February 25, 2026',
    image: '/pack.jpeg',
    author: 'Chef Marcus'
  },
  {
    id: 'b4',
    slug: 'outdoor-grilling-safety',
    title: 'Essential Outdoor Grilling Safety Tips',
    excerpt: 'Stay safe while grilling outdoors with these essential tips for fire prevention and food safety.',
    date: 'February 20, 2026',
    image: '/pack.jpeg',
    author: 'Sarah Grillmaster'
  }
];
