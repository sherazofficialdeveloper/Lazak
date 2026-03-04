import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts = () => {
  return (
    <section className="pt-12 bg-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-around gap-8 mb-12">
          <div className="space-y-4">
            <Badge variant="primary">Curated Selection</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Products</h2>
            <p className="text-text-muted max-w-lg text-lg">
              Our hand-picked selection of the most durable and professional BBQ and kitchen gear.
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="group rounded-full px-8">
              View All Collection <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
