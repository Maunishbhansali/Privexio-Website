import { caseStudies } from '@/data/caseStudies';
import { getCategory, getServiceBySlug, serviceCatalog } from '@/data/serviceCatalog';
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@/lib/site-links';

export const SITE_URL = 'https://privexio.com';
export const SITE_NAME = 'Privexio';
export const BRAND_LOGO_URL = `${SITE_URL}/brand/png/privexio-logo-full-white-bg-1024w.webp`;
export const DEFAULT_OG_IMAGE = '/brand/png/privexio-logo-full-white-bg-1024w.webp';

export const ORGANIZATION = {
  name: SITE_NAME,
  alternateName: ['Privexio IT Services', 'Privexio Software Development', 'Privexio Cloud Services'],
  url: `${SITE_URL}/`,
  email: CONTACT_EMAIL,
  telephone: '+1-226-868-8363',
  address: {
    streetAddress: '600 John St N',
    addressLocality: 'Hamilton',
    addressRegion: 'ON',
    postalCode: 'L8L 4S3',
    addressCountry: 'CA',
  },
  geo: {
    latitude: 43.2745587,
    longitude: -79.8581752,
  },
  sameAs: [LINKEDIN_URL, INSTAGRAM_URL, FACEBOOK_URL],
};

export const serviceSlugByRoute = {
  msp: 'managed-it-services',
  cybersecurity: 'cybersecurity',
  'cloud-solutions': 'cloud-solutions',
  'software-development': 'software-development',
  'web-development': 'web-development-seo-solutions',
  'mobile-apps': 'mobile-app-development',
  'ai-ml': 'ai-automation-business-process-optimization',
  'it-consulting': 'it-consulting-digital-transformation',
};

export const deprecatedRouteCanonicals = {
  'additional-services': '/it-consulting',
};

export const routeKeywords = {
  '/': [
    'Privexio',
    'Privexio IT Services',
    'Privexio Software Development',
    'Privexio Cloud Services',
    'managed IT services',
    'custom software development',
    'cloud migration services',
    'cybersecurity consulting',
  ],
  '/msp': ['managed IT services Hamilton', 'outsourced IT support', 'co-managed IT', 'remote helpdesk'],
  '/cybersecurity': ['cybersecurity consulting company', 'managed EDR', 'security assessment', 'zero trust consulting'],
  '/cloud-solutions': ['cloud migration services', 'cloud modernization', 'cloud cost optimization', 'DevOps services'],
  '/software-development': ['custom software development company', 'SaaS development', 'workflow automation', 'systems integration'],
  '/web-development': ['web development and SEO company', 'technical SEO websites', 'conversion landing pages'],
  '/mobile-apps': ['mobile app development company', 'cross-platform app development', 'enterprise mobile apps'],
  '/ai-ml': ['AI automation company', 'AI chatbot development', 'generative AI automation', 'business automation'],
  '/it-consulting': ['IT consulting services', 'digital transformation consulting', 'technology roadmap', 'vCIO'],
  '/about': ['About Privexio', 'Privexio founder', 'Privexio company'],
  '/careers': ['Privexio careers', 'technology careers Hamilton', 'IT careers Hamilton', 'software careers'],
  '/contact': ['Privexio contact', 'Privexio Hamilton', 'schedule IT consultation'],
};

const pageMeta = {
  '/': {
    title: 'Privexio | Managed IT, Cloud, Cybersecurity & Software Services',
    description:
      'Privexio provides managed IT, cybersecurity, cloud migration, custom software, web, mobile, AI automation, and IT consulting services for growth-focused teams.',
  },
  '/case-studies': {
    title: 'Privexio Case Studies | Technology, Cloud, AI & Web Results',
    description:
      'Explore Privexio case studies across cloud migration, software development, cybersecurity, AI automation, mobile apps, and web development.',
  },
  '/about': {
    title: 'About Privexio | Technology Delivery Partner',
    description:
      'Learn about Privexio, a Hamilton technology services company helping teams modernize IT, strengthen security, and build supportable digital systems.',
  },
  '/careers': {
    title: 'Careers at Privexio | Technology, IT, Cloud & Software Roles',
    description:
      'Explore careers at Privexio for people interested in managed IT, cybersecurity, cloud, software, web, mobile, AI, and digital transformation delivery.',
  },
  '/contact': {
    title: 'Contact Privexio | Book a Technology Consultation',
    description:
      'Contact Privexio in Hamilton to discuss managed IT, cybersecurity, cloud, software, web, mobile, AI, or digital transformation services.',
  },
  '/privacy': {
    title: 'Privacy Policy | Privexio',
    description: 'Read Privexio privacy practices, including what information we collect and how we use it.',
  },
  '/terms': {
    title: 'Terms of Service | Privexio',
    description: 'Review Privexio terms of service for using our website and engaging with our services.',
  },
};

