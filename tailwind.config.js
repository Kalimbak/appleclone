/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: false,
    content: [
      './index.html'
    ]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
}
