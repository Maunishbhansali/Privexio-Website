import React from 'react';

const partnerMarks = [
  { slug: 'googlecloud', title: 'Google Cloud' },
  { slug: 'cisco', title: 'Cisco' },
  { slug: 'cloudflare', title: 'Cloudflare' },
  { slug: 'okta', title: 'Okta' },
  { slug: 'vmware', title: 'VMware' },
  { slug: 'fortinet', title: 'Fortinet' },
  { slug: 'paloaltonetworks', title: 'Palo Alto Networks' },
  { slug: 'junipernetworks', title: 'Juniper Networks' },
  { slug: 'dell', title: 'Dell' },
  { slug: 'datadog', title: 'Datadog' },
  { slug: 'splunk', title: 'Splunk' },
  { slug: 'veeam', title: 'Veeam' },
  { slug: 'zendesk', title: 'Zendesk' },
  { slug: 'atlassian', title: 'Atlassian' },
];

const marqueeLogos = [...partnerMarks, ...partnerMarks];

const BrandMark = ({ partner, compact = false }) => (
  <div className={`partner-logo-mark flex items-center justify-center text-slate-800/85 ${compact ? 'h-14' : 'h-12'}`}>
    <img
      src={`/brand/partners/${partner.slug}.webp`}
      alt=""
      width="28"
      height="28"
      className={`${compact ? 'h-7 w-7' : 'h-7 w-7'} object-contain`}
      loading="lazy"
    />
    <span className={`${compact ? 'ml-3 text-lg' : 'ml-2 text-[1.05rem]'} font-semibold tracking-tight text-slate-800/90`}>{partner.title}</span>
  </div>
);

const PartnerLogos = ({ compact = false }) => {
  return (
    <section className={`${compact ? 'overflow-hidden bg-slate-50/90' : 'page-section overflow-hidden bg-white'}`}>
      <div className="page-container">
        {!compact && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Platforms we work across</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Built for modern cloud, network, and enterprise environments.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Privexio supports projects that connect infrastructure, security, applications, and growth systems across the platforms business teams already depend on.
            </p>
          </div>
        )}

        <div className={`relative overflow-hidden ${compact ? 'py-8' : 'mt-14'}`}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent" />

          <div className="partner-marquee-track items-center text-slate-800/90">
            {marqueeLogos.map((partner, index) => (
              <BrandMark key={`${partner.slug}-${index}`} partner={partner} compact={compact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
