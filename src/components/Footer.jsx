import React from 'react';
import Link from 'next/link';
import { CalendarDays, Facebook, Layers, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { CALENDAR_URL, CONTACT_EMAIL, MAILTO_URL } from '@/lib/site-links';
import { serviceCatalog } from '@/data/serviceCatalog';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: 'Feature not implemented',
      description: 'Social media links will be configured soon.',
    });
  };

  const handleLegalClick = () => {
    toast({
      title: 'Coming soon',
      description: 'Legal pages have not been added yet.',
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12 text-slate-200">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Layers className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-white">Privexio</span>
            </Link>
            <p className="text-sm text-slate-400">
              Managed IT, software, web, mobile, cloud, AI, and cybersecurity services for ambitious growth-focused businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-primary/40 px-4 py-2 text-sm font-bold text-primary">
                <CalendarDays className="mr-2 h-4 w-4" />
                Schedule a Consultation
              </a>
              <a href={MAILTO_URL} className="inline-flex items-center rounded-full border border-slate-600 px-4 py-2 text-sm font-bold text-white">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </div>
            <div className="flex space-x-4">
              <button type="button" onClick={handleSocialClick} className="text-slate-400 transition-colors hover:text-primary" aria-label="LinkedIn coming soon">
                <Linkedin size={20} />
              </button>
              <button type="button" onClick={handleSocialClick} className="text-slate-400 transition-colors hover:text-primary" aria-label="Twitter coming soon">
                <Twitter size={20} />
              </button>
              <button type="button" onClick={handleSocialClick} className="text-slate-400 transition-colors hover:text-primary" aria-label="Facebook coming soon">
                <Facebook size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link href="/case-studies" className="transition-colors hover:text-primary">Case Studies</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {serviceCatalog.map((service) => (
                <li key={service.path}><Link href={service.path} className="transition-colors hover:text-primary">{service.navName}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start"><MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" /> 600 John St N<br />Hamilton, ON L8L 4S3</li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+12268688363" className="transition-colors hover:text-primary">+1 (226) 868-8363</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href={MAILTO_URL} className="transition-colors hover:text-primary">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-sm text-slate-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Privexio. All rights reserved.</p>
          <div className="mt-4 space-x-4 md:mt-0">
            <button type="button" onClick={handleLegalClick} className="transition-colors hover:text-white">Privacy Policy</button>
            <button type="button" onClick={handleLegalClick} className="transition-colors hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
