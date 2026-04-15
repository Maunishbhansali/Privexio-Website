import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDAR_URL } from '@/lib/site-links';

const CTASection = ({
  heading,
  description,
  buttonText = 'Schedule a Consultation',
  buttonLink = CALENDAR_URL,
  secondaryText = 'Contact Us',
  secondaryLink = '/contact',
}) => {
  const isExternalLink = buttonLink.startsWith('http');
  const isSecondaryExternal = secondaryLink.startsWith('http') || secondaryLink.startsWith('mailto:');

  return (
    <section className="section-padding bg-primary text-center text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-5xl">{heading}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {isExternalLink ? (
            <a href={buttonLink} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full rounded-full bg-white px-8 py-6 text-lg font-semibold text-primary hover:bg-gray-100 sm:w-auto">
                <CalendarDays className="mr-2 h-5 w-5" />
                {buttonText}
              </Button>
            </a>
          ) : (
            <Link to={buttonLink}>
              <Button size="lg" className="w-full rounded-full bg-white px-8 py-6 text-lg font-semibold text-primary hover:bg-gray-100 sm:w-auto">
                {buttonText}
              </Button>
            </Link>
          )}

          {isSecondaryExternal ? (
            <a href={secondaryLink} target={secondaryLink.startsWith('http') ? '_blank' : undefined} rel={secondaryLink.startsWith('http') ? 'noreferrer' : undefined}>
              <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-primary sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                {secondaryText}
              </Button>
            </a>
          ) : (
            <Link to={secondaryLink}>
              <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-primary sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                {secondaryText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
