
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const SoftwareDevelopmentPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Custom Software Development</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Scalable, robust, and innovative enterprise applications tailored to your operational needs.</p>
        </section>

        <section className="section-padding container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Turning Complex Ideas into Elegant Solutions</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Off-the-shelf software often falls short. Privexio's software engineering team specializes in building bespoke applications that integrate seamlessly with your existing workflows. From backend architecture to intuitive user interfaces, we deliver excellence at every stage of the software development lifecycle.
          </p>

          <h3 className="text-2xl font-bold mb-6">Our Development Process</h3>
          <div className="space-y-6 mb-12">
            {[
              { step: "1. Discovery & Strategy", desc: "We analyze your business requirements and map out the optimal technical architecture." },
              { step: "2. UI/UX Design", desc: "Creating intuitive, user-centric interfaces that drive adoption and productivity." },
              { step: "3. Agile Development", desc: "Iterative coding sprints ensure transparency, flexibility, and rapid delivery." },
              { step: "4. Testing & QA", desc: "Rigorous automated and manual testing to ensure flawless performance." },
              { step: "5. Deployment & Maintenance", desc: "Smooth rollout followed by continuous support and feature updates." }
            ].map((s, i) => (
              <div key={i} className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-xl font-bold text-foreground mb-1">{s.step}</h4>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTASection heading="Build Your Next Big Application" description="Let our engineering experts bring your vision to life with cutting-edge custom software." />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentPage;
