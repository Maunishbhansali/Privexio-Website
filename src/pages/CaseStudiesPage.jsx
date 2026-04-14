import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/animations/SectionReveal';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { HoverCard } from '@/components/animations/HoverCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CaseStudiesPage = () => {
  usePageMeta(
    'Case Studies | Enterprise Technology Success Stories | Privexio',
    'See how we helped enterprises across North America achieve measurable results with our managed IT, cloud, cybersecurity, and custom software solutions.'
  );

  const caseStudies = [
    {
      id: 1,
      title: 'Cloud Migration Without Operational Disruption',
      company: 'TechFlow Innovations',
      industry: 'Technology',
      result: '30% cost reduction',
      description: 'Privexio planned and delivered a phased cloud migration that modernized infrastructure while keeping internal teams productive.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
      highlights: ['AWS Migration', 'Zero Downtime', 'Cost Optimization'],
      roi: '30% reduction in operating costs',
      timeline: '6 months',
    },
    {
      id: 2,
      title: 'Supply Chain Workflows Rebuilt',
      company: 'Global Logistics Inc.',
      industry: 'Logistics',
      result: '40% faster execution',
      description: 'We replaced fragmented operational tooling with a tailored software platform that matched internal processes.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      highlights: ['Custom Software', 'Process Optimization', 'Real-time Visibility'],
      roi: 'Faster execution and better visibility across operations',
      timeline: '4 months',
    },
    {
      id: 3,
      title: 'Security-First MSP for Regulated Environment',
      company: 'Summit Medical Group',
      industry: 'Healthcare',
      result: 'HIPAA Compliant',
      description: 'Privexio\'s MSP model gave the organization stronger support, tighter controls, and confidence in data protection.',
      image: 'https://images.unsplash.com/photo-1576091160550-112173c7acda',
      highlights: ['MSP Services', 'HIPAA Compliance', '24/7 Support'],
      roi: '24/7 support coverage with stronger compliance readiness',
      timeline: '3 months',
    },
    {
      id: 4,
      title: 'Cybersecurity Transformation',
      company: 'Finance Solutions Corp',
      industry: 'Financial Services',
      result: '99.9% threat prevention',
      description: 'Implemented advanced SOC and MDR solutions to protect sensitive financial data and meet regulatory requirements.',
      image: 'https://images.unsplash.com/photo-1550439062-7cdcb8c737f0',
      highlights: ['SOC/MDR', 'Compliance', 'Threat Detection'],
      roi: '99.9% threat detection and prevention rate',
      timeline: '5 months',
    },
    {
      id: 5,
      title: 'AI Automation Reduced Manual Work',
      company: 'RetailPro Enterprises',
      industry: 'Retail',
      result: '70% time savings',
      description: 'Built intelligent automation solutions that eliminated repetitive tasks and increased operational efficiency significantly.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8d13b3b4e46885183',
      highlights: ['AI Automation', 'Workflow Optimization', 'RPA'],
      roi: '70% reduction in manual workload',
      timeline: '3 months',
    },
    {
      id: 6,
      title: 'Mobile App Launch for Distribution',
      company: 'Nordic Distribution Ltd',
      industry: 'Distribution',
      result: '50% faster order processing',
      description: 'Developed a native mobile app that streamlined order management and increased field team productivity.',
      image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643',
      highlights: ['Mobile Development', 'Real-time Sync', 'Native App'],
      roi: '50% faster order processing and fulfillment',
      timeline: '4 months',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-xl text-slate-300">
              Explore real-world success stories of how we've helped enterprises across North America achieve measurable results through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {caseStudies.map((caseStudy) => (
              <HoverCard key={caseStudy.id}>
                <Link to={`/case-studies/${caseStudy.id}`}>
                  <div className="h-full rounded-xl overflow-hidden border border-border bg-card hover:bg-card/80 transition-all flex flex-col cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {caseStudy.result}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-muted-foreground font-semibold">{caseStudy.company}</p>
                        <p className="text-xs text-primary uppercase tracking-wider font-bold">{caseStudy.industry}</p>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-3">{caseStudy.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{caseStudy.description}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.highlights.map((highlight) => (
                          <span key={highlight} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-primary font-semibold text-sm pt-4 border-t border-border/50">
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </HoverCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of enterprises across North America that have transformed their operations with Privexio's technology solutions.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default CaseStudiesPage;
