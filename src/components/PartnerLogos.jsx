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
  <div className={`partner-logo-mark flex items-center justify-center text-slate-800/85 ${compact ? 'h-16 px-3 sm:h-20 sm:px-4' : 'h-16 px-3'}`}>
    <img
      src={`/brand/partners/${partner.slug}.webp`}
      alt=""
      width="44"
      height="44"
      className={`${compact ? 'h-9 w-9 sm:h-11 sm:w-11' : 'h-9 w-9'} object-contain`}
      loading="lazy"
    />
    <span className={`${compact ? 'ml-3 text-xl sm:ml-4 sm:text-[1.9rem]' : 'ml-3 text-[1.15rem]'} font-semibold tracking-tight text-slate-800/90`}>{partner.title}</span>
  </div>
);

const PartnerLogos = ({ compact = false }) => {
  return (
    <section className={`${compact ? 'overflow-hidden bg-white' : 'page-section overflow-hidden bg-white'}`}>
      <div className="page-container">
        {!compact && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Platforms we work across</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Built for modern cloud, network, and enterprise environments.</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Privexio supports projects that connect infrastructure, security, applications, and growth systems across the platforms business teams already depend on.
            </p>
          </div>
        )}

        <div className={`relative overflow-hidden ${compact ? 'py-10' : 'mt-14'}`}>
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
