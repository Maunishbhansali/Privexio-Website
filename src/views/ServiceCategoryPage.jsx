import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import NotFoundPage from '@/views/NotFoundPage';
import { caseStudies } from '@/data/caseStudies';
import { getCategory, getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const ServiceCategoryPage = ({ serviceSlug, categorySlug }) => {
  const service = getServiceBySlug(serviceSlug);
  const category = getCategory(serviceSlug, categorySlug);
  const relatedCaseStudy = caseStudies.find((caseStudy) => caseStudy.slug === category?.caseStudySlug);
  const relatedCategories = service?.categories.filter((item) => item.slug !== categorySlug).slice(0, 2) ?? [];

  usePageMeta(
    category && service ? `${category.title} | ${service.title}` : 'Service Category',
    category ? `${category.title} by Privexio for modern business teams. ${category.intro}` : undefined
  );

  if (!service || !category) {
    return <NotFoundPage />;
  }

  return (
    <div className="page-shell min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="page-hero text-white">
          <div className="page-container-narrow">
            <Link href={service.path} className="mb-6 inline-flex items-center text-sm font-semibold text-primary">
              Back to {service.title}
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.28em]">Specialized solution area</p>
            <h1 className="mt-4 break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">{category.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{category.intro}</p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto sm:px-8">
                Request a Category Roadmap
              </Link>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-[1.75rem] border border-border bg-card p-5 shadow-sm sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Why this matters right now</h2>
              <p className="mt-4 text-muted-foreground">{category.trend}</p>
              <div className="mt-7 rounded-2xl bg-muted p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Search intent</p>
                <p className="mt-2 break-words text-sm text-muted-foreground">{service.keywords}</p>
              </div>
              <div className="mt-7 space-y-3">
                <Link href={service.path} className="block rounded-2xl border border-border bg-white p-4 text-sm font-semibold text-slate-950 transition hover:border-primary/40 hover:text-primary">
                  View all {service.navName}
                </Link>
                <Link href="/contact" className="block rounded-2xl border border-primary/30 bg-primary p-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                  Contact Privexio about this service
                </Link>
              </div>
            </aside>
            <div>
              <div className="mb-10 rounded-[1.75rem] bg-slate-50 p-5 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Service fit</p>
                <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
                  This service area is designed for teams comparing {category.title.toLowerCase()} options and looking for a practical partner that can connect planning, delivery, and long-term support.
                </p>
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">What Privexio delivers</h2>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {category.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <h2 className="mt-12 text-2xl font-bold sm:text-3xl">Expected business outcomes</h2>
              <div className="mt-7 space-y-4">
                {category.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl bg-secondary/5 p-5 text-base font-semibold text-foreground sm:text-lg">{item}</div>
                ))}
              </div>
              {relatedCategories.length > 0 && (
                <>
                  <h2 className="mt-12 text-2xl font-bold sm:text-3xl">Related service areas</h2>
                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    {relatedCategories.map((relatedCategory) => (
                      <Link key={relatedCategory.slug} href={`${service.path}/${relatedCategory.slug}`} className="rounded-2xl border border-border bg-card p-5 font-semibold text-foreground transition hover:border-primary/40 hover:text-primary">
                        {relatedCategory.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {relatedCaseStudy && (
          <section className="page-section bg-slate-50">
            <div className="page-container">
              <div className="rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Related case study</p>
                <h2 className="mt-3 max-w-4xl text-3xl font-bold text-white md:text-4xl">{relatedCaseStudy.title}</h2>
                <p className="mt-5 max-w-3xl text-slate-300">{relatedCaseStudy.summary}</p>
                <Link href={`/case-studies/${relatedCaseStudy.slug}`} className="mt-8 inline-flex items-center font-semibold text-primary">
                  Read the full project story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <CTASection
        heading={`Ready to explore ${category.title}?`}
        description="Tell us where your team is today and we'll recommend the smartest next step."
        buttonText="Schedule a Consultation"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
