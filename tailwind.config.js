/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0B2447",
        "donker-light": "#19376D",
      },
    },
  },
  plugins: [],
};

