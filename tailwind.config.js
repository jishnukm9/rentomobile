/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      height: {
        '100p': '100%',  // Add this line
      },fontFamily:{
        "latofont":["Lato, sans-serif"],
      },
      width: {
        '100p': '100%',  // Add this line
      },
      colors:{
        globaltext:'#444',
      }
    },
  },
  plugins: [],
}

