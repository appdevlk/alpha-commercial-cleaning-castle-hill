import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Polyfill localStorage for SSR. Always override — Node 22 with the
// --localstorage-file flag provides a broken stub that lacks getItem etc.
if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).localStorage = {
    getItem: () => null,
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
    length: 0,
    key: () => null,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).sessionStorage = (global as any).localStorage;
}

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alpha-commercial-cleaning-castle-hill.com.au/'),
  alternates: {
    canonical: 'https://alpha-commercial-cleaning-castle-hill.com.au/',
  },
  title: 'Commercial Cleaning Castle Hill | Alpha Clean Group',
  description:
    'Reliable commercial and office cleaning across Castle Hill and the Hills District. Strata, medical, childcare, gym, warehouse and end of lease cleaning by a fully insured local team. Request a free quote.',
  keywords: [
    'commercial cleaning Castle Hill',
    'office cleaning Castle Hill',
    'cleaning services Castle Hill',
    'Hills District cleaning',
    'Baulkham Hills cleaning',
    'Norwest cleaning',
    'Bella Vista cleaning',
    'Kellyville cleaning',
    'strata cleaning Hills District',
    'medical centre cleaning Castle Hill',
    'childcare cleaning Castle Hill',
    'warehouse cleaning Castle Hill',
    'end of lease cleaning Castle Hill',
    'eco-friendly cleaning services',
    'professional cleaning Castle Hill',
    'commercial cleaning company',
    'after hours office cleaning',
    'fully insured cleaners',
    'gym cleaning Castle Hill',
    'cleaning company Hills District',
  ],
  openGraph: {
    title: 'Commercial Cleaning Castle Hill | Hills District Specialists',
    description:
      "Castle Hill's local commercial cleaning team. Offices, strata, medical, childcare, gyms, warehouses and end of lease — handled by an insured crew with eco-friendly products and flexible scheduling across the Hills District.",
    type: 'website',
    url: 'https://alpha-commercial-cleaning-castle-hill.com.au/',
    siteName: 'Alpha Clean Group',
    images: [
      {
        url: 'https://alpha-commercial-cleaning-castle-hill.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Castle Hill',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Castle Hill | Alpha Clean Group',
    description:
      'Castle Hill commercial cleaning across offices, strata, medical centres, childcare facilities, gyms and warehouses. Local crew, eco-friendly products, flexible after-hours scheduling.',
    images: [
      {
        url: 'https://alpha-commercial-cleaning-castle-hill.com.au/meta.png',
        alt: 'Alpha Clean Group Castle Hill',
      },
    ],
    site: '@AlphaGroupAU',
    creator: '@AlphaGroupAU',
  },
  authors: [
    {
      name: 'Alpha Clean Group Castle Hill Team',
    },
  ],
  publisher: 'Alpha Clean Group Castle Hill',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/fav/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="manifest" href="/fav/manifest.json" />
        <meta name="msapplication-TileColor" content="#12a400" />
        <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
        <meta name="theme-color" content="#12a400" />
        <meta name="theme-color" content="#12a400" />
      </head>
      <body
        className={`${redHatDisplay.variable} font-sans antialiased min-h-screen flex flex-col bg-white overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow w-full overflow-x-hidden">
          <div>{children}</div>
        </main>
        <Footer />
        <GoogleAnalytics ga_id="G-880ERL1VW9" />
      </body>
    </html>
  );
}
