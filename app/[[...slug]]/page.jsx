import App from '@/App';
import { caseStudies } from '@/data/caseStudies';
import { getCategory, getServiceBySlug, serviceCatalog } from '@/data/serviceCatalog';

const siteUrl = 'https://privexio.com';

const serviceSlugByRoute = {
  msp: 'managed-it-services',
  cybersecurity: 'cybersecurity',
  'cloud-solutions': 'cloud-solutions',
  'software-development': 'software-development',
  'web-development': 'web-development-seo-solutions',
  'mobile-apps': 'mobile-app-development',
  'ai-ml': 'ai-automation-business-process-optimization',
  'it-consulting': 'it-consulting-digital-transformation',
  'additional-services': 'it-consulting-digital-transformation',
};

const staticRoutes = ['', ...Object.keys(serviceSlugByRoute), 'case-studies', 'about', 'contact'];

function getRouteMetadata(slugSegments) {
  const [section = '', detail] = slugSegments;
  const path = `/${slugSegments.join('/')}`;
  const canonical = slugSegments.length ? path : '/';

  if (section === 'case-studies' && detail) {
    const caseStudy = caseStudies.find((item) => item.slug === detail);
    return {
      title: caseStudy?.title ?? 'Case Study',
      description: caseStudy?.summary,
      canonical,
    };
  }

  if (serviceSlugByRoute[section] && detail) {
    const service = getServiceBySlug(serviceSlugByRoute[section]);
    const category = getCategory(serviceSlugByRoute[section], detail);
    return {
      title: category && service ? `${category.title} | ${service.title}` : 'Service Category',
      description: category ? `${category.title} by Privexio for modern business teams. ${category.intro}` : undefined,
      canonical,
    };
  }

  const service = serviceCatalog.find((item) => item.path === canonical);
  if (service) {
    return {
      title: service.title,
      description: service.description,
      canonical,
    };
  }

  const pageMeta = {
    '': {
      title: 'Managed IT, Cloud, Software, Web, Mobile, and AI Services',
      description: 'Technology services for managed IT, cybersecurity, cloud, software, web, mobile, and AI automation teams.',
    },
    'case-studies': {
      title: 'Case Studies',
      description: 'Explore Privexio case studies across cloud migration, software development, cybersecurity, AI automation, and web development.',
    },
    about: {
      title: 'About',
      description: 'Learn about Privexio and how our team helps businesses modernize technology operations.',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Privexio to discuss managed IT, cybersecurity, software, web, mobile, cloud, and AI service needs.',
    },
  };

  return {
    ...(pageMeta[section] ?? {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist or may have moved.',
    }),
    canonical,
  };
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugSegments = resolvedParams?.slug ?? [];
  const { title, description, canonical } = getRouteMetadata(slugSegments);
  const absoluteUrl = `${siteUrl}${canonical === '/' ? '/' : canonical}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | Privexio`,
      description,
      url: absoluteUrl,
    },
    twitter: {
      title: `${title} | Privexio`,
      description,
    },
  };
}

export function generateStaticParams() {
  const serviceCategoryRoutes = Object.entries(serviceSlugByRoute).flatMap(([route, serviceSlug]) => {
    const service = getServiceBySlug(serviceSlug);
    return service?.categories.map((category) => ({ slug: [route, category.slug] })) ?? [];
  });

  return [
    ...staticRoutes.map((route) => ({ slug: route ? [route] : [] })),
    ...serviceCategoryRoutes,
    ...caseStudies.map((caseStudy) => ({ slug: ['case-studies', caseStudy.slug] })),
  ];
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <App slugSegments={resolvedParams?.slug ?? []} />;
}
