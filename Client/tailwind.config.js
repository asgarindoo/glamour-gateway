/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        cinzeldecorative: "Cinzel Decorative",
        cinzel: "Cinzel",
        switzer: "Switzer",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
