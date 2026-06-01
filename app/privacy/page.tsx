import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Alpha Clean Group',
  description:
    'Privacy policy for Alpha Clean Group. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Name and contact information</li>
            <li>Service address and details</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Provide and manage our cleaning services</li>
            <li>Process payments and send invoices</li>
            <li>Communicate with you about our services</li>
            <li>Improve our services and customer experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors and consultants</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600">
            Email: info@alphacleangroup.com.au
            <br />
            Phone: 0291 406 024
            <br />
            Address: 77 Garfield Street, Wentworthville NSW 2145
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Updates to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. The latest version will always be posted on our
            website.
          </p>
        </section>
      </div>
    </main>
  );
}
