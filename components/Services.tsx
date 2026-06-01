"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "Commercial Cleaning",
      description:
        "Comprehensive cleaning solutions for businesses of all sizes, ensuring a pristine and inviting environment for employees and customers alike.",
      image: "/images/services/4.jpg",
      slug: "commercial-cleaning",
      icon: "🏢",
    },
    {
      title: "Office Cleaning",
      description:
        "Meticulous cleaning services tailored to maintain the cleanliness and hygiene of your workplace, enhancing productivity and morale.",
      image: "/images/services/3.jpg",
      slug: "office-cleaning",
      icon: "💼",
    },
    {
      title: "Warehouse Cleaning",
      description:
        "Specialized cleaning services to keep warehouses organized, safe, and compliant with industry standards.",
      image: "/images/services/11.jpg",
      slug: "warehouse-cleaning",
      icon: "🏭",
    },
    {
      title: "Strata Cleaning",
      description:
        "Professional cleaning services for strata properties, ensuring common areas are clean, welcoming, and well-maintained.",
      image: "/images/services/9.jpg",
      slug: "strata-cleaning",
      icon: "🏘️",
    },
    {
      title: "Medical Centre Cleaning",
      description:
        "Ensuring a safe and sterile environment for both patients and health care providers.",
      image: "/images/services/10.jpg",
      slug: "medical-centre-cleaning",
      icon: "🏥",
    },
    {
      title: "Childcare Cleaning",
      description:
        "Dedicated cleaning services for childcare centers, prioritizing cleanliness and safety for children's well-being.",
      image: "/images/services/13.jpg",
      slug: "childcare-cleaning",
      icon: "🧸",
    },
    {
      title: "Gym Cleaning",
      description:
        "Specialized cleaning services for fitness facilities, maintaining hygiene and safety for all members.",
      image: "/images/services/6.jpg",
      slug: "gym-cleaning",
      icon: "💪",
    },
    {
      title: "End of Lease Cleaning",
      description:
        "Thorough cleaning services to ensure your property meets all requirements for handover, helping you secure your bond.",
      image: "/images/services/14.jpg",
      slug: "end-of-lease-cleaning",
      icon: "🏠",
    },
    {
      title: "Carpet Cleaning",
      description:
        "Deep carpet cleaning and stain removal services using advanced techniques to restore your carpets to pristine condition.",
      image: "/images/services/7.jpg",
      slug: "carpet-cleaning",
      icon: "🧽",
    },
  ];

  // Responsive settings
  const getSlidesPerView = () => {
    if (!mounted) return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const slidesPerView = getSlidesPerView();
  const maxSlide = Math.max(0, services.length - slidesPerView);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Parramatta Services
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block mb-2">Parramatta's Trusted</span>
            <span className="text-primary">Cleaning Experts</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Parramatta and Western Sydney with comprehensive cleaning
            solutions tailored to local businesses and residents. From CBD
            offices to suburban homes, we deliver excellence across the region.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mb-8">
            <button
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full border transition-all ${
                currentSlide === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextSlide}
              disabled={currentSlide === maxSlide}
              className={`p-3 rounded-full border transition-all ${
                currentSlide === maxSlide
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesPerView)
                }%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                      {/* Image Section */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                        {/* Service Icon */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <span className="text-2xl">{service.icon}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Learn More Link */}
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Alpha Clean Group?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional cleaning results with professional
              expertise and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Quality Guaranteed
              </h4>
              <p className="text-sm text-gray-600">
                100% satisfaction with every service
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                24/7 Available
              </h4>
              <p className="text-sm text-gray-600">
                Round-the-clock service availability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Fully Insured
              </h4>
              <p className="text-sm text-gray-600">
                Complete insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h4>
              <p className="text-sm text-gray-600">
                Safe, green cleaning products
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Professional Cleaning?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your cleaning needs. Our experienced team
            will assess your requirements and provide the perfect solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
