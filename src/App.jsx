'use client';

import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingSupportCTA from '@/components/FloatingSupportCTA';

import HomePage from '@/views/HomePage';
import MSPPage from '@/views/MSPPage';
import CybersecurityPage from '@/views/CybersecurityPage';
import CloudSolutionsPage from '@/views/CloudSolutionsPage';
import SoftwareDevelopmentPage from '@/views/SoftwareDevelopmentPage';
import WebDevelopmentPage from '@/views/WebDevelopmentPage';
import MobileAppDevelopmentPage from '@/views/MobileAppDevelopmentPage';
import AIMLServicesPage from '@/views/AIMLServicesPage';
import ITConsultingPage from '@/views/ITConsultingPage';
import AdditionalServicesPage from '@/views/AdditionalServicesPage';
import ServiceCategoryPage from '@/views/ServiceCategoryPage';
import CaseStudiesPage from '@/views/CaseStudiesPage';
import CaseStudyPage from '@/views/CaseStudyPage';
import AboutPage from '@/views/AboutPage';
import ContactPage from '@/views/ContactPage';
import NotFoundPage from '@/views/NotFoundPage';

const routeComponents = {
  '': HomePage,
  msp: MSPPage,
  cybersecurity: CybersecurityPage,
  'cloud-solutions': CloudSolutionsPage,
  'software-development': SoftwareDevelopmentPage,
  'web-development': WebDevelopmentPage,
  'mobile-apps': MobileAppDevelopmentPage,
  'ai-ml': AIMLServicesPage,
  'it-consulting': ITConsultingPage,
  'additional-services': AdditionalServicesPage,
  'case-studies': CaseStudiesPage,
  about: AboutPage,
  contact: ContactPage,
};

const serviceSlugByRoute = {
  msp: 'managed-it-services',
  cybersecurity: 'cybersecurity',
  'cloud-solutions': 'cloud-solutions',
  'software-development': 'software-development',
  'web-development': 'web-development-seo-solutions',
  'mobile-apps': 'mobile-app-development',
  'ai-ml': 'ai-automation-business-process-optimization',
  'it-consulting': 'it-consulting-digital-transformation',
  'additional-services': 'it-consulting-digital-transformation',
};

function resolvePage(slugSegments) {
  const [section = '', detail, extra] = slugSegments;

  if (extra) {
    return <NotFoundPage />;
  }

  if (section === 'case-studies' && detail) {
    return <CaseStudyPage slug={detail} />;
  }

  if (serviceSlugByRoute[section] && detail) {
    return <ServiceCategoryPage serviceSlug={serviceSlugByRoute[section]} categorySlug={detail} />;
  }

  const PageComponent = routeComponents[section];
  return PageComponent ? <PageComponent /> : <NotFoundPage />;
}

function App({ slugSegments = [] }) {
  return (
    <>
      <ScrollToTop />
      {resolvePage(slugSegments)}
      <FloatingSupportCTA />
      <Toaster />
    </>
  );
}

export default App;
