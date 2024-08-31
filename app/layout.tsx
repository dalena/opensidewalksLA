import "./globals.css";
import { broadacre, stint, overpass, adwts, balto, area } from "./fonts";
import { Metadata } from "next";
import image from "../public/og.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://opensidewalks.la/"),
  title: {
    default: "Open Sidewalks LA",
    template: "%s | Open Sidewalks LA",
  },
  description:
    "Public spaces are for everyone. Sign our petition, and let's open the gates!",
  openGraph: {
    title: "Open Sidewalks LA",
    description:
      "Public spaces are for everyone. Sign our petition, and let's open the gates!",
    type: "website",
    locale: "en_US",
    url: "https://opensidewalks.la/",
    siteName: "Open Sidewalks LA",
    images: [
      {
        url: image.src,
      },
    ],
  },
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
