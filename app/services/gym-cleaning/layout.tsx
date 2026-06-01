import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/gym-cleaning',
  },
  title: 'Gym Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Specialized gym cleaning services in Parramatta for fitness centers and wellness facilities. Our thorough sanitization eliminates bacteria and viruses while maintaining equipment integrity. Schedule your service today!',
  keywords: [
    'cleaning services',
    'commercial cleaning services',
    'commercial gym cleaning',
    'gym facility cleaning',
    'commercial cleaning',
    'gym cleaning Parramatta',
    'professional cleaning services',
    'commercial cleaning services near me',
    'fitness center sanitization',
    'workout facility cleaning',
    'exercise equipment disinfection',
    'locker room cleaning services',
    'health club cleaning',
    'wellness center sanitization',
    'Parramatta gym cleaners',
    'Alpha Clean Group gym cleaning',
    'gym equipment maintenance',
    'fitness studio disinfection',
    'hygienic fitness environment',
    'gym cleaning specialists',
  ],
  openGraph: {
    title: 'Specialized Gym Cleaning Services | Hygienic Fitness Environments',
    description:
      'Maintain a clean, hygienic environment for your fitness facility with our specialized gym cleaning services. We focus on thorough sanitization of equipment, locker rooms, showers, and common areas using commercial-grade disinfectants.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/gym-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Gym Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Services | Fitness Facility Sanitization | Parramatta',
    description:
      'Provide a truly hygienic environment for your fitness center members with our specialized gym cleaning services. We schedule cleaning during off-peak hours to minimize disruption while effectively eliminating bacteria, viruses, and fungal spores.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Gym Cleaning Services Parramatta',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
