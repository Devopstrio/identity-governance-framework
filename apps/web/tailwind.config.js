/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#c1d3fe',
          300: '#91b1fd',
          400: '#5c8afb',
          500: '#3761f4',
          600: '#2544e7',
          700: '#1d33d5',
          800: '#1e2caf',
          900: '#1e2b8b',
        },
      },
    },
  },
  plugins: [],
}
