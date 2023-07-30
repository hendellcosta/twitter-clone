/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1800px', // perfect: 1836px
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      textColor: {
        customBlue: '#1DA1F2'
      },
      backgroundColor: {
        customBlue: '#1DA1F2'
      },
      borderColor: {
        customBlue: '#1DA1F2'
      }
    },
  },
  plugins: [],
}

