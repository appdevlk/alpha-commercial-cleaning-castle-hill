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
        'Leading Parramatta cleaning company providing professional residential and commercial cleaning services across Parramatta metro area with expert cleaners and eco-friendly products.',
      priceRange: '$100-$1000',
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
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '07:00',
          closes: '18:00',
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
            name: 'Emma W.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Best Parramatta cleaning company! Professional team, reliable service, and exceptional results. Our office has never looked better. Highly recommend Alpha Clean Group.',
          datePublished: '2024-11-22',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'James R.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Outstanding Parramatta cleaning company with excellent customer service. Alpha Clean Group uses eco-friendly products and always delivers on time. Perfect for busy professionals.',
          datePublished: '2024-11-18',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company#service',
      name: 'Parramatta Cleaning Company Services',
      description:
        'Comprehensive cleaning services from leading Parramatta cleaning company. Professional residential, commercial, and specialized cleaning with expert team and eco-friendly products.',
      provider: {
        '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
      },
      serviceType: 'Cleaning Services',
      areaServed: {
        '@type': 'City',
        name: 'Parramatta',
        sameAs: 'https://en.wikipedia.org/wiki/Parramatta',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Parramatta Cleaning Company Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Residential Cleaning Services',
              description:
                'Professional home cleaning from trusted Parramatta cleaning company including regular house cleaning, deep cleaning, and move-in/out services.',
            },
            price: '120',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Cleaning Services',
              description:
                'Expert office and commercial cleaning from reliable Parramatta cleaning company with flexible schedules and comprehensive workplace solutions.',
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
              name: 'Specialized Cleaning Services',
              description:
                'Specialized cleaning solutions from experienced Parramatta cleaning company including carpet cleaning, window cleaning, and post-construction cleanup.',
            },
            price: '180',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
        ],
      },
      offers: {
        '@type': 'Offer',
        price: '120',
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
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company#webpage',
      url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company',
      name: 'Parramatta Cleaning Company | Professional Cleaning Services Alpha Clean Group',
      description:
        'Leading Parramatta cleaning company providing professional residential and commercial cleaning services. Expert cleaners, eco-friendly products, reliable service across Parramatta metro.',
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
            name: 'Parramatta Cleaning Company',
            item: 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/parramatta-cleaning-company#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes Alpha Clean Group the best Parramatta cleaning company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As a leading Parramatta cleaning company, Alpha Clean Group offers professional expertise, eco-friendly products, comprehensive insurance, flexible scheduling, and exceptional customer service with over 1200 satisfied clients across Parramatta metro.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas does Alpha Clean Group Parramatta cleaning company serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Parramatta cleaning company serves the entire Parramatta metro area within a 50km radius, including CBD, Eastern Suburbs, Western Sydney, Northern Beaches, and surrounding areas.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Alpha Clean Group Parramatta cleaning company offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Parramatta cleaning company provides residential cleaning, commercial cleaning, office cleaning, carpet cleaning, window cleaning, move-in/out cleaning, and post-construction cleanup services.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book services with Alpha Clean Group Parramatta cleaning company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact our Parramatta cleaning company by phone at 0291406024, email, or through our website contact form. We provide instant quotes and flexible scheduling to meet your needs.',
          },
        },
      ],
    },
  ],
};

