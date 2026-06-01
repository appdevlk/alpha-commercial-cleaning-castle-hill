import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/warehouse-cleaning',
  },
  title: 'Warehouse Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Professional warehouse cleaning services in Parramatta for industrial facilities. Our specialized cleaning solutions maintain safe, clean environments for large industrial spaces. Book online or call today!',
  keywords: [
    'warehouse cleaning services',
    'cleaning warehouse',
    'commercial cleaning services',
    'warehouse cleaning Parramatta',
    'industrial cleaning services',
    'commercial cleaning',
    'commercial cleaning services near me',
    'cleaning company',
    'large facility cleaning',
    'warehouse floor cleaning',
    'industrial space maintenance',
    'loading dock cleaning',
    'warehouse sanitization',
    'commercial warehouse cleaning',
    'professional cleaning services',
    'Alpha Clean Group warehouse cleaning',
    'warehouse safety maintenance',
    'logistics facility cleaning',
    'distribution center cleaning',
    'factory cleaning services',
  ],
  openGraph: {
    title: 'Specialized Warehouse Cleaning Services | Industrial Solutions Parramatta',
    description:
      'Maintain a clean, safe, and productive warehouse environment with our specialized cleaning services. Our team uses industrial-grade equipment to handle large floor spaces, high shelving, loading docks, and staff areas with minimal disruption to your operations.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/warehouse-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Warehouse Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaning Services | Industrial Facility Maintenance | Parramatta',
    description:
      'Transform your industrial space with our comprehensive warehouse cleaning services. We implement customized cleaning plans that address the specific needs of your facility while working around your operational hours.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Warehouse Cleaning Services Parramatta',
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
