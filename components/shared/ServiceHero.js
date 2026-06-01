'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function ServiceHero({ title, subtitle, description, image }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-50 mt-24">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-slate-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Centered Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Call for Quote and Get Quote Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Call for Quote</p>
              <p className="text-lg font-semibold text-gray-900">0291 406 024</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-primary text-white transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Content and Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/50"
              style={{
                height: isMobile ? '300px' : '500px',
              }}
            >
              <Image
                src={image}
                alt={`${title} Professional Service`}
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
