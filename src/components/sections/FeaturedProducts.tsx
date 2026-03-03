import React from 'react';
import { PRODUCTS } from '../../data/products';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FeatureItemProps {
  product: typeof PRODUCTS[0];
  isLarge?: boolean;
  tagline: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ product, isLarge, tagline }) => (
  <Link to={`/products/${product.slug}`} className="group relative block w-full h-full overflow-hidden">
    <img 
      src={product.image} 
      alt={product.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
      <div className="space-y-3">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
          {tagline}
        </p>
        <h3 className={`font-bold text-white leading-tight ${isLarge ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
          {product.title}
        </h3>
        {isLarge && (
          <p className="text-white/70 max-w-md text-sm md:text-base line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="pt-4 flex items-center gap-4">
          <span className="text-xl md:text-2xl font-black text-white">${product.price}</span>
          <Button variant="accent" size="sm" className="rounded-none px-6">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  </Link>
);

export const FeaturedProducts = () => {
  const p1Premium = PRODUCTS.find(p => p.id === 'p1-premium') || PRODUCTS[0];
  const p1Small = PRODUCTS.find(p => p.id === 'p1-small') || PRODUCTS[0];
  const p2Small = PRODUCTS.find(p => p.id === 'p2-small') || PRODUCTS[3];
  const p2Large = PRODUCTS.find(p => p.id === 'p2-large') || PRODUCTS[5];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured Collection</h2>
            <p className="text-muted max-w-lg text-lg">
              Our hand-picked selection of the most durable and professional BBQ and kitchen gear.
            </p>
          </div>
          <Link to="/products">
            <Button variant="ghost" className="group font-bold text-lg p-0 h-auto hover:bg-transparent hover:text-primary">
              View All Collection <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="space-y-10 max-w-7xl mx-auto">
          {/* Row 1: Left Large, Right Small */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 aspect-[16/9] md:aspect-auto md:h-[600px]"
            >
              <FeatureItem product={p1Premium} isLarge tagline="Premium Kitchen Tools" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 aspect-[4/5] md:aspect-auto md:h-[600px]"
            >
              <FeatureItem product={p1Small} tagline="Budget Friendly" />
            </motion.div>
          </div>

          {/* Row 2: Left Small, Right Large */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 aspect-[4/5] md:aspect-auto md:h-[600px]"
            >
              <FeatureItem product={p2Small} tagline="Party Pack" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 aspect-[16/9] md:aspect-auto md:h-[600px]"
            >
              <FeatureItem product={p2Large} isLarge tagline="BBQ Essentials" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
