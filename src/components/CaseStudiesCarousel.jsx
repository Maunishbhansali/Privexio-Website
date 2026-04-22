import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';

const CaseStudiesCarousel = ({ caseStudies }) => {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!trackRef.current) return;

    const cardWidth = trackRef.current.clientWidth >= 1024 ? 380 : trackRef.current.clientWidth >= 640 ? 340 : 300;
    trackRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Button type="button" variant="outline" size="icon" className="rounded-full" onClick={() => scrollByAmount(-1)} aria-label="Scroll case studies left">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button type="button" variant="outline" size="icon" className="rounded-full" onClick={() => scrollByAmount(1)} aria-label="Scroll case studies right">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <Link href="/case-studies" className="text-sm font-semibold text-primary hover:text-primary/80">
          View all case studies
        </Link>
      </div>

      <div
        ref={trackRef}
        className="hide-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-4 pr-2"
      >
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.slug} className="flex w-[85vw] max-w-[21rem] shrink-0 snap-start sm:w-[20rem] lg:w-[21rem]">
            <TestimonialCard
              slug={caseStudy.slug}
              result={caseStudy.title}
              company={caseStudy.company}
              industry={caseStudy.industry}
              summary={caseStudy.summary}
              outcome={caseStudy.results[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;
