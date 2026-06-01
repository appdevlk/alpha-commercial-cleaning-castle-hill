import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services',
  },
  title: 'Professional Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Comprehensive cleaning services in Parramatta for residential and commercial properties. Alpha Clean Group offers office cleaning, carpet cleaning, end of lease, medical centre, gym, strata, warehouse, and childcare cleaning services.',
  keywords: [
    'cleaning services Parramatta',
    'professional cleaning services',
    'commercial cleaning services',
    'residential cleaning services',
    'office cleaning Parramatta',
    'carpet cleaning services',
    'end of lease cleaning',
    'medical centre cleaning',
    'gym cleaning services',
    'strata cleaning Parramatta',
    'warehouse cleaning services',
    'childcare cleaning',
    'cleaning company Parramatta',
    'Alpha Clean Group services',
    'cleaning services near me',
    'business cleaning services',
    'eco-friendly cleaning',
    'cleaning specialists Parramatta',
    'comprehensive cleaning solutions',
    'trusted cleaning company',
  ],
  openGraph: {
    title: 'Professional Cleaning Services Parramatta | Alpha Clean Group',
    description:
      'Discover our comprehensive range of cleaning services for homes and businesses in Parramatta. From office and carpet cleaning to specialized medical centre and childcare cleaning, Alpha Clean Group delivers exceptional results with eco-friendly solutions.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Clean Group Professional Cleaning Services Parramatta',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Cleaning Services | Parramatta | Alpha Clean Group',
    description:
      'Complete cleaning solutions for Parramatta homes and businesses. Office cleaning, carpet cleaning, end of lease, medical facilities, gyms, strata properties, warehouses, and childcare centres.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Cleaning Services Parramatta',
      },
    ],
    site: '@AlphaGroupAU',
    creator: '@AlphaGroupAU',
  },
  authors: [
    {
      name: 'Alpha Clean Group Parramatta Team',
    },
  ],
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
