import App from '@/App';
import { caseStudies } from '@/data/caseStudies';
import { getServiceBySlug } from '@/data/serviceCatalog';
import { getPageStructuredData, getRouteSeo, serviceSlugByRoute, toNextMetadata } from '@/lib/seo';

const staticRoutes = ['', ...Object.keys(serviceSlugByRoute), 'additional-services', 'case-studies', 'about', 'careers', 'contact', 'privacy', 'terms'];

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugSegments = resolvedParams?.slug ?? [];
  return toNextMetadata(getRouteSeo(slugSegments));
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
  const slugSegments = resolvedParams?.slug ?? [];
  const structuredData = getPageStructuredData(getRouteSeo(slugSegments));

  return (
    <>
      <App slugSegments={slugSegments} />
      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}
    </>
  );
}
