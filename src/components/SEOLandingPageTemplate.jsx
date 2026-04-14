import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { HoverCard } from '@/components/animations/HoverCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

/**
 * SEOLandingPageTemplate
 * Reusable template for service landing pages with all required SEO elements
 */
export const SEOLandingPageTemplate = ({
  heroTitle,
  heroSubtitle,
  heroDescription,
  mainServices,
  whyChooseUs,
  features,
  faq,
  trustBadges,
  cta,
  schemaMarkup,
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-60 flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm font-semibold text-primary">{heroSubtitle}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {cta?.primary || 'Schedule Free Consultation'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/12268688363" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10">
                {cta?.secondary || 'Talk on WhatsApp'}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      {mainServices && mainServices.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Core Services</h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive solutions tailored to your business needs
                </p>
              </div>
            </SectionReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {mainServices.map((service) => (
                <HoverCard key={service.title}>
                  <div className="h-full p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all">
                    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </HoverCard>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="section-padding bg-secondary/5">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why We're Different</h2>
                <p className="text-muted-foreground text-lg">
                  Industry-leading expertise and commitment to excellence
                </p>
              </div>
            </SectionReveal>

            <StaggerContainer className="max-w-3xl space-y-4" direction="left">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border/50">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{feature}</span>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              </div>
            </SectionReveal>

            <div className="max-w-2xl mx-auto space-y-4">
              {faq.map((item, idx) => (
                <motion.details
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group border border-border rounded-lg p-6 cursor-pointer hover:bg-secondary/5 transition-colors"
                >
                  <summary className="flex items-center justify-between font-bold text-foreground list-none">
                    {item.question}
                    <span className="transform transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Badges Section */}
      {trustBadges && trustBadges.length > 0 && (
        <section className="section-padding bg-secondary/5">
          <div className="container mx-auto px-4">
            <SectionReveal>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                  Trusted By
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {trustBadges.map((badge) => (
                    <div key={badge} className="text-muted-foreground font-semibold">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let's discuss how we can help your business succeed.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </>
  );
};

export default SEOLandingPageTemplate;
