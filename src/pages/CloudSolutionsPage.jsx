import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const CloudSolutionsPage = () => {
  const service = getServiceBySlug('cloud-solutions');
  usePageMeta('Cloud Solutions', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Modernize cloud without surprise costs" description="Audit your cloud environment, reduce waste, and plan secure AWS, Azure, or Google Cloud improvements." buttonText="Schedule a Cloud Review" secondaryText="Contact Us" secondaryLink="/contact" />
      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;
