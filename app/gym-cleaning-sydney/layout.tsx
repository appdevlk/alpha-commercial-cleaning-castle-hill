import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta',
  },
  title: 'Gym Cleaning Parramatta | Professional Fitness Centre Cleaning Services',
  description:
    'Professional gym cleaning Parramatta services for fitness centres and sports facilities. Expert sanitization, equipment cleaning, and hygienic maintenance. Same-day service available!',
  keywords: [
    'gym cleaning Parramatta',
    'gym cleaning services Parramatta',
    'fitness centre cleaning Parramatta',
    'gym sanitization Parramatta',
    'commercial gym cleaning',
    'fitness facility cleaning',
    'gym equipment cleaning',
    'sports facility cleaning Parramatta',
    'health club cleaning',
    'gymnasium cleaning services',
    'fitness center maintenance',
    'gym hygiene services',
    'workout facility cleaning',
    'exercise equipment sanitization',
    'fitness studio cleaning Parramatta',
    'gym disinfection services',
    'locker room cleaning Parramatta',
    'fitness facility maintenance',
    'gym deep cleaning Parramatta',
    'professional gym cleaners',
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
    title: 'Professional Gym Cleaning Parramatta | Fitness Centre Cleaning Services',
    description:
      'Expert gym cleaning Parramatta services for fitness centres and sports facilities. Professional sanitization, equipment cleaning, and hygienic maintenance solutions.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/images/cleaning-image9.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Gym Cleaning Parramatta - Alpha Clean Group',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Parramatta | Professional Fitness Centre Cleaning Services',
    description:
      'Expert gym cleaning Parramatta services with professional sanitization and equipment cleaning. Maintain hygiene standards for your fitness facility.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/images/cleaning-image9.webp',
        alt: 'Professional Gym Cleaning Parramatta',
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
