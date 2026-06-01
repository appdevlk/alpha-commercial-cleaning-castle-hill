'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    title: 'General Questions',
    items: [
      {
        question: 'What areas do you service?',
        answer:
          'We provide cleaning services throughout the greater Sydney metropolitan area, including the CBD, North Shore, Eastern Suburbs, Inner West, and surrounding areas. Contact us to confirm if we service your specific location.',
      },
      {
        question: 'Are your cleaning products eco-friendly?',
        answer:
          'Yes, we use environmentally friendly cleaning products that are effective while being safe for people, pets, and the environment. Our products are non-toxic and biodegradable.',
      },
      {
        question: 'Do you provide cleaning supplies and equipment?',
        answer:
          'Yes, we bring all necessary cleaning supplies and equipment for the job. This includes cleaning solutions, mops, vacuums, and other tools required for a thorough cleaning.',
      },
      {
        question: 'How long has Alpha Clean Group been in business?',
        answer:
          'Alpha Clean Group has been providing professional cleaning services in Parramatta for over 7 years. Our experience allows us to deliver consistent, high-quality results for all our clients.',
      },
      {
        question: 'What makes Alpha Clean Group different from other cleaning services?',
        answer:
          'We stand out through our professional approach, experienced staff, and commitment to customer satisfaction. Our team is fully trained, insured, and we use high-quality products and equipment. We also offer customized cleaning plans to meet your specific needs.',
      },
    ],
  },
  {
    title: 'Booking & Scheduling',
    items: [
      {
        question: 'How do I book a cleaning service?',
        answer:
          "You can book our services by calling us at (02) 9140 6006, emailing us at info@alphacleangroup.com.au, or filling out our online contact form. We'll get back to you promptly to confirm your booking.",
      },
      {
        question: 'How much notice do you need for a booking?',
        answer:
          "We typically require at least 24 hours' notice for regular cleaning services. For larger projects or specialized cleaning, we recommend booking at least 48-72 hours in advance.",
      },
      {
        question: 'Can I change or cancel my booking?',
        answer:
          'Yes, you can change or cancel your booking up to 24 hours before the scheduled service without any charge. For cancellations within 24 hours, a cancellation fee may apply.',
      },
      {
        question: 'Do you offer one-time cleaning services?',
        answer:
          'Yes, we offer both one-time cleaning services and regular cleaning schedules. Whether you need a one-off deep clean or regular maintenance, we can accommodate your needs.',
      },
      {
        question: 'Can I schedule cleaning outside of regular business hours?',
        answer:
          'Yes, we offer flexible scheduling options including evenings, weekends, and holidays to accommodate your specific requirements. Additional charges may apply for services outside standard business hours.',
      },
    ],
  },
  {
    title: 'Pricing & Payment',
    items: [
      {
        question: 'How do you determine pricing?',
        answer:
          'Our pricing is based on several factors including the type of cleaning service, the size of the space, the level of cleaning required, and any special requests. We provide free quotes for all services.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept various payment methods including credit cards, bank transfers, and cash. Payment is typically due upon completion of the service unless otherwise arranged.',
      },
      {
        question: 'Do you offer any discounts or packages?',
        answer:
          'Yes, we offer discounts for regular cleaning schedules and package deals for multiple services. We also have special rates for commercial clients with ongoing contracts.',
      },
      {
        question: 'Is there a minimum booking fee?',
        answer:
          'Yes, we have a minimum booking fee that varies depending on the type of service. This ensures that our cleaners can provide a thorough service even for smaller jobs. Contact us for specific pricing details.',
      },
      {
        question: 'Do you charge extra for public holidays?',
        answer:
          'Yes, we apply a surcharge for services provided on public holidays. This helps us compensate our staff for working on these special days.',
      },
    ],
  },
  {
    title: 'Service Details',
    items: [
      {
        question: "What's included in your regular cleaning service?",
        answer:
          'Our regular cleaning service includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. We can customize the service based on your specific needs.',
      },
      {
        question: 'Do you offer deep cleaning services?',
        answer:
          'Yes, we offer deep cleaning services that go beyond regular cleaning. This includes detailed cleaning of all surfaces, inside cabinets, behind furniture, and other hard-to-reach areas.',
      },
      {
        question: 'How long does a typical cleaning take?',
        answer:
          'The duration depends on the size of the space and the type of cleaning required. A typical home cleaning (2-3 bedrooms) usually takes 2-3 hours, while a deep cleaning might take 4-6 hours.',
      },
      {
        question: 'Do you offer specialized cleaning for specific industries?',
        answer:
          'Yes, we offer specialized cleaning services for various industries including medical centers, childcare facilities, gyms, warehouses, and strata properties. Each service is tailored to meet the specific requirements and standards of the industry.',
      },
      {
        question: "What's included in your end of lease cleaning service?",
        answer:
          'Our end of lease cleaning service is comprehensive and designed to help you get your full bond back. It includes deep cleaning of all rooms, carpets, windows, walls, and fixtures. We ensure the property meets the standards required by property managers and real estate agents.',
      },
    ],
  },
  {
    title: 'Insurance & Compliance',
    items: [
      {
        question: 'Are your cleaners insured?',
        answer:
          'Yes, all our cleaners are fully insured. We carry comprehensive liability insurance to protect our clients and our staff in case of any accidents or damages.',
      },
      {
        question: 'Do you perform background checks on your staff?',
        answer:
          'Yes, we conduct thorough background checks on all our cleaning staff to ensure they meet our high standards for trustworthiness and reliability.',
      },
      {
        question: 'What happens if something is damaged during cleaning?',
        answer:
          'While we take great care to prevent any damage, if something is accidentally damaged during our service, please report it immediately. Our insurance will cover the cost of repair or replacement.',
      },
      {
        question: 'Do you comply with industry standards and regulations?',
        answer:
          'Yes, we adhere to all relevant industry standards and regulations. For specialized services like medical center cleaning, we follow strict hygiene protocols and use appropriate disinfectants.',
      },
      {
        question: 'Are your cleaning products safe for children and pets?',
        answer:
          "Yes, we use child and pet-friendly cleaning products that are effective while being safe for all occupants. We're particularly careful with products used in childcare facilities and homes with children and pets.",
      },
    ],
  },
  {
    title: 'Commercial & Specialized Services',
    items: [
      {
        question: 'What commercial cleaning services do you offer?',
        answer:
          'We offer a comprehensive range of commercial cleaning services including office cleaning, warehouse cleaning, strata cleaning, medical center cleaning, childcare cleaning, and gym cleaning. Each service is tailored to meet the specific needs of the business.',
      },
      {
        question: 'How do you handle medical center cleaning?',
        answer:
          'Our medical center cleaning service follows strict hygiene protocols to ensure a safe and sterile environment. We use hospital-grade disinfectants and follow specific procedures to prevent cross-contamination.',
      },
      {
        question: "What's included in your strata cleaning service?",
        answer:
          'Our strata cleaning service covers all common areas including lobbies, hallways, stairwells, elevators, and outdoor spaces. We ensure these areas are clean, welcoming, and well-maintained for all residents.',
      },
      {
        question: 'Do you offer specialized cleaning for gyms and fitness centers?',
        answer:
          'Yes, we offer specialized cleaning for gyms and fitness centers, focusing on high-traffic areas, equipment, changing rooms, and showers. We use appropriate disinfectants to prevent the spread of germs in these environments.',
      },
      {
        question: 'How do you handle warehouse cleaning?',
        answer:
          'Our warehouse cleaning service is designed to maintain a clean, safe, and efficient workspace. We clean floors, storage areas, offices, restrooms, and common areas, ensuring compliance with safety standards.',
      },
    ],
  },
];

