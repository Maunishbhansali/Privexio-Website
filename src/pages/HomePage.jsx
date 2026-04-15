import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle, Mail, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL, MAILTO_URL } from '@/lib/site-links';
import { caseStudies } from '@/data/caseStudies';
import { serviceCatalog } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const HomePage = () => {
  usePageMeta(
    'Managed IT, Software, Cloud, Web, Mobile and AI Services in North America',
    'Privexio provides managed IT, cybersecurity, software development, web development, mobile apps, cloud solutions, and AI automation for businesses across Canada and North America.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <section className="relative overflow-hidden bg-white pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="absolute right-0 top-24 hidden h-[34rem] w-[46rem] rounded-l-[3rem] bg-slate-100 lg:block" />
        <div className="absolute right-16 top-40 hidden h-64 w-64 rounded-full bg-primary/15 blur-3xl lg:block" />
        <div className="page-container relative z-10 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-primary">North America technology partner</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-slate-950 md:text-7xl">
              Build, secure, and scale your business with Privexio.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Managed IT, cybersecurity, custom software, web and SEO solutions, mobile apps, cloud modernization, AI automation, and digital transformation support for growing teams across Canada and the United States.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full rounded-full px-8 py-6 text-lg sm:w-auto">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Button>
              </a>
              <a href={MAILTO_URL}>
                <Button size="lg" variant="outline" className="w-full rounded-full px-8 py-6 text-lg sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
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
            <div className="grid gap-5 md:grid-cols-[0.85fr_1fr]">
              <div className="space-y-5">
                <div className="rounded-[1.5rem] bg-slate-200 p-4 shadow-sm">
                  <div className="rounded-2xl bg-white p-5 text-center font-bold text-slate-950">Security-first delivery</div>
                </div>
                <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Live roadmap</p>
                  <p className="mt-3 text-3xl font-bold text-white">8 service pillars</p>
                  <p className="mt-2 text-sm text-slate-300">Focused offers with specialized solution areas inside each service.</p>
                </div>
              </div>
              <div className="rounded-[2rem] bg-slate-100 p-5 shadow-xl">
                <div className="rounded-[1.5rem] bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Privexio project view</p>
                      <p className="text-2xl font-bold text-slate-950">Delivery stack</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-950" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Managed IT',
                      'Cybersecurity',
                      'Cloud migration',
                      'Custom software',
                      'Web and SEO',
                      'AI automation',
                      'Mobile apps',
                      'IT consulting',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-section bg-background">
        <div className="page-container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Services built for search and sales</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">Eight focused service lines, each with deeper solution areas inside.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              The homepage now stays high-level. Each service card takes you into the more specialized offers and sub-services inside that capability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {serviceCatalog.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} link={service.path} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-secondary/5">
        <div className="page-container">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Why choose Privexio</p>
              <h2 className="mt-3 mb-6 text-3xl font-bold text-foreground md:text-4xl">Practical strategy, polished delivery, and support after launch.</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Inspired by modern SaaS motion patterns like Circula&apos;s clean reveal cards and dashboard-style storytelling, the site now uses lighter, more useful animations where they support clarity instead of distraction.
              </p>
              <div className="space-y-4">
                {[
                  'Eight clearly defined top-level service offers',
                  'Specialized sub-services organized inside each service page',
                  'Direct scheduling and contact options without clutter',
                  'Case studies with dedicated pages and consistent proof points',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] bg-white p-5 shadow-xl">
                <div className="rounded-[1.5rem] bg-slate-950 p-7 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">North America SEO map</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {serviceCatalog.map((service) => (
                      <div key={service.slug} className="rounded-2xl bg-white/10 px-5 py-4 font-semibold text-white">{service.navName}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="page-section scroll-mt-24 bg-background">
        <div className="page-container">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Case Studies</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">Project stories with believable details and consistent presentation.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore delivery examples across cloud, managed IT, software, mobile, web, and AI work without overwhelming the homepage.
            </p>
          </div>
          <CaseStudiesCarousel caseStudies={caseStudies} />
        </div>
      </section>

      <CTASection
        heading="Ready to turn your website into a serious growth channel?"
        description="Tell us your service priority and we'll recommend the highest-impact path across IT, software, cloud, web, mobile, or AI."
        buttonText="Schedule a Consultation"
        buttonLink={CALENDAR_URL}
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default HomePage;
