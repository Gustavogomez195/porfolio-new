/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'stali': [ 'Stalinist One', "sans-serif"],
      'volta': [ 'Voltaire', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

