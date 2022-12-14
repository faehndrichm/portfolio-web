/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "col-start-[1]",
    "col-start-[2]",
    "col-start-[3]",
    "col-start-[4]",
    "col-start-[5]",
    "col-start-[6]",
    "col-start-[7]",
    "col-start-[8]",
    "col-start-[9]",
    "col-start-[10]",
    "col-start-[11]",
    "col-start-[12]",
    "col-start-[13]",
    "col-start-[14]",
    "col-start-[15]",
    "col-start-[16]",
    "col-start-[17]",
    "col-start-[18]",
    "col-start-[19]",
    "col-start-[20]",
    "row-start-[1]",
    "row-start-[2]",
    "row-start-[3]",
    "row-start-[4]",
    "row-start-[5]",
    "row-start-[6]",
    "row-start-[7]",
    "row-start-[8]",
    "row-start-[9]",
    "row-start-[10]",
    "row-start-[11]",
    "row-start-[12]",
    "row-start-[13]",
    "row-start-[14]",
    "row-start-[15]",
    "row-start-[16]",
    "row-start-[17]",
    "row-start-[18]",
    "row-start-[19]",
    "row-start-[20]",
  ],
  theme: {
    extend: {
      fontFamily: {
        ps2p: ["'Press Start 2P'"],
        montserat: "Montserrat",
        nunito: "Nunito",
        inconsolata: "Inconsolata",
        lora: "Lora",
      },
      flex: {
        2: "2 2 0%",
      },
      boxShadow: {
        blacky: "0 0 0 99999px rgba(0, 0, 0, .8)",
      },
      dropShadow: {
        "md-white": ["0 4px 3px rgb(255 255 255 / 0.47)", "0 2px 2px rgb(255 255 255 / 0.36)"],
        planet: ["-6px -6px 10px rgb(255 255 255 / 0.35)", "-2px -2px 2px rgb(255 255 255 / 0.2)"],
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRowStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  plugins: [],
};

