/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#171a21",
        storebar: "#355573",
        accent: "#5c7e10",
      },
      backgroundImage: {
        install: "url('/assets/btn_header_installsteam.png')",
      },
    },
  },
  plugins: [],
};
