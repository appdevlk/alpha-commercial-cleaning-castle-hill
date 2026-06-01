"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  CheckCircle,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Minimal background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/5 text-primary mb-4 sm:mb-6">
            <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="text-sm font-medium">+61 291 406 024</span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-semibold tracking-tighter text-[#1d1d1f] mb-3 sm:mb-4 leading-[0.9]">
            Get in Touch
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 bg-clip-text text-transparent">
              for a Cleaner Tomorrow
            </span>
          </h1>

          <p className="text-[#86868b] text-[16px] sm:text-[19px] max-w-[640px] mx-auto mb-6 sm:mb-8 px-4">
            Professional cleaning services in Parramatta. We're here to help with
            all your cleaning needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Link
              href="tel:0291406024"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-[16px] sm:text-[17px] font-medium rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
            >
              <span className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </span>
            </Link>

            <Link
              href="mailto:info@alphacleangroup.com.au"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-[16px] sm:text-[17px] font-medium rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </span>
            </Link>
          </div>

          {/* Minimal features - Stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 max-w-[920px] mx-auto">
            {[
              "Professional Services",
              "Trained Staff",
              "Flexible Scheduling",
              "Eco-Friendly",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-[14px] sm:text-[15px] text-[#1d1d1f]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image and Map - Better mobile stacking */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[1080px] mx-auto">
            <div className="relative aspect-[16/9] sm:aspect-video rounded-lg overflow-hidden">
              <div
                className={`transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/images/cleaning-image11.webp"
                  alt="Alpha Clean Group"
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>

            <div className="relative aspect-[16/9] sm:aspect-video rounded-lg overflow-hidden">
              {!mapLoaded && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9526261374053!2d150.9670635!3d-33.8135356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2bb3e19a337%3A0x9aa151b026486fa6!2s77%20Garfield%20St%2C%20Wentworthville%20NSW%202145%2C%20Australia!5e0!3m2!1sen!2sus!4v1746456798097!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                title="Alpha Clean Group Location"
                className={`transition-opacity duration-500 ${
                  mapLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Contact Details - Better mobile layout */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-[1080px] mx-auto">
            {[
              {
                icon: MapPin,
                label: "Location",
                value: "77 Garfield Street\nWentworthville, NSW 2145",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+61 291 406 024",
                href: "tel:0291406024",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@alphacleangroup.com.au",
                href: "mailto:info@alphacleangroup.com.au",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon-Sat: 7am-7pm\nSun: Closed",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#1d1d1f] mb-2">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] text-[#86868b] hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[15px] text-[#86868b] whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social - Minimal */}
        <div className="py-6 sm:py-8 border-t border-gray-100">
          <div className="flex justify-center gap-4 sm:gap-6">
            {[
              {
                icon: Facebook,
                href: "https://facebook.com",
                color: "#1877F2",
              },
              {
                icon: Instagram,
                href: "https://instagram.com",
                color: "#E4405F",
              },
              {
                icon: Twitter,
                href: "https://twitter.com",
                color: "#1DA1F2",
              },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  style={{ color: social.color }}
                >
                  <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
