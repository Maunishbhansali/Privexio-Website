import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import NotFoundPage from '@/pages/NotFoundPage';
import { getCaseStudy } from '@/data/caseStudies';
import { usePageMeta } from '@/hooks/use-page-meta';

const CaseStudyPage = ({ slug }) => {
  const caseStudy = getCaseStudy(slug);

  usePageMeta(caseStudy ? caseStudy.title : 'Case Study', caseStudy?.summary);

  if (!caseStudy) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-slate-950 px-4 py-24 text-white">
          <div className="container mx-auto max-w-5xl">
            <Link to="/case-studies" className="mb-6 inline-flex items-center text-sm font-semibold text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to case studies
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{caseStudy.service} case study</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">{caseStudy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{caseStudy.summary}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">Client</p>
                <p className="mt-1 font-bold text-white">{caseStudy.company}</p>
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

        <section className="section-padding">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-4">
              <div className="rounded-[1.5rem] border border-border bg-card p-6">
                <MapPin className="mb-3 h-6 w-6 text-primary" />
                <p className="font-bold">{caseStudy.location}</p>
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
                <h2 className="text-3xl font-bold">The challenge</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">The Privexio solution</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Measured results</h2>
                <div className="mt-6 grid gap-4">
                  {caseStudy.results.map((result) => (
                    <div key={result} className="flex items-start gap-3 rounded-2xl bg-secondary/5 p-5">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-lg font-semibold">{result}</span>
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
