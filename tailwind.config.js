/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4FD1C5',
        'primary-dark': '#3BA89F',
      },
      backgroundColor: {
        'black-transparent': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};