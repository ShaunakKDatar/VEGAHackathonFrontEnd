/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // DEFAULT: '#ff003ba6', // Replace with your primary color
          DEFAULT: '#16C4E0', // Replace with your primary color
        },
        secondary: {
          DEFAULT: '#E6FDFF', // Replace with your secondary color
          // DEFAULT: '#C5E0D8', // Replace with your secondary color
        },
        tertiary: {
          DEFAULT: '#5CDB95', // Replace with your tertiary color
        },
      },
    },
  },
  plugins: [],
}

