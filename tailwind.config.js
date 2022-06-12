const defaultTheme = require("tailwindcss/defaultTheme");
const { teal } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      colors: {
        primary: teal,
        secondary: {
          50: "#ebf8ff",
          100: "#bee3f8",
          200: "#90cdf4",
          300: "#63b3ed",
          400: "#4299e1",
          500: "#3182ce",
          600: "#2b6cb0",
          700: "#2c5282",
          800: "#162f51",
          900: "#021b3d",
          1000: "#000729",
        },
      },
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "320px",
      },
    },
  },
};
