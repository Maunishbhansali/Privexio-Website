export const GA4_MEASUREMENT_ID = 'G-ERJWTPX6ZY';

const eventParamAllowlist = {
  page_view: [],
  free_audit_click: ['cta_location'],
  free_audit_form_start: ['form_name'],
  free_audit_form_submit: ['form_name', 'company_name', 'website_url', 'service_interest'],
  free_audit_form_error: ['form_name', 'error_type'],
  consultation_click: ['cta_location'],
  service_card_click: ['service_name', 'link_url'],
  outbound_click: ['link_url', 'link_text'],
};

const customEventParams = [
  'company_name',
  'website_url',
  'service_interest',
  'form_name',
  'error_type',
  'link_url',
  'link_text',
  'service_name',
  'cta_location',
];

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

const filterEventParams = (eventName, params) => {
  const allowedParams = eventParamAllowlist[eventName] ?? [];
  const cleanedParams = cleanParams(params);

  return allowedParams.reduce((filtered, key) => {
    if (Object.prototype.hasOwnProperty.call(cleanedParams, key)) {
      filtered[key] = cleanedParams[key];
    }

    return filtered;
  }, {});
};

const getParamReset = () => (
  customEventParams.reduce((resetParams, key) => {
    resetParams[key] = undefined;
    return resetParams;
  }, {})
);

const pushDataLayerEvent = (eventName, params = {}) => {
  window.dataLayer.push(getParamReset());
  window.dataLayer.push({
    event: eventName,
    ...getPageContext(),
    ...params,
  });
  window.dataLayer.push(getParamReset());
};

export const trackPageView = () => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  try {
    pushDataLayerEvent('page_view');
  } catch (error) {
    // Analytics should never block core site interactions.
  }
};

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  try {
    pushDataLayerEvent(eventName, filterEventParams(eventName, params));
  } catch (error) {
    // Analytics should never block core site interactions.
  }
};

export const getSafeLinkText = (element) => element?.innerText?.trim().replace(/\s+/g, ' ').slice(0, 120);
