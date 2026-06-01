import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/move-out-cleaning-services-near-me',
  },
  title: 'Move Out Cleaning Services Near Me | Local Professional Cleaners Parramatta',
  description:
    'Professional move out cleaning services near you in Parramatta. Get your bond back with our comprehensive end of tenancy cleaning. Same-day service available. Call now for instant quote!',
  keywords: [
    'move out cleaning services near me',
    'move out cleaning near me',
    'end of lease cleaning near me',
    'bond cleaning services near me',
    'local move out cleaners',
    'move out cleaning Parramatta',
    'end of tenancy cleaning',
    'bond back cleaning services',
    'professional move out cleaning',
    'move out cleaning company near me',
    'same day move out cleaning',
    'emergency move out cleaning',
    'affordable move out cleaning',
    'move out cleaning checklist',
    'rental cleaning services near me',
    'vacate cleaning near me',
    'exit cleaning services',
    'tenant move out cleaning',
    'house move out cleaning',
    'apartment move out cleaning',
  ],
  openGraph: {
    title: 'Move Out Cleaning Services Near Me | Professional Bond Cleaning Parramatta',
    description:
      'Find professional move out cleaning services in your area. Our local team provides comprehensive end of lease cleaning with bond back guarantee. Available for same-day service across Parramatta metro area.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/move-out-cleaning-services-near-me',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Move Out Cleaning Services Near Me - Alpha Clean Group',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Move Out Cleaning Services Near Me | Local Professional Cleaners',
    description:
      'Get your bond back with professional move out cleaning services in your area. Our experienced local team provides comprehensive end of lease cleaning with same-day availability and bond back guarantee.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Move Out Cleaning Services Near Me Parramatta',
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
