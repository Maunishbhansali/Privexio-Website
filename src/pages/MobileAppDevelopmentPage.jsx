import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Smartphone, Zap, Shield, TrendingUp, Users, Cloud } from 'lucide-react';

const MobileAppDevelopmentPage = () => {
  usePageMeta(
    'Mobile App Development | iOS & Android | Privexio',
    'Native and cross-platform mobile app development. iOS, Android, React Native. Enterprise-grade apps. Free app strategy consultation.'
  );

  const mainServices = [
    { icon: Smartphone, title: 'Native iOS & Android Apps', description: 'High-performance native applications optimized for each platform\'s unique capabilities and user expectations.' },
    { icon: Zap, title: 'Cross-Platform Development', description: 'React Native and Flutter apps for iOS and Android from a single codebase, reducing development time and costs.' },
    { icon: Cloud, title: 'Mobile Backend Services', description: 'Scalable APIs, real-time synchronization, push notifications, and cloud services for seamless app functionality.' },
    { icon: Shield, title: 'Security & Privacy', description: 'Enterprise-grade security including encryption, secure authentication, biometric support, and privacy compliance.' },
    { icon: Users, title: 'User Experience Design', description: 'Intuitive interfaces designed for mobile users with thoughtful navigation and engaging interactions.' },
    { icon: TrendingUp, title: 'App Store Optimization', description: 'Optimized app store listings, ratings management, and marketing strategies to drive downloads and engagement.' },
  ];

  const features = [
    'Native iOS (Swift) and Android (Kotlin) expertise',
    'React Native and Flutter for cross-platform apps',
    'Offline-first architecture for reliability',
    'Real-time data synchronization',
    'Push notification systems',
    'Integration with wearables and IoT',
    'Analytics and crash reporting',
    'Ongoing maintenance and app store updates',
  ];

  const faq = [
    {
      question: 'Should we build iOS, Android, or both?',
      answer: 'It depends on your target market. In North America, supporting both is common. Native apps offer best performance, cross-platform tools like React Native offer faster, more cost-effective development.'
    },
    {
      question: 'How long does app development take?',
      answer: 'Simple apps take 3-4 months, complex enterprise apps take 6-12+ months. We provide detailed timelines after requirements gathering.'
    },
    {
      question: 'What about app maintenance after launch?',
      answer: 'We provide ongoing support including bug fixes, OS updates, feature additions, and app store submissions. This is included in our support plans.'
    },
    {
      question: 'How much will my app cost?',
      answer: 'Costs vary widely based on complexity. A simple MVP might be $50K, while complex enterprise apps can be $500K+. We provide transparent estimates after planning.'
    },
  ];

  const trustBadges = ['100+ Apps Launched', 'App Store Approved', 'iOS & Android Certified', 'Enterprise Trusted'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Mobile App Development',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'Mobile App Development',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Mobile App Development"
        heroSubtitle="iOS & Android Solutions"
        heroDescription="Native iOS, Android, and cross-platform apps built for enterprise users. High-performance, secure, scalable solutions."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Discuss Your App Idea', secondary: 'Get Strategy' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Launch Your Mobile App"
        description="Let's build an app that engages users and drives business results on iOS and Android."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default MobileAppDevelopmentPage;
