import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Product } from '../../types/product';
import { useStore } from '../../lib/store';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openSelectionDrawer, toggleFavorite, isFavorite } = useStore();
  const favorite = isFavorite(product.id);

  return (
    <div className="group flex flex-col bg-surface">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Button 
            variant="icon" 
            className="bg-white text-secondary hover:bg-primary hover:text-white transition-all rounded-none"
            onClick={() => toggleFavorite(product)}
            title="Add to Favorites"
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-current text-accent' : ''}`} />
          </Button>
          <Link to={`/products/${product.slug}`}>
            <Button 
              variant="icon" 
              className="bg-white text-secondary hover:bg-primary hover:text-white transition-all rounded-none"
              title="Quick View"
            >
              <Eye className="w-5 h-5" />
            </Button>
          </Link>
          <Button 
            variant="icon" 
            className="bg-white text-secondary hover:bg-primary hover:text-white transition-all rounded-none"
            onClick={() => openSelectionDrawer(product)}
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="py-4 flex-grow flex flex-col">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted font-bold uppercase tracking-widest">
              {product.categories[0].replace('-', ' ')}
            </span>
            <div className="flex items-center gap-1 text-accent">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[10px] font-bold">{product.rating}</span>
            </div>
          </div>
          
          <Link to={`/products/${product.slug}`}>
            <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-1">
              {product.title}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-black text-secondary">${product.price}</span>
          <Button 
            size="sm" 
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-primary/5 font-bold p-0 h-auto rounded-none"
            onClick={() => openSelectionDrawer(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
