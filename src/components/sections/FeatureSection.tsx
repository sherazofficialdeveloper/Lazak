import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FeatureSection = () => {
  return (
    <section className="bg-background py-2">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Row 1: Large Left, Small Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative group overflow-hidden h-[300px] md:h-[450px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium BBQ Packs" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Master the Flame</span>
              <h2 className="text-3xl md:text-5xl text-white mb-3 uppercase tracking-tighter leading-none">
                Premium BBQ Packs
              </h2>
              <p className="text-white/70 max-w-md mb-6 hidden md:block text-sm font-medium">
                Everything you need for the ultimate backyard feast. Professional grade tools and essentials.
              </p>
              <Link to="/products" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors uppercase tracking-widest text-[10px]">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 relative group overflow-hidden h-[300px] md:h-[450px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
              alt="Prime Steaks" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">Prime Steaks</h3>
              <Link to="/products" className="text-accent font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                Shop Cuts
              </Link>
            </div>
          </motion.div>

          {/* Row 2: Small Left, Large Right (CTA Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 relative group overflow-hidden h-[300px] md:h-[450px]"
          >
            <img 
              src="https://media.istockphoto.com/id/2245140782/photo/slicing-iberian-ham-close-up-with-knife.webp?a=1&b=1&s=612x612&w=0&k=20&c=xycAv1nU6gqXeAqPMHQLlgUFwTe9d7M7-Tq3gPSAlp4=" 
              alt="Artisan Sausages" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-white mb-2 uppercase tracking-tighter">Artisan Sausages</h3>
              <Link to="/products" className="text-accent font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">
                View Selection
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-accent flex flex-col justify-center p-8 md:p-16 h-[300px] md:h-[450px]"
          >
            <h2 className="text-4xl md:text-7xl text-secondary mb-4 uppercase tracking-tighter leading-[0.9]">
              Join the <br /> Pitmaster Club
            </h2>
            <p className="text-secondary/80 max-w-lg mb-8 text-base md:text-lg font-bold leading-tight">
              Get exclusive recipes, early access to limited meat drops, and grilling tips from the pros.
            </p>
            <Link to="/signup">
              <button className="bg-secondary text-white px-10 py-4 uppercase tracking-widest text-xs hover:bg-secondary/80 transition-all active:scale-95">
                Join Now
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
