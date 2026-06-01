"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Leaf,
  Shield,
  Zap,
  Building2,
  Home,
  Stethoscope,
  FileText,
  Star,
  MapPin,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Hills District Local",
      desc: "Based in Castle Hill, serving the Hills",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      desc: "Licensed, vetted and certified crews",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      desc: "Low-tox products, safer indoor air",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "After-Hours Ready",
      desc: "Evening and weekend scheduling",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Top Section - Brand & Stats */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-gray-700 font-medium">
                Alpha Clean Group
              </span>
              <div className="w-px h-4 bg-primary/20" />
              <span className="text-primary font-semibold">Castle Hill</span>
            </div>

            {/* Location Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                {
                  name: "Parramatta",
                  href: "https://www.alpha-commercial-cleaning-parramatta.com.au/",
                },
                {
                  name: "Auburn",
                  href: "https://www.alpha-commercial-cleaning-auburn.com.au/",
                },
                {
                  name: "Silverwater",
                  href: "https://www.alpha-commercial-cleaning-silverwater.com.au/",
                },
                {
                  name: "Wetherill Park",
                  href: "https://www.alpha-commercial-cleaning-wetherill-park.com.au/",
                },
                {
                  name: "Sydney",
                  href: "https://www.alphacleangroup.com.au/",
                },
              ].map((loc) => (
                <a
                  key={loc.name}
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-medium shadow-sm hover:bg-primary/10 transition-colors text-sm"
                  style={{ minWidth: 0 }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  {loc.name}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section - Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900">Transform Your</span>
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Space Today
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Commercial cleaning trusted by businesses across Castle Hill
                  and the Hills District. From offices to warehouses, our local
                  crew delivers consistent, insured, eco-friendly results.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Free Quote
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  href="tel:0291406024"
                  className="group px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    0291 406 024
                  </span>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "300+", label: "Hills Clients" },
                  { number: "4.9★", label: "Rating" },
                  { number: "10+ yrs", label: "Local Service" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Interactive Features */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Main Feature Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20" />
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-primary/10 transition-all duration-500 ${
                        activeFeature === 0 ? "scale-110" : "scale-100"
                      }`}
                    >
                      {React.createElement(features[activeFeature].icon, {
                        className: "w-8 h-8 text-primary",
                        size: 32,
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {features[activeFeature].title}
                      </h3>
                      <p className="text-gray-600">
                        {features[activeFeature].desc}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color} transition-all duration-500`}
                      style={{ width: `${((activeFeature + 1) / 4) * 100}%` }}
                    />
                  </div>

                  {/* Feature Dots */}
                  <div className="flex gap-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeFeature
                            ? "bg-primary scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Building2,
                    title: "Commercial",
                    desc: "Offices & Retail",
                  },
                  {
                    icon: Home,
                    title: "Residential",
                    desc: "Homes & Apartments",
                  },
                  {
                    icon: Stethoscope,
                    title: "Medical",
                    desc: "Clinics & Centers",
                  },
                  { icon: FileText, title: "End of Lease", desc: "Bond Back" },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="group p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                      {React.createElement(service.icon, {
                        className: "w-6 h-6 text-primary",
                        size: 24,
                      })}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Coverage & Trust Indicators */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Coverage Areas */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-gray-900 font-semibold text-xl mb-6 text-center">
                Hills District Coverage
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {[
                  "Castle Hill",
                  "Baulkham Hills",
                  "Bella Vista",
                  "Norwest",
                  "Kellyville",
                  "Cherrybrook",
                  "West Pennant Hills",
                  "Glenhaven",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Star, text: "5-Star Rated" },
                { icon: Shield, text: "Fully Insured" },
                { icon: Leaf, text: "Eco-Friendly" },
                { icon: Zap, text: "24/7 Service" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                >
                  {React.createElement(item.icon, {
                    className: "w-5 h-5 text-primary",
                    size: 20,
                  })}
                  <span className="text-gray-700 text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/50 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
