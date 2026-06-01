'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceGetStarted() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-slate-100/50 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                    Get Started <span className="text-primary">Today</span>
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Contact us today to schedule a free consultation and discover how our cleaning services can benefit
                    you. Let us handle the cleaning so you can focus on what matters most.
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-primary text-white transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[320px] lg:h-auto">
              <Image
                src="/images/services/1.jpg"
                alt="Professional Cleaning Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
