/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#313640",
        storebar: "#355573",
        accent: "#a4de23",
      },
    },
  },
  plugins: [],
};
