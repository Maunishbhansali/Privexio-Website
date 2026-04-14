import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/components/WhatsAppChat';

const CTASection = ({ heading, description, buttonText = 'Contact Us', buttonLink = '/contact' }) => {
  return (
    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">{heading}</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to={buttonLink}>
            <Button size="lg" className="w-full rounded-full bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg sm:w-auto">
              {buttonText}
            </Button>
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-primary sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
