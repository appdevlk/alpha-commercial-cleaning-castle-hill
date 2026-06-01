"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";
import {
  alphabet,
  regions,
  locations,
} from "./constants/locations-constant.js";

export default function ServiceLocations() {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations.filter((location) => {
    const matchesLetter = location.name.startsWith(selectedLetter);
    const matchesRegion = selectedRegion
      ? location.region === selectedRegion
      : true;
    const matchesSearch = searchTerm
      ? location.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesLetter && matchesRegion && matchesSearch;
  });

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 mt-8">
            <MapPin className="w-4 h-4" />
            Service Areas
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Professional Cleaning</span>
            <span className="block">
              Across <span className="text-primary">Parramatta</span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide professional cleaning services throughout Parramatta and
            surrounding areas. Find your location below to get started.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13259.592462158069!2d150.99841155653135!3d-33.81494224219707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a318e167af4f%3A0x5017d681632c600!2sParramatta%20NSW%202150%2C%20Australia!5e0!3m2!1sen!2slk!4v1752180009084!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Parramatta, NSW, Australia Map"
              />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Region Filters */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                Filter by Region
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedRegion("")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRegion === ""
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Regions
                </button>
                {regions.map((region) => (
                  <button
                    key={region.name}
                    type="button"
                    onClick={() => setSelectedRegion(region.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedRegion === region.name
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Alphabet Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                Browse Alphabetically
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      selectedLetter === letter
                        ? "bg-primary text-white scale-110"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedRegion || searchTerm) && (
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2">
                {selectedRegion && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                    Region: {selectedRegion}
                    <button
                      onClick={() => setSelectedRegion("")}
                      className="w-5 h-5 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  </div>
                )}
                {searchTerm && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="w-5 h-5 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Locations Grid */}
        <div className="mb-16">
          {filteredLocations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredLocations.map((location) => (
                <Link key={location.name} href="/#" className="group block">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                          {location.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {location.postcode}
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {location.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                No locations found
              </h4>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all locations
              </p>
              <button
                onClick={() => {
                  setSelectedRegion("");
                  setSearchTerm("");
                  setSelectedLetter("A");
                }}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Service Areas Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {locations.length}+
              </div>
              <div className="text-gray-600">Service Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                Same Day
              </div>
              <div className="text-gray-600">Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Coverage</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see your area listed?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're constantly expanding our service areas. Contact us to check if
            we can provide cleaning services in your location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="tel:+61291406024"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
