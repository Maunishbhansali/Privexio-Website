
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMap from '@/components/ContactMap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  usePageMeta(
    'Contact',
    'Contact Privexio to discuss managed IT, software development, cloud, mobile, web, or AI project requirements.'
  );

  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will contact you shortly.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="bg-slate-900 py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Get in touch with our tech experts to discuss your project requirements.</p>
        </section>

        <section className="section-padding container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Form */}
            <div className="lg:w-2/3 bg-card border border-border p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange} className="bg-background text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} className="bg-background text-foreground" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-background text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      <option value="">Select a service...</option>
                      <option value="msp">MSP Services</option>
                      <option value="software">Software Development</option>
                      <option value="web">Web Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="ai">AI/ML</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="bg-background text-foreground" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit Message</Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">Prefer to talk directly? Reach out via phone or email during our business hours.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Office Address</h4>
                    <p className="text-muted-foreground">600 John St N<br/>Hamilton, ON L8L 4S3</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <a href="tel:+12268688363" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (226) 868-8363
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@privexio.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-3 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">Find Us</h3>
                <div className="overflow-hidden rounded-md border border-border bg-muted">
                  <ContactMap />
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://www.openstreetmap.org/?mlat=43.2755&mlon=-79.8505#map=16/43.2755/-79.8505"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Open in OpenStreetMap
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=600+John+St+N,+Hamilton,+ON+L8L+4S3"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
