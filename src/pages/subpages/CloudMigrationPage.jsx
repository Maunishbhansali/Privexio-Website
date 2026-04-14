import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Cloud, Zap, Shield, TrendingUp, CheckCircle, Users } from 'lucide-react';

const CloudMigrationPage = () => {
  usePageMeta(
    'Cloud Migration Services | AWS Azure Migration | Zero Downtime | Privexio',
    'Enterprise cloud migration with zero downtime. AWS & Azure experts. Proven methodology. Cost savings 30-50%. North America focus.'
  );

  const mainServices = [
    { icon: Cloud, title: 'Migration Planning', description: 'Comprehensive assessment, architecture design, and detailed migration roadmap.' },
    { icon: Zap, title: 'Data Migration', description: 'Secure, validated migration of databases, applications, and files to the cloud.' },
    { icon: Shield, title: 'Zero-Downtime Cutover', description: 'Advanced techniques ensure business continuity throughout the migration process.' },
    { icon: TrendingUp, title: 'Performance Optimization', description: 'Tune cloud infrastructure for optimal performance and cost efficiency.' },
    { icon: CheckCircle, title: 'Testing & Validation', description: 'Thorough testing at each phase to ensure systems work exactly as required.' },
    { icon: Users, title: 'Training & Support', description: 'Team training and 30-day support to ensure smooth transition to cloud operations.' },
  ];

  const features = [
    'Zero-downtime migration methodology',
    'Comprehensive planning and risk assessment',
    '30-50% cost reduction typical',
    'AWS and Azure certified architects',
    'Automated migration tools and scripts',
    'Backup and rollback capabilities',
    'Performance optimization included',
    'Post-migration support and optimization',
  ];

  const faq = [
    {
      question: 'How can you guarantee zero downtime?',
      answer: 'We use advanced techniques like database replication, load balancing, and staged cutover. Your systems stay running while we migrate in the background.'
    },
    {
      question: 'How long does migration take?',
      answer: 'Depends on scope and complexity. Typical enterprise migrations take 2-8 weeks. We work in phases to minimize impact and allow rollback if needed.'
    },
    {
      question: 'What if something goes wrong during migration?',
      answer: 'We have rollback procedures ready at every stage. Your data is always protected with backups, and we can quickly revert if needed.'
    },
    {
      question: 'Will costs really decrease?',
      answer: 'Most organizations save 30-50% through cloud resource optimization, eliminating on-premises hardware costs, and right-sizing infrastructure.'
    },
  ];

  const trustBadges = ['AWS Advanced Partner', 'Azure Premium', '100+ Successful Migrations', 'Zero-Downtime Track Record'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Cloud Migration',
    'provider': { '@type': 'Organization', 'name': 'Privexio', 'url': 'https://privexio.com' },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Enterprise Cloud Migration"
        heroSubtitle="Zero-Downtime AWS & Azure Migration"
        heroDescription="Secure, validated cloud migration with zero business interruption. Save 30-50% on infrastructure costs."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Migrate to the Cloud Confidently"
        description="Let's plan your migration to eliminate risk, minimize downtime, and reduce costs."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default CloudMigrationPage;
