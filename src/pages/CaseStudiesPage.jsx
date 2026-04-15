import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import TestimonialCard from '@/components/TestimonialCard';
import { caseStudies } from '@/data/caseStudies';
import { usePageMeta } from '@/hooks/use-page-meta';
import { CALENDAR_URL } from '@/lib/site-links';

const CaseStudiesPage = () => {
  usePageMeta(
    'Case Studies',
    'Explore Privexio case studies across managed IT, software, cloud, web, mobile, and AI engagements.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="page-hero text-white">
          <div className="page-container-narrow">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Case studies</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">Proof of execution across real business challenges.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
              Browse detailed Privexio project stories across cloud, managed IT, software, mobile, web, and AI work.
            </p>
          </div>
        </section>

        <section className="page-section bg-background">
          <div className="page-container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <TestimonialCard
                  key={caseStudy.slug}
                  slug={caseStudy.slug}
                  result={caseStudy.title}
                  company={caseStudy.company}
                  industry={caseStudy.industry}
                  summary={caseStudy.summary}
                  outcome={caseStudy.results[0]}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTASection
        heading="Want a project plan like these?"
        description="Schedule a conversation and we will map the smartest next step for your business, timeline, and budget."
        buttonText="Schedule a Consultation"
        buttonLink={CALENDAR_URL}
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
