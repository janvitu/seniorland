module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.html", "./src/assets/js/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainG: "#109534",
        mainGDark: "#1D7C37",
        mainGLight: "#28AE4C",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        pop: "pop 150ms ease-in-out",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scaley(0)" },
          "100%": { transform: "scaley(1)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
