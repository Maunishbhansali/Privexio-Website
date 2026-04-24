import React from 'react';

const PageHero = ({ eyebrow, title, description, before, children, className = '' }) => (
  <section className={`page-hero text-white ${className}`}>
    <div className="page-container-narrow">
      {before}
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>}
      <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1>
      {description && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{description}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
