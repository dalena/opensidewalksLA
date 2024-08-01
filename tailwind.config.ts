import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '.85rem',
      base: '1.25rem',
      lg: '1.45rem',
      xl: '1.65rem',
      '2xl': '1.85rem',
      '3xl': '2.05rem',
      '4xl': '3.05rem',
      '5xl': '3.45rem',
    },
    colors: {
      'silver': {
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#dfdfdf',
        '300': '#c9c9c9',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },
      'sign': {
        '50': '#ffffe7',
        '100': '#fdffc1',
        '200': '#ffff86',
        '300': '#fff741',
        '400': '#ffe90d',
        '500': '#ffda00',
        '600': '#d1a100',
        '700': '#a67302',
        '800': '#89590a',
        '900': '#74490f',
        '950': '#442604',
      },
      'azul': {
        '50': '#f0f7ff',
        '100': '#e0eefe',
        '200': '#b9ddfe',
        '300': '#7cc1fd',
        '400': '#36a3fa',
        '500': '#0c87eb',
        '600': '#0069c9',
        '700': '#0153a3',
        '800': '#064786',
        '900': '#0b3c6f',
        '950': '#07264a',
      },
    },
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
  plugins: [require('@tailwindcss/typography')],
};
export default config;
