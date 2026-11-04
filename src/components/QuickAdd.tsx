"use client";

import { useCart } from "./CartProvider";

export function QuickAdd({ slug, finish }: { slug: string; finish: string }) {
  const { add } = useCart();
  return (
    <button className="btn btn--small btn--gold" onClick={() => add(slug, finish)}>
      Add
    </button>
  );
}
