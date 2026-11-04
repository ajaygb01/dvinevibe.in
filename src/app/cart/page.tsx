import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = { title: "Your cart" };

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
