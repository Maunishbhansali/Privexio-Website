import React, { useEffect, useMemo, useRef, useState } from 'react';

const metrics = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 15000, suffix: '+', label: 'Tickets Resolved' },
  { value: 18000, suffix: '+', label: 'Hours Automated' },
  { value: 42, suffix: '+', label: 'Cloud Migrations' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const AnimatedMetric = ({ value, suffix, label, active }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId;
    let startTimestamp;
    const duration = 3000;

    const tick = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.round(progress * value));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [active, value]);

  return (
    <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm">
      <div className="text-4xl font-bold text-slate-950 md:text-5xl">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
    </div>
  );
};

const MetricsSection = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  const observerOptions = useMemo(
    () => ({
      root: null,
      threshold: 0.25,
    }),
    []
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <section ref={sectionRef} className="page-section bg-secondary/5">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Proof points</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Execution depth backed by measurable delivery outcomes.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We keep the experience clear for buyers while building the delivery discipline, support systems, and implementation depth enterprise teams actually need.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <AnimatedMetric key={metric.label} {...metric} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
