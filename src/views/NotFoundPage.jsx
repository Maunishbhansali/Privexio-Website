import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';

const NotFoundPage = () => {
  usePageMeta('Page Not Found', 'The page you are looking for does not exist or may have moved.');

  return (
    <div className="page-shell min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="404 error"
          title="We couldn't find that page."
          description="The page may have moved, the link may be outdated, or the URL may be incorrect."
        >
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/">
                <Button size="lg" className="rounded-full px-8">Back to Home</Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-8 text-white hover:bg-white hover:text-slate-950"
                >
                  Contact Privexio
                </Button>
              </Link>
            </div>
            <Link href="/" className="mt-8 inline-flex items-center text-sm font-semibold text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to the main site
            </Link>
        </PageHero>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
