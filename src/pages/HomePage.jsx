import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { HoverCard } from '@/components/animations/HoverCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  Monitor,
  Code,
  Globe,
  Smartphone,
  Cloud,
  BrainCircuit,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

const HomePage = () => {
  usePageMeta(
    'Privexio | Premium B2B Technology Services for North America',
    'Enterprise-grade managed IT, cybersecurity, cloud solutions, custom software development, and AI automation for Canadian and US businesses. Book your free consultation today.'
  );

  const services = [
    { icon: Monitor, title: 'Managed IT Services', description: 'Comprehensive IT infrastructure management, 24/7 monitoring, and proactive support for enterprise-scale operations.', link: '/managed-it' },
    { icon: Shield, title: 'Cybersecurity', description: 'Advanced threat protection, SOC, MDR, penetration testing, and zero-trust architecture for complete security.', link: '/cybersecurity' },
    { icon: Cloud, title: 'Cloud Solutions & Migration', description: 'AWS, Azure, cloud migration, disaster recovery, and DevOps expertise for modern infrastructure.', link: '/cloud-solutions' },
    { icon: Code, title: 'Custom Software Development', description: 'Bespoke software solutions designed to solve complex business challenges and drive innovation.', link: '/software-development' },
    { icon: Globe, title: 'Website & SEO Solutions', description: 'High-performance web applications, SEO optimization, and digital marketing for maximum visibility.', link: '/web-development' },
    { icon: BrainCircuit, title: 'AI Automation & Business Process Optimization', description: 'Workflow automation, chatbots, CRM automation, and intelligent business process optimization.', link: '/ai-ml' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Native iOS, Android, and cross-platform mobile solutions for enterprise and consumer markets.', link: '/mobile-apps' },
    { icon: Zap, title: 'IT Consulting & Digital Transformation', description: 'Strategic IT consulting, digital transformation roadmaps, and enterprise architecture planning.', link: '/it-consulting' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-60 flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">North America's Trusted B2B Tech Partner</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Enterprise Technology Solutions for <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Scalable Growth</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Trusted by enterprises across Canada and the USA for managed IT, cybersecurity, cloud solutions, custom software, and AI automation. We deliver results.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>500+ Clients Served</span>
            </div>
            <div className="h-6 w-px bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>24/7 Enterprise Support</span>
            </div>
            <div className="h-6 w-px bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Certified Experts</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <a href="https://wa.me/12268688363?text=Hello%20Privexio!%20I'm%20interested%20in%20learning%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10 px-8 py-6 text-lg w-full sm:w-auto">
                  Talk on WhatsApp
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">8 Core Technology Services</h2>
              <p className="text-muted-foreground text-lg">Comprehensive solutions designed to optimize operations, enhance security, and drive innovation across your enterprise.</p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <HoverCard key={service.title} className="h-full">
                <Link to={service.link}>
                  <div className="h-full p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all cursor-pointer">
                    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </HoverCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Privexio Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <SectionReveal direction="left" className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Leading Enterprises Choose Privexio</h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over a decade of experience serving enterprise clients across North America, we deliver excellence, security, and measurable ROI on every engagement.
              </p>
              <StaggerContainer className="space-y-4" direction="left">
                {[
                  { icon: Shield, text: '24/7 Proactive Monitoring & Support' },
                  { icon: Zap, text: 'Tailored Solutions for Your Industry' },
                  { icon: Users, text: 'Enterprise-Grade Security Standards' },
                  { icon: CheckCircle, text: 'Transparent Pricing & Agile Delivery' }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </StaggerContainer>
            </SectionReveal>
            <SectionReveal direction="right" className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Team collaborating on technology solutions"
                className="rounded-lg shadow-xl"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Case Studies</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Enterprise Results That Matter</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Real outcomes from real clients. See how we've helped enterprises across North America optimize operations, enhance security, and drive growth.
              </p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <HoverCard>
              <TestimonialCard
                result="Cloud migration without operational disruption"
                company="TechFlow Innovations"
                industry="Technology"
                summary="Privexio planned and delivered a phased cloud migration that modernized infrastructure while keeping the internal team productive during rollout."
                outcome="30% reduction in operating costs after migration"
              />
            </HoverCard>
            <HoverCard>
              <TestimonialCard
                result="Supply chain workflows rebuilt around the actual business"
                company="Global Logistics Inc."
                industry="Logistics"
                summary="We replaced fragmented operational tooling with a tailored software platform that matched internal processes and improved day-to-day usability."
                outcome="Faster execution and better visibility across supply operations"
              />
            </HoverCard>
            <HoverCard>
              <TestimonialCard
                result="Security-first managed support for a regulated environment"
                company="Summit Medical Group"
                industry="Healthcare"
                summary="Privexio's MSP model gave the organization a stronger support structure, tighter controls, and more confidence in protecting sensitive data."
                outcome="24/7 support coverage with stronger compliance readiness"
              />
            </HoverCard>
          </StaggerContainer>
          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  View All Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Elevate Your IT Strategy?"
        description="Partner with Privexio today and leverage technology as your ultimate competitive advantage. Let's build something great together."
      />

      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default HomePage;
