import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, MapPin, Building2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
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

  // Get an appropriate hero image based on industry/service
  const getHeroImage = () => {
    const s = caseStudy.service.toLowerCase();
    if (s.includes('cloud') || s.includes('it')) return '/images/tech_2.jpg';
    if (s.includes('web') || s.includes('software')) return '/images/abstract_1.jpg';
    if (s.includes('security')) return '/images/tech_1.jpg';
    return '/images/business_2.jpg';
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <section className="relative pt-32 pb-24 text-white overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={getHeroImage()} alt="Case Study Hero" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950 z-0" />
          
          <div className="container relative z-10 mx-auto max-w-5xl px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/case-studies" className="mb-8 inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to case studies
              </Link>
              <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary backdrop-blur-sm">
                {caseStudy.service} Project
              </div>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight text-white md:text-7xl lg:text-[5rem]">{caseStudy.title}</h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">{caseStudy.summary}</p>
              
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="dark-glass-panel rounded-2xl p-6">
                  <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <Building2 className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-wider font-bold">Client</p>
                  </div>
                  <p className="text-xl font-bold text-white">{caseStudy.company}</p>
                </div>
                <div className="dark-glass-panel rounded-2xl p-6">
                  <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <Layers className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-wider font-bold">Industry</p>
                  </div>
                  <p className="text-xl font-bold text-white">{caseStudy.industry}</p>
                </div>
                <div className="dark-glass-panel rounded-2xl p-6">
                  <div className="flex items-center gap-3 text-slate-400 mb-2">
                    <Clock className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-wider font-bold">Timeline</p>
                  </div>
                  <p className="text-xl font-bold text-white">{caseStudy.timeline}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding relative">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_2.5fr]">
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="sticky top-32 space-y-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Location</p>
                      <p className="font-bold text-lg text-slate-900">{caseStudy.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Technology Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.stack.map((item) => (
                        <span key={item} className="rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
            
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-16 max-w-3xl"
            >
              <div className="prose-container">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">The Challenge</h2>
                <div className="text-xl leading-relaxed text-slate-600 border-l-4 border-slate-200 pl-6 py-2">
                  {caseStudy.challenge}
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">The Privexio Solution</h2>
                <p className="text-xl leading-relaxed text-slate-600">
                  {caseStudy.solution}
                </p>
              </div>
              
              <div className="rounded-[2rem] bg-slate-900 p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
                
                <h2 className="text-3xl font-extrabold mb-8 relative z-10">Measured Results</h2>
                <div className="grid gap-6 relative z-10">
                  {caseStudy.results.map((result, i) => (
                    <motion.div 
                      key={result} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
                    >
                      <div className="mt-1 bg-primary/20 p-2 rounded-full">
                        <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                      </div>
                      <span className="text-xl font-bold leading-tight">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
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
