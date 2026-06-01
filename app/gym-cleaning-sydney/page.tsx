import ServiceGetStarted from '@/components/shared/ServiceGetStarted';
import Services from '@/components/Services';
import Link from 'next/link';

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
      name: 'Alpha Clean Group Parramatta',
      image: 'https://www.alpha-commercial-cleaning-parramatta.com.au/images/logo_wide.png',
      telephone: '0291406024',
      email: 'info@alphacleangroup.com.au',
      url: 'https://www.alpha-commercial-cleaning-parramatta.com.au',
      logo: 'https://www.alpha-commercial-cleaning-parramatta.com.au/images/logo_wide.png',
      description:
        'Professional gym cleaning Parramatta services for fitness centres and sports facilities with expert sanitization and equipment cleaning solutions.',
      priceRange: '$200-$1000',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      currenciesAccepted: 'AUD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '77 Garfield Street',
        addressLocality: 'Wentworthville',
        addressRegion: 'NSW',
        postalCode: '2145',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.8041,
        longitude: 150.9693,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Parramatta',
          sameAs: 'https://en.wikipedia.org/wiki/Parramatta',
        },
        {
          '@type': 'State',
          name: 'New South Wales',
          sameAs: 'https://en.wikipedia.org/wiki/New_South_Wales',
        },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: -33.8041,
          longitude: 150.9693,
        },
        geoRadius: '50000',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '05:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '06:00',
          closes: '20:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1200',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Mark F.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Outstanding gym cleaning Parramatta service! Our fitness centre has never been cleaner. Professional team with attention to detail and great scheduling flexibility.',
          datePublished: '2024-11-16',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Lisa R.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Best gym cleaning service in Parramatta! They understand fitness facility requirements and maintain high hygiene standards. Highly recommended for gym owners.',
          datePublished: '2024-11-08',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta#service',
      name: 'Gym Cleaning Parramatta',
      description:
        'Professional gym cleaning Parramatta services for fitness centres and sports facilities. Expert equipment sanitization, locker room cleaning, and comprehensive hygiene maintenance.',
      provider: {
        '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
      },
      serviceType: 'Gym Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Parramatta',
        sameAs: 'https://en.wikipedia.org/wiki/Parramatta',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gym Cleaning Services Parramatta',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Small Gym Daily Cleaning',
              description:
                'Daily gym cleaning Parramatta service for small fitness studios including equipment sanitization, floor cleaning, and basic facility maintenance.',
            },
            price: '200',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medium Gym Comprehensive Cleaning',
              description:
                'Complete gym cleaning Parramatta service for medium fitness centres including deep equipment cleaning, locker room sanitization, and facility maintenance.',
            },
            price: '450',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Large Gym Deep Cleaning',
              description:
                'Extensive gym cleaning Parramatta service for large fitness facilities including all equipment, changing rooms, pools, and comprehensive sanitization programs.',
            },
            price: '750',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
        ],
      },
      offers: {
        '@type': 'Offer',
        price: '200',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
        priceValidUntil: '2024-12-31',
        seller: {
          '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
        },
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta#webpage',
      url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta',
      name: 'Gym Cleaning Parramatta | Professional Fitness Centre Cleaning Services',
      description:
        'Professional gym cleaning Parramatta services for fitness centres and sports facilities. Expert sanitization, equipment cleaning, and hygienic maintenance solutions.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#website',
      },
      datePublished: '2024-11-20',
      dateModified: '2024-11-20',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.alpha-commercial-cleaning-parramatta.com.au/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gym Cleaning Parramatta',
            item: 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/gym-cleaning-parramatta#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How often should I schedule gym cleaning Parramatta services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend daily gym cleaning Parramatta services for high-traffic fitness centres, with deep cleaning weekly. The frequency depends on member volume, equipment usage, and facility size.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does your gym cleaning Parramatta service include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our comprehensive gym cleaning Parramatta includes equipment sanitization, floor cleaning, locker room maintenance, mirror cleaning, air vent cleaning, and trash removal with specialized fitness facility products.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you clean gym equipment and machines?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our gym cleaning Parramatta service includes thorough sanitization of all fitness equipment, cardio machines, weight equipment, and specialized apparatus using appropriate disinfectants.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you work around our gym operating hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! Our gym cleaning Parramatta team offers flexible scheduling including early morning, late evening, and overnight cleaning to minimize disruption to your members and operations.',
          },
        },
      ],
    },
  ],
};

