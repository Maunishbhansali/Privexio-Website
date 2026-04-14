import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Monitor, Shield, Clock, Zap, BarChart3, Users } from 'lucide-react';

const ManagedITServicesPage = () => {
  usePageMeta(
    'Managed IT Services | 24/7 Infrastructure Support | Privexio',
    'Enterprise managed IT services across Canada & USA. Proactive monitoring, 24/7 support, security, and infrastructure optimization. Book free consultation.'
  );

  const mainServices = [
    { icon: Monitor, title: 'Infrastructure Monitoring', description: '24/7 proactive monitoring of servers, networks, and systems to prevent issues before they occur.' },
    { icon: Clock, title: '24/7 Help Desk Support', description: 'Responsive technical support team available around the clock to resolve issues quickly.' },
    { icon: Shield, title: 'Security & Compliance', description: 'Advanced security protocols, threat detection, and compliance management for regulated industries.' },
    { icon: Zap, title: 'Network Management', description: 'Optimized network infrastructure, bandwidth management, and performance optimization.' },
    { icon: BarChart3, title: 'Performance Optimization', description: 'Continuous monitoring and optimization to ensure peak system performance and uptime.' },
    { icon: Users, title: 'Onboarding & Training', description: 'Seamless IT onboarding for new staff and ongoing training for your team.' },
  ];

  const features = [
    '99.9% uptime guarantee with SLA commitments',
    'Proactive monitoring and maintenance reduce downtime by up to 90%',
    'Rapid response times - average 15 minutes',
    'Transparent reporting and cost predictability',
    'Certified IT professionals with industry expertise',
    'Custom solutions tailored to your business',
    'Seamless integration with existing systems',
    'Scalable infrastructure for growing businesses',
  ];

  const faq = [
    {
      question: 'What is included in managed IT services?',
      answer: 'Our managed IT services include 24/7 monitoring, help desk support, security management, network optimization, proactive maintenance, and strategic IT consulting.'
    },
    {
      question: 'How does managed IT improve business continuity?',
      answer: 'Proactive monitoring detects and resolves issues before they impact your business. Our redundancy planning and backup systems ensure minimal downtime.'
    },
    {
      question: 'What is the cost compared to in-house IT?',
      answer: 'Managed IT is typically 30-50% less expensive than maintaining an in-house IT department, with better service levels and expertise.'
    },
    {
      question: 'Can you support hybrid and remote work?',
      answer: 'Yes, we specialize in supporting hybrid and remote work environments with secure remote access, collaboration tools, and distributed IT management.'
    },
  ];

  const trustBadges = ['500+ Clients', '24/7 Support', 'ISO 27001', '99.9% Uptime'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Managed IT Services',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'IT Management',
    'description': 'Enterprise managed IT services including 24/7 monitoring, help desk support, security, and infrastructure management.',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Enterprise Managed IT Services"
        heroSubtitle="Complete IT Infrastructure Management"
        heroDescription="24/7 proactive monitoring, support, and optimization for enterprise-scale infrastructure. Focus on your business while we manage your IT."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Start Free Assessment', secondary: 'Chat on WhatsApp' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Transform Your IT Operations"
        description="Let's discuss how managed IT services can improve your infrastructure reliability, security, and reduce operational costs."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default ManagedITServicesPage;
