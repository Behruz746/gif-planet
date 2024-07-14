/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        lightBlue: "#00ACEF",
        dark: "#121212",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      // classslarda shu px lardan katta bolsa stylelar o'zgaradi
      xl: "1700px",
      lg: "1200px",
      md: "1060px",
      smd: "968px",
      sm: "768px",
      ss: "620px",
      ssm: "520px",
      xs: "480px",
    },
  },
  plugins: [],
};
