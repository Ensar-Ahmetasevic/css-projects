/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        barlow:["Barlow Semi Condensed","sans-serif" ]
      },
      letterSpacing: {
        widest: ".3em",
      },
      spacing: {
        180: "32rem",
      },
    },
  },

  plugins: [],
};
