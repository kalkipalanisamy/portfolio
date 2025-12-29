// filepath: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#4CAF50',
        accent: '#2E7D32',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
        logo: ['Signatie', 'sans-serif'],
        number: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}