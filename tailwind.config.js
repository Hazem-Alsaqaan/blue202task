/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        mainColor: "#00B14F",
        darkColor: "#17181B",
        darkColor2: "#646572",
        textGray: "#94959F",
        secondColor: "#F9FAFB",
      },
      backgroundColor: {
        mainColor: "#00B14F",
        secondColor: "#F9FAFB",
        btnGray: "#F2F2F2",
      },
      colors: {
        mainColor: "#00B14F",
        borderGray: "#EEF1F4",
      },
      fontFamily: {
        poppins500: ["poppins500"],
        poppins600: ["poppins600"],
      },
    },
  },
  plugins: [],
};
