import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TestimonialCard = ({ slug, result, company, industry, summary, outcome }) => {
  return (
    <Link to={`/case-studies/${slug}`} className="group block rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{industry}</p>
        <h3 className="mt-3 text-3xl font-bold text-foreground leading-tight">{result}</h3>
      </div>

      <p className="mt-5 text-base leading-7 text-muted-foreground">{summary}</p>

      <div className="mt-8 rounded-xl bg-slate-50 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Business outcome</p>
        <p className="mt-2 text-lg font-semibold text-foreground">{outcome}</p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
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
