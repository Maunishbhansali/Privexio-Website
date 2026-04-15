import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingSupportCTA from '@/components/FloatingSupportCTA';

import HomePage from '@/pages/HomePage';
import MSPPage from '@/pages/MSPPage';
import CybersecurityPage from '@/pages/CybersecurityPage';
import CloudSolutionsPage from '@/pages/CloudSolutionsPage';
import SoftwareDevelopmentPage from '@/pages/SoftwareDevelopmentPage';
import WebDevelopmentPage from '@/pages/WebDevelopmentPage';
import MobileAppDevelopmentPage from '@/pages/MobileAppDevelopmentPage';
import AIMLServicesPage from '@/pages/AIMLServicesPage';
import ITConsultingPage from '@/pages/ITConsultingPage';
import AdditionalServicesPage from '@/pages/AdditionalServicesPage';
import ServiceCategoryPage from '@/pages/ServiceCategoryPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

const CategoryRoute = ({ serviceSlug }) => {
  const { categorySlug } = useParams();
  return <ServiceCategoryPage serviceSlug={serviceSlug} categorySlug={categorySlug} />;
};

const CaseStudyRoute = () => {
  const { slug } = useParams();
  return <CaseStudyPage slug={slug} />;
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/msp" element={<MSPPage />} />
        <Route path="/msp/:categorySlug" element={<CategoryRoute serviceSlug="managed-it-services" />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cybersecurity/:categorySlug" element={<CategoryRoute serviceSlug="cybersecurity" />} />
        <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
        <Route path="/cloud-solutions/:categorySlug" element={<CategoryRoute serviceSlug="cloud-solutions" />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/software-development/:categorySlug" element={<CategoryRoute serviceSlug="software-development" />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/web-development/:categorySlug" element={<CategoryRoute serviceSlug="web-development-seo-solutions" />} />
        <Route path="/mobile-apps" element={<MobileAppDevelopmentPage />} />
        <Route path="/mobile-apps/:categorySlug" element={<CategoryRoute serviceSlug="mobile-app-development" />} />
        <Route path="/ai-ml" element={<AIMLServicesPage />} />
        <Route path="/ai-ml/:categorySlug" element={<CategoryRoute serviceSlug="ai-automation-business-process-optimization" />} />
        <Route path="/it-consulting" element={<ITConsultingPage />} />
        <Route path="/it-consulting/:categorySlug" element={<CategoryRoute serviceSlug="it-consulting-digital-transformation" />} />
        <Route path="/additional-services" element={<AdditionalServicesPage />} />
        <Route path="/additional-services/:categorySlug" element={<CategoryRoute serviceSlug="it-consulting-digital-transformation" />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyRoute />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FloatingSupportCTA />
      <Toaster />
    </Router>
  );
}

export default App;
