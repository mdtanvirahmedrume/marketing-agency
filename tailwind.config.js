/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'customBlue': '#F0F8FB',
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
