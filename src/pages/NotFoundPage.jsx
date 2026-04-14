import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';

const NotFoundPage = () => {
  usePageMeta('Page Not Found', 'The page you are looking for does not exist or may have moved.');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-slate-950 px-4 py-24 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">404 error</p>
            <h1 className="mt-4 text-4xl font-bold md:text-6xl">We couldn&apos;t find that page.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              The page may have moved, the link may be outdated, or the URL may be incorrect.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/">
                <Button size="lg" className="rounded-full px-8">Back to Home</Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-8 text-white hover:bg-white hover:text-slate-950"
                >
                  Contact Privexio
                </Button>
              </Link>
            </div>
            <Link to="/" className="mt-8 inline-flex items-center text-sm font-semibold text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to the main site
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
