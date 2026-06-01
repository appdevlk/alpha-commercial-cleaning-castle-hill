import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/commercial-cleaning',
  },
  title: 'Commercial Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Professional commercial cleaning services in Parramatta tailored to your business needs. Our experienced team ensures pristine, hygienic environments for your employees and customers. Schedule your service today!',
  keywords: [
    'commercial cleaning services',
    'commercial cleaning',
    'cleaning services',
    'business cleaning services near me',
    'commercial cleaning services near me',
    'office cleaning',
    'office cleaning services',
    'commercial cleaning Parramatta',
    'business cleaning company near me',
    'commercial office cleaning services',
    'cleaning companies commercial',
    'cleaning company',
    'professional cleaning services',
    'business cleaning services',
    'commercial cleaning company',
    'commercial cleaning contractors',
    'commercial property maintenance',
    'eco-friendly commercial cleaning',
    'business cleaning solutions',
    'commercial cleaning specialists',
  ],
  openGraph: {
    title: 'Professional Commercial Cleaning Services | Parramatta Business Solutions',
    description:
      'Create a safe, healthy, and professional environment for your business with our comprehensive commercial cleaning services. From daily maintenance to specialized deep cleaning, our experienced team delivers exceptional results with minimal disruption to your operations.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/commercial-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Commercial Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Services | Business Cleaning Solutions | Parramatta',
    description:
      'Transform your commercial space with our professional cleaning services. We use eco-friendly products and advanced equipment to maintain the highest standards of cleanliness and hygiene for your business.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Commercial Cleaning Services Parramatta',
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
