
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageMeta } from '@/hooks/use-page-meta';

const AboutPage = () => {
  usePageMeta(
    'About',
    'Learn about Privexio, our mission, vision, and values as a technology partner for modern enterprises.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="page-hero text-center">
          <div className="page-container-narrow">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">About Privexio</h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-300">Innovating technology solutions for modern enterprises since 2015.</p>
          </div>
        </section>

        <section className="page-section page-container-narrow">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded on the belief that technology should enable growth rather than hinder it, Privexio has grown into a leading technology partner for enterprises worldwide. We bridge the gap between complex technical execution and strategic business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">To deliver secure, scalable, and innovative IT solutions that empower organizations to achieve their highest potential.</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">To be the global standard of excellence in managed IT services and bespoke software engineering.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Core Values</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li><strong className="text-foreground">Integrity:</strong> Transparency in all our partnerships and technical decisions.</li>
              <li><strong className="text-foreground">Excellence:</strong> A commitment to delivering the highest quality code and service.</li>
              <li><strong className="text-foreground">Innovation:</strong> Continuously adapting to the latest technological advancements.</li>
              <li><strong className="text-foreground">Security-First:</strong> Protecting our clients' data is at the core of everything we build.</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
