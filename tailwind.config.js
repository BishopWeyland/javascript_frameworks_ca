/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-white": "#ECECEB",
        "brand-black": "#2E383F",
        "brand-orange": "#F9A828",
        "brand-blue": "#2C617D",
        "brand-grey": "#A2A2A2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
