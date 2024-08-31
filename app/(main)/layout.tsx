import type { Metadata } from "next";
import "../globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
