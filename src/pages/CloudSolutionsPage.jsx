import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Cloud, Zap, Shield, TrendingUp, Database, GitBranch } from 'lucide-react';

const CloudSolutionsPage = () => {
  usePageMeta(
    'Cloud Solutions & Migration | AWS, Azure, DevOps | Privexio',
    'Enterprise cloud solutions: AWS/Azure migration, disaster recovery, DevOps, optimization. Zero-downtime migrations. Free cloud assessment.'
  );

  const mainServices = [
    { icon: Cloud, title: 'Cloud Migration', description: 'Planned, phased migrations to AWS, Azure, or GCP with zero downtime and minimal business disruption.' },
    { icon: Shield, title: 'Disaster Recovery & Backup', description: 'Redundant infrastructure and automated backup strategies ensuring business continuity and rapid recovery.' },
    { icon: GitBranch, title: 'DevOps & CI/CD', description: 'Automated deployment pipelines, infrastructure as code, and continuous integration for faster releases.' },
    { icon: TrendingUp, title: 'Cloud Optimization', description: 'Cost optimization, performance tuning, and resource management to maximize ROI from cloud investments.' },
    { icon: Database, title: 'Managed Services', description: 'Offload database management, monitoring, and maintenance to cloud-native managed services.' },
    { icon: Zap, title: 'Hybrid & Multi-Cloud', description: 'Seamlessly integrate on-premises infrastructure with cloud services for flexibility and control.' },
  ];

  const features = [
    'Certified AWS, Azure, and GCP architects',
    'Zero-downtime migration methodology',
    '30-40% reduction in infrastructure costs',
    'Enterprise-grade security and compliance',
    'Automated scaling and performance optimization',
    'Multi-region disaster recovery',
    '24/7 cloud operations support',
    'Cost monitoring and optimization tools',
  ];

  const faq = [
    {
      question: 'How long does cloud migration take?',
      answer: 'Migration timeline depends on complexity and data volume, typically 2-8 weeks. We use phased approaches to minimize disruption and allow validation before full cutover.'
    },
    {
      question: 'Will there be downtime during migration?',
      answer: 'No. We employ zero-downtime migration strategies using hybrid setups, load balancing, and automated failover to ensure continuity.'
    },
    {
      question: 'How much will cloud cost compared to on-premises?',
      answer: 'Most organizations save 30-50% with optimized cloud infrastructure. We provide detailed cost projections and ongoing optimization.'
    },
    {
      question: 'Do you support hybrid cloud setups?',
      answer: 'Yes, we design and manage hybrid environments that blend on-premises and cloud infrastructure based on your specific needs.'
    },
  ];

  const trustBadges = ['AWS Advanced Partner', 'Azure Premium', 'Zero-Downtime Track Record', '99.99% Availability'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Cloud Solutions & Migration',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'Cloud Services',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Enterprise Cloud Solutions & Migration"
        heroSubtitle="AWS, Azure & Google Cloud"
        heroDescription="Secure cloud migration, disaster recovery, and optimization. Zero-downtime transitions. Save 30-50% on infrastructure costs."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Get Cloud Assessment', secondary: 'Discuss Migration' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Modernize Your Infrastructure"
        description="Let's create a cloud strategy that accelerates your business while reducing costs and improving security."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default CloudSolutionsPage;
