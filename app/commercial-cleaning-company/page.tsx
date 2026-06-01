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
        'Leading commercial cleaning company Alpha Clean Group providing professional business cleaning services across Parramatta with expert commercial cleaners and flexible contracts.',
      priceRange: '$200-$2000',
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
          opens: '06:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '07:00',
          closes: '19:00',
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
            name: 'Robert M.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Excellent commercial cleaning company! Alpha Clean Group provides professional service, reliable team, and competitive pricing. Our office complex has never looked better. Highly recommend for business cleaning.',
          datePublished: '2024-11-21',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Sandra K.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Outstanding commercial cleaning company! Alpha Clean Group offers flexible contracts and professional staff. They understand business needs and deliver consistent quality every time.',
          datePublished: '2024-11-17',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company#service',
      name: 'Commercial Cleaning Company Services',
      description:
        'Comprehensive commercial cleaning services from leading business cleaning company Alpha Clean Group. Professional office cleaning, retail cleaning, and industrial cleaning solutions with flexible contracts.',
      provider: {
        '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
      },
      serviceType: 'Commercial Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Parramatta',
        sameAs: 'https://en.wikipedia.org/wiki/Parramatta',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Commercial Cleaning Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Office Building Cleaning',
              description:
                'Professional office building cleaning from experienced commercial cleaning company Alpha Clean Group including daily maintenance, deep cleaning, and comprehensive workplace hygiene.',
            },
            price: '400',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Retail Store Cleaning',
              description:
                'Specialized retail cleaning services from trusted commercial cleaning company Alpha Clean Group with customer-friendly scheduling and high-traffic area maintenance.',
            },
            price: '350',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industrial Facility Cleaning',
              description:
                'Heavy-duty industrial cleaning from reliable commercial cleaning company Alpha Clean Group including warehouse cleaning, manufacturing facility maintenance, and specialized equipment cleaning.',
            },
            price: '800',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
        ],
      },
      offers: {
        '@type': 'Offer',
        price: '400',
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
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company#webpage',
      url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company',
      name: 'Commercial Cleaning Company | Professional Business Cleaning Services Parramatta',
      description:
        'Leading commercial cleaning company Alpha Clean Group providing professional business cleaning services across Parramatta. Expert commercial cleaners, flexible contracts, and comprehensive workplace solutions.',
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
            name: 'Commercial Cleaning Company',
            item: 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/commercial-cleaning-company#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Alpha Clean Group commercial cleaning company provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group commercial cleaning company provides office cleaning, retail cleaning, industrial cleaning, hospitality cleaning, healthcare facility cleaning, and specialized commercial maintenance services with flexible contracts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do Alpha Clean Group commercial cleaning company contracts work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group commercial cleaning company offers flexible contracts including daily, weekly, monthly, and one-time cleaning services with customizable terms to suit your business requirements and budget.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why choose Alpha Clean Group professional commercial cleaning company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group professional commercial cleaning company provides consistent quality, trained staff, proper equipment, insurance coverage, and cost-effective solutions that maintain professional business environments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas does Alpha Clean Group commercial cleaning company serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group commercial cleaning company serves the entire Parramatta metropolitan area including CBD, business districts, industrial zones, and commercial centers across all suburbs.',
          },
        },
      ],
    },
  ],
};

