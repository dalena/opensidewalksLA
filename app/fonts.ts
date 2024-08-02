import Broadacre from "next/font/local";
import { Overpass } from "next/font/google";
import Area from "next/font/local";
import Balto from "next/font/local";
import { Stint_Ultra_Expanded } from "next/font/google";
import ADWTS from "next/font/local";

export const broadacre = Broadacre({
  src: "../public/fonts/Broadacre.otf",
  variable: "--font-broadacre",
});

export const stint = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint",
});

export const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-overpass",
});

export const adwts = ADWTS({
  src: "../public/fonts/A-Day-Without-the-Sun.otf",
  variable: "--font-adwts",
});

export const balto = Balto({
  src: [
    {
      path: "../public/fonts/Balto-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Balto-SuperItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-balto",
});

export const area = Area({
  src: [
    {
      path: "../public/fonts/Area-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-area",
});
