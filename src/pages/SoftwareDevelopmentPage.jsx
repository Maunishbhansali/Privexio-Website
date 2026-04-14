import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const SoftwareDevelopmentPage = () => {
  const service = getServiceBySlug('software-development');
  usePageMeta('Custom Software Development', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Build software around how your business actually works" description="Scope a custom portal, SaaS product, integration, or workflow platform with Privexio." buttonText="Scope My Software Project" />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentPage;
