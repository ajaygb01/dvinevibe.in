import type { Metadata } from "next";
import type { Temple } from "@/data/temples";
import type { Product } from "@/data/products";

// One place for the facts search engines and AI assistants read about the site.

export const SITE = {
  url: "https://dvinevibe.in",
  name: "Dvinevibe",
  tagline: "A guide to the temples of India",
  description:
    "Dvinevibe is a guide to the great Hindu temples of India, with their stories, architecture, festivals and how to reach them, and a small workshop making 3D printed idols and temple miniatures.",
  locale: "en_IN",
  ogImage: "/og.png",
  ogImageAlt: "Dvinevibe, a guide to the temples of India",
} as const;

/** Absolute URL for a site path. Paths end in "/" because the site uses trailing slashes. */
export function absolute(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return new URL(path, SITE.url).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Site path, e.g. "/temples/kedarnath/". */
  path: string;
  /** Image path or URL for link previews. Defaults to the site card. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  /** Keep the page out of search results (cart, checkout). */
  noindex?: boolean;
  keywords?: string[];
};

/** Title, description, canonical URL and social preview tags for one page. */
export function pageMeta({ title, description, path, image, imageAlt, type = "website", noindex, keywords }: PageMetaInput): Metadata {
  const images = image
    ? [{ url: image, alt: imageAlt ?? title }]
    : [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.ogImageAlt }];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

// ---------- JSON-LD (schema.org) ----------

const orgId = `${SITE.url}/#organization`;
const siteId = `${SITE.url}/#website`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: SITE.name,
  url: absolute("/"),
  logo: absolute("/favicon.svg"),
  description: SITE.description,
  email: "hello@dvinevibe.in",
  areaServed: "IN",
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "hello@dvinevibe.in", areaServed: "IN", availableLanguage: ["en"] },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteId,
  name: SITE.name,
  alternateName: "dvinevibe.in",
  url: absolute("/"),
  description: SITE.description,
  inLanguage: "en-IN",
  publisher: { "@id": orgId },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

/** "Kedarnath Temple" rather than "Kedarnath Temple, Kedarnath". */
export function templeTitle(t: Pick<Temple, "name" | "city">) {
  const place = t.city.split(",")[0].trim();
  return t.name.includes(place) ? t.name : `${t.name}, ${place}`;
}

export const templePath = (t: Pick<Temple, "slug">) => `/temples/${t.slug}/`;
export const productPath = (p: Pick<Product, "slug">) => `/shop/${p.slug}/`;

/** A temple as a place of worship people visit, plus the guide article about it. */
export function templeLd(t: Temple) {
  const url = absolute(templePath(t));
  const image = t.photo ? absolute(t.photo.src) : undefined;
  return [
    {
      "@context": "https://schema.org",
      "@type": ["HinduTemple", "TouristAttraction"],
      "@id": `${url}#place`,
      name: t.name,
      alternateName: t.native.text,
      description: t.summary,
      url,
      ...(image && { image }),
      address: {
        "@type": "PostalAddress",
        addressLocality: t.city,
        addressRegion: t.state,
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: t.geo[0], longitude: t.geo[1] },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${t.geo[0]},${t.geo[1]}`,
      isAccessibleForFree: true,
      touristType: "Pilgrims",
      keywords: [t.deity, t.style, ...t.tags].join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#guide`,
      headline: `${templeTitle(t)}: history, festivals and how to get there`,
      description: t.summary,
      url,
      mainEntityOfPage: url,
      ...(image && { image }),
      inLanguage: "en-IN",
      about: { "@id": `${url}#place` },
      author: { "@id": orgId },
      publisher: { "@id": orgId },
      isPartOf: { "@id": siteId },
      articleSection: "Temples of India",
    },
  ];
}

/**
 * A shop product with its offer. Ratings are left out on purpose: the catalogue's
 * ratings are placeholders, and marking up made-up reviews breaks search rules.
 */
export function productLd(p: Product, categoryName: string) {
  const url = absolute(productPath(p));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: p.name,
    description: p.description,
    url,
    sku: p.slug,
    category: categoryName,
    material: p.material,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": orgId },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: p.price,
      availability: "https://schema.org/MadeToOrder",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": orgId },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
      },
    },
  };
}

export function itemListLd(name: string, path: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absolute(path),
    isPartOf: { "@id": siteId },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absolute(item.path),
      })),
    },
  };
}
