import React from 'react';
import { Cloud, Gauge, LifeBuoy, Server, ShieldCheck } from 'lucide-react';

const items = [
  { label: '24/7 Expert Support', icon: LifeBuoy },
  { label: 'Security-First Delivery', icon: ShieldCheck },
  { label: 'Cloud Specialists', icon: Cloud },
  { label: 'SLA Driven Response', icon: Gauge },
  { label: 'Enterprise Grade Infrastructure', icon: Server },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-slate-50/90">
      <div className="page-container py-5">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-4 py-3 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-slate-900">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
