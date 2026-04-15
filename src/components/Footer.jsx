import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Facebook, Layers, Linkedin, Mail, MapPin, Phone, Twitter, ArrowRight } from 'lucide-react';
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
    <footer className="border-t border-slate-800 bg-slate-950 pt-20 pb-12 text-slate-300 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          <div className="space-y-6 md:col-span-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary/20 p-2 rounded-xl">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white">Privexio</span>
            </Link>
            <p className="text-base text-slate-400 leading-relaxed pr-8">
              Premium managed IT, custom software, cloud solutions, and strategic technology consulting for ambitious North American enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 px-5 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">
                <CalendarDays className="mr-2 h-4 w-4" />
                Schedule Consult
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-3 text-base">
              <li><Link to="/" className="text-slate-400 transition-colors hover:text-primary inline-flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />Home</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 transition-colors hover:text-primary inline-flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />Case Studies</Link></li>
              <li><Link to="/about" className="text-slate-400 transition-colors hover:text-primary inline-flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 transition-colors hover:text-primary inline-flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Capabilities</h4>
            <ul className="space-y-3 text-base">
              {serviceCatalog.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-slate-400 transition-colors hover:text-primary inline-flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {service.navName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Connect</h4>
            <ul className="space-y-5 text-base text-slate-400">
              <li className="flex items-start group">
                <div className="mt-1 mr-4 bg-slate-900 p-2 rounded-lg text-primary">
                  <MapPin size={18} className="flex-shrink-0" />
                </div>
                <span>600 John St N<br />Hamilton, ON L8L 4S3</span>
              </li>
              <li className="flex items-center group">
                <div className="mr-4 bg-slate-900 p-2 rounded-lg text-primary">
                  <Phone size={18} className="flex-shrink-0" />
                </div>
                <a href="tel:+12268688363" className="transition-colors hover:text-primary font-medium">+1 (226) 868-8363</a>
              </li>
              <li className="flex items-center group">
                <div className="mr-4 bg-slate-900 p-2 rounded-lg text-primary">
                  <Mail size={18} className="flex-shrink-0" />
                </div>
                <a href={MAILTO_URL} className="transition-colors hover:text-primary font-medium">{CONTACT_EMAIL}</a>
              </li>
            </ul>
            
            <div className="mt-8 flex space-x-3">
              <button type="button" onClick={handleSocialClick} className="bg-slate-900 p-3 rounded-full text-slate-400 transition-all hover:bg-primary hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </button>
              <button type="button" onClick={handleSocialClick} className="bg-slate-900 p-3 rounded-full text-slate-400 transition-all hover:bg-primary hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-slate-800/60 pt-8 text-sm text-slate-500 md:flex-row">
          <p className="font-medium">&copy; {new Date().getFullYear()} Privexio. All rights reserved.</p>
          <div className="mt-4 space-x-6 md:mt-0 font-medium">
            <button type="button" onClick={handleLegalClick} className="transition-colors hover:text-primary">Privacy Policy</button>
            <button type="button" onClick={handleLegalClick} className="transition-colors hover:text-primary">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
