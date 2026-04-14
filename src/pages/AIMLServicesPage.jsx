
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { usePageMeta } from '@/hooks/use-page-meta';

const AIMLServicesPage = () => {
  usePageMeta(
    'AI and Machine Learning',
    'Learn how Privexio helps teams apply AI, predictive analytics, NLP, chatbots, and computer vision to business workflows.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI & Machine Learning</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Harness the power of artificial intelligence to automate processes and unlock data insights.</p>
        </section>
        <section className="section-padding container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Data-Driven Decision Making</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We integrate state-of-this-art AI and Machine Learning models into your business applications. From predictive analytics and Natural Language Processing (NLP) to intelligent chatbots and computer vision, Privexio helps you turn raw data into a strategic asset.
          </p>
        </section>
      </div>
      <CTASection heading="Innovate with Artificial Intelligence" description="Ready to explore AI use cases for your business? Schedule an AI discovery workshop." />
      <Footer />
    </div>
  );
};

export default AIMLServicesPage;
