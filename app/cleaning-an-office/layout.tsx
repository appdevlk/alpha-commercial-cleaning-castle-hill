import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office',
  },
  title: 'Cleaning an Office | Professional Office Cleaning Guide & Services Parramatta',
  description:
    'Expert guide on cleaning an office effectively. Professional office cleaning services in Parramatta with proven methods, eco-friendly products, and flexible schedules. Get your free quote today!',
  keywords: [
    'cleaning an office',
    'office cleaning guide',
    'how to clean an office',
    'office cleaning methods',
    'professional office cleaning',
    'office cleaning checklist',
    'office cleaning tips',
    'commercial office cleaning',
    'office cleaning procedures',
    'office cleaning standards',
    'office hygiene cleaning',
    'workplace cleaning guide',
    'office cleaning best practices',
    'office cleaning techniques',
    'office cleaning supplies',
    'office cleaning schedule',
    'office cleaning services Parramatta',
    'office cleaning maintenance',
    'office cleaning solutions',
    'effective office cleaning',
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
    title: 'Cleaning an Office | Professional Office Cleaning Guide & Services Parramatta',
    description:
      'Complete guide on cleaning an office effectively. Learn professional techniques and get expert office cleaning services in Parramatta with eco-friendly products and flexible scheduling.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Cleaning an Office - Professional Office Cleaning Parramatta',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning an Office | Professional Office Cleaning Guide Parramatta',
    description:
      'Master the art of cleaning an office with our professional guide. Expert office cleaning services available in Parramatta with proven methods and eco-friendly solutions.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Professional Office Cleaning Guide Parramatta',
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
