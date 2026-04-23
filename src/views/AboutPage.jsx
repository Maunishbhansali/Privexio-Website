import React from 'react';
import Link from 'next/link';
import { BookOpen, Cloud, ShieldCheck, Users, Wrench, Workflow } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageMeta } from '@/hooks/use-page-meta';

const CEO_NAME = 'Maunish Bhansali';

const AboutPage = () => {
  usePageMeta(
    'About',
    'Privexio helps teams run dependable IT, improve security, and modernize cloud operations with a delivery-first approach.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="page-hero">
          <div className="page-container">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  Founded in 2023
                </p>
                <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">About Privexio</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                  Privexio helps teams run dependable IT, strengthen security, and modernize cloud operations with delivery that stays supportable after go-live.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">What we optimize for</p>
                      <p className="mt-2 text-2xl font-bold">Operational clarity</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-950" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    {[
                      'Security-first defaults',
                      'M365 and identity',
                      'Cloud migrations',
                      'Backups and recovery',
                      'Monitoring and runbooks',
                      'Ongoing support',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-slate-100 px-4 py-3 font-semibold text-slate-800">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container-narrow">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Who we support',
                  desc: 'Teams that need stability, visibility, and a partner that can own outcomes across IT and cloud.',
                  icon: Users,
                },
                {
                  title: 'What we deliver',
                  desc: 'Secure operations, modern cloud environments, and reliable systems with documentation and runbooks.',
                  icon: ShieldCheck,
                },
                {
                  title: 'How we work',
                  desc: 'Clear scope, clean handoffs, and work that stays supportable after the project is done.',
                  icon: Wrench,
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-2xl border border-border bg-card p-6">
                    <Icon className="h-6 w-6 text-primary" />
                    <h2 className="mt-4 text-xl font-bold text-foreground">{card.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="rounded-[2rem] border border-border bg-card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">How it started</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground">A venture shaped by education and hands-on delivery.</h2>
                <div className="mt-6 space-y-5 text-lg text-muted-foreground">
                  <p>
                    Privexio was started by {CEO_NAME} after building a foundation in computer science, then moving deep into infrastructure, system
                    administration, and cloud operations.
                  </p>
                  <p>
                    Across years of cumulative experience supporting 50+ organizations, one industry gap kept showing up: solutions that "work" but are not
                    operationally clear. Thin handover. No runbooks. Security treated as an add-on. Teams left to support what they did not design.
                  </p>
                  <p>
                    In 2023, Privexio launched to solve real-world problems with a delivery standard that emphasizes security-first execution, strong
                    documentation, and systems that remain supportable after go-live.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Leadership</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground">{CEO_NAME}</h2>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">Founder &amp; CEO</p>

                <div className="mt-6 grid gap-4">
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-slate-950">
                    <div className="absolute inset-0 opacity-70">
                      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
                      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
                    </div>
                    <div className="relative flex items-center gap-4 p-6">
                      <div className="grid place-items-center rounded-2xl bg-white/10 p-3">
                        <img
                          src="/brand/png/privexio-mark-white-bg-256x256.webp"
                          alt=""
                          width="64"
                          height="64"
                          className="h-16 w-16 rounded-xl"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">CEO Photo Placeholder</p>
                        <p className="mt-1 text-sm text-slate-300">Replace this tile with a real headshot when ready.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-background p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Focus</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { icon: Cloud, label: 'Cloud and identity' },
                        { icon: ShieldCheck, label: 'Security operations' },
                        { icon: BookOpen, label: 'Documentation and runbooks' },
                        { icon: Workflow, label: 'Operational reliability' },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3">
                            <Icon className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-foreground">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-16 rounded-[2rem] bg-slate-50/90 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">What Privexio means in practice</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { value: '5+ years', label: 'Cumulative delivery experience' },
                  { value: '120+ orgs', label: 'Teams supported across environments' },
                  { value: '2023', label: 'Company launch to close the gap' },
                ].map((metric) => (
                  <div key={metric.value} className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm">
                    <div className="text-4xl font-bold text-slate-950 md:text-5xl">{metric.value}</div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
