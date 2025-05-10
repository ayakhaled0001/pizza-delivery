/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono , monospace",
    },
    extend: {
      FontSize: {
        huge: ["80rem"],
      },
    },
  },
  plugins: [],
};
