import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHub from '@/components/ServiceHub';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { usePageMeta } from '@/hooks/use-page-meta';

const MobileAppDevelopmentPage = () => {
  const service = getServiceBySlug('mobile-app-development');
  usePageMeta('Mobile App Development', service.description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHub service={service} />
      </main>
      <CTASection heading="Launch a mobile app users will keep using" description="Plan a secure iOS, Android, or cross-platform app with field, customer, or regulated workflows." buttonText="Plan My Mobile App" />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage;
