import '@/index.css';
import 'leaflet/dist/leaflet.css';
import ScrollAnimations from '@/components/ScrollAnimations';
import { DEFAULT_OG_IMAGE, getGlobalStructuredData, SITE_NAME, SITE_URL } from '@/lib/seo';

const defaultTitle = 'Privexio | Managed IT, Cloud, Cybersecurity & Software Services';
const defaultDescription = 'Privexio provides managed IT, cybersecurity, cloud migration, custom software, web, mobile, AI automation, and IT consulting services for growth-focused teams.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest?v=20260423',
  icons: {
    icon: [
      { url: '/favicon.ico?v=20260423', type: 'image/x-icon' },
      { url: '/favicon-32x32.png?v=20260423', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=20260423', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=20260423', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    locale: 'en',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  other: {
    'format-detection': 'telephone=yes',
    'geo.region': 'CA-ON',
    'geo.placename': 'Hamilton',
    'geo.position': '43.2745587;-79.8581752',
    ICBM: '43.2745587, -79.8581752',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

const structuredData = getGlobalStructuredData();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollAnimations />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
