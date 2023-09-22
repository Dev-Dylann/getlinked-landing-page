/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purplish: {
          DEFAULT: "#903AFF",
          dark: "#150E28",
        },
        pinkish: "#D434FE",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans"],
      inter: ["Inter", "sans"],
      unica: ["Unica One", "sans"],
      clash: ["Clash Display", "sans"],
    },
    plugins: [],
  },
};
