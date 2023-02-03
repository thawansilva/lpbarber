/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC660D",
      },
      fontFamily: ["Ubuntu"],
    },
    backgroundImage: {
      "main-image": "url('../dist/img/exercise.jpg')",
      "sec-image": "url('../dist/img/womanfeeding.jpg')",
    },
  },
  plugins: [],
};
