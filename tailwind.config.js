/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      'stali': [ 'Stalinist One', "sans-serif"],
      'volta': [ 'Voltaire', "sans-serif"],
      'oswald': [ 'Oswald', "sans-serif", 'Voltaire', "sans-serif"],
      'dot':["DotGothic16", "sans-serif"],
      'zen':["Zen Dots", "sans-serif"]
    },
    
    extend: {
      
    },
  },
  plugins: [require('tailwindcss-animated')],
}

