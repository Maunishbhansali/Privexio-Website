'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CALENDAR_URL } from '@/lib/site-links';
import { getSafeLinkText, trackEvent } from '@/lib/analytics';

const scrollThresholds = [25, 50, 75, 90];

const isExternalUrl = (url) => {
  if (!url || typeof window === 'undefined') return false;

  try {
    const parsedUrl = new URL(url, window.location.href);
    return parsedUrl.origin !== window.location.origin;
  } catch (error) {
    return false;
  }
};

const AnalyticsEvents = () => {
  const pathname = usePathname();

  useEffect(() => {
    const firedScrollThresholds = new Set();

    // Fires scroll-depth events once per route view.
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolledPercent = Math.round((window.scrollY / scrollableHeight) * 100);

      scrollThresholds.forEach((threshold) => {
        if (scrolledPercent >= threshold && !firedScrollThresholds.has(threshold)) {
          firedScrollThresholds.add(threshold);
          trackEvent(`scroll_${threshold}`);
        }
      });
    };

    // Centralized click tracker for navigation, outbound links, Calendly, and annotated elements.
    const handleClick = (event) => {
      const clickedElement = event.target instanceof Element ? event.target : null;
      if (!clickedElement) return;

      const analyticsElement = clickedElement.closest('[data-analytics-event]');
      if (analyticsElement) {
        trackEvent(analyticsElement.dataset.analyticsEvent, {
          link_url: analyticsElement.getAttribute('href'),
          link_text: analyticsElement.dataset.analyticsLabel || getSafeLinkText(analyticsElement),
          service_name: analyticsElement.dataset.serviceName,
        });
      }

      const link = clickedElement.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      const linkUrl = link.href;
      const linkText = getSafeLinkText(link);

      if (href === '/contact' || linkUrl.endsWith('/contact')) {
        trackEvent('contact_click', { link_url: linkUrl, link_text: linkText });
      }

      if (href === '/case-studies' || linkUrl.endsWith('/case-studies')) {
        trackEvent('case_studies_click', { link_url: linkUrl, link_text: linkText });
      }

      const normalizedLinkUrl = linkUrl.replace(/\/$/, '');

      if (href === CALENDAR_URL || normalizedLinkUrl === CALENDAR_URL) {
        trackEvent('consultation_click', { link_url: linkUrl, link_text: linkText });
        // Calendly is currently opened as an external page, so this records the handoff.
        trackEvent('calendly_open', { link_url: linkUrl, link_text: linkText });
      }

      if (isExternalUrl(linkUrl)) {
        trackEvent('outbound_click', { link_url: linkUrl, link_text: linkText });
      }
    };

    // Fires if a future embedded Calendly flow emits its scheduled-event callback.
    const handleMessage = (event) => {
      const messageData = event.data;
      if (!messageData || typeof messageData !== 'object') return;

      if (messageData.event === 'calendly.event_scheduled') {
        trackEvent('calendly_booking_complete');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('message', handleMessage);
    document.addEventListener('click', handleClick, true);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('click', handleClick, true);
    };
  }, [pathname]);

  return null;
};

export default AnalyticsEvents;
