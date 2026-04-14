import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Lightbulb, Zap, TrendingUp, Target, Users, Layers } from 'lucide-react';

const ITConsultingPage = () => {
  usePageMeta(
    'IT Consulting & Digital Transformation | Strategy & Planning | Privexio',
    'Strategic IT consulting for digital transformation. Technology roadmaps, enterprise architecture, modernization planning for Canadian and US enterprises.'
  );

  const mainServices = [
    { icon: Lightbulb, title: 'Digital Transformation Strategy', description: 'Comprehensive roadmaps to modernize operations, improve efficiency, and leverage technology for competitive advantage.' },
    { icon: Target, title: 'Technology Roadmap Planning', description: 'Multi-year IT strategy aligned with business goals, budget optimization, and risk mitigation.' },
    { icon: Layers, title: 'Enterprise Architecture', description: 'Design scalable, secure, and efficient IT systems architecture that supports growth and innovation.' },
    { icon: TrendingUp, title: 'Business Process Optimization', description: 'Analyze and redesign processes using technology to increase efficiency and reduce costs.' },
    { icon: Zap, title: 'Technology Stack Assessment', description: 'Evaluate current systems and recommend optimization, consolidation, or replacement strategies.' },
    { icon: Users, title: 'Change Management & Training', description: 'Guide your organization through technology changes with strategic change management and team training.' },
  ];

  const features = [
    'Deep expertise across all major technology platforms',
    'Industry-specific solutions for healthcare, finance, manufacturing, retail',
    'Vendor-neutral consulting (no bias toward specific solutions)',
    'Cost-benefit analysis and ROI projections for technology investments',
    'Risk assessment and mitigation planning',
    'Executive advisory and board-level reporting',
    'Ongoing optimization and strategic planning',
    'Proven methodologies from decades of transformations',
  ];

  const faq = [
    {
      question: 'What does a digital transformation roadmap include?',
      answer: 'A comprehensive roadmap includes current state assessment, goals definition, technology recommendations, implementation timeline, budget planning, resource requirements, and risk mitigation strategies.'
    },
    {
      question: 'How long does a transformation typically take?',
      answer: 'Transformations range from 12-36 months depending on complexity and scope. We break them into phases to minimize disruption and deliver value quickly.'
    },
    {
      question: 'Will you help with budget planning and ROI projection?',
      answer: 'Absolutely. We provide detailed cost-benefit analysis, ROI projections, and help secure executive buy-in with business cases.'
    },
    {
      question: 'What if we\'re not sure where to start?',
      answer: 'We start with a comprehensive assessment of your current state, business challenges, and opportunities. This informs a prioritized recommendation.'
    },
  ];

  const trustBadges = ['Forrester Clients', '15+ Years Experience', 'Digital Leaders', 'Executive Advisory'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'IT Consulting & Digital Transformation',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'Consulting Services',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="IT Consulting & Digital Transformation"
        heroSubtitle="Strategy & Modernization"
        heroDescription="Strategic IT consulting to modernize operations, optimize costs, and drive innovation. Proven methodologies. Executive advisory."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Schedule Strategy Session', secondary: 'Discuss Transformation' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Transform Your Organization"
        description="Let's create a strategic technology roadmap that aligns with your business goals and drives competitive advantage."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default ITConsultingPage;
