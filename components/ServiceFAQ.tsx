"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface ServiceFAQProps {
  serviceName: string;
  location: string;
  questions?: FAQItem[];
}

export default function ServiceFAQ({ serviceName, location, questions }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultQuestions = [
    {
      question: `Do you provide ${serviceName} in other areas besides ${location}?`,
      answer: (
        <>
          Yes, while we specialise in <strong>{serviceName} in {location}</strong>, we also service nearby areas. Our team covers the entire Sydney region. Call us on <a href="tel:0291406024" className="text-primary font-medium hover:underline">02 9140 6024</a> to confirm availability.
        </>
      ),
    },
    {
      question: `How much does ${serviceName} cost in ${location}?`,
      answer: (
        <>
          Our <strong>{location} {serviceName} rates</strong> are competitive and tailored to your specific needs. We offer free, no-obligation quotes. Contact our <strong>sales team at 02 9140 6024</strong> for a custom price.
        </>
      ),
    },
    {
      question: `Are your ${location} cleaners insured and background checked?`,
      answer: (
        <>
          Absolutely. Every member of our <strong>{location} cleaning team</strong> is fully insured, police-checked, and trained in the latest <strong>commercial cleaning</strong> safety protocols.
        </>
      ),
    },
    {
      question: `Can you provide other services along with ${serviceName}?`,
      answer: (
        <>
          Yes! Many of our {location} clients combine our services. We can also assist with <Link href={`/office-cleaning-${location.toLowerCase().replace(/ /g, '-')}`} className="text-primary hover:underline">Office Cleaning</Link>, <Link href={`/strata-cleaning-${location.toLowerCase().replace(/ /g, '-')}`} className="text-primary hover:underline">Strata Cleaning</Link>, and <Link href={`/commercial-cleaning-${location.toLowerCase().replace(/ /g, '-')}`} className="text-primary hover:underline">Commercial Cleaning</Link> for a complete solution.
        </>
      ),
    },
    {
      question: `Do you offer after-hours ${serviceName} in ${location}?`,
      answer: (
        <>
          We understand that businesses in <strong>{location}</strong> need flexibility. We offer 24/7 cleaning schedules, including weekends and after-hours, to minimise disruption to your operations.
        </>
      ),
    },
  ];

  const faqItems = questions || defaultQuestions;

  // Schema Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : "Check our website for more details or call us."
      }
    }))
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our {serviceName} in {location}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </div>
    </section>
  );
}
