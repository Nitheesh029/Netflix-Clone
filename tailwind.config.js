/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgred: "red",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
