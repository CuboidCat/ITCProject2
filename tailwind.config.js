/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    backgroundImage: {
      'hero': "url('./src/photos/mainPageBackground.png')",
    },
  }
}

