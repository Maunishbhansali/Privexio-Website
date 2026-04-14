import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOLandingPageTemplate from '@/components/SEOLandingPageTemplate';
import CTASection from '@/components/CTASection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Shield, Eye, AlertTriangle, Lock, Zap, Users } from 'lucide-react';

const CybersecurityPage = () => {
  usePageMeta(
    'Cybersecurity Solutions | SOC, MDR, Compliance | Privexio',
    'Enterprise cybersecurity services: SOC/MDR, penetration testing, zero trust, SIEM, compliance. Protect your business. Free security assessment.'
  );

  const mainServices = [
    { icon: Eye, title: 'Security Operations Center (SOC)', description: '24/7 monitoring, threat detection, and rapid incident response managed by expert security professionals.' },
    { icon: AlertTriangle, title: 'Managed Detection & Response (MDR)', description: 'Advanced threat hunting, endpoint detection, and professional incident response to minimize breach impact.' },
    { icon: Lock, title: 'Penetration Testing', description: 'Ethical hacking and vulnerability assessments to identify and remediate security weaknesses before attackers find them.' },
    { icon: Shield, title: 'Zero Trust Architecture', description: 'Implement modern security principles with continuous verification, least privilege access, and microsegmentation.' },
    { icon: Zap, title: 'Compliance & Governance', description: 'Meet HIPAA, PCI-DSS, SOC2, ISO 27001 and other regulatory requirements with ongoing compliance management.' },
    { icon: Users, title: 'Security Awareness Training', description: 'Empower your team to identify threats with regular training, simulations, and security best practices.' },
  ];

  const features = [
    '99.9% threat detection rate with advanced AI/ML',
    'Average incident response time: 15 minutes',
    'Compliance-ready solutions for regulated industries',
    'Continuous vulnerability assessments and patch management',
    'Endpoint protection across all devices',
    'Advanced threat intelligence and dark web monitoring',
    'Incident response playbooks and disaster recovery',
    'Regular security audits and compliance reporting',
  ];

  const faq = [
    {
      question: 'What threats does SOC/MDR protect against?',
      answer: 'We protect against ransomware, malware, phishing, unauthorized access, data exfiltration, and advanced persistent threats (APTs) using AI-powered detection.'
    },
    {
      question: 'How quickly can you detect and respond to threats?',
      answer: 'Our average detection time is under 5 minutes with response time averaging 15 minutes. This dramatically reduces the damage from potential breaches.'
    },
    {
      question: 'Do you help with compliance requirements?',
      answer: 'Yes, we help with HIPAA, PCI-DSS, SOC2, ISO 27001, GDPR, and other compliance frameworks with documentation and ongoing audits.'
    },
    {
      question: 'What if we already have security tools in place?',
      answer: 'We integrate with your existing security tools and infrastructure, enhancing them with expert monitoring and response capabilities.'
    },
  ];

  const trustBadges = ['ISO 27001 Certified', 'SANS Trained', '99.9% Detection Rate', 'Financial Grade Security'];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Cybersecurity Solutions',
    'provider': {
      '@type': 'Organization',
      'name': 'Privexio',
      'url': 'https://privexio.com',
    },
    'areaServed': [{ '@type': 'Country', 'name': 'Canada' }, { '@type': 'Country', 'name': 'United States' }],
    'serviceType': 'Security Services',
    'description': 'Enterprise cybersecurity: SOC/MDR, penetration testing, compliance, zero trust architecture, threat hunting.',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SEOLandingPageTemplate
        heroTitle="Enterprise Cybersecurity Solutions"
        heroSubtitle="Threat Detection & Response"
        heroDescription="SOC, MDR, penetration testing, and compliance management. 24/7 threat detection with expert response. Protect your most critical assets."
        mainServices={mainServices}
        features={features}
        faq={faq}
        trustBadges={trustBadges}
        cta={{ primary: 'Get Security Assessment', secondary: 'Discuss Threats' }}
        schemaMarkup={schemaMarkup}
      />
      <CTASection
        heading="Strengthen Your Security Posture"
        description="Stop worrying about cyber threats. Let our expert team detect, respond to, and prevent attacks 24/7."
      />
      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default CybersecurityPage;
