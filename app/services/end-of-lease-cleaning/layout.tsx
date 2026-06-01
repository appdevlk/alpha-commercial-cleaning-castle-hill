import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/end-of-lease-cleaning',
  },
  title: 'End of Lease Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Professional end of lease cleaning services in Parramatta with a bond-back guarantee. Our comprehensive cleaning ensures you meet all property manager requirements and maximize your bond return.',
  keywords: [
    'end of lease cleaning Parramatta',
    'bond cleaning',
    'cleaning services',
    'move out cleaning services near me',
    'house cleaning services',
    'end of bond clean',
    'bond cleaning services',
    'home cleaning services',
    'professional cleaning services',
    'move out cleaning Parramatta',
    'commercial cleaning services',
    'rental property cleaning',
    'vacate cleaning specialist',
    'end of tenancy cleaning',
    'Parramatta bond cleaners',
    'bond back guarantee cleaning',
    'Alpha Clean Group end of lease cleaning',
    'bond refund cleaning',
    'property manager approved',
    'rental inspection cleaning',
  ],
  openGraph: {
    title: 'End of Lease Cleaning Services | Bond Return Guarantee | Parramatta',
    description:
      'Secure your full bond return with our comprehensive end of lease cleaning services. We follow a detailed checklist covering kitchen appliances, bathroom fixtures, windows, floors, and walls with special attention to often overlooked areas.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/end-of-lease-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group End of Lease Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End of Lease Cleaning | Bond Back Guarantee | Parramatta',
    description:
      'Leave your rental property in perfect condition with our specialized end of lease cleaning services. Our bond-back guarantee provides peace of mind during your moving process, ensuring your property meets or exceeds property manager expectations.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group End of Lease Cleaning Services Parramatta',
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
