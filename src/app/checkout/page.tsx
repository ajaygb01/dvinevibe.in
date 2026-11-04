import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata: Metadata = pageMeta({ title: "Checkout", description: "Dvinevibe checkout.", path: "/checkout/", noindex: true });

export default function CheckoutPage() {
  return (
    <section className="section container">
      <div className="section-title">
        <p className="kicker">Almost there</p>
        <h1>Checkout</h1>
      </div>
      <CheckoutForm />
    </section>
  );
}