export default function CommercialCleaningCompanyPage() {
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
                    <span className="block text-[#1d1d1f] mb-1">ALPHA CLEAN GROUP</span>
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      COMMERCIAL CLEANING COMPANY
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] lg:text-[24px] font-normal leading-[1.4] tracking-[-0.024em] mb-12 max-w-3xl mx-auto">
                    Professional business cleaning services across Parramatta. Alpha Clean Group expert commercial
                    cleaners, flexible contracts, and comprehensive workplace solutions for all industries.
                  </p>

                  {/* CTA Button */}
                  <div className="mb-16">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-10 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Commercial Quote
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
                  <span className="block mb-2">Why Choose</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Alpha Clean Group
                    </span>
                  </span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Commercial Company?
                    </span>
                  </span>
                </h2>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] mb-4">
                    As a trusted commercial cleaning company, Alpha Clean Group understands that your business
                    environment directly impacts productivity, employee satisfaction, and client impressions. Our
                    professional commercial cleaners deliver consistent, high-quality results.
                  </p>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em]">
                    From small offices to large commercial complexes, Alpha Clean Group provides tailored solutions with
                    flexible contracts, competitive pricing, and comprehensive workplace hygiene management.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Expert Commercial Team</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group employs trained professionals who understand business environments and maintain the
                  highest standards of commercial cleaning excellence.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Flexible Contract Options</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  As a responsive commercial cleaning company, Alpha Clean Group offers customizable contracts from
                  daily maintenance to one-time deep cleaning, adapting to your business needs and budget.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Comprehensive Insurance</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group carries full professional indemnity and public liability insurance, providing
                  complete protection for your business premises and assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="py-16 sm:py-24 lg:py-32">
              <div className="text-center mb-12 sm:mb-16 lg:mb-24">
                <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                  <span className="block">Complete</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Alpha Clean Group
                    </span>
                  </span>
                  <span className="block">Commercial Solutions</span>
                </h2>
                <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-3xl mx-auto">
                  Alpha Clean Group provides comprehensive business cleaning services across all industries, maintaining
                  professional environments that enhance productivity and client satisfaction.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Office Building Cleaning</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Professional office cleaning from Alpha Clean Group experienced commercial cleaning company,
                      ensuring productive work environments for businesses of all sizes.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Daily workstation sanitization and maintenance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Conference room and meeting space cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Reception and lobby area maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Kitchen and break room comprehensive cleaning
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Retail & Shopping Centers</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group specialized retail cleaning services that maintain customer-friendly
                      environments and enhance brand image for high-traffic commercial spaces.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Customer area and shopping floor maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Fitting room and restroom sanitization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Window display and storefront cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Stock room and back-of-house cleaning</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Industrial & Manufacturing</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group heavy-duty industrial cleaning for warehouses, factories, and manufacturing
                      facilities with safety protocols and specialized equipment.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Production floor and machinery cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Warehouse and storage area maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Loading dock and shipping area cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">High-bay and ceiling maintenance services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Specialized Services</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group specialized commercial cleaning services that require expert attention and
                      professional-grade equipment for unique business requirements.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Post-construction cleanup services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Event venue cleaning and setup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Emergency cleaning response</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Carpet and upholstery deep cleaning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contract Types Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Alpha Clean Group</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Flexible Commercial
                  </span>
                </span>
                <span className="block">Cleaning Contracts</span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Alpha Clean Group offers tailored contract options to suit every business size and budget, from startups
                to large enterprises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Daily Cleaning Contracts</h3>
                <p className="text-[15px] text-[#86868b]">
                  Comprehensive daily maintenance for high-traffic commercial facilities
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Weekly Service Plans</h3>
                <p className="text-[15px] text-[#86868b]">
                  Regular weekly cleaning perfect for medium-sized offices and businesses
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Monthly Deep Cleaning</h3>
                <p className="text-[15px] text-[#86868b]">
                  Thorough monthly cleaning for smaller offices and specialized facilities
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">One-Time Services</h3>
                <p className="text-[15px] text-[#86868b]">
                  Project-based cleaning for special events, emergencies, and deep cleans
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Industries Alpha Clean Group</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Commercial Cleaning
                  </span>
                </span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Company Serves
                  </span>
                </span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Alpha Clean Group has extensive experience across diverse industries, understanding unique requirements
                and maintaining industry-specific standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path
                        d="M5 21V7l8-4v18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 21V11l-6-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Corporate Offices</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group provides professional office cleaning for corporate headquarters, business
                      centers, and multi-tenant buildings with flexible scheduling and executive standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path
                        d="M16 10a4 4 0 0 1-8 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Retail & Shopping Centers</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group specialized retail cleaning services that maintain customer-friendly
                      environments, enhance brand image, and support high-traffic commercial spaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Healthcare Facilities</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group medical-grade cleaning for clinics, hospitals, and healthcare centers with
                      infection control protocols and healthcare compliance standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" />
                      <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Manufacturing & Industrial</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group heavy-duty industrial cleaning for warehouses, factories, and manufacturing
                      facilities with safety protocols and specialized equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M12 2L2 7l10 5 10-5-10-5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17l10 5 10-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12l10 5 10-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Educational Institutions</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group school and university cleaning services that maintain safe learning environments
                      with flexible scheduling around academic calendars.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line
                        x1="9"
                        y1="9"
                        x2="9.01"
                        y2="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="15"
                        y1="9"
                        x2="15.01"
                        y2="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Hospitality & Entertainment</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group hotel, restaurant, and entertainment venue cleaning that enhances guest
                      experiences and maintains hospitality industry standards.
                    </p>
                  </div>
                </div>
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
