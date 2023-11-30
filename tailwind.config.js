/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5F5FC',
          1: '#E5E4F3',
          8: '#4A48CB',
          9: '#141B34',
        },
        gray: {
          DEFAULT: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
        },
        neutral: {
          DEFAULT: '#FFFFFF',
        },
        success: {
          DEFAULT: '#EDFCF2',
          1: '#D3F8DF',
          5: '#16B364',
          6: '#099250',
          7: '#087443',
        },
        critical: {
          DEFAULT: '#FEF3F2',
          5: '#F04438',
        },
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
