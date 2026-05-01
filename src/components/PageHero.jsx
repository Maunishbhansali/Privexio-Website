import React from 'react';

const PageHero = ({ eyebrow, title, description, before, children, className = '', imageSrc, imageAlt = '', imagePosition = 'center' }) => (
  <section className={`page-hero relative overflow-hidden text-white ${className}`}>
    {imageSrc && (
      <>
        <img
          src={imageSrc}
          alt={imageAlt}
          width="1600"
          height="1000"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: imagePosition }}
          aria-hidden={imageAlt ? undefined : 'true'}
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />
      </>
    )}
    <div className={`page-container-narrow ${imageSrc ? 'relative' : ''}`}>
      {before}
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p>}
      <h1 className="mt-4 break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">{title}</h1>
      {description && <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
