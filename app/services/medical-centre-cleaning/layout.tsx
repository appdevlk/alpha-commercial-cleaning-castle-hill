import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/medical-centre-cleaning',
  },
  title: 'Medical Centre Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Specialized medical centre cleaning services in Parramatta that meet the highest standards of hygiene and infection control. Our healthcare-specific cleaning ensures a sterile, safe environment for patients and staff.',
  keywords: [
    'cleaning services',
    'commercial cleaning services',
    'professional cleaning services',
    'medical cleaning services for home',
    'medical centre cleaning Parramatta',
    'healthcare facility cleaning',
    'commercial cleaning',
    'office cleaning services',
    'commercial cleaning services near me',
    'clinical cleaning services',
    'hospital-grade disinfection',
    'medical practice cleaning',
    'infection control cleaning',
    'healthcare sanitization services',
    'medical office cleaning',
    'Parramatta medical cleaners',
    'sterile environment services',
    'Alpha Clean Group medical cleaning',
    'healthcare-compliant cleaning',
    'treatment room sanitization',
  ],
  openGraph: {
    title: 'Expert Medical Centre Cleaning Services | Healthcare Facility Solutions',
    description:
      'Maintain a sterile, safe, and hygienic environment for your healthcare facility with our specialized cleaning services. Our medical cleaning specialists are trained in healthcare-specific protocols, infection control procedures, and use hospital-grade disinfectants.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/medical-centre-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Medical Centre Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Centre Cleaning | Healthcare Facility Sanitization | Parramatta',
    description:
      'Ensure your medical facility meets the highest standards of cleanliness with our comprehensive healthcare cleaning services. We follow strict guidelines to ensure compliance with all health and safety regulations for treatment rooms, waiting areas, and administrative offices.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Medical Centre Cleaning Services Parramatta',
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
