"use client";

import Link from "next/link";
import { useState } from "react";
import { getFinish, getProduct } from "@/data/products";
import { inr } from "@/lib/format";
import { unitPrice, useCart } from "./CartProvider";
import { Deepam } from "./Deepam";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman & Nicobar Islands", "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

/**
 * Checkout placeholder. Collects shipping details and shows a confirmation,
 * but does not take payment. Wire a gateway (Razorpay / Cashfree / Shopify
 * Buy Button / Stripe) into `onSubmit` before going live.
 */
export function CheckoutForm() {
  const { lines, subtotal, shipping, total, clear, ready } = useCart();
  const [payment, setPayment] = useState("upi");
  const [orderId, setOrderId] = useState<string | null>(null);

  if (orderId) {
    return (
      <div className="empty empty--big">
        <Deepam size={90} />
        <h2>Dhanyavaad! Your order request is placed.</h2>
        <p>Reference <strong>{orderId}</strong></p>
        <p className="muted">
          This is a demo checkout, so no payment was taken. We will contact you to confirm the order.
        </p>
        <Link href="/shop/" className="btn btn--gold btn--lg">Continue shopping</Link>
      </div>
    );
  }

  if (!ready) return <p className="muted">Loading…</p>;

  if (!lines.length) {
    return (
      <div className="empty empty--big">
        <Deepam size={80} />
        <h2>Your cart is empty</h2>
        <Link href="/shop/" className="btn btn--gold btn--lg">Browse the collection</Link>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: create the order and redirect to the payment gateway here.
    const id = "DV" + Date.now().toString(36).toUpperCase().slice(-6);
    setOrderId(id);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form className="checkout" onSubmit={onSubmit}>
      <div className="checkout__main">
        <fieldset className="card">
          <legend>Contact</legend>
          <div className="form-grid">
            <label>Full name<input className="input" name="name" required autoComplete="name" /></label>
            <label>Mobile number<input className="input" name="phone" required inputMode="tel" pattern="[6-9][0-9]{9}" title="10-digit Indian mobile number" autoComplete="tel-national" /></label>
            <label className="span-2">Email<input className="input" name="email" type="email" required autoComplete="email" /></label>
          </div>
        </fieldset>

        <fieldset className="card">
          <legend>Shipping address</legend>
          <div className="form-grid">
            <label className="span-2">Address<input className="input" name="address1" required autoComplete="address-line1" placeholder="House no., street, area" /></label>
            <label className="span-2">Landmark (optional)<input className="input" name="address2" autoComplete="address-line2" /></label>
            <label>City<input className="input" name="city" required autoComplete="address-level2" /></label>
            <label>PIN code<input className="input" name="pin" required inputMode="numeric" pattern="[1-9][0-9]{5}" title="6-digit PIN code" autoComplete="postal-code" /></label>
            <label className="span-2">State
              <select className="input" name="state" required defaultValue="">
                <option value="" disabled>Select state</option>
                {states.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className="card">
          <legend>Payment</legend>
          <div className="pay-options">
            {[
              ["upi", "UPI", "GPay, PhonePe, Paytm"],
              ["card", "Card", "Debit / credit cards"],
              ["cod", "Cash on delivery", "₹49 handling fee"],
            ].map(([id, label, hint]) => (
              <label key={id} className={`pay-option ${payment === id ? "is-active" : ""}`}>
                <input type="radio" name="payment" value={id} checked={payment === id} onChange={() => setPayment(id)} />
                <strong>{label}</strong>
                <span className="muted small">{hint}</span>
              </label>
            ))}
          </div>
          <p className="notice">Payments are not live yet. Placing an order sends a request only, and no money is charged.</p>
        </fieldset>
      </div>

      <aside className="summary">
        <h2>Your order</h2>
        <ul className="summary__items">
          {lines.map((l) => {
            const p = getProduct(l.slug)!;
            return (
              <li key={`${l.slug}-${l.finish}`}>
                <span>{p.name} <span className="muted small">× {l.qty} · {getFinish(l.finish)?.name}</span></span>
                <span>{inr(unitPrice(l) * l.qty)}</span>
              </li>
            );
          })}
        </ul>
        <dl className="summary__rows">
          <div><dt>Subtotal</dt><dd>{inr(subtotal)}</dd></div>
          <div><dt>Shipping</dt><dd>{shipping ? inr(shipping) : "Free"}</dd></div>
          {payment === "cod" && <div><dt>COD fee</dt><dd>{inr(49)}</dd></div>}
          <div className="summary__total"><dt>Total</dt><dd>{inr(total + (payment === "cod" ? 49 : 0))}</dd></div>
        </dl>
        <button type="submit" className="btn btn--gold btn--lg btn--block">Place order</button>
        <p className="muted small center">🔒 Your details are only used to fulfil this order.</p>
      </aside>
    </form>
  );
}
