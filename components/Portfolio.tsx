'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const services = [
    {
      image: '/images/services/4.jpg',
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning solutions for businesses of all sizes',
      slug: 'commercial-cleaning',
      time: '2-4 hours',
      area: '100-500m²',
    },
    {
      image: '/images/services/3.jpg',
      title: 'Office Cleaning',
      description: 'Meticulous cleaning services for your workplace',
      slug: 'office-cleaning',
      time: '1-3 hours',
      area: '50-200m²',
    },
    {
      image: '/images/services/11.jpg',
      title: 'Warehouse Cleaning',
      description: 'Specialised cleaning services for warehouses',
      slug: 'warehouse-cleaning',
      time: '4-8 hours',
      area: '200-1000m²',
    },
    {
      image: '/images/services/9.jpg',
      title: 'Strata Cleaning',
      description: 'Professional cleaning for strata properties',
      slug: 'strata-cleaning',
      time: '2-5 hours',
      area: '100-300m²',
    },
    {
      image: '/images/services/10.jpg',
      title: 'Medical Centre Cleaning',
      description: 'Safe and sterile environment for healthcare',
      slug: 'medical-centre-cleaning',
      time: '3-6 hours',
      area: '150-400m²',
    },
    {
      image: '/images/services/13.jpg',
      title: 'Childcare Cleaning',
      description: 'Dedicated cleaning for childcare centers',
      slug: 'childcare-cleaning',
      time: '2-4 hours',
      area: '80-250m²',
    },
    {
      image: '/images/services/6.jpg',
      title: 'Gym Cleaning',
      description: 'Specialised cleaning for fitness facilities',
      slug: 'gym-cleaning',
      time: '2-5 hours',
      area: '100-300m²',
    },
    {
      image: '/images/services/14.jpg',
      title: 'End of Lease Cleaning',
      description: 'Thorough cleaning for property handover',
      slug: 'end-of-lease-cleaning',
      time: '3-7 hours',
      area: '50-200m²',
    },
    {
      image: '/images/services/7.jpg',
      title: 'Carpet Cleaning',
      description: 'Deep carpet cleaning and stain removal services',
      slug: 'carpet-cleaning',
      time: '2-4 hours',
      area: '50-300m²',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Services Portfolio
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block mb-2">Professional Cleaning</span>
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From commercial offices to specialized facilities, we deliver exceptional cleaning results across Parramatta.
            Each service is tailored to meet industry-specific standards and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.title} href={`/services/${service.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
                {/* Image Section */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Service Number */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                  {/* Service Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {service.time}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      </svg>
                      {service.area}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex justify-end mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Available Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Professional Cleaning?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your cleaning needs. Our team will assess your requirements and provide a
            comprehensive solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Get Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="tel:+61291406024"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call: 0291 406 024
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
