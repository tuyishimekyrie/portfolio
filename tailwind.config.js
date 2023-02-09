/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'Black': '#0F0E0E',
    // },
    screens: {
      sm: "380px",
      // => @media (min-width: 380px) { ... }
      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
    },

    extend: {
     
    },
  },
  plugins: [],
};