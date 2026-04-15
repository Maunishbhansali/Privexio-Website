import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CheckCircle, Mail, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL, MAILTO_URL } from '@/lib/site-links';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.08 },
  }),
};

const ServiceHub = ({ service }) => {
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 md:py-32">
        <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="container relative z-10 mx-auto grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">{service.eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">{service.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full rounded-full px-8 py-6 text-base sm:w-auto">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {service.primaryCta}
                </Button>
              </a>
              <a href={MAILTO_URL}>
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-white/10 px-8 py-6 text-base text-white hover:bg-white hover:text-slate-950 sm:w-auto">
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
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur"
          >
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Service dashboard</p>
                  <h2 className="mt-2 text-2xl font-bold">{service.navName}</h2>
                </div>
                <div className="rounded-2xl bg-primary/10 p-4">
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

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Specialized solution areas</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Explore the focused capabilities inside this service line.</h2>
            <p className="mt-5 text-lg text-muted-foreground">{service.description}</p>
          </div>
          <div className="grid gap-7 lg:grid-cols-3">
            {service.categories.map((category, index) => (
              <motion.article
                key={category.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="mt-4 text-sm font-semibold text-primary">{category.trend}</p>
                <p className="mt-4 flex-grow text-muted-foreground">{category.intro}</p>
                <Link to={`${service.path}/${category.slug}`} className="mt-6 inline-flex items-center font-semibold text-primary">
                  Explore this service area
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
