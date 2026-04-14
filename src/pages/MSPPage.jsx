import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const MSPPage = () => {
  const service = getServiceBySlug('managed-it-services');
  usePageMeta('Managed IT Services', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Secure Your IT Infrastructure" description="Get a practical IT, cybersecurity, and support roadmap for your North American team." buttonText="Book a Free IT Assessment" />
      <Footer />
    </div>
  );
};

export default MSPPage;
