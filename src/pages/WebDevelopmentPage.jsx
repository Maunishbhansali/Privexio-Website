import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const WebDevelopmentPage = () => {
  const service = getServiceBySlug('web-development');
  usePageMeta('Web Development and SEO Websites', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Turn your website into a lead-generation asset" description="Get SEO-ready architecture, stronger CTAs, and conversion-focused web development." buttonText="Get a Website Growth Plan" />
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
