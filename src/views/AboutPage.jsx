import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageMeta } from '@/hooks/use-page-meta';
import { CALENDAR_URL } from '@/lib/site-links';
import { Button } from '@/components/ui/button';

const CEO_NAME = 'Maunish Bhansali';

const timeline = [
  {
    date: '2015-2018',
    title: 'Computer Science Foundation',
    detail: 'Completed BCA in Computer Science and built strong software fundamentals.',
  },
  {
    date: '2019-2021',
    title: 'Infrastructure And Systems Training',
    detail: 'Specialized in network infrastructure and system administration (Conestoga College).',
  },
  {
    date: '2021-2022',
    title: 'IT System Administration',
    detail: 'Operated LAN/WAN systems, Microsoft 365 access, performance monitoring, and practical documentation.',
  },
  {
    date: '2022-2023',
    title: 'Virtualization And Field Delivery',
    detail: 'Implemented ESXi/Hyper-V and SAN/NAS environments and delivered systems based on real user requirements.',
  },
  {
    date: '2023',
    title: 'Privexio Launches',
    detail: 'Started Privexio to deliver managed IT and cloud work with stronger handover, documentation, and security-first execution.',
  },
  {
    date: '2023-2024',
    title: 'M365 Migrations In Healthcare',
    detail: 'Led end-to-end Microsoft 365 migrations and supported FortiGate, servers, backups, and endpoint tooling.',
  },
  {
    date: '2025-Present',
    title: 'Cloud-First Execution',
    detail: 'Designs and maintains AWS/GCP infrastructure, identity operations, security, and technical documentation.',
  },
];

const AboutPage = () => {
  usePageMeta(
    'About',
    'Learn about Privexio and how we help teams run reliable IT, build secure software, and modernize cloud operations.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="page-hero text-center">
          <div className="page-container-narrow">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">About Privexio</h1>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Privexio helps teams run dependable IT, reduce security risk, and ship work that stays supportable after launch.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full px-8 py-6 text-base">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base border-white/35 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                >
                  Explore Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container-narrow">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Our story</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Founded from real operational work.</h2>
              <div className="mt-6 space-y-5 text-lg text-muted-foreground">
                <p>
                  Privexio was started by {CEO_NAME} after years of working inside the environments most businesses run every day: Microsoft 365, firewall
                  and network security, virtualization, backups, and cloud migrations.
                </p>
                <p>
                  The pattern was always the same. A project would "finish", but handover was thin. There were no runbooks. Security was bolted on late.
                  And when the next incident hit, the team had to rediscover context from scratch.
                </p>
                <p>
                  Privexio exists to break that cycle. We deliver work with clear ownership, documentation that people actually use, and systems that remain
                  secure and supportable after go-live.
                </p>
              </div>
            </div>

            <div className="mb-12 rounded-[2rem] border border-border bg-card p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Leadership</p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">{CEO_NAME}, Founder &amp; CEO</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    The company is led with a delivery mindset: ship the work, document it, and make it supportable. That philosophy comes directly from
                    managing migrations, security operations, and production systems where there is no room for "we'll fix it later."
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Timeline</p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {timeline.map((item) => (
                      <div key={item.date} className="rounded-2xl border border-border/70 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{item.date}</p>
                        <p className="mt-2 text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-foreground">Security-first delivery</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Secure defaults, least privilege, and audit-friendly practices built into how we ship and support.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <Workflow className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-foreground">Predictable execution</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Milestones, weekly updates, and clean handoffs so stakeholders always know what's happening.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-foreground">Operational clarity</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Monitoring, runbooks, and documentation that make support straightforward after go-live.
                </p>
              </div>
            </div>

            <div className="mt-14 rounded-[2rem] border border-border bg-slate-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">How we work</p>
              <h2 className="mt-3 text-3xl font-bold">Simple, repeatable delivery.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-4">
                {[
                  { title: 'Discovery', desc: 'Clarify outcomes and risk. Align on what "done" means.' },
                  { title: 'Plan', desc: 'Define scope, milestones, and the communication cadence.' },
                  { title: 'Deliver', desc: 'Ship with secure defaults and a predictable release rhythm.' },
                  { title: 'Operate', desc: 'Handover, docs, monitoring, and continuous improvements.' },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl bg-white/5 p-5">
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Ready to talk scope?</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tell us your priority and we'll recommend the most direct path across IT, security, cloud, or software.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
                    <Button size="lg" className="rounded-full px-8">Book a Consultation</Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="rounded-full px-8">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
