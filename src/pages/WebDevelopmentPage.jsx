
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Web Development</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">High-performance corporate websites, e-commerce platforms, and complex web applications.</p>
        </section>
        <section className="section-padding container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Digital Experiences that Convert</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your website is the digital front door to your business. We build modern, responsive, and SEO-optimized web solutions using the latest tech stacks (React, Next.js, Node.js) to ensure lightning-fast load times and exceptional user experiences.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Corporate Websites</h3>
              <p className="text-muted-foreground">Professional, brand-aligned websites designed to establish credibility and generate high-quality leads.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">E-Commerce Platforms</h3>
              <p className="text-muted-foreground">Secure, scalable online stores optimized for conversions and seamless payment integrations.</p>
            </div>
          </div>
        </section>
      </div>
      <CTASection heading="Revamp Your Online Presence" description="Ready for a website that works as hard as you do? Let's discuss your web project." />
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
