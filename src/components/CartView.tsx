"use client";

import Link from "next/link";
import { getFinish, getProduct } from "@/data/products";
import { FREE_SHIPPING_FROM, inr } from "@/lib/format";
import { unitPrice, useCart } from "./CartProvider";
import { ProductArt } from "./ProductArt";
import { Deepam } from "./Deepam";

export function CartView() {
  const { lines, subtotal, shipping, total, setQty, remove, ready } = useCart();

  if (!ready) return <p className="muted">Loading your cart…</p>;

  if (!lines.length) {
    return (
      <div className="empty empty--big">
        <Deepam size={80} />
        <h2>Your cart is waiting to be blessed</h2>
        <p className="muted">Browse idols, temple miniatures and deepam stands to begin.</p>
        <Link href="/shop/" className="btn btn--gold btn--lg">Start shopping</Link>
      </div>
    );
  }

  const toFree = FREE_SHIPPING_FROM - subtotal;

  return (
    <div className="cart-layout">
      <ul className="cart-lines">
        {lines.map((l) => {
          const p = getProduct(l.slug)!;
          const f = getFinish(l.finish);
          return (
            <li key={`${l.slug}-${l.finish}`} className="cart-line">
              <Link href={`/shop/${p.slug}/`} className="cart-line__media">
                <ProductArt product={p} />
              </Link>
              <div className="cart-line__info">
                <Link href={`/shop/${p.slug}/`}><strong>{p.name}</strong></Link>
                <span className="muted small">Finish: {f?.name} · {p.height}</span>
                <button className="link-btn" onClick={() => remove(l.slug, l.finish)}>Remove</button>
              </div>
              <div className="qty qty--small">
                <button onClick={() => setQty(l.slug, l.finish, l.qty - 1)} aria-label="Decrease quantity">−</button>
                <span>{l.qty}</span>
                <button onClick={() => setQty(l.slug, l.finish, l.qty + 1)} aria-label="Increase quantity">+</button>
              </div>
              <span className="price">{inr(unitPrice(l) * l.qty)}</span>
            </li>
          );
        })}
      </ul>

      <aside className="summary">
        <h2>Order summary</h2>
        {toFree > 0 ? (
          <div className="ship-meter">
            <p className="small">Add <strong>{inr(toFree)}</strong> more for free shipping</p>
            <div className="ship-meter__bar"><span style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_FROM) * 100)}%` }} /></div>
          </div>
        ) : (
          <p className="small ok">✓ You have unlocked free shipping</p>
        )}
        <dl className="summary__rows">
          <div><dt>Subtotal</dt><dd>{inr(subtotal)}</dd></div>
          <div><dt>Shipping</dt><dd>{shipping ? inr(shipping) : "Free"}</dd></div>
          <div className="summary__total"><dt>Total</dt><dd>{inr(total)}</dd></div>
        </dl>
        <Link href="/checkout/" className="btn btn--ultra btn--lg btn--block">Proceed to checkout</Link>
        <Link href="/shop/" className="link-arrow center">← Continue shopping</Link>
      </aside>
    </div>
  );
}
