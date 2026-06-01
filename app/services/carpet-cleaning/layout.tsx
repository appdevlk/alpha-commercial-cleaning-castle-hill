import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/carpet-cleaning',
  },
  title: 'Professional Carpet Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Expert carpet cleaning services in Parramatta using advanced steam cleaning and eco-friendly solutions. Deep clean carpets, remove stains, eliminate odors. Residential & commercial carpet cleaning by Alpha Clean Group.',
  keywords: [
    'carpet cleaning services',
    'carpet cleaning Parramatta',
    'professional carpet cleaning',
    'steam carpet cleaning',
    'carpet stain removal',
    'deep carpet cleaning',
    'commercial carpet cleaning',
    'residential carpet cleaning',
    'carpet cleaning specialists',
    'eco-friendly carpet cleaning',
    'carpet odor removal',
    'upholstery cleaning',
    'rug cleaning services',
    'carpet sanitization',
    'carpet cleaning company',
    'Alpha Clean Group carpet cleaning',
    'carpet cleaning near me',
    'affordable carpet cleaning',
    'carpet cleaning experts',
    'carpet restoration services',
  ],
  openGraph: {
    title: 'Professional Carpet Cleaning Services Parramatta | Alpha Clean Group',
    description:
      'Transform your carpets with our professional cleaning services. Advanced steam cleaning, stain removal, and eco-friendly solutions for residential and commercial properties across Parramatta.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/carpet-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Alpha Clean Group Professional Carpet Cleaning Services Parramatta',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Carpet Cleaning Services | Parramatta | Alpha Clean Group',
    description:
      'Professional carpet cleaning with advanced equipment and eco-friendly solutions. Deep cleaning, stain removal, and odor elimination for homes and businesses in Parramatta.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Carpet Cleaning Services Parramatta',
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
