import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Layers, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/components/WhatsAppChat';
import { serviceCatalog } from '@/data/serviceCatalog';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Layers className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl tracking-tight text-primary">Privexio</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-7">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Home</Link>

          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
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
              <div id="desktop-services-menu" className="absolute top-full left-0 w-[34rem] bg-card border border-border rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2">
                {serviceCatalog.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.path} to={service.path} className="flex gap-3 rounded-xl px-3 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        <span className="block font-semibold">{service.navName}</span>
                        <span className="mt-1 block text-xs text-muted-foreground">{service.categories.length} trending category pages</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/#case-studies" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Case Studies</Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">About</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Contact</Link>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button variant="outline" className="rounded-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <Link to="/contact">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </Link>
        </nav>

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

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <Link to="/" className="block text-sm font-medium text-foreground">Home</Link>
          <div className="space-y-2">
            <span className="block text-sm font-bold text-muted-foreground uppercase tracking-wider">Services</span>
            <div className="pl-4 space-y-2 border-l-2 border-border ml-2">
              {serviceCatalog.map((service) => (
                <Link key={service.path} to={service.path} className="block text-sm text-foreground">
                  {service.navName}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/#case-studies" className="block text-sm font-medium text-foreground">Case Studies</Link>
          <Link to="/about" className="block text-sm font-medium text-foreground">About</Link>
          <Link to="/contact" className="block text-sm font-medium text-foreground">Contact</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-[#128C7E]">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
