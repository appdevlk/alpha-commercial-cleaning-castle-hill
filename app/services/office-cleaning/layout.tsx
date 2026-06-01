import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/office-cleaning',
  },
  title: 'Office Cleaning Services Parramatta | Alpha Clean Group',
  description:
    'Professional office cleaning services in Parramatta tailored to your workspace needs. Enhance productivity and employee wellbeing with our eco-friendly cleaning solutions. Book online or call today!',
  keywords: [
    'office cleaning',
    'office cleaning services',
    'office cleaning companies',
    'cleaning for office',
    'commercial cleaning services',
    'office cleaning services near me',
    'commercial cleaning',
    'commercial office cleaning services',
    'office cleaning Parramatta',
    'cleaning an office',
    'commercial cleaning office',
    'professional cleaning services',
    'cleaning companies office',
    'workplace cleaning services',
    'corporate office cleaning',
    'business workspace maintenance',
    'Parramatta office cleaning company',
    'office sanitization services',
    'eco-friendly office cleaning',
    'office cleaning specialists',
  ],
  openGraph: {
    title: 'Professional Office Cleaning Services | Parramatta Workspace Solutions',
    description:
      'Boost productivity and create a positive impression with our professional office cleaning services. Our experienced team uses eco-friendly products and state-of-the-art equipment to maintain a spotless and hygienic workspace with minimal disruption to your business.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/services/office-cleaning',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Office Cleaning Services',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Services | Workspace Cleaning Solutions | Parramatta',
    description:
      'Transform your office environment with our professional cleaning services. From daily maintenance to specialized cleaning, our trained team ensures every corner of your workspace receives the attention it deserves.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Alpha Clean Group Office Cleaning Services Parramatta',
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
