export const GA4_MEASUREMENT_ID = 'G-ERJWTPX6ZY';

const getPageContext = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  return {
    page_path: window.location.pathname,
    page_title: document.title,
    current_url: window.location.href,
  };
};

const cleanParams = (params = {}) => (
  Object.entries(params).reduce((cleaned, [key, value]) => {
    if (value === undefined || value === null || value === '') return cleaned;
    cleaned[key] = value;
    return cleaned;
  }, {})
);

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  try {
    window.dataLayer.push({
      event: eventName,
      ...getPageContext(),
      ...cleanParams(params),
    });
  } catch (error) {
    // Analytics should never block core site interactions.
  }
};

export const getSafeLinkText = (element) => element?.innerText?.trim().replace(/\s+/g, ' ').slice(0, 120);
