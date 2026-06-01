'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/faq', label: 'FAQ' },
    { href: '/locations', label: 'Locations' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`w-full px-12 bg-green-900 text-white transition-all duration-300 hidden sm:block ${
          isScrolled ? "sm:hidden" : ""
        }`}
      >
        <div className="max-w-container mx-auto ">
          <div className="flex items-center justify-between h-[38px]">
            <a
              href="tel:0291406024"
              className="flex items-center gap-1.5 hover:text-gray-200 transition-colors"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
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
              <span>Call: 0291 406 024</span>
            </a>

            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>77 Garfield Street, Wentworthville, NSW 2145</span>
            </div>

            <a
              href="mailto:info@alphacleangroup.com.au"
              className="flex items-center gap-1.5 hover:text-gray-200 transition-colors"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email: info@alphacleangroup.com.au</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`px-6 lg:px-0 w-full fixed top-0 left-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white sm:mt-[38px] md:mt-[38px]"
        }`}
      >
        <div className="max-w-container mx-auto">
          <div className="flex items-center justify-between h-[90px] md:h-[92px]">
            <div className="flex items-center gap-2.5 text-primary mr-2 sm:mr-0">
              <Link
                href="https://www.alphacleangroup.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <div className="hidden md:block">
                  <Image
                    src="/images/logo_wide.png"
                    alt="Alpha Clean Group"
                    width={400}
                    height={50}
                    className="h-[50px] w-auto"
                  />
                </div>
                <div className="block md:hidden">
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/images/logo_wide.png"
                      alt="Alpha Clean Group"
                      width={200}
                      height={70}
                      className="w-[200px] h-[50px] sm:w-[70px] sm:h-[70px]"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:block flex-1 max-w-[780px] mx-auto">
              <ul className="flex items-center justify-center gap-10 xl:gap-14">
                {navigationLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 border-4 border-green-600 bg-green-900 text-white hover:bg-green-700 px-6 py-2.5 rounded-full transition-colors text-lg font-medium"
              >
                Book Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </Link>
            </div>

            <button
              className="lg:hidden p-2"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Separated from header to ensure full viewport coverage */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-[101] transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: 0 }}
      >
        <div className="p-6 min-h-screen">
          <div className="flex items-center justify-between mb-10">
            <a
              href="https://www.alphacleangroup.com.au/"
              className="flex items-center gap-2.5 text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/4.png"
                alt="Alpha Clean Group"
                width={80}
                height={80}
                className="w-[80px] h-[80px]"
              />
              <span className="text-2xl font-bold">Alpha Clean Group</span>
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mb-10">
            <ul className="space-y-6">
              {navigationLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-2xl font-medium text-gray-900 hover:text-primary transition-colors block py-2 select-none cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 bg-green-600 text-white px-6 py-3.5 rounded-full transition-colors text-xl font-medium w-full mt-4 hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </Link>

            <a
              href="tel:0291406024"
              className="flex items-center gap-3 text-xl font-semibold text-gray-900 hover:text-primary transition-colors py-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0291 406 024
            </a>

            <a
              href="mailto:info@alphacleangroup.com.au"
              className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-primary transition-colors py-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@alphacleangroup.com.au
            </a>

            <div className="flex items-start gap-3 text-xl font-medium text-gray-900 py-1">
              <svg
                className="w-6 h-6 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>77 Garfield Street, Wentworthville, NSW 2145</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
