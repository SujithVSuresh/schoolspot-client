/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        background: '#F0EEFF',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

