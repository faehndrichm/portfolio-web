/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "row-start-1",
    "row-start-2",
    "row-start-3",
    "row-start-4",
    "row-start-5",
  ],
  theme: {
    extend: {
      fontFamily: {
        ps2p: ["'Press Start 2P'"],
        montserat: "Montserrat",
      },
      flex: {
        2: "2 2 0%",
      },
      dropShadow: {
        "md-white": ["0 4px 3px rgb(255 255 255 / 0.47)", "0 2px 2px rgb(255 255 255 / 0.36)"],
      },
    },
  },
  plugins: [],
};

