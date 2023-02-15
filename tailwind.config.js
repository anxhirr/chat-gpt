/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: '#343541',
        sidebar: '#202123',
        lightgreen: '#11A37F',
      },
    },
  },
  plugins: [],
}
