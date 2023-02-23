/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '4lg': '976px',
        '2lg': '910px',
        '3lg': '1132px',
      }
    },
  },
  plugins: [],
}