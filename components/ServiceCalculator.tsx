"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ServiceCalculator() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Cleaning Services for{" "}
            <span className="text-primary">Parramatta</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Experience the difference that professional cleaning services can
            make for your business or property in Parramatta. Our comprehensive
            cleaning solutions are designed to maintain the highest standards of
            cleanliness, hygiene, and presentation across the Parramatta area.
          </p>
        </div>

        {/* Alternating Image-Text Sections */}
        <div className="space-y-20">
          {/* Section 1: Why Choose Professional Cleaning Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/3.jpg"
                  alt="Professional cleaning services in Parramatta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Professional Cleaning Services in Parramatta?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Professional cleaning services in Parramatta offer numerous
                advantages over DIY cleaning. Our experienced team brings
                expertise, efficiency, and specialized equipment to deliver
                superior results that exceed expectations in Parramatta.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From time savings to improved health outcomes, professional
                cleaning provides comprehensive benefits that enhance both
                residential and commercial environments throughout Parramatta.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Local expertise
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Professional equipment
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Consistent results
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Eco-Friendly Cleaning Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/13.jpg"
                  alt="Eco-friendly cleaning solutions in Parramatta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Eco-Friendly Cleaning Solutions for Parramatta
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our commitment to environmental responsibility in Parramatta
                means using eco-friendly cleaning products and sustainable
                practices. We prioritize both effectiveness and environmental
                impact for the Parramatta community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                By choosing our eco-friendly cleaning services in Parramatta,
                you're not only maintaining a clean environment but also
                contributing to a healthier planet for your community and future
                generations in Parramatta.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Green cleaning products
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Sustainable practices
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Local environmental care
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Health and Safety First */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/10.jpg"
                  alt="Health and safety focused cleaning in Parramatta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Health and Safety First in Parramatta
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our cleaning services in Parramatta prioritize health and safety
                for all residents and businesses. We use advanced sanitization
                techniques and follow strict protocols to ensure optimal hygiene
                standards in Parramatta.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From reducing allergens to preventing the spread of germs, our
                comprehensive cleaning approach creates healthier environments
                that promote well-being throughout the Parramatta community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Advanced sanitization
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Allergen reduction
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  Community health focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
