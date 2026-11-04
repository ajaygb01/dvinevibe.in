import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopBrowser } from "@/components/ShopBrowser";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/data/products";
import { breadcrumbLd, itemListLd, pageMeta, productPath } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Shop 3D printed idols and temple miniatures",
  description:
    "3D printed Hindu idols, temple miniatures, LED deepam stands, wall art and pooja essentials, printed to order and finished by hand in India.",
  path: "/shop/",
});

export default function ShopPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListLd("Shop", "/shop/", products.map((p) => ({ name: p.name, path: productPath(p) }))),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop/" }]),
        ]}
      />
      <header className="container page-head">
          <p className="kicker">The workshop</p>
          <h1>Shop devotional pieces</h1>
          <p className="standfirst">Printed to order and finished by hand. Choose your finish on each product.</p>
      </header>
      <section className="section section--tight container">
        <Suspense fallback={<p className="muted">Loading collection…</p>}>
          <ShopBrowser />
        </Suspense>
      </section>
    </>
  );
}
