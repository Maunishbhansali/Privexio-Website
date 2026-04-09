import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Code,
  Globe,
  Smartphone,
  Cloud,
  BrainCircuit,
  CheckCircle,
} from 'lucide-react';

const HomePage = () => {
  usePageMeta(
    'Home',
    'Privexio provides managed IT, software engineering, cloud, mobile, web, and AI services for growing enterprises.'
  );

  const services = [
    { icon: Monitor, title: 'MSP Services', description: 'Comprehensive IT management, proactive support, and infrastructure monitoring.', link: '/msp' },
    { icon: Code, title: 'Software Development', description: 'Custom enterprise software tailored to solve complex business challenges.', link: '/software-development' },
    { icon: Globe, title: 'Web Development', description: 'Responsive, high-performance web applications and corporate websites.', link: '/web-development' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions for iOS and Android.', link: '/mobile-apps' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Secure cloud migration, hosting, and architecture optimization.', link: '/cloud-solutions' },
    { icon: BrainCircuit, title: 'AI/ML Services', description: 'Intelligent automation and predictive analytics to drive business growth.', link: '/ai-ml' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative pt-32 pb-40 flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1684563983781-ce52a026f139"
            alt="Abstract technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Your Enterprise with Next-Gen Technology
          </h1>
          <p className="text-xl text-slate-200 mb-10">
            Privexio delivers world-class Managed IT, Custom Software, and Cloud Solutions to scale your business securely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                Get a Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg w-full sm:w-auto">
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive IT Solutions</h2>
            <p className="text-muted-foreground text-lg">We provide end-to-end technology services designed to optimize operations and drive innovation across your organization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Privexio?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                With a proven track record of successful deployments and a team of certified experts, we are committed to delivering excellence, security, and scalability in every project.
              </p>
              <div className="space-y-4">
                {[
                  '24/7 Proactive Monitoring & Support',
                  'Tailored Solutions for Your Industry',
                  'Enterprise-Grade Security Standards',
                  'Transparent Pricing & Agile Delivery'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Team collaborating on technology solutions"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Case Studies</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">How our work translates into measurable business results.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Inspired by the clearer customer-story format used by Circula, this section now focuses on outcomes, context, and impact instead of generic testimonials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              result="Cloud migration without operational disruption"
              company="TechFlow Innovations"
              industry="Technology"
              summary="Privexio planned and delivered a phased cloud migration that modernized infrastructure while keeping the internal team productive during rollout."
              outcome="30% reduction in operating costs after migration"
            />
            <TestimonialCard
              result="Supply chain workflows rebuilt around the actual business"
              company="Global Logistics Inc."
              industry="Logistics"
              summary="We replaced fragmented operational tooling with a tailored software platform that matched internal processes and improved day-to-day usability."
              outcome="Faster execution and better visibility across supply operations"
            />
            <TestimonialCard
              result="Security-first managed support for a regulated environment"
              company="Summit Medical Group"
              industry="Healthcare"
              summary="Privexio’s MSP model gave the organization a stronger support structure, tighter controls, and more confidence in protecting sensitive data."
              outcome="24/7 support coverage with stronger compliance readiness"
            />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Elevate Your IT Strategy?"
        description="Partner with Privexio today and leverage technology as your ultimate competitive advantage. Let's build something great together."
      />

      <Footer />
    </div>
  );
};

export default HomePage;
