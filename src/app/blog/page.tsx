import React from 'react';
import { BLOG_ARTICLES } from '../../data/products';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="secondary">LAZAK Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Grill Master Insights</h1>
          <p className="text-text-muted">Stay updated with the latest trends in premium BBQ and kitchen essentials.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {BLOG_ARTICLES.map((article) => (
            <Card key={article.id} className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-text-muted font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-text-muted line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
