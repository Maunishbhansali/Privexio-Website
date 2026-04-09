
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { usePageMeta } from '@/hooks/use-page-meta';

const AdditionalServicesPage = () => {
  usePageMeta(
    'Additional IT Services',
    'Review Privexio consulting, DevOps, staff augmentation, and specialized technology support offerings.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Additional IT Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">IT Consulting, DevOps, Staff Augmentation, and comprehensive Tech Support.</p>
        </section>
        <section className="section-padding container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Beyond Traditional IT</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Privexio provides a holistic suite of technology services to cover every gap in your IT strategy. Whether you need strategic vCIO consulting, DevOps pipeline automation, or dedicated remote developers to augment your team, we have the talent and resources to support you.
          </p>
        </section>
      </div>
      <CTASection heading="Need Specialized Tech Support?" description="Contact our team to discuss customized service packages designed around your exact requirements." />
      <Footer />
    </div>
  );
};

export default AdditionalServicesPage;
