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
        'Expert guide on cleaning an office with professional office cleaning services in Parramatta by Alpha Clean Group. Proven methods, eco-friendly products, and comprehensive workplace hygiene solutions.',
      priceRange: '$150-$800',
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
          opens: '08:00',
          closes: '17:00',
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
            name: 'Rachel P.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Outstanding office cleaning service! Alpha Clean Group really knows the best methods for cleaning an office. Our workspace has never been more professional.',
          datePublished: '2024-11-19',
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Tom H.',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          reviewBody:
            'Professional team with excellent knowledge of cleaning an office properly. Alpha Clean Group offers flexible schedule and eco-friendly products. Highly recommended!',
          datePublished: '2024-11-14',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office#service',
      name: 'Cleaning an Office',
      description:
        'Professional office cleaning services by Alpha Clean Group with expert guidance on cleaning an office effectively. Comprehensive workplace hygiene solutions with proven methods and eco-friendly products.',
      provider: {
        '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/#business',
      },
      serviceType: 'Office Cleaning',
      areaServed: {
        '@type': 'City',
        name: 'Parramatta',
        sameAs: 'https://en.wikipedia.org/wiki/Parramatta',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Office Cleaning Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Basic Office Cleaning Package',
              description:
                'Essential cleaning an office service by Alpha Clean Group including desk sanitization, floor maintenance, restroom cleaning, and trash removal.',
            },
            price: '150',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Comprehensive Office Cleaning',
              description:
                'Complete cleaning an office service by Alpha Clean Group with deep cleaning, window washing, carpet maintenance, and detailed workspace sanitization.',
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
              name: 'Premium Office Cleaning Program',
              description:
                'Advanced cleaning an office solution by Alpha Clean Group including specialized equipment cleaning, air quality improvement, and comprehensive workplace hygiene management.',
            },
            price: '550',
            priceCurrency: 'AUD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-01-01',
            priceValidUntil: '2024-12-31',
          },
        ],
      },
      offers: {
        '@type': 'Offer',
        price: '150',
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
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office#webpage',
      url: 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office',
      name: 'Cleaning an Office | Professional Office Cleaning Guide & Services Parramatta',
      description:
        'Complete guide on cleaning an office effectively with professional office cleaning services in Parramatta by Alpha Clean Group. Expert methods, eco-friendly products, and flexible scheduling.',
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
            name: 'Cleaning an Office',
            item: 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.alpha-commercial-cleaning-parramatta.com.au/cleaning-an-office#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the essential steps for cleaning an office with Alpha Clean Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group essential steps for cleaning an office include decluttering workspaces, dusting surfaces, sanitizing high-touch areas, vacuuming floors, cleaning restrooms, and emptying trash bins. Follow a systematic approach from top to bottom.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I hire Alpha Clean Group for cleaning an office space?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group recommends cleaning an office daily for high-traffic areas, weekly for general cleaning, and monthly for deep cleaning. The frequency depends on office size, employee count, and business type.',
          },
        },
        {
          '@type': 'Question',
          name: 'What supplies does Alpha Clean Group use for cleaning an office?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alpha Clean Group uses microfiber cloths, all-purpose cleaners, disinfectants, vacuum cleaners, mops and buckets, glass cleaners, and specialized products for different surfaces and equipment when cleaning an office.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I hire Alpha Clean Group professionals for cleaning an office?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hiring Alpha Clean Group professionals for cleaning an office ensures consistent results, saves time, uses proper equipment and products, and maintains health standards. Professional cleaners have expertise in efficient office cleaning methods.',
          },
        },
      ],
    },
  ],
};

