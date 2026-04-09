
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'MSP Services', path: '/msp' },
    { name: 'Software Development', path: '/software-development' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Apps', path: '/mobile-apps' },
    { name: 'Cloud Solutions', path: '/cloud-solutions' },
    { name: 'AI/ML Services', path: '/ai-ml' },
    { name: 'Additional Services', path: '/additional-services' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Layers className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl tracking-tight text-primary">Privexio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Home</Link>
          
          <div className="relative group" 
               onMouseEnter={() => setIsServicesOpen(true)}
               onMouseLeave={() => setIsServicesOpen(false)}>
            <button className="flex items-center text-sm font-medium text-foreground hover:text-primary smooth-transition py-2">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-md shadow-lg py-2">
                {services.map((service) => (
                  <Link key={service.path} to={service.path} className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary">
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">About</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Contact</Link>
          
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div className="space-y-2">
            <span className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">Services</span>
            <div className="pl-4 space-y-2 border-l-2 border-border ml-2">
              {services.map((service) => (
                <Link key={service.path} to={service.path} className="block text-sm text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
