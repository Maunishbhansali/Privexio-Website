import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Globe, Search, TrendingUp, Zap, Shield, Users } from 'lucide-react';

const WebDevelopmentPage = () => {
  usePageMeta(
    'Website Design & SEO Solutions | High-Performance Web Apps | Privexio',
    'Professional website design, SEO optimization, digital marketing. High-performance web applications. Responsive design. North America focus.'
  );

  const mainServices = [
    { icon: Globe, title: 'Website Design & Development', description: 'Modern, responsive websites built for conversions. Fast loading, mobile-optimized, and brand-aligned design.' },
    { icon: Search, title: 'SEO Optimization', description: 'Comprehensive on-page, technical, and off-page SEO to rank for high-intent keywords and drive organic traffic.' },
    { icon: TrendingUp, title: 'Digital Marketing', description: 'PPC, content marketing, social media, and email campaigns to drive qualified leads and conversions.' },
    { icon: Zap, title: 'Web Performance', description: 'Core Web Vitals optimization, CDN implementation, caching strategies for lightning-fast load times.' },
    { icon: Shield, title: 'Security & Compliance', description: 'SSL certificates, security headers, GDPR compliance, and regular security audits for peace of mind.' },
    { icon: Users, title: 'Conversion Rate Optimization', description: 'A/B testing, user experience improvements, and data-driven optimization to maximize conversions.' },
  ];

  const features = [
    'Mobile-first responsive design',
    'SEO-friendly architecture and structure',
    'Core Web Vitals optimization',
    'Content management system (CMS) options',
    'Advanced analytics and tracking',
    'E-commerce capabilities',
    'Integration with marketing tools',
    'Ongoing maintenance and optimization',
  ];

  const faq = [
    {
      question: 'How important is SEO for my website?',
      answer: 'SEO is critical. 93% of online experiences begin with a search engine. Proper SEO can drive 50%+ of your website traffic organically, reducing customer acquisition costs.'
    },
    {
      question: 'How long before I see SEO results?',
      answer: 'SEO takes time. You\'ll typically see initial improvements in 3-6 months, with substantial growth in 6-12 months. It\'s a long-term investment with lasting returns.'
    },
    {
      question: 'Can you help with website redesigns?',
      answer: 'Yes. We redesign websites while preserving SEO value, maintaining rankings, and improving conversion rates with modern design and UX.'
    },
    {
      question: 'What about paid advertising?',
      answer: 'We offer both SEO (organic) and paid advertising (PPC). The best approach combines both for maximum visibility and conversions.'
    },
  ];

  const trustBadges = ['Google Partner', 'SEO Leaders', 'Award-Winning Design', '500+ Websites Launched'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Website Design & SEO Solutions',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'Web Development & Digital Marketing',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Website Design & SEO Solutions"
        heroSubtitle="High-Performance Web Development"
        heroDescription="Modern websites that rank and convert. SEO optimization, responsive design, digital marketing. Drive organic growth."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Free SEO Audit', secondary: 'Discuss Website' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Dominate Your Market Online"
        description="Get a high-performing website that ranks for your keywords and converts visitors into customers."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default WebDevelopmentPage;
