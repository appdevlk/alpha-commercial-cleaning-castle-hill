import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta',
  },
  title: 'Medical Centre Cleaning Parramatta | Healthcare Facility Cleaning Services',
  description:
    'Professional medical centre cleaning Parramatta services. Specialized healthcare facility cleaning with infection control protocols, medical-grade disinfection, and compliance standards. Call now!',
  keywords: [
    'medical centre cleaning Parramatta',
    'medical centre cleaning',
    'healthcare facility cleaning Parramatta',
    'medical cleaning services Parramatta',
    'doctor surgery cleaning Parramatta',
    'clinic cleaning Parramatta',
    'medical practice cleaning',
    'healthcare cleaning Parramatta',
    'hospital cleaning Parramatta',
    'medical office cleaning',
    'surgical centre cleaning',
    'dental practice cleaning Parramatta',
    'medical facility sanitization',
    'healthcare hygiene services',
    'medical grade cleaning Parramatta',
    'infection control cleaning',
    'medical centre sanitization',
    'healthcare cleaning specialists',
    'medical cleaning compliance',
    'professional medical cleaning',
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
    title: 'Medical Centre Cleaning Parramatta | Healthcare Facility Cleaning Services',
    description:
      'Expert medical centre cleaning Parramatta with specialized infection control protocols. Professional healthcare facility cleaning services ensuring compliance and patient safety.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/images/cleaning-image6.webp',
        width: 1200,
        height: 630,
        alt: 'Medical Centre Cleaning Parramatta - Alpha Clean Group',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Centre Cleaning Parramatta | Healthcare Facility Cleaning',
    description:
      'Professional medical centre cleaning Parramatta with infection control protocols, medical-grade disinfection, and healthcare compliance standards.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/images/cleaning-image6.webp',
        alt: 'Professional Medical Centre Cleaning Parramatta',
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
