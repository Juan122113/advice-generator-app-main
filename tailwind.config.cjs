/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      },
      margin: {
        '15rem': '15rem',
      }
    },
  },
  safelist: [
    {
    pattern: /mt-\[.*\]/,
    variants: ['lg'],
    },
  ],
  plugins: [],
}

