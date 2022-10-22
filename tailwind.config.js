/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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

