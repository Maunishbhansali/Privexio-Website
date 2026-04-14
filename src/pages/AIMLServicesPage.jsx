import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { BrainCircuit, Zap, BarChart3, Users, Workflow, TrendingUp } from 'lucide-react';

const AIMLServicesPage = () => {
  usePageMeta(
    'AI Automation & Business Process Optimization | Workflow Automation | Privexio',
    'AI-powered workflow automation, RPA, chatbots, CRM automation, intelligent reporting. Reduce manual work by 70%. Free AI assessment.'
  );

  const mainServices = [
    { icon: Workflow, title: 'Workflow Automation', description: 'Intelligent automation of repetitive tasks like approvals, data entry, and notifications using AI and RPA.' },
    { icon: BrainCircuit, title: 'AI Chatbots & Virtual Assistants', description: 'Conversational AI powered by large language models for customer support, sales, and internal operations.' },
    { icon: BarChart3, title: 'Intelligent Reporting', description: 'Automated report generation, data synthesis, and actionable insights from your business data.' },
    { icon: Users, title: 'CRM Automation', description: 'Automated lead scoring, contact enrichment, sales pipeline management, and customer engagement workflows.' },
    { icon: Zap, title: 'Process Optimization', description: 'Analyze your processes to identify bottlenecks and automate for maximum efficiency and cost savings.' },
    { icon: TrendingUp, title: 'Predictive Analytics', description: 'Machine learning models to forecast trends, predict customer behavior, and optimize business decisions.' },
  ];

  const features = [
    '70%+ reduction in manual work typical',
    'Improved accuracy and consistency',
    'Faster process execution (up to 10x faster)',
    '24/7 automation without human intervention',
    'Seamless integration with existing systems',
    'Scalable solutions for growing businesses',
    'Continuous learning and improvement',
    'Transparent ROI tracking and metrics',
  ];

  const faq = [
    {
      question: 'What kinds of processes can be automated?',
      answer: 'Almost any repetitive, rule-based process: data entry, approvals, customer onboarding, report generation, order processing, lead qualification, and much more.'
    },
    {
      question: 'How much time and cost can we save?',
      answer: 'Organizations typically save 50-70% of time spent on manual tasks. For a process that takes 100 hours/month, you could save 50-70 hours with automation.'
    },
    {
      question: 'Is implementation disruptive?',
      answer: 'No. We implement in phases, testing thoroughly before deployment. Your team gets trained and usually benefits immediately from efficiency gains.'
    },
    {
      question: 'What about job security for my team?',
      answer: 'Automation frees your team from tedious tasks so they can focus on strategic, creative, and customer-facing work - not replacing people.'
    },
  ];

  const trustBadges = ['OpenAI Partner', '1000+ Automations', '98% Success Rate', 'Fortune 500 Clients'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI Automation & Business Process Optimization',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'AI & Automation Services',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="AI Automation & Business Process Optimization"
        heroSubtitle="Intelligent Workflow Automation"
        heroDescription="AI-powered automation to reduce manual work by 70%. Workflow automation, chatbots, RPA, predictive analytics. Transform operations."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Get Automation Audit', secondary: 'Discuss ROI' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Automate Your Operations"
        description="Free up your team from tedious tasks and focus on growth. We'll identify and automate high-impact processes."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default AIMLServicesPage;
