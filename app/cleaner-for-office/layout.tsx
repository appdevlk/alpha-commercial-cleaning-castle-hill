import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alpha-commercial-cleaning-parramatta.com.au/'),
  alternates: {
    canonical: 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaner-for-office',
  },
  title: 'Cleaner for Office | Professional Office Cleaning Services Parramatta',
  description:
    'Professional cleaner for office spaces in Parramatta. Expert commercial office cleaning services with eco-friendly products. Daily, weekly, monthly cleaning schedules available. Get instant quote!',
  keywords: [
    'cleaner for office',
    'office cleaner Parramatta',
    'office cleaning services',
    'commercial office cleaning',
    'professional office cleaner',
    'office cleaning company',
    'workplace cleaning services',
    'business cleaning services',
    'office cleaner near me',
    'office cleaning Parramatta',
    'commercial cleaner',
    'office cleaning contractors',
    'corporate cleaning services',
    'office maintenance services',
    'cleaning services for offices',
    'office hygiene services',
    'workspace cleaning Parramatta',
    'office sanitization Parramatta',
    'daily office cleaning',
    'weekly office cleaning',
  ],
  authors: [{ name: 'Alpha Clean Group Parramatta Team' }],
  publisher: 'Alpha Clean Group Parramatta',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Professional Cleaner for Office | Commercial Office Cleaning Parramatta',
    description:
      'Find the best cleaner for office spaces in Parramatta. Our professional team provides comprehensive office cleaning services with flexible schedules and eco-friendly products for a productive workplace.',
    type: 'website',
    url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaner-for-office',
    siteName: 'Alpha Clean Group Parramatta',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Professional Cleaner for Office - Alpha Clean Group Parramatta',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaner for Office | Professional Office Cleaning Services Parramatta',
    description:
      'Professional cleaner for office spaces with flexible schedules and eco-friendly products. Boost productivity with our comprehensive office cleaning services in Parramatta.',
    images: [
      {
        url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/meta.png',
        alt: 'Professional Cleaner for Office Parramatta',
      },
    ],
    site: '@AlphaGroupAU',
    creator: '@AlphaGroupAU',
  },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Wentworthville',
    'geo.position': '-33.8041;150.9693',
    ICBM: '-33.8041, 150.9693',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
