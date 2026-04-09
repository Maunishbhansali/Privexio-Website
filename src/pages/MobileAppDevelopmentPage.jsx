
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const MobileAppDevelopmentPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile App Development</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Engaging native and cross-platform mobile experiences for iOS and Android.</p>
        </section>
        <section className="section-padding container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Connect with Users Anywhere, Anytime</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Privexio develops powerful mobile applications that place your business right in your customers' pockets. Whether you need a high-performance Native iOS/Android app or a cost-effective cross-platform solution (React Native/Flutter), our team delivers excellence.
          </p>
        </section>
      </div>
      <CTASection heading="Launch Your Mobile Strategy" description="From concept to App Store launch, we guide you through the entire mobile app journey." />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage;
