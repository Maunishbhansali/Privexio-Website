import '@/index.css';
import 'leaflet/dist/leaflet.css';

const siteUrl = 'https://privexio.com';
const defaultTitle = 'Privexio | Managed IT, Cloud, Software, Web, Mobile, and AI Services';
const defaultDescription = 'Privexio provides managed IT, cybersecurity, custom software development, SEO web development, mobile apps, cloud solutions, and AI automation for modern businesses.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Privexio',
  },
  description: defaultDescription,
  keywords: [
    'managed IT services',
    'custom software development',
    'web development SEO',
    'mobile app development',
    'cloud migration',
    'cloud cost optimization',
    'AI automation',
    'cybersecurity services',
  ],
  authors: [{ name: 'Privexio' }],
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/privexio-mark.svg?v=20260422', type: 'image/svg+xml' },
      { url: '/brand/png/privexio-mark-white-bg-64x64.png?v=20260422', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/brand/png/privexio-mark-white-bg-256x256.png?v=20260422', sizes: '256x256', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Privexio',
    title: 'Privexio | Managed IT, Software, Cloud, Web, Mobile and AI Services',
    description: 'Privexio helps organizations modernize with managed IT, cybersecurity, software, web, mobile, cloud, and AI services.',
    url: '/',
    locale: 'en',
    images: ['/privexio-logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privexio | Enterprise Technology Services',
    description: 'Managed IT, cybersecurity, software, web, mobile, cloud, and AI services for modern business teams.',
    images: ['/privexio-logo.svg'],
  },
  other: {
    'format-detection': 'telephone=yes',
    'geo.region': 'CA-ON',
    'geo.placename': 'Hamilton',
    'geo.position': '43.2755;-79.8505',
    ICBM: '43.2755, -79.8505',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Privexio',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/privexio-logo.svg`,
      email: 'maunish.bhansali@privexio.com',
      telephone: '+1-226-868-8363',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Privexio',
      url: `${siteUrl}/`,
      telephone: '+1-226-868-8363',
      email: 'maunish.bhansali@privexio.com',
      image: `${siteUrl}/privexio-logo.svg`,
      description: 'Privexio provides managed IT, cybersecurity, cloud, software development, web, mobile, and AI services for modern businesses.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '600 John St N',
        addressLocality: 'Hamilton',
        addressRegion: 'ON',
        postalCode: 'L8L 4S3',
        addressCountry: 'CA',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-226-868-8363',
        contactType: 'sales',
        availableLanguage: ['en'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Privexio Technology Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed IT Services and Cybersecurity' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Migration and Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation and Machine Learning' } },
        ],
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Privexio',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
