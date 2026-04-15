import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarDays, ChevronDown, Layers, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL, MAILTO_URL } from '@/lib/site-links';
import { serviceCatalog } from '@/data/serviceCatalog';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServicePath, setActiveServicePath] = useState(serviceCatalog[0]?.path ?? '/msp');
  const { pathname } = useLocation();
  const leftColumnServices = serviceCatalog.filter((_, index) => index % 2 === 0);
  const rightColumnServices = serviceCatalog.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="page-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Layers className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold tracking-tight text-primary">Privexio</span>
        </Link>

        <nav className="hidden items-center space-x-7 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Home</Link>

          <div
            className="group relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center py-2 text-sm font-medium text-foreground hover:text-primary smooth-transition"
              aria-expanded={isServicesOpen}
              aria-haspopup="menu"
              aria-controls="desktop-services-menu"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div id="desktop-services-menu" className="absolute left-0 top-full w-[48rem] rounded-[1.75rem] border border-border bg-card p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[leftColumnServices, rightColumnServices].map((columnServices, columnIndex) => (
                    <div key={columnIndex} className="space-y-2">
                      {columnServices.map((service) => {
                    const Icon = service.icon;
                    const isActive = activeServicePath === service.path;

                    return (
                      <div
                        key={service.path}
                        onMouseEnter={() => setActiveServicePath(service.path)}
                        onFocus={() => setActiveServicePath(service.path)}
                        className={`rounded-2xl px-4 py-4 transition-all duration-200 ${
                          isActive ? 'bg-primary/10' : 'hover:bg-slate-50'
                        }`}
                      >
                        <Link to={service.path} className="flex items-start gap-3 text-sm text-foreground hover:text-primary">
                          <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${isActive ? 'text-primary' : ''}`} />
                          <div className="min-w-0">
                            <span className="block font-semibold leading-snug">{service.navName}</span>
                          </div>
                        </Link>

                        {isActive && (
                          <div className="mt-4 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                            <div className="grid gap-2">
                              {service.categories.map((category) => (
                                <Link
                                  key={category.slug}
                                  to={`${service.path}/${category.slug}`}
                                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-slate-50 hover:text-primary"
                                >
                                  {category.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/case-studies" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Case Studies</Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">About</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">Contact</Link>

          <a href={MAILTO_URL}>
            <Button variant="outline" className="rounded-full">
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
          </a>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <CalendarDays className="mr-2 h-4 w-4" />
              Schedule a Consultation
            </Button>
          </a>
        </nav>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="space-y-4 border-t border-border bg-background px-4 py-4 md:hidden">
          <Link to="/" className="block text-sm font-medium text-foreground">Home</Link>
          <div className="space-y-2">
            <span className="block text-sm font-bold uppercase tracking-wider text-muted-foreground">Services</span>
            <div className="ml-2 space-y-2 border-l-2 border-border pl-4">
              {serviceCatalog.map((service) => (
                <Link key={service.path} to={service.path} className="block text-sm text-foreground">
                  {service.navName}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/case-studies" className="block text-sm font-medium text-foreground">Case Studies</Link>
          <Link to="/about" className="block text-sm font-medium text-foreground">About</Link>
          <Link to="/contact" className="block text-sm font-medium text-foreground">Contact</Link>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-primary">
            <CalendarDays className="mr-2 h-4 w-4" />
            Schedule a Consultation
          </a>
          <a href={MAILTO_URL} className="inline-flex items-center text-sm font-bold text-primary">
            <Mail className="mr-2 h-4 w-4" />
            Email Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
