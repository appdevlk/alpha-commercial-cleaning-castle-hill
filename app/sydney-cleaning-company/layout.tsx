import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company',
  },
  title: 'Parramatta Cleaning Company | Professional Cleaning Services Alpha Clean Group',
  description:  
    'Leading Parramatta cleaning company providing professional residential & commercial cleaning services. Expert cleaners, eco-friendly products, reliable service across Parramatta metro. Get instant quote!',
  keywords: [
    'parramatta cleaning company',
    'cleaning company parramatta',
    'professional cleaning parramatta',
    'parramatta cleaning services',
    'cleaning company near me',
    'commercial cleaning parramatta',
    'residential cleaning parramatta',
    'office cleaning parramatta',
    'house cleaning parramatta',
    'best cleaning company parramatta',
    'reliable cleaning company',
    'parramatta metro cleaning',
    'cleaning services parramatta',
    'professional cleaners parramatta',
    'cleaning business parramatta',
    'parramatta cleaning contractors',
    'local cleaning company',
    'cleaning company nsw',
    'parramatta cleaning experts',
    'trusted cleaning company',
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
    title: 'Parramatta Cleaning Company | Professional Cleaning Services Alpha Clean Group',
    description:
      'Premier Parramatta cleaning company offering comprehensive residential and commercial cleaning services. Professional team, eco-friendly products, and reliable service across Parramatta metro area.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Parramatta Cleaning Company - Alpha Clean Group',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parramatta Cleaning Company | Professional Cleaning Services',
    description:
      'Leading Parramatta cleaning company with expert cleaners, eco-friendly products, and comprehensive cleaning services for homes and businesses across Parramatta metro.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Professional Parramatta Cleaning Company',
      },
    ],
    site: '@AlphaGroupAU',
    creator: '@AlphaGroupAU',
  },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Parramatta',
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
