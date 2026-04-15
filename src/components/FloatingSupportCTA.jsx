import React from 'react';
import { Mail } from 'lucide-react';
import { MAILTO_URL } from '@/lib/site-links';

const FloatingSupportCTA = () => {
  return (
    <a
      href={MAILTO_URL}
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)]"
      aria-label="Email Our Team"
      title="Email Our Team"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Mail className="h-5 w-5" />
      </span>
    </a>
  );
};

export default FloatingSupportCTA;
