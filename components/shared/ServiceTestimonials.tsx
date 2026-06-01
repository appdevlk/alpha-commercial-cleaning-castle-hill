"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

// Default testimonials with placeholder avatars
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Justin D.",
    rating: 5,
    text: "Alpha Clean Group has transformed our space! Their attention to detail and professional service is outstanding.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    text: "We've been using Alpha Clean Group for over a year now, and their service is exceptional.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Michael P.",
    rating: 5,
    text: "As a property manager, I've worked with many cleaning companies, but Alpha Clean Group stands out.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Rachel K.",
    rating: 5,
    text: "Alpha Clean Group has been maintaining our facilities for the past two years. Their team goes above and beyond.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "David W.",
    rating: 5,
    text: "Switching to Alpha Clean Group was one of the best decisions. They understand the unique challenges.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Emma L.",
    rating: 5,
    text: "I manage a busy establishment, and Alpha Clean Group has been instrumental in maintaining our high standards of cleanliness.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
];

interface ServiceTestimonialsProps {
  testimonials?: Testimonial[];
}

export default function ServiceTestimonials({
  testimonials = defaultTestimonials,
}: ServiceTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= testimonials.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Create a duplicated array of testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-slate-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
            What our Happy <span className="text-primary-900">Clients say</span>
          </h2>

          {/* Google Review Badge */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M22.227 12c0-.756-.069-1.483-.197-2.182H12v4.125h5.737c-.247 1.33-.996 2.458-2.121 3.213v2.67h3.436c2.01-1.85 3.175-4.576 3.175-7.826z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.868 0 5.275-.951 7.036-2.573l-3.436-2.67c-.951.634-2.17 1.009-3.6 1.009-2.77 0-5.114-1.87-5.952-4.384H2.52v2.76C4.28 20.636 7.887 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M6.048 14.382c-.213-.639-.334-1.32-.334-2.018 0-.698.121-1.38.334-2.018V7.586H2.52C1.909 8.944 1.55 10.442 1.55 12s.358 3.056.969 4.414l3.53-2.032z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.545c1.562 0 2.963.536 4.068 1.587l3.048-3.048C17.152 2.228 14.745 1 12 1 7.887 1 4.28 3.364 2.52 6.86l3.53 2.032C6.885 7.415 9.23 5.545 12 5.545z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                5.0 Star Reviews
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-primary-900 hover:bg-primary-900/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-900"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="rotate-180 text-gray-600"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-primary-900 hover:bg-primary-900/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-900"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary-900 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / (isMobile ? 1 : 3))
              }%)`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-[380px] flex flex-col">
                  {/* Quote Mark */}
                  <div className="text-4xl text-primary-900/20 font-serif mb-4">
                    "
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="flex-grow mb-8">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0 bg-gray-200">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-primary-900 flex items-center justify-center text-white font-semibold">${testimonial.name.charAt(
                              0
                            )}</div>`;
                          }
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
