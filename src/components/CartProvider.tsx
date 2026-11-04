"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getFinish, getProduct } from "@/data/products";
import { FREE_SHIPPING_FROM, SHIPPING_FEE } from "@/lib/format";

export type CartLine = { slug: string; finish: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  ready: boolean;
  add: (slug: string, finish: string, qty?: number) => void;
  setQty: (slug: string, finish: string, qty: number) => void;
  remove: (slug: string, finish: string) => void;
  clear: () => void;
  lastAdded: string | null;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "dvinevibe-cart-v1";

export const unitPrice = (line: Pick<CartLine, "slug" | "finish">) => {
  const p = getProduct(line.slug);
  if (!p) return 0;
  return p.price + (getFinish(line.finish)?.extra ?? 0);
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        setLines(parsed.filter((l) => getProduct(l.slug) && l.qty > 0));
      }
    } catch {
      /* storage unavailable: start with an empty cart */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, ready]);

  useEffect(() => {
    if (!lastAdded) return;
    const t = setTimeout(() => setLastAdded(null), 2600);
    return () => clearTimeout(t);
  }, [lastAdded]);

  const add = useCallback((slug: string, finish: string, qty = 1) => {
    setLines((prev) => {
      const found = prev.find((l) => l.slug === slug && l.finish === finish);
      if (found) return prev.map((l) => (l === found ? { ...l, qty: Math.min(l.qty + qty, 10) } : l));
      return [...prev, { slug, finish, qty }];
    });
    setLastAdded(slug);
  }, []);

  const setQty = useCallback((slug: string, finish: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => !(l.slug === slug && l.finish === finish))
        : prev.map((l) => (l.slug === slug && l.finish === finish ? { ...l, qty: Math.min(qty, 10) } : l)),
    );
  }, []);

  const remove = useCallback((slug: string, finish: string) => {
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.finish === finish)));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + unitPrice(l) * l.qty, 0);
    const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE;
    return { lines, count, subtotal, shipping, total: subtotal + shipping, ready, add, setQty, remove, clear, lastAdded };
  }, [lines, ready, add, setQty, remove, clear, lastAdded]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
