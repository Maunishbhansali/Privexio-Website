import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const ITConsultingPage = () => {
  const service = getServiceBySlug('it-consulting-digital-transformation');
  usePageMeta('IT Consulting and Digital Transformation', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection
        heading="Map the smartest next move for your technology roadmap"
        description="Get executive guidance across modernization, budgeting, architecture, and transformation planning."
        buttonText="Schedule a Consultation"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default ITConsultingPage;
