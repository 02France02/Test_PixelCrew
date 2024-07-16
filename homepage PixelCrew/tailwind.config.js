/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        '2xl': '1450px',
        '3xl': '1970px',
        '4xl': '2550px',


      },
      colors: {
        navbarGreen: '#216545',  
      },
    },
  },
  plugins: [],
}