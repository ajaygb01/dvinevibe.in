"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Deepam } from "./Deepam";
import { useCart } from "./CartProvider";
import { getProduct } from "@/data/products";

const nav = [
  { href: "/shop/", label: "Shop" },
  { href: "/shop/?c=idols", label: "Idols" },
  { href: "/shop/?c=temple-miniatures", label: "Temple Miniatures" },
  { href: "/temples/", label: "Temples of India" },
  { href: "/about/", label: "Our Craft" },
];

export function Header() {
  const { count, lastAdded } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const added = lastAdded ? getProduct(lastAdded) : null;

  return (
    <header className="site-header">
      <div className="announcement">
        <span>🪔 Free shipping across India on orders above ₹999</span>
        <span className="announcement__sep" aria-hidden="true">•</span>
        <span>Every piece printed to order and hand-finished</span>
      </div>
      <div className="container header-bar">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Deepam size={42} />
          <span className="brand__text">
            <span className="brand__name">Dvinevibe</span>
            <span className="brand__tag">Divine, printed with devotion</span>
          </span>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) => {
            const base = item.href.split("?")[0];
            const active = !item.href.includes("?") && pathname.startsWith(base);
            return (
              <Link key={item.href} href={item.href} className={active ? "is-active" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link href="/cart/" className="cart-link" aria-label={`Cart, ${count} items`}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L21 8H6.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="20" r="1.4" fill="currentColor" />
              <circle cx="17" cy="20" r="1.4" fill="currentColor" />
            </svg>
            <span>Cart</span>
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
          <button className="menu-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {added && (
        <div className="toast" role="status">
          <Deepam size={22} /> <strong>{added.name}</strong> added to your cart.
          <Link href="/cart/">View cart</Link>
        </div>
      )}
    </header>
  );
}