export default function FAQContent() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-20">
        {/* FAQ Categories */}
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-[#f9f9fa] rounded-[15px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
              >
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left group transition-all duration-300"
                >
                  <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openCategory === categoryIndex ? 'bg-primary' : 'bg-[#e5e7eb] group-hover:bg-primary/10'
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-all duration-300 ${
                        openCategory === categoryIndex
                          ? 'rotate-180 text-white'
                          : 'text-[#86868b] group-hover:text-primary'
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openCategory === categoryIndex ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-[#d2d2d7] p-6 sm:p-8 space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-[#d2d2d7] last:border-0 pb-6 last:pb-0">
                        <button
                          onClick={() => toggleItem(categoryIndex, itemIndex)}
                          className="w-full flex items-start justify-between gap-4 text-left group"
                        >
                          <h4 className="text-[17px] font-medium text-[#1d1d1f] group-hover:text-primary transition-colors duration-300">
                            {item.question}
                          </h4>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                              openItems[`${categoryIndex}-${itemIndex}`]
                                ? 'bg-primary'
                                : 'bg-[#e5e7eb] group-hover:bg-primary/10'
                            }`}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className={`transition-all duration-300 ${
                                openItems[`${categoryIndex}-${itemIndex}`]
                                  ? 'rotate-180 text-white'
                                  : 'text-[#86868b] group-hover:text-primary'
                              }`}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-out ${
                            openItems[`${categoryIndex}-${itemIndex}`]
                              ? 'max-h-[500px] opacity-100 mt-4'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-[#86868b] text-[17px] font-normal leading-[1.4] tracking-[-0.012em]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-24">
          <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal mb-8">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
          >
            <span className="relative z-10 flex items-center">
              Contact Us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
