import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Mail, Sparkles, Star, Target, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';
import MetricsSection from '@/components/MetricsSection';
import PartnerLogos from '@/components/PartnerLogos';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import ParallaxLayer from '@/components/ParallaxLayer';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL, MAILTO_URL } from '@/lib/site-links';
import { caseStudies } from '@/data/caseStudies';
import { serviceCatalog } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const collaborationMoments = [
  { label: 'Direct access', detail: 'No handoff maze', icon: Users },
  { label: 'Sharp decisions', detail: 'Clear next steps', icon: Target },
  { label: 'Polished finish', detail: 'Built to last', icon: Sparkles },
];

const HomePage = () => {
  usePageMeta(
    'Managed IT, Cybersecurity & Software Services',
    'Managed IT, cybersecurity, cloud, and custom software to secure operations, reduce downtime, and ship faster. Book a consultation with Privexio.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-20 md:pb-32">
        <ParallaxLayer
          className="absolute right-0 top-12 hidden h-[34rem] w-[46rem] rounded-l-[3rem] bg-slate-100 lg:block"
          from={-70}
          to={70}
        />
        <ParallaxLayer
          className="absolute right-16 top-28 hidden h-64 w-64 rounded-full bg-primary/15 blur-3xl lg:block"
          from={90}
          to={-90}
        />
        <div className="page-container relative z-10 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.3em]">Privexio technology partner</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Build, secure, and scale with clarity.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Managed IT, security, cloud, software, AI, and web delivery under one accountable team.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-6 py-6 text-base sm:w-auto sm:px-8 sm:text-lg">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Button>
              </a>
              <a href={MAILTO_URL} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full px-6 py-6 text-base sm:w-auto sm:px-8 sm:text-lg">
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
              <div className="rounded-[2rem] bg-slate-100 p-4 shadow-xl sm:p-5">
                <div className="rounded-[1.5rem] bg-white p-5 sm:p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Privexio project view</p>
                      <p className="text-xl font-bold text-slate-950 sm:text-2xl">Delivery stack</p>
                    </div>
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-slate-950" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
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

      <PartnerLogos compact />

      <section className="page-section bg-background">
        <div className="page-container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Services built for search and sales</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">Eight focused service lines, each with deeper solution areas inside.</h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Privexio connects managed IT services, cybersecurity consulting, cloud migration, custom software development, web development, mobile apps, AI automation, and IT consulting into one clear technology roadmap.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {serviceCatalog.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} link={service.path} />
            ))}
          </div>
        </div>
      </section>

      <MetricsSection />

      <section className="page-section bg-secondary/5">
        <div className="page-container">
          <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Why choose Privexio</p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold text-foreground md:text-4xl">Enterprise-grade attention, built into every project.</h2>
              <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
                You get a calm, accountable Privexio partner who keeps the work moving, documents decisions, and makes communication simple from first conversation through post-launch support.
              </p>
              <div className="mt-9 grid gap-3 sm:max-w-xl sm:grid-cols-3">
                {collaborationMoments.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <Icon className="h-6 w-6 text-primary" />
                      <p className="mt-5 text-base font-bold text-slate-950">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-slate-500">{item.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-full bg-primary/15 blur-3xl lg:block" />
              <div className="absolute -left-8 bottom-12 hidden h-28 w-28 rounded-full border border-primary/20 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl sm:p-5">
                <div className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-slate-950">
                  <img
                    src="/images/privexio-corporate-buildings.png"
                    alt="Modern corporate office buildings"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="page-section scroll-mt-24 bg-background relative">
        <ParallaxLayer
          className="absolute top-40 right-0 h-[400px] w-1/3 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
          from={120}
          to={-120}
        />
        <div className="page-container relative z-10">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Proven Results</p>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">Outcomes that matter.</h2>
            <p className="mt-6 text-base text-slate-600 sm:text-xl">
              Explore how we&apos;ve helped organizations modernize infrastructure, launch new platforms, and secure their operations.
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
