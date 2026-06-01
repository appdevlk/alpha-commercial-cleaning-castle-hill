import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#108602',
          dark: '#0c6002',
          light: '#15c200',
          50: '#e7f7e6',
          100: '#c5ebc2',
          200: '#9fde99',
          300: '#71cf70',
          400: '#3fc143',
          500: '#12a400',
          600: '#0f9000',
          700: '#0c7c00',
          800: '#096800',
          900: '#0c6002',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      maxWidth: {
        container: '1280px',
      },
      fontFamily: {
        sans: ['var(--font-red-hat-display)', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.04)',
        hover: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-down': 'slideDown 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
