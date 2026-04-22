import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const CybersecurityPage = () => {
  const service = getServiceBySlug('cybersecurity');
  usePageMeta('Cybersecurity', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection
        heading="Strengthen your security posture with a practical roadmap"
        description="Assess risk, harden your environment, and build a clearer cybersecurity plan for your team."
        buttonText="Schedule a Security Review"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default CybersecurityPage;
