import React from 'react';
import {
  siAtlassian,
  siCisco,
  siCloudflare,
  siDatadog,
  siDell,
  siFortinet,
  siGooglecloud,
  siJunipernetworks,
  siOkta,
  siPaloaltonetworks,
  siSplunk,
  siVeeam,
  siVmware,
  siZendesk,
} from 'simple-icons';

const partnerMarks = [
  siGooglecloud,
  siCisco,
  siCloudflare,
  siOkta,
  siVmware,
  siFortinet,
  siPaloaltonetworks,
  siJunipernetworks,
  siDell,
  siDatadog,
  siSplunk,
  siVeeam,
  siZendesk,
  siAtlassian,
];

const marqueeLogos = [...partnerMarks, ...partnerMarks];

const BrandMark = ({ icon }) => (
  <div className="partner-logo-mark flex h-18 items-center justify-center text-slate-800/85">
    <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
      <path d={icon.path} />
    </svg>
    <span className="ml-2 text-2xl font-semibold tracking-tight text-slate-800/90">{icon.title}</span>
  </div>
);

const PartnerLogos = () => {
  return (
    <section className="page-section overflow-hidden bg-white">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Platforms we work across</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Built for modern cloud, network, and enterprise environments.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Privexio supports projects that connect infrastructure, security, applications, and growth systems across the platforms business teams already depend on.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent" />

          <div className="partner-marquee-track items-center text-slate-800/90">
            {marqueeLogos.map((partner, index) => (
              <BrandMark key={`${partner.slug}-${index}`} icon={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
