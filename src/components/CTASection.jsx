import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL } from '@/lib/site-links';
import { motion } from 'framer-motion';

const CTASection = ({
  heading,
  description,
  buttonText = 'Schedule a Consultation',
  buttonLink = CALENDAR_URL,
  secondaryText = 'Contact Us',
  secondaryLink = '/contact',
}) => {
  const isExternalLink = buttonLink.startsWith('http');
  const isSecondaryExternal = secondaryLink.startsWith('http') || secondaryLink.startsWith('mailto:');

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Deep premium background */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      
      {/* Background imagery with overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/images/abstract_2.jpg" alt="Abstract background" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      
      {/* Premium gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-primary/10 to-transparent z-0" />
      
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-extrabold text-white md:text-6xl tracking-tight leading-tight">{heading}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-300 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isExternalLink ? (
              <a href={buttonLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full bg-white px-8 py-7 text-lg font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-xl">
                  <CalendarDays className="mr-3 h-5 w-5 text-primary" />
                  {buttonText}
                </Button>
              </a>
            ) : (
              <Link to={buttonLink} className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full bg-white px-8 py-7 text-lg font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-xl">
                  {buttonText}
                </Button>
              </Link>
            )}

            {isSecondaryExternal ? (
              <a href={secondaryLink} target={secondaryLink.startsWith('http') ? '_blank' : undefined} rel={secondaryLink.startsWith('http') ? 'noreferrer' : undefined} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/20 bg-white/5 backdrop-blur-sm px-8 py-7 text-lg text-white hover:bg-white/10 hover:text-white transition-all">
                  <Mail className="mr-3 h-5 w-5" />
                  {secondaryText}
                </Button>
              </a>
            ) : (
              <Link to={secondaryLink} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/20 bg-white/5 backdrop-blur-sm px-8 py-7 text-lg text-white hover:bg-white/10 hover:text-white transition-all">
                  <Mail className="mr-3 h-5 w-5" />
                  {secondaryText}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
