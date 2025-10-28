/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Cinzel', 'serif'],
        'subheading': ['Cinzel', 'serif'],
        'body': ['Lora', 'serif'],
        'modern-header': ['Montserrat', 'sans-serif'],
        'modern-subheading': ['Lato', 'sans-serif'],
        'modern-body': ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        'header': '700', // Cinzel Bold
        'subheading': '400', // Cinzel Regular
        'body': '400', // Lora Regular
        'modern-header': '600', // Montserrat SemiBold
        'modern-subheading': '500', // Lato Medium
        'modern-body': '400', // Open Sans Regular
      },
      colors: {
        'platinum': {
          '50': '#f8f9fa',
          '100': '#f1f3f4',
          '200': '#e8eaed',
          '300': '#dadce0',
          '400': '#bdc1c6',
          '500': '#C0C0C0', // Primary Platinum Silver
          '600': '#9aa0a6',
          '700': '#80868b',
          '800': '#5f6368',
          '900': '#3c4043',
        },
        'emerald': {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#00FF66', // Primary Emerald Green
          '600': '#16a34a',
          '700': '#15803d',
          '800': '#166534',
          '900': '#14532d',
        },
        'graphite': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#1B1B1B', // Primary Graphite Black
        }
      }
    },
  },
  plugins: [],
};
