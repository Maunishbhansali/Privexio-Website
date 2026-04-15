import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Target, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import NotFoundPage from '@/pages/NotFoundPage';
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
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-slate-950 px-4 pt-32 pb-24 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="/images/abstract_1.jpg" alt="Background" className="w-full h-full object-cover mix-blend-luminosity" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-0" />
          
          <div className="container relative z-10 mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to={service.path} className="mb-8 inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to {service.title}
              </Link>
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary">
                Specialized Capability
              </div>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight text-white md:text-7xl">{category.title}</h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">{category.intro}</p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary/90 hover:scale-105 duration-300">
                  Request a Solution Roadmap
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Market Context</h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{category.trend}</p>
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">Focus Areas</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.keywords}</p>
                </div>
              </div>
            </motion.aside>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-16"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What We Deliver</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.deliverables.map((item, i) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      </div>
                      <span className="text-lg font-semibold text-slate-800">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Expected Business Outcomes</h2>
                </div>
                <div className="space-y-4">
                  {category.outcomes.map((item, i) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="rounded-2xl bg-white border border-l-4 border-slate-200 border-l-primary p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                       <span className="text-xl font-bold text-slate-800">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {relatedCaseStudy && (
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
               <img src="/images/business_2.jpg" alt="Case study background" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute inset-0 bg-slate-950/90 z-0" />
            
            <div className="container relative z-10 mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-16 text-center shadow-2xl"
              >
                <div className="inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
                  Featured Case Study
                </div>
                <h2 className="mt-2 text-3xl font-extrabold text-white md:text-5xl leading-tight">{relatedCaseStudy.title}</h2>
                <p className="mt-8 text-xl leading-relaxed text-slate-300">{relatedCaseStudy.summary}</p>
                <Link to={`/case-studies/${relatedCaseStudy.slug}`} className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-xl transition hover:bg-slate-100 hover:scale-105 duration-300">
                  Read the Full Project Story
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
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
