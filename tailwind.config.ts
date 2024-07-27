import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        broadacre: ['var(--font-broadacre)'],
        stint: ['var(--font-stint)'],
        overpass: ['var(--font-overpass)'],
        adwts: ['var(--font-adwts)'],
        balto: ['var(--font-balto)'],
        area: ['var(--font-area)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