export default function SydneyCleaningCompanyPage() {
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
                      PARRAMATTA CLEANING COMPANY
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] lg:text-[24px] font-normal leading-[1.4] tracking-[-0.024em] mb-12 max-w-3xl mx-auto">
                    Professional residential and commercial cleaning services across Parramatta metro. Expert cleaners,
                    eco-friendly products, and reliable service you can trust from Alpha Clean Group.
                  </p>

                  {/* CTA Button */}
                  <div className="mb-16">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-10 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Instant Quote
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
                      Parramatta?
                    </span>
                  </span>
                </h2>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] mb-4">
                    As a trusted Parramatta cleaning company, Alpha Clean Group has built our reputation on delivering
                    exceptional cleaning services across Parramatta metro area. Our professional team combines expertise
                    with eco-friendly products to ensure outstanding results.
                  </p>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em]">
                    Whether you need residential or commercial cleaning, Alpha Clean Group provides reliable,
                    comprehensive solutions tailored to your specific requirements with flexible scheduling and
                    competitive pricing.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Experienced Professionals</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group employs trained, insured professionals with years of experience. Every team member
                  is background-checked and committed to delivering exceptional results.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Eco-Friendly Approach</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  As a responsible Parramatta cleaning company, Alpha Clean Group prioritizes environmental sustainability
                  using eco-friendly products that are safe for your family, pets, and the environment.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Comprehensive Coverage</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group serves the entire Parramatta metro area with full insurance coverage, giving you
                  peace of mind and protection for your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="py-16 sm:py-24 lg:py-32">
              <div className="text-center mb-12 sm:mb-16 lg:mb-24">
                <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                  <span className="block">Complete Cleaning</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Services from Alpha
                    </span>
                  </span>
                  <span className="block">Clean Group Parramatta</span>
                </h2>
                <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-3xl mx-auto">
                  Alpha Clean Group offers comprehensive cleaning solutions for homes and businesses. From regular
                  maintenance to specialized services, we handle it all with professional expertise.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Residential Cleaning Services</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group specializes in comprehensive home cleaning services tailored to your lifestyle
                      and schedule.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Regular house cleaning and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Deep cleaning and spring cleaning services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Move-in and move-out cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">End of lease and bond cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Commercial Cleaning Services</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Professional commercial cleaning from Alpha Clean Group that understands business requirements and
                      maintains workplace standards.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Office cleaning and workplace maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Retail and hospitality cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Medical and healthcare facility cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Educational institution cleaning</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Specialized Cleaning Services</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group offers specialized services for unique cleaning challenges that require expert
                      knowledge and equipment.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Carpet and upholstery cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Window cleaning and pressure washing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Post-construction cleanup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Event and venue cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Emergency Cleaning Services</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      When urgent cleaning is needed, Alpha Clean Group provides rapid response services with same-day
                      availability for emergency situations.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Same-day emergency cleaning response</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Water damage and flood cleanup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Accident and spill cleanup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Last-minute event preparation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Parramatta Metro Areas</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Alpha Clean Group Serves
                  </span>
                </span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Alpha Clean Group proudly serves the entire Parramatta metropolitan area, providing reliable cleaning
                services to residential and commercial clients across all suburbs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Parramatta CBD & Inner City</h3>
                <p className="text-[15px] text-[#86868b]">
                  Professional cleaning services for CBD offices, apartments, and commercial spaces
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Eastern Suburbs</h3>
                <p className="text-[15px] text-[#86868b]">
                  Comprehensive cleaning for Bondi, Woollahra, Randwick, and surrounding areas
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Western Sydney</h3>
                <p className="text-[15px] text-[#86868b]">
                  Reliable cleaning services for Parramatta, Penrith, Blacktown, and western suburbs
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Northern Beaches & North Shore</h3>
                <p className="text-[15px] text-[#86868b]">
                  Expert cleaning for Manly, Chatswood, Hornsby, and northern coastal areas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">What Sets</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Alpha Clean Group
                  </span>
                </span>
                <span className="block">Apart?</span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Discover the key advantages that make Alpha Clean Group the preferred Parramatta cleaning company for over
                1200 satisfied clients across the metropolitan area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Proven Track Record</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group has successfully completed thousands of cleaning projects with a 4.8-star
                      rating, demonstrating consistent excellence and customer satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Quality Guarantee</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      As a reputable Parramatta cleaning company, Alpha Clean Group guarantees our work with comprehensive
                      insurance coverage and a satisfaction guarantee for your complete peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2" />
                      <path d="m15.5 3.5-3 3m0 6-3 3" stroke="currentColor" strokeWidth="2" />
                      <path d="m20.5 8.5-3 3m0 6-3 3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Flexible Scheduling</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group works around your schedule with flexible timing options, including weekends and
                      after-hours service to minimize disruption.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Professional Equipment</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group invests in state-of-the-art equipment and premium eco-friendly products to
                      deliver superior cleaning results efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Trained Team</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Every member of the Alpha Clean Group team is professionally trained, background-checked, and
                      committed to maintaining the highest cleaning standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M14 9V5a3 3 0 0 0-6 0v4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="2" y="9" width="20" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Transparent Pricing</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group provides upfront, honest pricing with no hidden fees. Get instant quotes and
                      competitive rates for all cleaning services.
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
