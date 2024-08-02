import type { Metadata } from "next";
import { broadacre, stint, overpass, adwts, balto, area } from "./fonts";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
        className={`overflow-x-hidden bg-silver-300 ${broadacre.variable} ${stint.variable} ${overpass.variable} ${adwts.variable} ${balto.variable} ${area.variable}`}
      >
        <div id="gradient" className={`h-full w-full bg-silver-300`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
