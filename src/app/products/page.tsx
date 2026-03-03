import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { ProductCard } from '../../components/ui/ProductCard';
import { Badge } from '../../components/ui/Badge';
import { Filter, ChevronDown, LayoutGrid, List, Search } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categories.includes(selectedCategory));
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-8 shrink-0">
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-muted/10 pb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                    selectedCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-muted/10 text-text-muted'
                  }`}
                >
                  All Products
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                      selectedCategory === cat.slug ? 'bg-primary text-white' : 'hover:bg-muted/10 text-text-muted'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-muted/10 pb-2">Price Range</h3>
              <div className="space-y-4">
                <input type="range" className="w-full accent-primary" min="0" max="1000" />
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">USA Support</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                All products ship from our USA warehouses with 24/7 local support.
              </p>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-4 rounded-xl border border-muted/10">
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted font-medium">
                  Showing <span className="text-text-main font-bold">{filteredProducts.length}</span> of <span className="text-text-main font-bold">{PRODUCTS.length}</span> products
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-background border border-muted/10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-muted/10 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 space-y-4">
                <div className="w-20 h-20 bg-muted/10 rounded-full flex items-center justify-center mx-auto text-muted">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">No products found</h3>
                <p className="text-text-muted">Try adjusting your filters or search query.</p>
                <Button variant="outline" onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setSortBy('newest');
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
