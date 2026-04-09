
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Shield, Clock, ServerCog, Activity } from 'lucide-react';

const MSPPage = () => {
  const features = [
    { icon: Clock, title: "24/7 Helpdesk Support", desc: "Round-the-clock technical assistance for your entire team." },
    { icon: Activity, title: "Proactive Monitoring", desc: "We identify and resolve issues before they impact your business." },
    { icon: Shield, title: "Advanced Cybersecurity", desc: "Endpoint protection, firewalls, and regular security audits." },
    { icon: ServerCog, title: "Infrastructure Management", desc: "Complete oversight of your servers, networks, and workstations." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Managed IT Services (MSP)</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Reliable, secure, and proactive IT management so you can focus on growing your business.</p>
        </section>

        <section className="section-padding container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Empower Your Business with Seamless IT</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Privexio, we understand that downtime is not an option. Our Managed Service Provider (MSP) solutions are designed to take the burden of IT management off your shoulders. We provide comprehensive support, from day-to-day helpdesk troubleshooting to complex network architecture and cybersecurity defenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((f, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-lg">
                <f.icon className="text-primary w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTASection heading="Secure Your IT Infrastructure" description="Contact us for a comprehensive IT audit and discover how our MSP services can benefit your organization." />
      <Footer />
    </div>
  );
};

export default MSPPage;