const serviceTitleOverrides = {
  '/msp': 'Managed IT Services in Hamilton | Privexio',
  '/cybersecurity': 'Cybersecurity Consulting & Managed Detection | Privexio',
  '/cloud-solutions': 'Cloud Migration & Optimization Services | Privexio',
  '/software-development': 'Custom Software Development Company | Privexio',
  '/web-development': 'Web Development & SEO Services | Privexio',
  '/mobile-apps': 'Mobile App Development Company | Privexio',
  '/ai-ml': 'AI Automation & Business Process Optimization | Privexio',
  '/it-consulting': 'IT Consulting & Digital Transformation Services | Privexio',
};

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}

function resolvePath(slugSegments = []) {
  return slugSegments.length ? `/${slugSegments.join('/')}` : '/';
}

function serviceDescription(service, route) {
  const localPrefix = route === '/msp' ? ' in Hamilton' : '';
  return `${service.description} Privexio delivers ${service.navName}${localPrefix} with clear planning, practical execution, and support after launch.`;
}

export function getRouteSeo(slugSegments = []) {
  const [section = '', detail] = slugSegments;
  const requestedPath = resolvePath(slugSegments);

  if (deprecatedRouteCanonicals[section] && !detail) {
    const canonical = deprecatedRouteCanonicals[section];
    const canonicalSeo = getRouteSeo(canonical.slice(1).split('/'));
    return {
      ...canonicalSeo,
      canonical,
      requestedPath,
      robots: { index: false, follow: true },
    };
  }

  if (section === 'case-studies' && detail) {
    const caseStudy = caseStudies.find((item) => item.slug === detail);
    return {
      title: caseStudy ? `${caseStudy.title} | Privexio Case Study` : 'Case Study | Privexio',
      description: caseStudy?.summary ?? 'Read this Privexio case study.',
      canonical: requestedPath,
      requestedPath,
      keywords: ['Privexio portfolio', caseStudy?.service, caseStudy?.industry].filter(Boolean),
      type: 'caseStudy',
      caseStudy,
    };
  }

  if (serviceSlugByRoute[section] && detail) {
    const service = getServiceBySlug(serviceSlugByRoute[section]);
    const category = getCategory(serviceSlugByRoute[section], detail);
    return {
      title: category && service ? `${category.title} | ${service.navName} | Privexio` : 'Service Category | Privexio',
      description: category
        ? `${category.title} by Privexio for modern business teams. ${category.intro}`
        : 'Explore this Privexio service area.',
      canonical: requestedPath,
      requestedPath,
      keywords: [category?.title, service?.navName, service?.keywords].filter(Boolean),
      type: 'serviceCategory',
      service,
      category,
    };
  }

  const service = serviceCatalog.find((item) => item.path === requestedPath);
  if (service) {
    return {
      title: serviceTitleOverrides[requestedPath] ?? `${service.title} | Privexio`,
      description: serviceDescription(service, requestedPath),
      canonical: requestedPath,
      requestedPath,
      keywords: routeKeywords[requestedPath] ?? service.keywords.split(',').map((keyword) => keyword.trim()),
      type: 'service',
      service,
    };
  }

  const meta = pageMeta[requestedPath];
  if (meta) {
    return {
      ...meta,
      canonical: requestedPath,
      requestedPath,
      keywords: routeKeywords[requestedPath] ?? [],
      type: requestedPath === '/about' ? 'about' : requestedPath === '/careers' ? 'careers' : requestedPath === '/contact' ? 'contact' : 'page',
    };
  }

  return {
    title: 'Page Not Found | Privexio',
    description: 'The page you are looking for does not exist or may have moved.',
    canonical: requestedPath,
    requestedPath,
    robots: { index: false, follow: true },
    keywords: [],
    type: 'notFound',
  };
}

