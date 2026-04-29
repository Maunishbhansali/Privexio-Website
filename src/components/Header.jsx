import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarDays, ChevronDown, Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FreeAuditModal from '@/components/FreeAuditModal';
import { CALENDAR_URL } from '@/lib/site-links';
import { serviceCatalog } from '@/data/serviceCatalog';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFreeAuditOpen, setIsFreeAuditOpen] = useState(false);
  const [activeServicePath, setActiveServicePath] = useState(serviceCatalog[0]?.path ?? '/msp');
  const hoverLockUntilRef = useRef(0);
  const pathname = usePathname();
  const leftColumnServices = serviceCatalog.filter((_, index) => index % 2 === 0);
  const rightColumnServices = serviceCatalog.filter((_, index) => index % 2 === 1);

  const handleServiceHover = (path) => {
    const now = Date.now();

    if (now < hoverLockUntilRef.current || activeServicePath === path) {
      return;
    }

    hoverLockUntilRef.current = now + 180;
    setActiveServicePath(path);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center space-x-2">
          <img
            src="/brand/png/privexio-mark-white-bg-64x64.webp"
            alt=""
            width="32"
            height="32"
            className="h-8 w-8 rounded-sm"
          />
          <span className="truncate text-2xl font-bold tracking-tight text-primary max-[360px]:hidden">Privexio</span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-5 xl:flex 2xl:gap-7">
          <Link href="/" className="whitespace-nowrap text-sm font-medium text-foreground hover:text-primary smooth-transition">Home</Link>

          <div
            className="group relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center whitespace-nowrap py-2 text-sm font-medium text-foreground hover:text-primary smooth-transition"
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
                            onMouseEnter={() => handleServiceHover(service.path)}
                            onMouseMove={() => handleServiceHover(service.path)}
                            onFocus={() => setActiveServicePath(service.path)}
                            className={`rounded-2xl px-4 py-4 transition-all duration-200 ${
                              isActive ? 'bg-primary/10' : 'hover:bg-slate-50'
                            }`}
                          >
                            <Link href={service.path} className="flex items-start gap-3 text-sm text-foreground hover:text-primary">
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
                                      href={`${service.path}/${category.slug}`}
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

          <Link href="/case-studies" className="whitespace-nowrap text-sm font-medium text-foreground hover:text-primary smooth-transition">Case Studies</Link>
          <Link href="/about" className="whitespace-nowrap text-sm font-medium text-foreground hover:text-primary smooth-transition">About</Link>
          <Link href="/contact" className="whitespace-nowrap text-sm font-medium text-foreground hover:text-primary smooth-transition">Contact</Link>

          <Button type="button" variant="outline" className="whitespace-nowrap rounded-full px-4" onClick={() => setIsFreeAuditOpen(true)}>
            <Search className="mr-2 h-4 w-4" />
            Free Audit
          </Button>
          <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
            <Button className="whitespace-nowrap rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90">
              <CalendarDays className="mr-2 h-4 w-4" />
              Schedule a Consultation
            </Button>
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-foreground hover:bg-muted xl:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="space-y-4 border-t border-border bg-background px-4 py-4 xl:hidden">
          <Link href="/" className="block text-sm font-medium text-foreground">Home</Link>
          <div className="space-y-2">
            <span className="block text-sm font-bold uppercase tracking-wider text-muted-foreground">Services</span>
            <div className="ml-2 space-y-2 border-l-2 border-border pl-4">
              {serviceCatalog.map((service) => (
                <Link key={service.path} href={service.path} className="block text-sm text-foreground">
                  {service.navName}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/case-studies" className="block text-sm font-medium text-foreground">Case Studies</Link>
          <Link href="/about" className="block text-sm font-medium text-foreground">About</Link>
          <Link href="/contact" className="block text-sm font-medium text-foreground">Contact</Link>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
              <CalendarDays className="mr-2 h-4 w-4" />
              Schedule a Consultation
            </a>
            <button type="button" className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-bold text-primary" onClick={() => setIsFreeAuditOpen(true)}>
              <Search className="mr-2 h-4 w-4" />
              Free Audit
            </button>
          </div>
        </div>
      )}
      <FreeAuditModal open={isFreeAuditOpen} onOpenChange={setIsFreeAuditOpen} />
    </header>
  );
};

export default Header;
