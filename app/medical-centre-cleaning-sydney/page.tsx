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
        'Professional medical centre cleaning Parramatta services with specialized infection control protocols, medical-grade disinfection, and healthcare compliance standards.',
      priceRange: '$300-$1500',
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
            name: 'Dr. Patricia L.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Excellent medical centre cleaning Parramatta service! They understand healthcare requirements and maintain the highest hygiene standards. Professional team with attention to infection control.',
          datePublished: '2024-11-20',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Dr. Michael K.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Outstanding medical centre cleaning Parramatta. They follow all compliance protocols and use medical-grade disinfectants. Essential for patient safety and practice reputation.',
          datePublished: '2024-11-16',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta#service',
      name: 'Medical Centre Cleaning Parramatta',
      description:
        'Professional medical centre cleaning Parramatta services with specialized infection control protocols, medical-grade disinfection, and healthcare compliance standards for all medical facilities.',
      provider: {
        '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
      },
      serviceType: 'Medical Centre Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Parramatta',
        sameAs: 'https://en.wikipedia.org/wiki/Parramatta',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medical Centre Cleaning Services Parramatta',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'GP Practice Cleaning',
              description:
                'Comprehensive medical centre cleaning Parramatta for general practice clinics including consultation rooms, waiting areas, and specialized infection control protocols.',
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
              name: 'Specialist Medical Centre Cleaning',
              description:
                'Advanced medical centre cleaning Parramatta for specialist practices with enhanced disinfection protocols and specialized equipment cleaning.',
            },
            price: '650',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Surgical Centre Deep Cleaning',
              description:
                'Premium medical centre cleaning Parramatta for surgical facilities with sterile environment protocols and advanced sanitization procedures.',
            },
            price: '950',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
        ],
      },
      offers: {
        '@type': 'Offer',
        price: '350',
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
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta#webpage',
      url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta',
      name: 'Medical Centre Cleaning Parramatta | Healthcare Facility Cleaning Services',
      description:
        'Professional medical centre cleaning Parramatta services with specialized infection control protocols, medical-grade disinfection, and healthcare compliance standards.',
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
            name: 'Medical Centre Cleaning Parramatta',
            item: 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/medical-centre-cleaning-parramatta#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes medical centre cleaning Parramatta different from regular cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medical centre cleaning Parramatta requires specialized infection control protocols, medical-grade disinfectants, trained healthcare cleaning staff, and compliance with healthcare regulations to ensure patient and staff safety.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you follow healthcare compliance standards for medical centre cleaning Parramatta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, our medical centre cleaning Parramatta services comply with all healthcare regulations, infection control guidelines, and industry standards including proper waste management and contamination prevention protocols.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should medical centre cleaning Parramatta be performed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medical centre cleaning Parramatta frequency depends on patient volume and facility type. We recommend daily cleaning for high-traffic areas, with deep sanitization weekly and quarterly comprehensive cleaning.',
          },
        },
        {
          '@type': 'Question',
            name: 'What areas are included in medical centre cleaning Parramatta services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our medical centre cleaning Parramatta covers consultation rooms, waiting areas, reception, restrooms, treatment rooms, sterilization areas, and all high-touch surfaces with specialized medical equipment cleaning.',
          },
        },
      ],
    },
  ],
};

