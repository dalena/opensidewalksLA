import "./globals.css";
import { broadacre, stint, overpass, adwts, balto, area } from "./fonts";
import { Metadata } from "next";

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
      <body
        className={`h-[100vh] overflow-x-hidden bg-silver-300 text-silver-950 ${broadacre.variable} ${stint.variable} ${overpass.variable} ${adwts.variable} ${balto.variable} ${area.variable}`}
      >
        <div id="gradient" className={`h-full w-full bg-silver-300`}>
          {children}
        </div>
      </body>
    </html>
  );
}
