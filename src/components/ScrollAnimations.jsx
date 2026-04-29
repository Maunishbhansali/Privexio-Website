'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealPresets = [
  { selector: '.scroll-fade-up', from: { autoAlpha: 0, y: 32 } },
  { selector: '.scroll-fade-left', from: { autoAlpha: 0, x: -32 } },
  { selector: '.scroll-fade-right', from: { autoAlpha: 0, x: 32 } },
  { selector: '.scroll-scale', from: { autoAlpha: 0, scale: 0.96 } },
];

const ScrollAnimations = () => {
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(
        [
          '.scroll-fade-up',
          '.scroll-fade-left',
          '.scroll-fade-right',
          '.scroll-scale',
          '.stagger-child',
          '.gsap-parallax-bg',
        ],
        { clearProps: 'all' }
      );
    });

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        revealPresets.forEach(({ selector, from }) => {
          gsap.utils.toArray(selector).forEach((element) => {
            gsap.from(element, {
              ...from,
              duration: 0.65,
              ease: 'power2.out',
              clearProps: 'transform,opacity,visibility',
              scrollTrigger: {
                trigger: element,
                start: 'top 86%',
                once: true,
              },
            });
          });
        });

        gsap.utils.toArray('.stagger-parent').forEach((parent) => {
          const children = parent.querySelectorAll('.stagger-child');
          if (!children.length) return;

          gsap.from(children, {
            autoAlpha: 0,
            y: 28,
            duration: 0.58,
            ease: 'power2.out',
            stagger: 0.08,
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: parent,
              start: 'top 84%',
              once: true,
            },
          });
        });

        gsap.utils.toArray('.gsap-parallax-bg').forEach((element) => {
          gsap.fromTo(
            element,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: 'none',
              scrollTrigger: {
                trigger: element.closest('section') ?? element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
              },
            }
          );
        });
      });

      return () => context.revert();
    });

    ScrollTrigger.refresh();

    return () => media.revert();
  }, [pathname]);

  return null;
};

export default ScrollAnimations;
