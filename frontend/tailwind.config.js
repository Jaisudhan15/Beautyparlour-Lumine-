/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: '#F5D0D6',
        nude: '#EAD7C5',
        rosegold: '#B76E79',
        luxuryWhite: '#FAFAFA',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(183, 110, 121, 0.4)', // Rose gold glow
      }
    },
  },
  plugins: [],
}

