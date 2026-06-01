import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/strata-cleaning',
  },
  title: 'Strata Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Professional strata cleaning services in Parramatta for residential and commercial properties. We ensure common areas are immaculately maintained for residents and visitors. Book online or call today!',
  keywords: [
    'cleaning services',
    'commercial cleaning services',
    'strata cleaning Parramatta',
    'cleaning company',
    'commercial cleaning',
    'residential cleaning',
    'commercial cleaning services near me',
    'professional cleaning services',
    'common area maintenance',
    'apartment building cleaning',
    'body corporate cleaning',
    'strata property maintenance',
    'lobby cleaning services',
    'hallway cleaning strata',
    'Parramatta strata cleaners',
    'Alpha Clean Group strata cleaning',
    'strata complex cleaning',
    'shared space maintenance',
    'high-rise building maintenance',
    'strata cleaning specialists',
  ],
  openGraph: {
    title: 'Comprehensive Strata Cleaning Services | Parramatta Property Solutions',
    description:
      'Enhance the appearance, safety, and value of your strata property with our specialized cleaning services. We work closely with strata managers and committees to develop customized cleaning schedules for common areas, lobbies, hallways, and shared spaces.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/strata-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Strata Cleaning Services Parramatta',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata Cleaning Services | Common Area Maintenance | Parramatta',
    description:
      'Keep your strata property pristine with our specialized cleaning solutions. Our experienced teams use industry-leading equipment and eco-friendly products to ensure common areas maintain their hygienic conditions with minimal disruption to residents.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Strata Cleaning Services Parramatta',
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
