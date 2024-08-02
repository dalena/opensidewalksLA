import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ".85rem",
      md: "1rem",
      base: "1.25rem",
      lg: "1.45rem",
      xl: "1.65rem",
      "2xl": "1.85rem",
      "3xl": "2.05rem",
      "4xl": "3.05rem",
      "5xl": "3.45rem",
    },
    colors: {
      silver: {
        "50": "#f7f7f7",
        "100": "#ededed",
        "200": "#dfdfdf",
        "300": "#c9c9c9",
        "400": "#adadad",
        "500": "#999999",
        "600": "#888888",
        "700": "#7b7b7b",
        "800": "#676767",
        "900": "#545454",
        "950": "#363636",
      },
      sign: {
        "50": "#ffffe7",
        "100": "#fdffc1",
        "200": "#ffff86",
        "300": "#fff741",
        "400": "#ffe90d",
        "500": "#ffda00",
        "600": "#d1a100",
        "700": "#a67302",
        "800": "#89590a",
        "900": "#74490f",
        "950": "#442604",
      },
      azul: {
        "50": "#f0f7ff",
        "100": "#e0eefe",
        "200": "#b9ddfe",
        "300": "#7cc1fd",
        "400": "#36a3fa",
        "500": "#0c87eb",
        "600": "#0069c9",
        "700": "#0153a3",
        "800": "#064786",
        "900": "#0b3c6f",
        "950": "#07264a",
      },
      stop: {
        "50": "#fff1f1",
        "100": "#ffe1e0",
        "200": "#ffc8c6",
        "300": "#ffa29f",
        "400": "#ff6b67",
        "500": "#fb3d38",
        "600": "#eb342f",
        "700": "#c41611",
        "800": "#a21612",
        "900": "#861916",
        "950": "#490806",
      },
    },
    extend: {
      fontFamily: {
        broadacre: ["var(--font-broadacre)"],
        stint: ["var(--font-stint)"],
        overpass: ["var(--font-overpass)"],
        adwts: ["var(--font-adwts)"],
        balto: ["var(--font-balto)"],
        area: ["var(--font-area)"],
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
