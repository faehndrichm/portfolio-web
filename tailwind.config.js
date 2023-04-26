/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    "bg-red-600",
    "bg-orange-600",
    "bg-amber-600",
    "bg-yellow-600",
    "bg-lime-600",
    "bg-green-600",
    "bg-emerald-600",
    "bg-teal-600",
    "bg-cyan-600",
    "bg-sky-600",
    "bg-blue-600",
    "bg-indigo-600",
    "bg-violet-600",
    "bg-purple-600",
    "bg-fuchsia-600",
    "bg-pink-600",
    "bg-rose-600",
    "from-red-600",
    "to-red-400",
    "from-orange-600",
    "to-orange-400",
    "from-amber-600",
    "to-amber-400",
    "from-yellow-600",
    "to-yellow-400",
    "from-lime-600",
    "to-lime-400",
    "from-green-600",
    "to-green-400",
    "from-emerald-600",
    "to-emerald-400",
    "from-teal-600",
    "to-teal-400",
    "from-cyan-600",
    "to-cyan-400",
    "from-sky-600",
    "to-sky-400",
    "from-blue-600",
    "to-blue-400",
    "from-indigo-600",
    "to-indigo-400",
    "from-violet-600",
    "to-violet-400",
    "from-purple-600",
    "to-purple-400",
    "from-fuchsia-600",
    "to-fuchsia-400",
    "from-pink-600",
    "to-pink-400",
    "from-rose-600",
    "to-rose-400",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserat: "var(--montserrat-font)",
        ps2p: "var(--ps2p-font)",
        nunito: "var(--nunito-font)",
        inconsolata: "var(--inconsolata-font)",
      },
      flex: {
        2: "2 2 0%",
      },
      boxShadow: {
        blacky: "0 0 0 99999px rgba(0, 0, 0, .8)",
      },
      dropShadow: {
        "xl-orange": ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "xl-purple": ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "xl-pink": ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
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
