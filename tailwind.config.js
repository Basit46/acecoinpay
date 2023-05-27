/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#09091f",
      },
      screens: {
        vsm: "400px",
        xmd: "850px",
      },
    },
  },
  plugins: [],
};
