import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProduct, products } from "@/data/products";
import { getTemple } from "@/data/temples";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { Stars } from "@/components/Stars";
import { BuyBox } from "@/components/BuyBox";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return p ? { title: p.name, description: p.short } : {};
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category)!;
  const temple = product.temple ? getTemple(product.temple) : undefined;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <div className="container breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/shop/">Shop</Link> /{" "}
        <Link href={`/shop/?c=${category.id}`}>{category.name}</Link> / <span>{product.name}</span>
      </div>

      <section className="container product-detail">
        <div className="product-detail__media">
          <ProductArt product={product} large />
          <p className="muted small">Illustration shown. Product photos coming soon.</p>
        </div>

        <div className="product-detail__info">
          {product.badge && <span className={`badge badge--inline badge--${product.badge.toLowerCase()}`}>{product.badge}</span>}
          <h1>{product.name}</h1>
          {product.deity && <p className="deity">{product.deity}</p>}
          <Stars rating={product.rating} reviews={product.reviews} />
          <p className="standfirst standfirst--sm">{product.description}</p>

          <BuyBox product={product} />

          <dl className="specs">
            <div><dt>Height</dt><dd>{product.height}</dd></div>
            <div><dt>Material</dt><dd>{product.material}</dd></div>
            <div><dt>Print time</dt><dd>{product.printTime}</dd></div>
            <div><dt>Dispatch</dt><dd>3–5 days</dd></div>
          </dl>

          <h3 className="subhead">Highlights</h3>
          <ul className="list-rule">
            {product.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          {temple && (
            <Link href={`/temples/${temple.slug}/`} className="temple-link">
              <span className="temple-link__label">Read about the temple</span>
              <strong>{temple.name}</strong>
              <span className="muted">{temple.city}, {temple.state} →</span>
            </Link>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="band">
          <div className="container">
            <div className="section-title">
              <p className="kicker">You may also like</p>
              <h2>More {category.name.toLowerCase()}</h2>
            </div>
            <div className="product-grid">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
