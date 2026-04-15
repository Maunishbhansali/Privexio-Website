
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
import { Briefcase, CalendarDays, Headphones, Mail, MapPin, Phone, Presentation } from 'lucide-react';
import { CALENDAR_URL, CONTACT_EMAIL, MAILTO_URL } from '@/lib/site-links';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/maunish.bhansali@privexio.com';

const inquiryCards = [
  {
    title: 'General Inquiry',
    description: 'Questions about Privexio, service fit, partnerships, or how we work.',
    icon: Mail,
  },
  {
    title: 'Consultation Inquiry',
    description: 'Book a strategy conversation to review priorities, systems, and next steps.',
    icon: Presentation,
  },
  {
    title: 'Project Inquiry',
    description: 'Share implementation goals for software, cloud, security, AI, or web delivery.',
    icon: Briefcase,
  },
  {
    title: 'Technical Support',
    description: 'Reach out for support-related questions, response expectations, or escalation guidance.',
    icon: Headphones,
  },
];

const ContactPage = () => {
  usePageMeta(
    'Contact',
    'Contact Privexio to discuss managed IT, software development, cloud, mobile, web, or AI project requirements.'
  );

  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || 'Not specified',
          message: formData.message,
          _subject: `Privexio contact form inquiry from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for reaching out. Your inquiry has been submitted successfully.',
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: 'Message could not be sent',
        description: 'Please try again in a moment or contact us directly by phone or email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">
        <section className="page-hero text-center">
          <div className="page-container-narrow">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-300">Connect with our team for consultations, project planning, technical support questions, or general business inquiries.</p>
          </div>
        </section>

        <section className="page-section page-container">
          <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {inquiryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                  <a href={MAILTO_URL} className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary/80">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              );
            })}
          </div>

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
                      <option value="managed-it">Managed IT Services</option>
                      <option value="software">Custom Software Development</option>
                      <option value="web-seo">Web Development and SEO Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="ai-automation">AI Automation &amp; Business Process Optimization</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Solutions &amp; Migration</option>
                      <option value="consulting">IT Consulting &amp; Digital Transformation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="bg-background text-foreground" />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70">
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">Prefer to move faster? Schedule a consultation or email us directly during business hours and we&apos;ll route your inquiry to the right team.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Schedule a Consultation
                  </a>
                  <a href={MAILTO_URL} className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </div>
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
                    <p className="text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <a href={MAILTO_URL} className="text-muted-foreground hover:text-primary transition-colors">{CONTACT_EMAIL}</a>
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
