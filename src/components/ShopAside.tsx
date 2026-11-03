import Link from "next/link";
import { products, type Product } from "@/data/products";
import type { Temple } from "@/data/temples";
import { inr } from "@/lib/format";
import { ProductArt } from "./ProductArt";
import { QuickAdd } from "./QuickAdd";

const deityPicks: [RegExp, string[]][] = [
  [/shiva|jyotirlinga/i, ["nataraja-cosmic-dance", "trishul-damaru-keychain"]],
  [/vishnu|krishna|venkateswara|jagannath/i, ["murali-krishna", "lotus-diya-set"]],
  [/ganesha/i, ["vinayaka-blessing-idol", "ganesha-car-dashboard"]],
  [/goddess|shakti|devi/i, ["mahalakshmi-lotus-murti", "akhanda-deepam-stand"]],
  [/surya|sun/i, ["konark-sun-wheel", "om-mandala-wall-panel"]],
];

/** Products to show beside a temple story: its own miniatures first, then pieces for the same deity. */
export function productsForTemple(temple: Temple, limit = 3): Product[] {
  const picks = new Set(products.filter((p) => p.temple === temple.slug).map((p) => p.slug));
  for (const [re, slugs] of deityPicks) {
    if (re.test(temple.deity)) slugs.forEach((s) => picks.add(s));
  }
  ["akhanda-deepam-stand", "om-mandala-wall-panel"].forEach((s) => picks.add(s));
  return [...picks].slice(0, limit).map((s) => products.find((p) => p.slug === s)!).filter(Boolean);
}

/** A slim list of products that sits beside the reading, never in front of it. */
export function ShopAside({ items, title }: { items: Product[]; title: string }) {
  return (
    <section className="shop-aside" aria-label="From the Dvinevibe workshop">
      <p className="shop-aside__label">From our workshop</p>
      <h3>{title}</h3>
      <ul>
        {items.map((p) => (
          <li key={p.slug} className="shop-aside__item">
            <Link href={`/shop/${p.slug}/`} className="shop-aside__art">
              <ProductArt product={p} />
            </Link>
            <div>
              <Link href={`/shop/${p.slug}/`} className="shop-aside__name">{p.name}</Link>
              <span className="shop-aside__price">{inr(p.price)}</span>
            </div>
            <QuickAdd slug={p.slug} finish={p.finishes[0]} />
          </li>
        ))}
      </ul>
      <Link href="/shop/" className="text-link">See the whole collection</Link>
    </section>
  );
}
