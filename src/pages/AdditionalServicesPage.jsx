import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const AdditionalServicesPage = () => {
  const service = getServiceBySlug('additional-it-services');
  usePageMeta('Additional IT Services', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Need specialized technology help fast?" description="Get vCIO guidance, data support, senior engineering capacity, or project rescue from Privexio." buttonText="Discuss a Custom Need" />
      <Footer />
    </div>
  );
};

export default AdditionalServicesPage;
