/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  safelist: [
    'lg:mt-[15rem]',
  ],
  plugins: [],
}

