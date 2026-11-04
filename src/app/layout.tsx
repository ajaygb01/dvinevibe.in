import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./tamil-nadu.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE, organizationLd, websiteLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dvinevibe | Temples of India: history, festivals and travel guides",
    template: "%s | Dvinevibe",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "temples of India",
    "Hindu temples",
    "temple guide",
    "Jyotirlinga",
    "Tamil Nadu temples",
    "temple history",
    "pilgrimage",
    "yatra",
    "3D printed idols",
    "temple miniatures",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: SITE.locale,
    title: "Dvinevibe | Temples of India",
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dvinevibe | Temples of India",
    description: SITE.description,
    images: [{ url: SITE.ogImage, alt: SITE.ogImageAlt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/favicon.svg" },
  formatDetection: { telephone: false, email: false, address: false },
  other: { "llms-txt": "/llms.txt" },
};

export const viewport: Viewport = { themeColor: "#0a0d2b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Mukta:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600&family=Noto+Serif+Tamil:wght@400;600&family=Noto+Serif+Telugu:wght@400;600&family=Noto+Serif+Malayalam:wght@400;600&family=Noto+Serif+Oriya:wght@400;600&family=Noto+Serif+Bengali:wght@400;600&family=Noto+Serif+Gujarati:wght@400;600&display=swap"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Site guide for AI assistants" />
        <JsonLd data={[organizationLd, websiteLd]} />
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
