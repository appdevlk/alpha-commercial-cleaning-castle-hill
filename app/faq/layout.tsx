import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/faq',
  },
  title: 'FAQs | Alpha Clean Group | Professional Cleaning Parramatta',
  description:
    'Find answers to frequently asked questions about Alpha Clean Group in Parramatta. Learn about our services, pricing, booking process, eco-friendly products, and specialized cleaning solutions for residential and commercial properties.',
  keywords: [
    'cleaning services FAQ',
    'Alpha Clean Group questions',
    'Parramatta cleaning company FAQ',
    'professional cleaning services Parramatta',
    'eco-friendly cleaning products',
    'commercial cleaning questions',
    'residential cleaning FAQ',
    'end of lease cleaning Parramatta',
    'strata cleaning services',
    'medical center cleaning',
    'childcare facility cleaning',
    'gym cleaning services',
    'warehouse cleaning FAQ',
    'office cleaning questions',
    'cleaning service booking',
    'cleaning service pricing',
    'bond cleaning Parramatta',
    'cleaning insurance coverage',
    'cleaning company Parramatta',
    'professional cleaners FAQ',
  ],
  openGraph: {
    title: 'Frequently Asked Questions | Alpha Clean Group Parramatta',
    description:
      'Get answers to common questions about our professional cleaning services in Parramatta. Learn about our eco-friendly products, commercial and residential services, pricing, scheduling, and more.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/faq',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group FAQ',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Professional Cleaning Services Parramatta | Alpha Clean Group',
    description:
      'Explore our comprehensive FAQ section covering all aspects of our professional cleaning services in Parramatta, including pricing, booking, service areas, and specialized cleaning solutions.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Frequently Asked Questions',
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