export default function MedicalCentreCleaningSydneyPage() {
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
                      MEDICAL CENTRE CLEANING PARRAMATTA
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] lg:text-[24px] font-normal leading-[1.4] tracking-[-0.024em] mb-12 max-w-3xl mx-auto">
                    Specialized healthcare facility cleaning with infection control protocols, medical-grade
                    disinfection, and compliance standards for patient safety.
                  </p>

                  {/* CTA Button */}
                  <div className="mb-16">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-10 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Healthcare Quote
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
                      Medical Centre
                    </span>
                  </span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Cleaning Parramatta?
                    </span>
                  </span>
                </h2>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] mb-4">
                    Our medical centre cleaning Parramatta specialists understand the critical importance of healthcare
                    hygiene. We follow strict infection control protocols and use medical-grade disinfectants to ensure
                    patient and staff safety.
                  </p>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em]">
                    With specialized training in healthcare facility requirements, our medical centre cleaning Parramatta
                    team maintains compliance with all regulations while providing flexible scheduling around your
                    practice hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Healthcare Compliance</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Our medical centre cleaning Parramatta services strictly adhere to healthcare regulations, infection
                  control guidelines, and industry compliance standards for medical facilities.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Infection Control Protocols</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Specialized medical centre cleaning Parramatta with advanced infection prevention measures, proper waste
                  management, and contamination control procedures.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Medical-Grade Disinfection</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Our medical centre cleaning Parramatta uses hospital-grade disinfectants and specialized equipment to
                  eliminate pathogens and maintain sterile environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Cleaning Services Section */}
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
                      Medical Centre Cleaning
                    </span>
                  </span>
                  <span className="block">Parramatta Services</span>
                </h2>
                <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-3xl mx-auto">
                  Our medical centre cleaning Parramatta covers all healthcare facility requirements from consultation rooms
                  to specialized treatment areas with the highest hygiene standards.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Consultation & Treatment Rooms</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Specialized medical centre cleaning Parramatta for patient care areas with enhanced infection control
                      protocols and medical equipment sanitization.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Medical equipment and furniture disinfection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Examination table and medical device cleaning
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">High-touch surface sanitization protocols</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Waiting Areas & Reception</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Professional medical centre cleaning Parramatta for patient areas with frequent turnover requiring
                      continuous sanitization and maintenance.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Reception desk and counter disinfection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Seating area and magazine sanitization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Floor cleaning with medical-grade products</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Sterilization & Laboratory Areas</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Advanced medical centre cleaning Parramatta for critical areas requiring sterile environments and
                      specialized contamination control procedures.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Sterilization equipment and autoclave cleaning
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Laboratory surface and equipment sanitization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Biohazard waste management protocols</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Staff Areas & Facilities</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Complete medical centre cleaning Parramatta for staff facilities ensuring a hygienic work environment
                      that meets healthcare standards.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Staff kitchen and break room cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Restroom sanitization with medical standards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Standards Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Healthcare Compliance</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    & Safety Standards
                  </span>
                </span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Our medical centre cleaning Parramatta adheres to the strictest healthcare regulations and industry
                standards to ensure patient safety and regulatory compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">NHMRC Guidelines</h3>
                <p className="text-[15px] text-[#86868b]">
                  Compliant with National Health and Medical Research Council infection prevention standards
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">TGA Approved Products</h3>
                <p className="text-[15px] text-[#86868b]">
                  Using only Therapeutic Goods Administration approved disinfectants and cleaning agents
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Waste Management</h3>
                <p className="text-[15px] text-[#86868b]">
                  Proper clinical and pharmaceutical waste handling according to regulations
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Documentation</h3>
                <p className="text-[15px] text-[#86868b]">
                  Comprehensive cleaning logs and compliance documentation for audits
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Training Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Why Healthcare Facilities</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Trust Our Medical Centre
                  </span>
                </span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Cleaning Parramatta
                  </span>
                </span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Medical professionals choose our specialized cleaning services because we understand the unique
                challenges and requirements of healthcare environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Healthcare-Trained Staff</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Our medical centre cleaning Parramatta team receives specialized training in healthcare hygiene,
                      infection control, and medical facility requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m4-8h4a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-4m-4-6v6m0-6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Advanced Equipment</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      State-of-the-art cleaning equipment and hospital-grade disinfection systems ensure superior
                      results for medical centre cleaning Parramatta.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Confidentiality & Security</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Strict confidentiality protocols and security clearances ensure patient privacy is maintained
                      during medical centre cleaning Parramatta services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Flexible Scheduling</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Our medical centre cleaning Parramatta accommodates your practice hours with after-hours, weekend, and
                      emergency cleaning services.
                    </p>
                  </div>
                </div>

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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Quality Assurance</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Rigorous quality control processes and regular audits ensure our medical centre cleaning Parramatta
                      consistently meets healthcare standards.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Professional Insurance</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Comprehensive professional indemnity and public liability insurance coverage protects your medical
                      practice during cleaning services.
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
