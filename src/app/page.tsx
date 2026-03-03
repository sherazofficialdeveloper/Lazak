import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ShopByCategory } from '../components/sections/ShopByCategory';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { FeatureSection } from '../components/sections/FeatureSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Newsletter } from '../components/sections/Newsletter';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <FeaturedProducts />
      <ShopByCategory />
      <WhyChooseUs />
      
      {/* CTA Banner */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-text-main rounded-3xl p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Master the Grill?
              </h2>
              <p className="text-muted text-lg">
                Join our community of BBQ enthusiasts and get access to professional tips, exclusive drops, and premium support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="gap-2">
                    Explore Collection <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-text-main">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default HomePage;
