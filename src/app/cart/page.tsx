import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = pageMeta({ title: "Your cart", description: "Your Dvinevibe cart.", path: "/cart/", noindex: true });

export default function CartPage() {
  return (
    <section className="section container">
      <div className="section-title">
        <p className="kicker">Your offerings</p>
        <h1>Cart</h1>
      </div>
      <CartView />
    </section>
  );
}
