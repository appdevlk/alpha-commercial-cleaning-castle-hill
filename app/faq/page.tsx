import { Metadata } from 'next';
import FAQHero from '@/components/faq/FAQHero';
import FAQContent from '@/components/faq/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Alpha Clean Group Australia Parramatta',
  description:
    'Find answers to frequently asked questions about our cleaning services in Parramatta. Get information about booking, pricing, and our specialized cleaning solutions.',
};

export default function FAQPage() {
  return (
    <main className="flex flex-col">
      <FAQHero />
      <FAQContent />
    </main>
  );
}
