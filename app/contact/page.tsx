import { Metadata } from 'next';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Alpha Clean Group Australia Parramatta',
  description:
    'Get in touch with Alpha Clean Group Australia for professional cleaning solutions in Parramatta. Contact us for a free quote and consultation.',
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <div className="w-full overflow-hidden">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
