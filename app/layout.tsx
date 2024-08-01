import type { Metadata } from "next";
import Broadacre from 'next/font/local'
import { Overpass } from 'next/font/google'
import Area from 'next/font/local'
import Balto from 'next/font/local'
import { Stint_Ultra_Expanded } from 'next/font/google'
import ADWTS from 'next/font/local'
import "./globals.css";

const broadacre = Broadacre({
  src: '../public/fonts/Broadacre.otf',
  variable: '--font-broadacre'
})
const stint = Stint_Ultra_Expanded({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-stint'
})
const overpass = Overpass({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-overpass'
})
const adwts = ADWTS({
  src: '../public/fonts/A-Day-Without-the-Sun.otf',
  variable: '--font-adwts'
})
const balto = Balto({
  src: [
    {
      path: '../public/fonts/Balto-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Balto-SuperItalic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-balto'
})
const area = Area({
  src: [
    {
      path: '../public/fonts/Area-Semibold.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/Area-Extrabold.otf',
      weight: '800',
    },
  ],
  variable: '--font-area',
})

export const metadata: Metadata = {
  title: "Open Sidewalks LA",
  description: "Public spaces are for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-silver-300 text-silver-950 ${broadacre.variable} ${stint.variable} ${overpass.variable} ${adwts.variable} ${balto.variable} ${area.variable}`}>
        {children}
      </body>
    </html>
  );
}
