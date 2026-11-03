import type { Metadata, Viewport } from "next";
import "./globals.css";
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

export const viewport: Viewport = { themeColor: "#13207a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@500&display=swap"
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
