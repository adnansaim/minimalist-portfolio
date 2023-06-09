/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        background: "#031728",
        button: "#66FCF1",
        card: "#041C2D",
        cardHover: "#042234",
      },
      fontFamily: {
        Opensans: ["Open Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        mdl: "980px",
        xsm: "400px",
      },
    },
  },
  plugins: [],
};