export default function GymCleaningSydneyPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative pt-[24px] md:pt-[72px] pb-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
              <div className="py-8 sm:py-12 lg:py-24">
                <div className="text-center max-w-4xl mx-auto">
                  {/* Main Title */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-6xl font-semibold tracking-tighter leading-[0.875] selection:bg-primary/20 mb-8">
                    <span className="block text-[#1d1d1f] mb-1">PROFESSIONAL</span>
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      GYM CLEANING PARRAMATTA
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] lg:text-[24px] font-normal leading-[1.4] tracking-[-0.024em] mb-12 max-w-3xl mx-auto">
                    Expert gym cleaning Parramatta services for fitness centres and sports facilities. Professional
                    sanitization, equipment cleaning, and hygiene maintenance solutions.
                  </p>

                  {/* CTA Button */}
                  <div className="mb-16">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-10 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Free Quote
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
              <div className="max-w-[640px]">
                <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f]">
                  <span className="block mb-2">Why Choose Our</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Gym Cleaning
                    </span>
                  </span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Parramatta Services?
                    </span>
                  </span>
                </h2>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] mb-4">
                    Our professional gym cleaning Parramatta team understands the unique hygiene requirements of fitness
                    facilities. We specialize in equipment sanitization and high-traffic area maintenance.
                  </p>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em]">
                    With flexible scheduling and specialized gym cleaning Parramatta protocols, we ensure your fitness
                    centre maintains the highest standards of cleanliness and member safety.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Fitness Facility Specialists</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Our gym cleaning Parramatta experts understand fitness centre requirements, from equipment sanitization to
                  locker room hygiene standards that keep members safe and satisfied.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Flexible Scheduling</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Our gym cleaning Parramatta services work around your operating hours with early morning, late evening,
                  and overnight options to minimize disruption to members.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Advanced Sanitization</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  We use commercial-grade disinfectants and specialized equipment for thorough gym cleaning Parramatta that
                  eliminates bacteria, viruses, and fungi from all surfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gym Cleaning Services Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="py-16 sm:py-24 lg:py-32">
              <div className="text-center mb-12 sm:mb-16 lg:mb-24">
                <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                  <span className="block">Comprehensive</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Gym Cleaning Parramatta
                    </span>
                  </span>
                  <span className="block">Services</span>
                </h2>
                <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-3xl mx-auto">
                  Our complete gym cleaning Parramatta services cover every aspect of fitness facility maintenance. From
                  workout equipment to changing rooms, we ensure total hygiene.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Equipment Sanitization</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Our gym cleaning Parramatta includes thorough sanitization of all fitness equipment using specialized
                      disinfectants safe for exercise machines.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Swimming pool area maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Sauna and steam room sanitization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Benefits of Professional</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Gym Cleaning Parramatta
                  </span>
                </span>
                <span className="block">Services</span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Professional gym cleaning Parramatta services provide numerous advantages for fitness facility owners and
                members alike.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Member Health & Safety</h3>
                <p className="text-[15px] text-[#86868b]">
                  Reduce illness transmission and maintain hygienic workout environment
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Equipment Longevity</h3>
                <p className="text-[15px] text-[#86868b]">
                  Proper cleaning extends fitness equipment lifespan and reduces maintenance costs
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Professional Image</h3>
                <p className="text-[15px] text-[#86868b]">
                  Maintain pristine facility appearance that attracts and retains members
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Compliance Standards</h3>
                <p className="text-[15px] text-[#86868b]">
                  Meet health department requirements and industry hygiene standards
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceGetStarted />

        <Services />
      </main>
    </>
  );
}
