import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../../data/products';
import { useStore } from '../../../lib/store';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCw, ChevronRight, Home } from 'lucide-react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { openSelectionDrawer, toggleFavorite, isFavorite } = useStore();
  
  const product = PRODUCTS.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">Back to products</Link>
      </div>
    );
  }

  const favorite = isFavorite(product.id);

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-text-main font-bold">{product.title}</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted/5 border border-muted/10 shadow-soft">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-muted/10 cursor-pointer hover:border-primary transition-all shadow-sm">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">In Stock</Badge>
                {product.categories.map(cat => (
                  <Badge key={cat} variant="primary" className="bg-primary/5">{cat.replace('-', ' ')}</Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{product.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-muted/20'}`} />
                  ))}
                  <span className="ml-2 font-bold text-text-main">{product.rating}</span>
                </div>
                <span className="text-text-muted">({product.reviews} customer reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-primary">${product.price}</span>
                <span className="text-lg text-text-muted line-through opacity-50">$ {(product.price * 1.2).toFixed(2)}</span>
              </div>
            </div>
            
            <p className="text-text-muted text-lg leading-relaxed">
              {product.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted bg-surface p-3 rounded-xl border border-muted/10">
                    <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(52,180,255,0.5)]" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="flex-1 gap-2 rounded-full h-14 text-lg shadow-md hover:shadow-lg transition-all" onClick={() => openSelectionDrawer(product)}>
                <ShoppingCart className="w-6 h-6" /> Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 rounded-full h-14 px-8"
                onClick={() => toggleFavorite(product)}
              >
                <Heart className={`w-6 h-6 ${favorite ? 'fill-current text-red-500' : ''}`} />
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-muted/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold">Free Shipping</p>
                  <p className="text-text-muted">On orders over $150</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold">2 Year Warranty</p>
                  <p className="text-text-muted">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold">30 Day Returns</p>
                  <p className="text-text-muted">Hassle-free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