export default function CleaningAnOfficePage() {
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
                      CLEANING AN OFFICE GUIDE
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] lg:text-[24px] font-normal leading-[1.4] tracking-[-0.024em] mb-12 max-w-3xl mx-auto">
                    Master the art of cleaning an office with Alpha Clean Group professional techniques and proven
                    methods. Expert office cleaning services in Parramatta with eco-friendly solutions.
                  </p>

                  {/* CTA Button */}
                  <div className="mb-16">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-10 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Professional Help
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
                  <span className="block mb-2">Alpha Clean Group</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Cleaning an Office
                    </span>
                  </span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Expertise
                    </span>
                  </span>
                </h2>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] mb-4">
                    Alpha Clean Group provides expert guidance on cleaning an office with systematic approach and
                    professional techniques to maintain hygiene standards and create a productive work environment. Our
                    comprehensive guide covers everything from daily maintenance to deep cleaning procedures.
                  </p>
                  <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em]">
                    Whether you're learning the basics of cleaning an office or need Alpha Clean Group professional
                    services, we provide expert knowledge and proven methods for maintaining immaculate office spaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Proven Methods</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group experts share time-tested techniques for cleaning an office efficiently. Learn
                  professional methods that deliver consistent, outstanding results for any workspace.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Eco-Friendly Solutions</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group uses environmentally responsible approaches to cleaning an office. We use green
                  products and sustainable practices that protect both staff health and the environment.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-3">Professional Standards</h3>
                <p className="text-[#86868b] text-[17px] leading-[1.4]">
                  Alpha Clean Group teaches industry standards for cleaning an office that meet commercial hygiene
                  requirements. Our professional team ensures your workspace exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Cleaning Guide Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="py-16 sm:py-24 lg:py-32">
              <div className="text-center mb-12 sm:mb-16 lg:mb-24">
                <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                  <span className="block">Alpha Clean Group</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                      Complete Office
                    </span>
                  </span>
                  <span className="block">Cleaning Guide</span>
                </h2>
                <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-3xl mx-auto">
                  Follow Alpha Clean Group comprehensive approach to cleaning an office systematically. From preparation
                  to final touches, learn professional techniques that ensure thorough results.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Preparation Phase</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group emphasizes proper preparation as crucial for effective cleaning an office.
                      Organize supplies and plan your approach for maximum efficiency.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Gather all necessary cleaning supplies and equipment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Clear and organize workspaces and surfaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Create systematic cleaning plan and checklist
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Workspace Cleaning</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group focuses on individual workspaces when cleaning an office. Proper desk and
                      equipment sanitization is essential for employee health.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Disinfect desks, keyboards, and monitors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Clean phones, switches, and high-touch surfaces
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Organize cables and remove dust from equipment
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Common Areas & Facilities</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group emphasizes cleaning an office requires special attention to shared spaces. These
                      high-traffic areas need thorough sanitization and regular maintenance.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Deep clean restrooms and sanitize fixtures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Kitchen and break room comprehensive cleaning
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Reception and waiting area maintenance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9fa] rounded-[15px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Floor Care & Final Steps</h3>
                    <p className="text-[#86868b] text-[17px] mb-4">
                      Alpha Clean Group completes office cleaning process with proper floor care and final quality
                      checks. Attention to detail makes all the difference.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">
                          Vacuum carpets and mop hard floors thoroughly
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Empty all trash bins and replace liners</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-[17px]">✓</span>
                        <span className="text-[#86868b] text-[17px]">Clean windows and glass surfaces for clarity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Tips Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Alpha Clean Group Tips</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    for Cleaning an Office
                  </span>
                </span>
                <span className="block">Efficiently</span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                Alpha Clean Group expert advice and proven strategies for cleaning an office like a professional. These
                tips will help you achieve superior results while saving time and effort.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Quality Control</h3>
                <p className="text-[15px] text-[#86868b]">
                  Implement thorough inspection procedures to ensure consistent cleaning standards
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Health & Safety</h3>
                <p className="text-[15px] text-[#86868b]">
                  Use proper techniques and products to maintain workplace hygiene and safety
                </p>
              </div>

              <div className="bg-[#f9f9fa] rounded-[15px] p-6 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">Cost Efficiency</h3>
                <p className="text-[15px] text-[#86868b]">
                  Optimize supplies and methods to achieve professional results cost-effectively
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Professional Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
                <span className="block">Why Choose</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
                    Alpha Clean Group
                  </span>
                </span>
                <span className="block">Professional Services?</span>
              </h2>
              <p className="text-[#86868b] text-[17px] sm:text-[19px] lg:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] max-w-2xl mx-auto mt-6">
                While learning about cleaning an office is valuable, Alpha Clean Group professional services offer
                expertise, efficiency, and consistency that's hard to match with in-house efforts.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Expert Knowledge</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group professional cleaners have extensive experience in cleaning an office using
                      industry-best techniques and specialized equipment for superior results.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Time Efficiency</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Save valuable time by letting Alpha Clean Group professionals handle cleaning an office while your
                      team focuses on core business activities and productivity.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Consistent Results</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group teams ensure consistent quality when cleaning an office, maintaining high
                      standards every time with systematic approaches and quality control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path
                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,4 12,14.01 9,11.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Professional Equipment</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group uses commercial-grade equipment and specialized tools that deliver superior
                      results when cleaning an office compared to basic supplies.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Health & Safety Compliance</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Alpha Clean Group ensures workplace health standards are met with proper protocols and certified
                      products when cleaning an office professionally.
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
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-2">Peace of Mind</h3>
                    <p className="text-[#86868b] text-[17px] leading-[1.4]">
                      Rely on Alpha Clean Group insured, trained professionals for cleaning an office, reducing
                      liability and ensuring reliable service you can trust.
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
