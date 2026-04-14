import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Headphones, Clock, Users, TrendingUp, Zap, Award } from 'lucide-react';

const HelpDeskSupportPage = () => {
  usePageMeta(
    '24/7 Help Desk Support | Enterprise IT Support | Privexio',
    'Professional help desk support for businesses across Canada & USA. 24/7 availability, ticket tracking, escalation management. Average response: 15 minutes.'
  );

  const mainServices = [
    { icon: Headphones, title: 'Ticket Management', description: 'Organized ticket system with prioritization, escalation, and resolution tracking.' },
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock support with multiple communication channels (phone, email, chat).' },
    { icon: Users, title: 'Technical Support', description: 'Expert technicians to resolve hardware, software, network, and connectivity issues.' },
    { icon: TrendingUp, title: 'User Onboarding', description: 'New employee IT onboarding and equipment setup to get teams productive immediately.' },
    { icon: Zap, title: 'Knowledge Management', description: 'Self-service portal and knowledge base to reduce ticket volume and improve user satisfaction.' },
    { icon: Award, title: 'SLA Guarantees', description: 'Service level agreements with guaranteed response and resolution times.' },
  ];

  const features = [
    '15-minute average response time',
    'Multi-channel support (phone, email, chat, portal)',
    '99.5% first-contact resolution rate',
    'Expert technicians with industry certifications',
    'Ticket tracking and reporting',
    'Proactive monitoring reduces issue volume',
    'Scalable for growing teams',
    'Integration with your existing systems',
  ];

  const faq = [
    {
      question: 'What is your average response and resolution time?',
      answer: 'We guarantee 15-minute average response time for critical issues, 1-hour for high priority, and 4-hour for standard. Resolution typically happens within the same day.'
    },
    {
      question: 'Can you support users in multiple time zones?',
      answer: 'Yes, our 24/7 global team supports North American users across all time zones, ensuring someone is always available.'
    },
    {
      question: 'What about remote workers?',
      answer: 'We specialize in supporting remote and distributed teams with remote support tools, VPN setup, and collaboration tool configuration.'
    },
    {
      question: 'How do you track and report on support tickets?',
      answer: 'Complete visibility with our portal, email notifications, custom reports, and executive dashboards showing metrics and trends.'
    },
  ];

  const trustBadges = ['500+ Organizations', '99.5% Resolution', '24/7 Support', 'ISO Certified'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Help Desk Support',
    'provider': { '@type': 'Organization', 'name': 'Privexio', 'url': 'https://privexio.com' },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Professional Help Desk Support"
        heroSubtitle="24/7 End-User Support"
        heroDescription="Expert technical support available around the clock. Fast response times, high resolution rates, and exceptional user satisfaction."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Get Your Help Desk Support"
        description="Reduce IT frustration and improve user productivity with professional help desk support."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default HelpDeskSupportPage;
