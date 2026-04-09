import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: 'Feature not implemented',
      description: 'Social media links will be configured soon.'
    });
  };

  const handleLegalClick = () => {
    toast({
      title: 'Coming soon',
      description: 'Legal pages have not been added yet.'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Layers className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight text-white">Privexio</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Your trusted partner for comprehensive enterprise IT services and software development solutions.
            </p>
            <div className="flex space-x-4">
              <button type="button" onClick={handleSocialClick} className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn coming soon">
                <Linkedin size={20} />
              </button>
              <button type="button" onClick={handleSocialClick} className="text-slate-400 hover:text-primary transition-colors" aria-label="Twitter coming soon">
                <Twitter size={20} />
              </button>
              <button type="button" onClick={handleSocialClick} className="text-slate-400 hover:text-primary transition-colors" aria-label="Facebook coming soon">
                <Facebook size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/msp" className="hover:text-primary transition-colors">MSP Services</Link></li>
              <li><Link to="/software-development" className="hover:text-primary transition-colors">Software Dev</Link></li>
              <li><Link to="/cloud-solutions" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/ai-ml" className="hover:text-primary transition-colors">AI & ML</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start"><MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" /> 123 Tech Avenue, Suite 400<br />San Francisco, CA 94107</li>
              <li className="flex items-center"><Phone size={16} className="mr-2 flex-shrink-0" /> +1 (555) 123-4567</li>
              <li className="flex items-center"><Mail size={16} className="mr-2 flex-shrink-0" /> contact@privexio.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Privexio. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <button type="button" onClick={handleLegalClick} className="hover:text-white transition-colors">Privacy Policy</button>
            <button type="button" onClick={handleLegalClick} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
