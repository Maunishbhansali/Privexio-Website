import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CheckCircle, Mail, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParallaxLayer from '@/components/ParallaxLayer';
import { CALENDAR_URL, MAILTO_URL } from '@/lib/site-links';
import { serviceCatalog } from '@/data/serviceCatalog';

const questionPrompts = {
  'managed-it-services': [
    'When should a business choose managed IT services instead of hiring internally?',
    'What systems need monitoring, documentation, and recovery planning first?',
  ],
  cybersecurity: [
    'Which security gaps create the most risk for growing teams?',
    'How can detection, identity controls, and response planning work together?',
  ],
  'cloud-solutions': [
    'What should be modernized before a cloud migration starts?',
    'How can cloud costs stay visible after workloads move?',
  ],
  'software-development': [
    'When is custom software a better fit than another off-the-shelf tool?',
    'Which workflows should be automated first for measurable business impact?',
  ],
  'web-development-seo-solutions': [
    'What makes a website ready for technical SEO and conversion?',
    'Which pages need stronger internal links, metadata, and proof points?',
  ],
  'ai-automation-business-process-optimization': [
    'Where can AI automation reduce repetitive work without adding risk?',
    'What guardrails are needed before AI connects to business systems?',
  ],
  'mobile-app-development': [
    'Which mobile workflows need offline access, security, or system integration?',
    'How should teams plan iOS, Android, and cross-platform app delivery?',
  ],
  'it-consulting-digital-transformation': [
    'Which technology investments should be prioritized first?',
    'How can a digital transformation roadmap avoid disconnected projects?',
  ],
};

const ServiceHub = ({ service }) => {
  const Icon = service.icon;
  const relatedServices = serviceCatalog.filter((item) => item.path !== service.path).slice(0, 3);
  const buyerQuestions = questionPrompts[service.slug] ?? [
    `What should a business know before choosing ${service.navName.toLowerCase()}?`,
    'Which next step creates the clearest business value?',
  ];

  return (
    <>
      <section className="page-hero page-hero-lg relative overflow-hidden">
        <ParallaxLayer
          className="absolute inset-x-0 -top-24 h-[calc(100%+12rem)] opacity-35"
          from={-70}
          to={70}
        >
          <img
            src="/images/privexio-corporate-buildings.png"
            alt=""
            className="gsap-parallax-bg h-full w-full object-cover object-center"
            aria-hidden="true"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-slate-950/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/56" />
        <ParallaxLayer
          className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
          from={120}
          to={-120}
        />
        <ParallaxLayer
          className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
          from={-110}
          to={110}
        />
        <div className="page-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.28em]">{service.eyebrow}</p>
            <h1 className="max-w-4xl break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">{service.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-6 py-6 text-base sm:w-auto sm:px-8">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {service.primaryCta}
                </Button>
              </a>
              <a href={MAILTO_URL} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-white/10 px-6 py-6 text-base text-white hover:bg-white hover:text-slate-950 sm:w-auto sm:px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  {service.secondaryCta}
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur sm:p-5"
          >
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 sm:p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Service dashboard</p>
                  <h2 className="mt-2 break-words text-xl font-bold sm:text-2xl">{service.navName}</h2>
                </div>
                <div className="flex-shrink-0 rounded-2xl bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.stats.map((stat) => (
                  <div key={stat} className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3">
                    <span className="font-medium">{stat}</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-section bg-slate-50/80">
        <div className="page-container">
          <div className="stagger-parent grid gap-6 lg:grid-cols-3">
            <article className="stagger-child rounded-[1.75rem] border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Who it is for</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">Teams that need practical technology ownership.</h2>
              <p className="mt-4 text-muted-foreground">
                Privexio works with growing organizations that need clearer systems, dependable delivery, and supportable technology decisions across {service.navName}.
              </p>
            </article>
            <article className="stagger-child rounded-[1.75rem] border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Common problems</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">Unclear ownership slows good teams down.</h2>
              <p className="mt-4 text-muted-foreground">
                We help reduce disconnected tools, weak handoffs, unclear priorities, and systems that become hard to maintain after launch.
              </p>
            </article>
            <article className="stagger-child rounded-[1.75rem] border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Questions buyers ask</p>
              <div className="mt-4 space-y-4">
                {buyerQuestions.map((question) => (
                  <p key={question} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-800">{question}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section bg-background">
        <div className="page-container">
          <div className="scroll-fade-up mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Specialized solution areas</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Explore the focused capabilities inside this service line.</h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">{service.description}</p>
          </div>
          <div className="stagger-parent grid gap-7 lg:grid-cols-3">
            {service.categories.map((category) => (
              <article
                key={category.slug}
                className="stagger-child group flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="break-words text-xl font-bold sm:text-2xl">{category.title}</h3>
                <p className="mt-4 text-sm font-semibold text-primary">{category.trend}</p>
                <p className="mt-4 flex-grow text-muted-foreground">{category.intro}</p>
                <Link href={`${service.path}/${category.slug}`} className="mt-6 inline-flex items-center font-semibold text-primary">
                  Explore this service area
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-slate-50/80">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="scroll-fade-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Related Privexio services</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Connect this work to the rest of your technology roadmap.</h2>
              <p className="mt-5 text-muted-foreground">
                Search visibility and project results improve when each service line is connected to the right supporting capability, case study, and consultation path.
              </p>
            </div>
            <div className="stagger-parent grid gap-3 sm:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link key={relatedService.path} href={relatedService.path} className="stagger-child rounded-2xl border border-border bg-white p-5 font-semibold text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary">
                  {relatedService.navName}
                </Link>
              ))}
              <Link href="/case-studies" className="stagger-child rounded-2xl border border-border bg-white p-5 font-semibold text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary">
                Privexio case studies
              </Link>
              <Link href="/contact" className="stagger-child rounded-2xl border border-primary/30 bg-primary p-5 font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-1 hover:bg-primary/90">
                Contact Privexio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHub;
