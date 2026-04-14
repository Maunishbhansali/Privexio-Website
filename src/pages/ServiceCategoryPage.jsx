import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import NotFoundPage from '@/pages/NotFoundPage';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/components/WhatsAppChat';
import { caseStudies } from '@/data/caseStudies';
import { getCategory, getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const ServiceCategoryPage = ({ serviceSlug, categorySlug }) => {
  const service = getServiceBySlug(serviceSlug);
  const category = getCategory(serviceSlug, categorySlug);
  const relatedCaseStudy = caseStudies.find((caseStudy) => caseStudy.slug === category?.caseStudySlug);

  usePageMeta(
    category && service ? `${category.title} | ${service.title}` : 'Service Category',
    category ? `${category.title} by Privexio for North American businesses. ${category.intro}` : undefined
  );

  if (!service || !category) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-slate-950 px-4 py-24 text-white">
          <div className="container mx-auto max-w-5xl">
            <Link to={service.path} className="mb-6 inline-flex items-center text-sm font-semibold text-primary">
              Back to {service.title}
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Trending {service.navName} category</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">{category.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{category.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="w-full rounded-full px-8 py-6 sm:w-auto">Request a Category Roadmap</Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-white/10 px-8 py-6 text-white hover:bg-white hover:text-slate-950 sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-[1.75rem] border border-border bg-card p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Why this is trending</h2>
              <p className="mt-4 text-muted-foreground">{category.trend}</p>
              <div className="mt-7 rounded-2xl bg-muted p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">SEO focus</p>
                <p className="mt-2 text-sm text-muted-foreground">{service.keywords}</p>
              </div>
            </aside>
            <div>
              <h2 className="text-3xl font-bold">What Privexio delivers</h2>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {category.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <h2 className="mt-12 text-3xl font-bold">Expected business outcomes</h2>
              <div className="mt-7 space-y-4">
                {category.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl bg-secondary/5 p-5 text-lg font-semibold text-foreground">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {relatedCaseStudy && (
          <section className="section-padding bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Related case study</p>
                <h2 className="mt-3 max-w-4xl text-3xl font-bold text-white md:text-4xl">{relatedCaseStudy.title}</h2>
                <p className="mt-5 max-w-3xl text-slate-300">{relatedCaseStudy.summary}</p>
                <Link to={`/case-studies/${relatedCaseStudy.slug}`} className="mt-8 inline-flex items-center font-semibold text-primary">
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
        buttonText="Start the Conversation"
      />
      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
