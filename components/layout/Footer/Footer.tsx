'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-900">
      <div className="max-w-container mx-auto py-12 md:py-16 px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:w-1/4">
            <Link
              href="https://www.alphacleangroup.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <Image
                  src="/images/logo_wide.png"
                  alt="Alpha Clean Group"
                  width={250}
                  height={60}
                  className="w-[250px] rounded-lg bg-white px-4 py-2"
                />
              </div>
            </Link>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Professional cleaning services across Australia.
              <br />
              Your trusted partner for spotless spaces.
            </p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:flex-1 lg:justify-between">
            {/* Menu Links */}
            <div>
              <h3 className="text-base md:text-lg font-medium text-white/90 mb-4 md:mb-6">
                Links
              </h3>
              <nav className="space-y-2 md:space-y-3">
                <Link
                  href="/"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/faq"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-base md:text-lg font-medium text-white/90 mb-4 md:mb-6">
                Locations
              </h3>
              <nav className="space-y-2 md:space-y-3">
                <Link
                  href="https://www.alphacleangroup.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Sydney
                </Link>
                <Link
                  href="https://www.alpha-commercial-cleaning-wetherill-park.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Wetherill Park
                </Link>
                <Link
                  href="https://www.alpha-commercial-cleaning-auburn.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Auburn
                </Link>
                <Link
                  href="https://www.alpha-commercial-cleaning-silverwater.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Silverwater
                </Link>
                <Link
                  href="https://www.alpha-commercial-cleaning-parramatta.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Parramatta
                </Link>
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base md:text-lg font-medium text-white/90 mb-4 md:mb-6">
                Social
              </h3>
              <nav className="space-y-2 md:space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  Facebook
                </a>
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-base md:text-lg font-medium text-white/90 mb-4 md:mb-6">
                Contacts
              </h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="tel:0291406024"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  0291 406 024
                </a>
                <a
                  href="mailto:info@alphacleangroup.com.au"
                  className="block text-sm md:text-base text-white hover:text-white/90 transition-colors"
                >
                  info@alphacleangroup.com.au
                </a>
                <p className="text-sm md:text-base text-white">
                  77 Garfield Street, Wentworthville NSW 2145
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-white/90">
            Alpha Clean Group © {new Date().getFullYear()}
          </div>
          <div className="flex gap-4 sm:gap-8">
            <Link
              href="/privacy"
              className="text-xs sm:text-sm text-white/90 hover:text-white transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="text-xs sm:text-sm text-white/90 hover:text-white transition-colors"
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
