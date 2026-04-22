import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TestimonialCard = ({ slug, result, company, industry, summary, outcome }) => {
  return (
    <Link href={`/case-studies/${slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="min-h-[10.5rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{industry}</p>
        <h3 className="mt-3 line-clamp-4 text-2xl font-bold leading-tight text-foreground">{result}</h3>
      </div>

      <p className="mt-5 min-h-[9rem] line-clamp-5 text-sm leading-7 text-muted-foreground">{summary}</p>

      <div className="mt-6 min-h-[7rem] rounded-xl bg-slate-50 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Business outcome</p>
        <p className="mt-2 line-clamp-3 text-base font-semibold text-foreground">{outcome}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
        <div>
          <p className="font-semibold text-foreground">{company}</p>
          <p className="text-sm text-muted-foreground">Read full case study</p>
        </div>
        <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default TestimonialCard;
