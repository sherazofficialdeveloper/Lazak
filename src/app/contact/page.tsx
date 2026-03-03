import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const ContactPage = () => {
  const faqs = [
    { q: 'What is your shipping policy?', a: 'We offer free express shipping on all orders over $150 within the continental USA. Standard shipping takes 3-5 business days.' },
    { q: 'How do I return a product?', a: 'You can return any product within 30 days of purchase. Simply contact our support team to receive a prepaid return label.' },
    { q: 'Do you offer international shipping?', a: 'Currently, we only ship within the USA. We are planning to expand to Canada and Europe later this year.' },
    { q: 'What warranty do you provide?', a: 'All LAZAK products come with a standard 2-year manufacturer warranty covering any technical defects.' }
  ];

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <Badge variant="primary">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-text-muted text-lg">
                Have a question about our products or your order? Our dedicated USA-based support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-text-muted text-sm">support@nexus.com</p>
                  <p className="text-text-muted text-sm">sales@nexus.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-text-muted text-sm">+1 (800) 123-4567</p>
                  <p className="text-text-muted text-sm">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Visit Us</h3>
                  <p className="text-text-muted text-sm">123 Tech Plaza</p>
                  <p className="text-text-muted text-sm">Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Response Time</h3>
                  <p className="text-text-muted text-sm">Under 2 hours</p>
                  <p className="text-text-muted text-sm">During business hours</p>
                </div>
              </div>
            </div>
            
            {/* Map UI Placeholder */}
            <div className="w-full h-64 bg-muted/10 rounded-2xl border border-muted/20 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-30 grayscale" />
              <div className="relative z-10 text-center space-y-2">
                <MapPin className="w-10 h-10 text-primary mx-auto" />
                <p className="font-bold">Interactive Map Loading...</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Email Address" placeholder="john@example.com" type="email" />
              <Input label="Phone Number" placeholder="+1 (555) 000-0000" />
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-main ml-1">Message</label>
                <textarea 
                  className="w-full px-4 py-2.5 bg-surface border border-muted/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-main placeholder:text-muted/50 min-h-[150px]"
                  placeholder="How can we help you?"
                />
              </div>
              <Button size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </Card>
        </div>
        
        {/* FAQ Section */}
        <section className="mt-32 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-text-muted">Quick answers to common questions about our services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-3 p-6 bg-surface rounded-xl border border-muted/10">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" /> {faq.q}
                </h3>
                <p className="text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
