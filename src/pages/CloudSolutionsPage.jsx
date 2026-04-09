
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const CloudSolutionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cloud Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">AWS, Azure, and GCP architectures built for scale, security, and savings.</p>
        </section>
        <section className="section-padding container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Future-Proof Your Infrastructure</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Migrating to the cloud or optimizing an existing setup? Our certified cloud architects design resilient, high-availability environments that reduce operational costs and allow your business to scale on demand. We specialize in AWS, Microsoft Azure, and Google Cloud Platform.
          </p>
        </section>
      </div>
      <CTASection heading="Accelerate Your Cloud Journey" description="Discover how our cloud solutions can drive efficiency and innovation in your enterprise." />
      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;
