import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CheckCircle, Mail, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL, MAILTO_URL } from '@/lib/site-links';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ServiceHub = ({ service }) => {
  const Icon = service.icon;

  // Derive a background image based on service slug for visual richness
  const getServiceImage = (slug) => {
    if (slug.includes('cyber')) return '/images/tech_1.jpg';
    if (slug.includes('cloud')) return '/images/tech_2.jpg';
    if (slug.includes('software') || slug.includes('app') || slug.includes('web')) return '/images/abstract_1.jpg';
    if (slug.includes('ai')) return '/images/abstract_2.jpg';
    return '/images/business_1.jpg';
  };

  const bgImage = getServiceImage(service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 md:py-36">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
          <img src={bgImage} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 z-0" />
        
        <div className="container relative z-10 mx-auto grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
              {service.eyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl mb-6">{service.title}</h1>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-300">{service.hero}</p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full rounded-full px-8 py-7 text-base font-bold shadow-lg sm:w-auto">
                  <CalendarDays className="mr-3 h-5 w-5" />
                  {service.primaryCta}
                </Button>
              </a>
              <a href={MAILTO_URL}>
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/20 bg-white/5 backdrop-blur-sm px-8 py-7 text-base font-bold text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  <Mail className="mr-3 h-5 w-5" />
                  {service.secondaryCta}
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="dark-glass-panel rounded-[2rem] p-8 shadow-2xl">
              <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">Service Overview</p>
                  <h2 className="text-3xl font-bold text-white">{service.navName}</h2>
                </div>
                <div className="rounded-2xl bg-primary/20 p-4 border border-primary/30 shadow-inner">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {service.stats.map((stat, i) => (
                  <motion.div 
                    key={stat} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/5 px-5 py-4"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-semibold text-slate-200">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">Solution Capabilities</p>
            <h2 className="text-4xl font-extrabold md:text-5xl text-slate-900 leading-tight">Explore the focused capabilities inside this service line.</h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">{service.description}</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {service.categories.map((category, index) => (
              <motion.article
                key={category.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h3>
                
                <div className="my-5 rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm font-semibold text-primary">{category.trend}</p>
                </div>
                
                <p className="mt-2 flex-grow text-slate-600 leading-relaxed">{category.intro}</p>
                
                <Link to={`${service.path}/${category.slug}`} className="mt-8 inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-primary/80 transition-colors">
                  View Full Details
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHub;