export function toNextMetadata(seo) {
  const url = absoluteUrl(seo.canonical);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    robots: seo.robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      url,
      locale: 'en',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function getGlobalStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: ORGANIZATION.name,
        alternateName: ORGANIZATION.alternateName,
        url: ORGANIZATION.url,
        logo: BRAND_LOGO_URL,
        image: BRAND_LOGO_URL,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.telephone,
        sameAs: ORGANIZATION.sameAs,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#localbusiness`,
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
        telephone: ORGANIZATION.telephone,
        email: ORGANIZATION.email,
        image: BRAND_LOGO_URL,
        logo: BRAND_LOGO_URL,
        priceRange: '$$',
        description:
          'Privexio provides managed IT, cybersecurity, cloud, software development, web, mobile, AI, and digital transformation services for modern businesses.',
        address: {
          '@type': 'PostalAddress',
          ...ORGANIZATION.address,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: ORGANIZATION.geo.latitude,
          longitude: ORGANIZATION.geo.longitude,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: ORGANIZATION.telephone,
          contactType: 'sales',
          email: ORGANIZATION.email,
          availableLanguage: ['en'],
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: ['Hamilton', 'Ontario', 'Canada'],
        sameAs: ORGANIZATION.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: ORGANIZATION.url,
        name: SITE_NAME,
        alternateName: ORGANIZATION.alternateName,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
    ],
  };
}

function breadcrumbItems(seo) {
  const items = [{ name: SITE_NAME, url: absoluteUrl('/') }];

  if (seo.type === 'service') {
    items.push({ name: seo.service.navName, url: absoluteUrl(seo.canonical) });
  }

  if (seo.type === 'serviceCategory') {
    items.push({ name: seo.service.navName, url: absoluteUrl(seo.service.path) });
    items.push({ name: seo.category.title, url: absoluteUrl(seo.canonical) });
  }

  if (seo.type === 'caseStudy') {
    items.push({ name: 'Case Studies', url: absoluteUrl('/case-studies') });
    items.push({ name: seo.caseStudy?.title ?? 'Case Study', url: absoluteUrl(seo.canonical) });
  }

  return items;
}

function breadcrumbSchema(seo) {
  const items = breadcrumbItems(seo);
  if (items.length < 2) {
    return null;
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(seo.canonical)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function serviceSchema(seo) {
  const service = seo.service;
  const name = seo.type === 'serviceCategory' ? seo.category.title : service.navName;

  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(seo.canonical)}#service`,
    name,
    description: seo.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['Hamilton', 'Ontario', 'Canada'],
    serviceType: service.navName,
    url: absoluteUrl(seo.canonical),
  };
}

export function getPageStructuredData(seo) {
  const graph = [];
  const breadcrumb = breadcrumbSchema(seo);

  if (breadcrumb) {
    graph.push(breadcrumb);
  }

  if (seo.type === 'service' || seo.type === 'serviceCategory') {
    graph.push(serviceSchema(seo));
  }

  if (seo.type === 'about') {
    graph.push({
      '@type': 'AboutPage',
      '@id': `${absoluteUrl('/about')}#aboutpage`,
      url: absoluteUrl('/about'),
      name: 'About Privexio',
      description: seo.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    });
  }

  if (seo.type === 'contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${absoluteUrl('/contact')}#contactpage`,
      url: absoluteUrl('/contact'),
      name: 'Contact Privexio',
      description: seo.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    });
  }

  if (seo.type === 'careers') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${absoluteUrl('/careers')}#careerspage`,
      url: absoluteUrl('/careers'),
      name: 'Careers at Privexio',
      description: seo.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    });
  }

  if (!graph.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function getCanonicalSitemapRoutes() {
  const serviceRoutes = serviceCatalog.map((service) => service.path);
  const serviceCategoryRoutes = serviceCatalog.flatMap((service) =>
    service.categories.map((category) => `${service.path}/${category.slug}`)
  );
  const caseStudyRoutes = caseStudies.map((caseStudy) => `/case-studies/${caseStudy.slug}`);

  return [
    '/',
    ...serviceRoutes,
    ...serviceCategoryRoutes,
    '/case-studies',
    ...caseStudyRoutes,
    '/about',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
  ];
}
