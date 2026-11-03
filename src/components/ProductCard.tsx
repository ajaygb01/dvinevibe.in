import Link from "next/link";
import type { Product } from "@/data/products";
import { inr } from "@/lib/format";
import { ProductArt } from "./ProductArt";
import { Stars } from "./Stars";
import { QuickAdd } from "./QuickAdd";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/shop/${product.slug}/`} className="product-card__media">
        <ProductArt product={product} />
        {product.badge && <span className={`badge badge--${product.badge.toLowerCase()}`}>{product.badge}</span>}
      </Link>
      <div className="product-card__body">
        <Stars rating={product.rating} reviews={product.reviews} />
        <h3>
          <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
        </h3>
        <p className="muted">{product.short}</p>
        <div className="product-card__foot">
          <span className="price">
            {inr(product.price)}
            {product.compareAt && <s>{inr(product.compareAt)}</s>}
          </span>
          <QuickAdd slug={product.slug} finish={product.finishes[0]} />
        </div>
      </div>
    </article>
  );
}
