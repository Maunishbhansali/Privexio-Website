import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const AIMLServicesPage = () => {
  const service = getServiceBySlug('ai-ml-services');
  usePageMeta('AI and Machine Learning Services', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Adopt AI where it creates measurable business value" description="Identify practical generative AI, analytics, chatbot, and automation opportunities for your team." buttonText="Book an AI Opportunity Workshop" />
      <Footer />
    </div>
  );
};

export default AIMLServicesPage;
