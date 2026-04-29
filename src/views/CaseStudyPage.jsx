import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import NotFoundPage from '@/views/NotFoundPage';
import { getCaseStudy } from '@/data/caseStudies';
import { usePageMeta } from '@/hooks/use-page-meta';

const CaseStudyPage = ({ slug }) => {
  const caseStudy = getCaseStudy(slug);

  usePageMeta(caseStudy ? caseStudy.title : 'Case Study', caseStudy?.summary);

  if (!caseStudy) {
    return <NotFoundPage />;
  }

  return (
    <div className="page-shell min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="page-hero text-white">
          <div className="page-container-narrow">
            <Link href="/case-studies" className="mb-6 inline-flex items-center text-sm font-semibold text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to case studies
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.28em]">{caseStudy.service} case study</p>
            <h1 className="mt-4 break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">{caseStudy.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{caseStudy.summary}</p>
            {caseStudy.image && (
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-2xl">
                <img
                  src={caseStudy.image}
                  alt=""
                  className="aspect-[16/7] w-full object-cover"
                  aria-hidden="true"
                />
              </div>
            )}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Client</p>
                <p className="mt-1 break-words font-bold text-white">{caseStudy.company}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Industry</p>
                <p className="mt-1 font-bold text-white">{caseStudy.industry}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Timeline</p>
                <p className="mt-1 font-bold text-white">{caseStudy.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-[1.5rem] border border-border bg-card p-6">
                <MapPin className="mb-3 h-6 w-6 text-primary" />
                <p className="break-words font-bold">{caseStudy.location}</p>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-card p-6">
                <Clock className="mb-3 h-6 w-6 text-primary" />
                <p className="font-bold">{caseStudy.timeline} delivery window</p>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.stack.map((item) => (
                    <span key={item} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </aside>
            <article className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">The challenge</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">The Privexio solution</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{caseStudy.solution}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Measured results</h2>
                <div className="mt-6 grid gap-4">
                  {caseStudy.results.map((result) => (
                    <div key={result} className="flex items-start gap-3 rounded-2xl bg-secondary/5 p-5">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-base font-semibold sm:text-lg">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <CTASection
        heading="Want results like this?"
        description="Share your current challenge and we'll outline a realistic project path with clear next steps."
        buttonText="Plan a Similar Project"
      />
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
