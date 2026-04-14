import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { pathname } = useLocation();

  const services = [
    { name: 'Managed IT Services', path: '/managed-it', icon: '🖥️' },
    { name: 'Cybersecurity', path: '/cybersecurity', icon: '🔒' },
    { name: 'Cloud Solutions & Migration', path: '/cloud-solutions', icon: '☁️' },
    { name: 'Custom Software Development', path: '/software-development', icon: '💻' },
    { name: 'Website & SEO Solutions', path: '/web-development', icon: '🌐' },
    { name: 'AI Automation & Business Process Optimization', path: '/ai-ml', icon: '🤖' },
    { name: 'Mobile App Development', path: '/mobile-apps', icon: '📱' },
    { name: 'IT Consulting & Digital Transformation', path: '/it-consulting', icon: '💡' },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

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
            <button
              type="button"
              className="flex items-center text-sm font-medium text-foreground hover:text-primary smooth-transition py-2"
              aria-expanded={isServicesOpen}
              aria-haspopup="menu"
              aria-controls="desktop-services-menu"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div id="desktop-services-menu" className="absolute top-full left-0 w-72 bg-card border border-border rounded-md shadow-xl py-3 z-50">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/case-studies" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Case Studies</Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">About</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Contact</Link>
          
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div className="space-y-2">
            <span className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">Services</span>
            <div className="pl-4 space-y-2 border-l-2 border-border ml-2">
              {services.map((service) => (
                <Link key={service.path} to={service.path} className="block text-sm text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="mr-2">{service.icon}</span>{service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/case-studies" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
          <Link to="/about" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block text-sm font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
