import type { Metadata } from "next";
import { generalSans, sourceSerif } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";
import "./typography.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edwincw.com"),
  title: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
  description:
    "Designing intelligent product experiences that drive growth, adoption and trust. Director of UX at Harri, leading design for AI-enabled enterprise products.",
  openGraph: {
    title: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
    description:
      "Director of UX at Harri. Designing intelligent product experiences that drive growth, adoption, and trust.",
    url: "https://www.edwincw.com",
    siteName: "Edwin Collings-Wells",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Collings-Wells — Experience Strategy & Product Leadership",
    description:
      "Director of UX at Harri. Designing intelligent product experiences that drive growth, adoption, and trust.",
    images: ["/og-image.png"],
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
