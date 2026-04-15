import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle, Mail, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* DO NOT MATERIALLY CHANGE HERO SECTION */}
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

      {/* ENHANCED SECTIONS BELOW */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">Core Capabilities</p>
            <h2 className="text-4xl font-extrabold text-slate-900 md:text-6xl tracking-tight">Enterprise-grade solutions, delivered.</h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              We bring specialized expertise across eight strategic disciplines to help your business modernize, secure, and scale operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCatalog.map((service, index) => {
              const bgImages = [
                '/images/abstract_1.jpg',
                '/images/tech_1.jpg',
                '/images/tech_2.jpg',
                '/images/abstract_2.jpg',
                '/images/business_1.jpg',
                '/images/tech_3.jpg',
                '/images/team_1.jpg',
                '/images/business_2.jpg'
              ];
              return (
                <ServiceCard 
                  key={service.title} 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  link={service.path}
                  image={bgImages[index % bgImages.length]}
                  index={index}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/team_2.jpg" alt="Team collaborating" className="w-full h-full object-cover mix-blend-overlay grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">
                <Star className="mr-2 h-4 w-4" /> Why Partner With Us
              </div>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl leading-tight">Practical strategy meets polished delivery.</h2>
              <p className="mb-10 text-xl text-slate-300 leading-relaxed">
                We bridge the gap between high-level advisory and hands-on execution. Our teams don't just recommend solutions—we build, integrate, and support them for the long haul.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'End-to-end delivery', desc: 'From architecture planning to deployment and managed support.' },
                  { title: 'Security-first engineering', desc: 'Enterprise security standards applied to every build and environment.' },
                  { title: 'Transparent roadmaps', desc: 'Clear visibility into timelines, budgets, and business outcomes.' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="mt-1 text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                  Learn more about our methodology <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0 duration-700" />
                <img src="/images/tech_3.jpg" alt="Technology infrastructure" className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-1000 group-hover:scale-105" />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-8 z-20">
                  <div className="dark-glass-panel rounded-2xl p-6 border-white/10">
                     <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Delivery Network</p>
                     <p className="text-2xl font-bold text-white">Supporting clients across North America with robust, scalable infrastructure.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-padding scroll-mt-24 bg-white relative">
        <div className="absolute top-40 right-0 w-1/3 h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Proven Results</p>
              <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl leading-tight">Outcomes that matter.</h2>
              <p className="mt-6 text-xl text-slate-600">
                Explore how we've helped organizations modernize infrastructure, launch new platforms, and secure their operations.
              </p>
            </div>
            <Link to="/case-studies" className="shrink-0 hidden md:inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
              View all case studies
            </Link>
          </div>
          <CaseStudiesCarousel caseStudies={caseStudies} />
          
          <div className="mt-10 md:hidden">
            <Link to="/case-studies" className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
              View all case studies
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to elevate your technology?"
        description="Whether you need managed support, a custom application, or a complete cloud migration, our experts are ready to build your roadmap."
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
