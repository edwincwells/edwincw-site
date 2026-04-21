import type { Metadata } from "next";
import { generalSans, sourceSerif } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "./typography.css";

export const metadata: Metadata = {
  title: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
  description:
    "Designing intelligent product experiences that drive growth, adoption and trust. Director of UX at Harri, leading design for AI-enabled enterprise products.",
  openGraph: {
    title: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
    description:
      "Designing intelligent product experiences that drive growth, adoption and trust. Director of UX at Harri, leading design for AI-enabled enterprise products.",
    url: "https://edwincw.com",
    siteName: "Edwin Collings-Wells",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
    description:
      "Designing intelligent product experiences that drive growth, adoption and trust. Director of UX at Harri, leading design for AI-enabled enterprise products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
