/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary100: "#FF6600",
        primary200: "#FF983F",
        primary300: "#FFFFA1",
      },  
      textColor: {
        text100: "#1D1F21",
        text200: "#F5F5F5",
        text300: "#C4C5C4",
      },
      backgroundColor: {
        bg100: "#FFFFFF",
        bg200: "#FAFAFA",
        bg300: "#CCCCCC",
      }
    },
  },
  plugins: [],
}

