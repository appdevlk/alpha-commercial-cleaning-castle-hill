import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company',
  },
  title: 'Commercial Cleaning Company | Professional Business Cleaning Services Parramatta',
  description:
    'Leading commercial cleaning company providing professional business cleaning services across Parramatta. Expert commercial cleaners, flexible contracts, and comprehensive workplace solutions. Get quote!',
  keywords: [
    'commercial cleaning company',
    'commercial cleaning services',
    'business cleaning company',
    'office cleaning company',
    'commercial cleaners',
    'corporate cleaning services',
    'commercial cleaning contractors',
    'business cleaning services',
    'workplace cleaning company',
    'commercial facility cleaning',
    'industrial cleaning company',
    'retail cleaning services',
    'hospitality cleaning company',
    'commercial cleaning Parramatta',
    'professional commercial cleaning',
    'commercial cleaning contracts',
    'commercial building cleaning',
    'commercial maintenance services',
    'commercial janitorial services',
    'enterprise cleaning solutions',
  ],
  authors: [{ name: 'Alpha Clean Group Parramatta Team' }],
  publisher: 'Alpha Clean Group Parramatta',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Commercial Cleaning Company | Professional Business Cleaning Services Parramatta',
    description:
      'Premier commercial cleaning company offering comprehensive business cleaning services. Expert commercial cleaners, flexible contracts, and workplace solutions across Parramatta.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Company - Alpha Clean Group Parramatta',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Company | Professional Business Cleaning Parramatta',
    description:
      'Leading commercial cleaning company with expert business cleaning services, flexible contracts, and comprehensive workplace solutions across Parramatta.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Professional Commercial Cleaning Company Parramatta',
      },
    ],
    site: '@AlphaGroupAU',
    creator: '@AlphaGroupAU',
  },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Wentworthville',
    'geo.position': '-33.8041;150.9693',
    ICBM: '-33.8041, 150.9693',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
