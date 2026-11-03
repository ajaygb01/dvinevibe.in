import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopBrowser } from "@/components/ShopBrowser";

export const metadata: Metadata = {
  title: "Shop",
  description: "3D printed Hindu idols, temple miniatures, LED deepam stands, wall art and pooja essentials.",
};

export default function ShopPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">The Collection</p>
          <h1>Shop devotional pieces</h1>
          <p className="lead">Printed to order and finished by hand. Choose your finish on each product.</p>
        </div>
      </section>
      <section className="section container">
        <Suspense fallback={<p className="muted">Loading collection…</p>}>
          <ShopBrowser />
        </Suspense>
      </section>
    </>
  );
}
