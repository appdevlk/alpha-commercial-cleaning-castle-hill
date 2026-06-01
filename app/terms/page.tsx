import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Alpha Clean Group',
  description:
    'Terms and conditions for using Alpha Clean Group services. Learn about our service terms, policies, and user agreements.',
};

export default function TermsOfUse() {
  return (
    <main className="max-w-container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-primary mb-8">Terms of Use</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using Alpha Clean Group's website and services, you agree to be bound by these Terms of Use
            and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
          <p className="text-gray-600 mb-4">
            Alpha Clean Group provides professional cleaning services for residential and commercial properties. Our
            services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Commercial cleaning</li>
            <li>Residential cleaning</li>
            <li>End of lease cleaning</li>
            <li>Specialized cleaning services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Booking and Cancellation</h2>
          <p className="text-gray-600 mb-4">Our booking and cancellation policies are as follows:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Bookings must be made at least 24 hours in advance</li>
            <li>Cancellations must be made at least 12 hours before the scheduled service</li>
            <li>Late cancellations may be subject to a cancellation fee</li>
            <li>We reserve the right to reschedule services due to unforeseen circumstances</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment Terms</h2>
          <p className="text-gray-600 mb-4">Payment terms and conditions:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Payment is due upon completion of services unless otherwise arranged</li>
            <li>We accept various payment methods including credit cards and bank transfers</li>
            <li>Prices are subject to change without notice</li>
            <li>Additional charges may apply for special requests or extra services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Service Guarantee</h2>
          <p className="text-gray-600 mb-4">
            We strive to provide the highest quality cleaning services. If you are not satisfied with our service:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Please notify us within 24 hours of service completion</li>
            <li>We will arrange a re-clean at no additional cost</li>
            <li>If issues persist, we will work with you to find a satisfactory solution</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Liability</h2>
          <p className="text-gray-600 mb-4">Our liability is limited to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Direct damages caused by our negligence</li>
            <li>The cost of the cleaning service provided</li>
            <li>We are not liable for indirect or consequential damages</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
          <p className="text-gray-600 mb-4">For any questions regarding these Terms of Use, please contact us at:</p>
          <p className="text-gray-600">
            Email: info@alphacleangroup.com.au
            <br />
            Phone: 0291 406 024
            <br />
            Address: 77 Garfield Street, Wentworthville NSW 2145
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
            to the website.
          </p>
        </section>
      </div>
    </main>
  );
}
