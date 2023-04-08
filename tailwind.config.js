/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1C1E53",
        "primary-2": "#282938",
        secondary: "#FCD980",
        "secondary-2": "#EEF4FA",
      },
    },
  },
  plugins: [],
};
