import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Code, Zap, Users, TrendingUp, Shield, Layers } from 'lucide-react';

const SoftwareDevelopmentPage = () => {
  usePageMeta(
    'Custom Software Development | Enterprise Solutions | Privexio',
    'Bespoke custom software solutions for enterprise challenges. Full-stack development, API design, integrations. Agile methodology. North America focus.'
  );

  const mainServices = [
    { icon: Code, title: 'Full-Stack Development', description: 'End-to-end custom application development from architecture design through deployment and maintenance.' },
    { icon: Layers, title: 'API & Integration Services', description: 'RESTful and GraphQL APIs, third-party integrations, and custom middleware for seamless data flow.' },
    { icon: Users, title: 'User Experience Design', description: 'Intuitive, beautiful UI/UX that drives user adoption and maximizes application effectiveness.' },
    { icon: Shield, title: 'Enterprise Architecture', description: 'Scalable, secure systems architecture designed for reliability, performance, and future growth.' },
    { icon: Zap, title: 'Agile Development', description: 'Sprint-based development with regular demos, feedback integration, and rapid iteration.' },
    { icon: TrendingUp, title: 'Maintenance & Support', description: 'Ongoing support, bug fixes, feature enhancements, and optimization for peak performance.' },
  ];

  const features = [
    'Full technology stack expertise (frontend, backend, databases, DevOps)',
    'Agile and Scrum methodologies',
    'Cloud-native application design',
    'Security-first development practices',
    'Automated testing and code quality',
    'API-first architecture',
    'Real-time collaboration with stakeholders',
    'Transparent pricing and project tracking',
  ];

  const faq = [
    {
      question: 'What technologies do you work with?',
      answer: 'We have expertise across all major stacks: React, Vue, Node.js, Python, Java, .NET, PostgreSQL, MongoDB, AWS, Azure, and more. We recommend based on your specific needs.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We implement automated testing, code reviews, continuous integration, and follow SOLID principles. Quality is built in, not added later.'
    },
    {
      question: 'Can you work with existing code?',
      answer: 'Absolutely. We can extend, maintain, or refactor existing systems. Code quality and documentation are our priorities.'
    },
    {
      question: 'How is pricing structured?',
      answer: 'We offer flexible models: fixed-price for defined projects, time-and-materials for exploration, or dedicated team arrangements for ongoing development.'
    },
  ];

  const trustBadges = ['ISO 9001 Certified', '15+ Years Experience', '100+ Successful Projects', 'Client Satisfaction: 98%'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Custom Software Development',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'Software Development',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Custom Software Development"
        heroSubtitle="Bespoke Enterprise Solutions"
        heroDescription="Tailored software solutions that solve complex business challenges. Full-stack expertise. Agile delivery. Cloud-native architecture."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Discuss Your Project', secondary: 'Get Estimate' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Build Your Custom Solution"
        description="Let's discuss your business challenges and how custom software can create competitive advantage."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default SoftwareDevelopmentPage;
