"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold tracking-tighter leading-[0.9] text-[#1d1d1f] mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent inline-block">
              Frequently
            </span>{" "}
            Asked Questions
          </h1>
          <p className="text-[#86868b] text-[19px] sm:text-[21px] font-normal leading-[1.4] tracking-[-0.012em] mb-10">
            Find answers to common questions about our cleaning services
          </p>
          <div className="flex justify-center">
            <Link
              href="tel:0291406024"
              className="group inline-flex items-center justify-center px-8 py-4 text-[17px] font-medium rounded-full bg-primary text-white overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
            >
              <span className="relative z-10 flex items-center">
                <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-3" />
                Call Us
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
