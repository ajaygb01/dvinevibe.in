import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./tamil-nadu.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dvinevibe | 3D Printed Idols, Temple Miniatures & Temples of India",
    template: "%s | Dvinevibe",
  },
  description:
    "Devotional 3D printed idols, temple miniatures, LED deepam stands and pooja essentials, plus a guide to the great temples of India.",
  metadataBase: new URL("https://dvinevibe.in"),
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0a0d2b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Mukta:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600&family=Noto+Serif+Tamil:wght@400;600&family=Noto+Serif+Telugu:wght@400;600&family=Noto+Serif+Malayalam:wght@400;600&family=Noto+Serif+Oriya:wght@400;600&family=Noto+Serif+Bengali:wght@400;600&family=Noto+Serif+Gujarati:wght@400;600&display=swap"
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
