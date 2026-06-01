import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/contact',
  },
  title: 'Contact Alpha Clean Group | Professional Cleaning Parramatta | Get Quote',
  description:
    'Get in touch with Alpha Clean Group for professional cleaning solutions in Parramatta. Request a free quote, schedule a consultation, or receive immediate assistance for all your residential and commercial cleaning needs.',
  keywords: [
    'cleaning services',
    'commercial cleaning services',
    'contact cleaning services Parramatta',
    'professional cleaning services',
    'office cleaning services',
    'commercial cleaning services near me',
    'cleaning company',
    'house cleaning services quote',
    'bond cleaning',
    'Alpha Clean Group contact',
    'professional cleaners quote',
    'cleaning consultation Parramatta',
    'end of lease cleaning',
    'office cleaning services near me',
    'domestic cleaners',
    'strata cleaning services',
    'cleaning services Wentworthville',
    'Alpha Clean Group phone number',
    'schedule cleaning assessment',
    'Parramatta cleaning location',
  ],
  openGraph: {
    title: 'Contact Our Professional Cleaning Team | Free Quote | Parramatta',
    description:
      'Connect with Alpha Clean Group for all your professional cleaning needs in Parramatta. Request a free customized quote, schedule a consultation, or get immediate assistance from our experienced cleaning experts.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/contact',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Contact',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Professional Cleaning Services Parramatta | Book Today',
    description:
      'Get in touch with our professional cleaning team serving Parramatta and surrounding areas. Request a quote, schedule a consultation, or get immediate assistance for your specific cleaning requirements.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Contact Information',
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
