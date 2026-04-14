import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import MSPPage from '@/pages/MSPPage';
import SoftwareDevelopmentPage from '@/pages/SoftwareDevelopmentPage';
import WebDevelopmentPage from '@/pages/WebDevelopmentPage';
import MobileAppDevelopmentPage from '@/pages/MobileAppDevelopmentPage';
import CloudSolutionsPage from '@/pages/CloudSolutionsPage';
import AIMLServicesPage from '@/pages/AIMLServicesPage';
import AdditionalServicesPage from '@/pages/AdditionalServicesPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/msp" element={<MSPPage />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/mobile-apps" element={<MobileAppDevelopmentPage />} />
        <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
        <Route path="/ai-ml" element={<AIMLServicesPage />} />
        <Route path="/additional-services" element={<AdditionalServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
