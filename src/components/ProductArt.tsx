import type { Product } from "@/data/products";
import { Glyph } from "./Glyph";
import { Mandala } from "./Mandala";

const tones: Record<string, string> = {
  idols: "tone-gold",
  "temple-miniatures": "tone-ultra",
  "diyas-lamps": "tone-flame",
  "wall-art": "tone-ultra",
  "pooja-essentials": "tone-gold",
  gifts: "tone-flame",
};

/**
 * Placeholder product image: a glowing tile with the item's symbol.
 * Swap for real product photography (e.g. <img src={product.image} />) later.
 */
export function ProductArt({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={`product-art ${tones[product.category]} ${large ? "product-art--large" : ""}`}>
      <Mandala className="product-art__mandala" petals={large ? 24 : 16} />
      <Glyph name={product.glyph} className="product-art__glyph" />
      {product.deity && <span className="product-art__label">{product.deity}</span>}
    </div>
  );
}
