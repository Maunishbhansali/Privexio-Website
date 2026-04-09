import { useEffect } from 'react';

const DEFAULT_TITLE = 'Privexio - Your IT Partner';
const DEFAULT_DESCRIPTION = 'Privexio delivers managed IT, software development, cloud, web, mobile, and AI services for modern enterprises.';

export function usePageMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} | Privexio` : DEFAULT_TITLE;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute('content', description || DEFAULT_DESCRIPTION);
  }, [title, description]);
}
