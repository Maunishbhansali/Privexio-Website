import React from 'react';
import { Mail } from 'lucide-react';
import { MAILTO_URL } from '@/lib/site-links';

const FloatingSupportCTA = () => {
  return (
    <a
      href={MAILTO_URL}
      className="fixed bottom-4 right-4 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      aria-label="Email Our Team"
      title="Email Our Team"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-10 sm:w-10">
        <Mail className="h-5 w-5" />
      </span>
    </a>
  );
};

export default FloatingSupportCTA;
