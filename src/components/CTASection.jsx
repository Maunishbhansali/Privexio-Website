import React from 'react';
import Link from 'next/link';
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
    <section className="page-section bg-primary text-center text-primary-foreground">
      <div className="page-container-narrow">
        <h2 className="mb-6 break-words text-3xl font-bold text-primary-foreground md:text-5xl">{heading}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-primary-foreground/90 sm:text-lg md:text-xl">
          {description}
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {isExternalLink ? (
            <a href={buttonLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-white px-6 py-6 text-base font-semibold text-primary hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-lg">
                <CalendarDays className="mr-2 h-5 w-5" />
                {buttonText}
              </Button>
            </a>
          ) : (
            <Link href={buttonLink} className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-white px-6 py-6 text-base font-semibold text-primary hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-lg">
                {buttonText}
              </Button>
            </Link>
          )}

          {isSecondaryExternal ? (
            <a href={secondaryLink} target={secondaryLink.startsWith('http') ? '_blank' : undefined} rel={secondaryLink.startsWith('http') ? 'noreferrer' : undefined} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-transparent px-6 py-6 text-base text-white hover:bg-white hover:text-primary sm:w-auto sm:px-8 sm:text-lg">
                <Mail className="mr-2 h-5 w-5" />
                {secondaryText}
              </Button>
            </a>
          ) : (
            <Link href={secondaryLink} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full border-white/40 bg-transparent px-6 py-6 text-base text-white hover:bg-white hover:text-primary sm:w-auto sm:px-8 sm:text-lg">
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
