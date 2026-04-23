import { useEffect } from 'react';

const SITE_URL = 'https://privexio.com';
const DEFAULT_TITLE = 'Privexio | Managed IT, Cloud & Software Services';
const DEFAULT_DESCRIPTION = 'Managed IT, cybersecurity, cloud, and custom software to secure operations, reduce downtime, and ship faster. Book a consultation with Privexio.';

function upsertMeta(selector, attributes) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attributes)
      .filter(([key]) => key === 'name' || key === 'property')
      .forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
}

export function usePageMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const resolvedTitle = title ? `${title} | Privexio` : DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${SITE_URL}${window.location.pathname === '/' ? '/' : window.location.pathname}`;

    document.title = resolvedTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: resolvedDescription });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: resolvedTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: resolvedDescription });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: resolvedTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: resolvedDescription });

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);
  }, [title, description]);
}
