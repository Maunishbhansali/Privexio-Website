import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/components/WhatsAppChat';
import { caseStudies } from '@/data/caseStudies';
import { serviceCatalog } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const HomePage = () => {
  usePageMeta(
    'Managed IT, Software, Cloud, Web, Mobile and AI Services in North America',
    'Privexio provides managed IT, cybersecurity, software development, web development, mobile apps, cloud solutions, and AI automation for businesses across Canada and North America.'
  );

  const featuredCaseStudies = caseStudies.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative overflow-hidden bg-white pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="absolute right-0 top-24 hidden h-[34rem] w-[46rem] rounded-l-[3rem] bg-slate-100 lg:block" />
        <div className="absolute right-16 top-40 hidden h-64 w-64 rounded-full bg-primary/15 blur-3xl lg:block" />
        <div className="container relative z-10 mx-auto grid items-center gap-14 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-primary">North America technology partner</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-slate-950 md:text-7xl">
              Build, secure, and scale your business with Privexio.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Managed IT, cybersecurity, custom software, SEO-ready websites, mobile apps, cloud modernization, and practical AI automation for growing teams across Canada and the United States.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="w-full rounded-full px-8 py-6 text-lg sm:w-auto">Get a Free Consultation</Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="w-full rounded-full px-8 py-6 text-lg sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Direct WhatsApp Chat
                </Button>
              </a>
            </div>
            <div className="mt-16 flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <span className="font-semibold">Trusted for practical execution</span>
              <span className="flex items-center gap-1 text-primary">
                {[1, 2, 3, 4, 5].map((item) => <Star key={item} className="h-4 w-4 fill-current" />)}
              </span>
              <span>Strategy, build, support, and measurable outcomes</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative">
            <div className="grid gap-5 md:grid-cols-[0.75fr_1fr]">
              <div className="space-y-5">
                <div className="rounded-[1.5rem] bg-slate-200 p-4 shadow-sm">
                  <div className="rounded-2xl bg-white p-5 text-center font-bold text-slate-950">SOC-ready security</div>
                </div>
                <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Live roadmap</p>
                  <p className="mt-3 text-3xl font-bold text-white">7 service hubs</p>
                  <p className="mt-2 text-sm text-slate-300">Each with dedicated trending category pages.</p>
                </div>
              </div>
              <div className="rounded-[2rem] bg-slate-100 p-5 shadow-xl">
                <div className="rounded-[1.5rem] bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Privexio project view</p>
                      <p className="text-2xl font-bold text-slate-950">Growth stack</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-950" />
                  </div>
                  <div className="space-y-3">
                    {['Managed IT baseline', 'SEO web architecture', 'AI workflow automation', 'Cloud cost optimization'].map((item, index) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3">
                        <span className="text-sm font-semibold text-slate-800">{item}</span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Q{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Services built for search and sales</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Every service now has trend-focused categories and dedicated pages.</h2>
            <p className="mt-5 text-muted-foreground text-lg">Explore the technology areas buyers are actively researching in North America, from AI automation and cloud cost optimization to managed cybersecurity and conversion-focused websites.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCatalog.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} link={service.path} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCatalog.flatMap((service) => service.categories.slice(0, 2).map((category) => ({ service, category }))).slice(0, 9).map(({ service, category }) => (
              <Link key={`${service.slug}-${category.slug}`} to={`${service.path}/${category.slug}`} className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg smooth-transition">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{service.navName}</p>
                <h3 className="mt-2 font-bold text-foreground">{category.title}</h3>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                  View category page
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Why choose Privexio</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground mb-6">Practical strategy, polished delivery, and support after launch.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Inspired by modern SaaS motion patterns like Circula’s clean reveal cards and dashboard-style storytelling, the site now uses lighter, more useful animations where they support clarity instead of distraction.
              </p>
              <div className="space-y-4">
                {[
                  'Dedicated pages for high-intent service categories',
                  'North America SEO positioning across Canada and the United States',
                  'Strong consultation and WhatsApp CTAs across the site',
                  'Realistic case studies with detailed project pages',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-[2rem] bg-white p-5 shadow-xl">
                <div className="rounded-[1.5rem] bg-slate-950 p-7 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">North America SEO map</p>
                  <div className="mt-6 grid gap-3">
                    {['Managed IT Services', 'Custom Software Development', 'Web Development SEO', 'Cloud Cost Optimization', 'Generative AI Automation'].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 px-5 py-4 font-semibold text-white">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-padding bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Case Studies</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">Project stories with believable details and their own pages.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each case study now links to a dedicated page with client context, challenge, solution, timeline, stack, and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((caseStudy) => (
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

      <CTASection
        heading="Ready to turn your website into a serious growth channel?"
        description="Tell us your service priority and we’ll recommend the highest-impact path across IT, software, cloud, web, mobile, or AI."
        buttonText="Get a Free Consultation"
      />

      <Footer />
    </div>
  );
};

export default HomePage;
