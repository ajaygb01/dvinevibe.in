"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { finishes, type Product } from "@/data/products";
import { inr } from "@/lib/format";
import { useCart } from "./CartProvider";

export function BuyBox({ product }: { product: Product }) {
  const options = finishes.filter((f) => product.finishes.includes(f.id));
  const [finish, setFinish] = useState(options[0].id);
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const router = useRouter();
  const extra = options.find((f) => f.id === finish)?.extra ?? 0;
  const price = product.price + extra;

  return (
    <div className="buybox">
      <div className="buybox__price">
        <span className="price price--lg">{inr(price)}</span>
        {product.compareAt && <s className="muted">{inr(product.compareAt + extra)}</s>}
        <span className="muted small">Inclusive of all taxes</span>
      </div>

      <fieldset className="finish-picker">
        <legend>Finish: <strong>{options.find((f) => f.id === finish)?.name}</strong></legend>
        <div className="finish-picker__options">
          {options.map((f) => (
            <label key={f.id} className={`finish ${finish === f.id ? "is-active" : ""}`}>
              <input type="radio" name="finish" value={f.id} checked={finish === f.id} onChange={() => setFinish(f.id)} />
              <span className="finish__swatch" style={{ background: f.swatch }} />
              <span>
                {f.name}
                {f.extra > 0 && <small> +{inr(f.extra)}</small>}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="buybox__row">
        <div className="qty" aria-label="Quantity">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
          <span>{qty}</span>
          <button onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">+</button>
        </div>
        <button className="btn btn--gold btn--lg grow" onClick={() => add(product.slug, finish, qty)}>
          Add to cart
        </button>
      </div>
      <button
        className="btn btn--ultra btn--lg btn--block"
        onClick={() => {
          add(product.slug, finish, qty);
          router.push("/checkout/");
        }}
      >
        Buy now
      </button>
    </div>
  );
}
