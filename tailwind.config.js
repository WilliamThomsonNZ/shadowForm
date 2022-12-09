/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Roboto'],
      display: ['Bison']
    },
    colors: {
      'accent-1': '#00dd59',
      background: "#1b1b1b",
      'accent-2': '#EAEAEA',
      'accent-7': '#333',
      success: '#0070f3',
      cyan: '#79FFE1',
      grey: '#737574',
      white: '#fff',
      darkGrey: "#232323",
      lightGrey: "#3B3B3B"


    },
    extend: {},
  },
  plugins: [],
}