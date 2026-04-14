import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import CaseStudyDetailPage from '@/pages/CaseStudyDetailPage';
import ManagedITServicesPage from '@/pages/ManagedITServicesPage';
import CybersecurityPage from '@/pages/CybersecurityPage';
import CloudSolutionsPage from '@/pages/CloudSolutionsPage';
import SoftwareDevelopmentPage from '@/pages/SoftwareDevelopmentPage';
import WebDevelopmentPage from '@/pages/WebDevelopmentPage';
import MobileAppDevelopmentPage from '@/pages/MobileAppDevelopmentPage';
import AIMLServicesPage from '@/pages/AIMLServicesPage';
import ITConsultingPage from '@/pages/ITConsultingPage';
import HelpDeskSupportPage from '@/pages/subpages/HelpDeskSupportPage';
import CloudMigrationPage from '@/pages/subpages/CloudMigrationPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />

        {/* Main Service Pages */}
        <Route path="/managed-it" element={<ManagedITServicesPage />} />
        <Route path="/msp" element={<ManagedITServicesPage />} /> {/* Legacy redirect */}
        <Route path="/managed-it/help-desk" element={<HelpDeskSupportPage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
        <Route path="/cloud-solutions/migration" element={<CloudMigrationPage />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/mobile-apps" element={<MobileAppDevelopmentPage />} />
        <Route path="/ai-ml" element={<AIMLServicesPage />} />
        <Route path="/it-consulting" element={<ITConsultingPage />} />

        {/* Core Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
