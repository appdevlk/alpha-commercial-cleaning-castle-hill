import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/childcare-cleaning',
  },
  title: 'Childcare Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Specialized childcare cleaning services in Parramatta providing safe, healthy environments for children and staff. Our child-safe, eco-friendly cleaning solutions sanitize play areas, sleeping spaces, and high-touch surfaces.',
  keywords: [
    'cleaning services',
    'commercial cleaning services',
    'cleaning childcare',
    'childcare cleaning solutions',
    'childcare cleaning Parramatta',
    'commercial cleaning',
    'professional cleaning services',
    'daycare facility cleaning',
    'preschool cleaning services',
    'child-safe cleaning solutions',
    'play area sanitization',
    'childcare center disinfection',
    'eco-friendly childcare cleaning',
    'nursery cleaning services',
    'childcare sanitization Parramatta',
    'Alpha Clean Group childcare cleaning',
    'safe cleaning products children',
    'daycare hygiene services',
    'early learning center cleaning',
    'childcare cleaning specialists',
  ],
  openGraph: {
    title: 'Specialized Childcare Cleaning Services | Safe Environments for Children',
    description:
      'Provide a healthy, safe environment for children with our specialized childcare cleaning services. We use child-safe, eco-friendly products that effectively sanitize surfaces while paying special attention to play areas, sleeping spaces, bathrooms, and dining areas.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/childcare-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Childcare Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Childcare Cleaning Services | Safe Facility Maintenance | Parramatta',
    description:
      'Create a clean, healthy environment where children can learn and play with our specialized childcare cleaning services. Our flexible scheduling works around your operational hours to minimize disruption while maintaining the highest standards of cleanliness.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Childcare Cleaning Services Parramatta',
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
