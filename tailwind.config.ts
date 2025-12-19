import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#91add2',
          100: '#84a0c5',
          200: '#6b87ac',
          300: '#516d92',
          400: '#385479',
          500: '#1E3A5F',
          600: '#042045',
          700: '#00072c',
          800: '#000012',
          900: '#000000',
        },
        secondary: {
          50: '#aab4c4',
          100: '#9da7b7',
          200: '#848e9e',
          300: '#6a7484',
          400: '#515b6b',
          500: '#374151',
          600: '#1d2737',
          700: '#040e1e',
          800: '#000004',
          900: '#000000',
        },
        accent: {
          50: '#ffc67c',
          100: '#ffb96f',
          200: '#ffa056',
          300: '#e7863c',
          400: '#ce6d23',
          500: '#B45309',
          600: '#9a3900',
          700: '#812000',
          800: '#670600',
          900: '#4e0000',
        },
      },
    },
  },
  plugins: [],
};

export default config;
