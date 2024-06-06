/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-color': '#004080',
        'secondary-color': '#008080',
        'tertiary-color': '#FF6F61',
        'heading-color': '#000000',
        'background-color': 'white'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  plugins: [require("daisyui")],
}

