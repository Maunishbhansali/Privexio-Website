import React from 'react';

const PageHero = ({ eyebrow, title, description, before, children, className = '' }) => (
  <section className={`page-hero text-white ${className}`}>
    <div className="page-container-narrow">
      {before}
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p>}
      <h1 className="mt-4 break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">{title}</h1>
      {description && <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
