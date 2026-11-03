import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemple, temples } from "@/data/temples";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Mandala } from "@/components/Mandala";
import { Glyph } from "@/components/Glyph";

type Params = { slug: string };

export function generateStaticParams() {
  return temples.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTemple(slug);
  return t ? { title: t.name, description: t.summary } : {};
}

export default async function TemplePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const temple = getTemple(slug);
  if (!temple) notFound();
  const related = products.filter((p) => p.temple === temple.slug);
  const nearby = temples.filter((t) => t.region === temple.region && t.slug !== temple.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero page-hero--ultra">
        <Mandala className="page-hero__mandala" petals={20} />
        <div className="container temple-hero">
          <div>
            <div className="breadcrumbs breadcrumbs--light">
              <Link href="/temples/">Temples of India</Link> / <span>{temple.region} India</span>
            </div>
            <h1>{temple.name}</h1>
            <p className="lead lead--light">{temple.summary}</p>
            <div className="temple-card__tags">
              {temple.tags.map((t) => <span className="chip chip--light" key={t}>{t}</span>)}
            </div>
          </div>
          <Glyph name="gopuram" className="temple-hero__icon" />
        </div>
      </section>

      <section className="section container temple-detail">
        <article className="prose">
          {temple.story.map((para, i) => <p key={i}>{para}</p>)}

          <h2>Highlights</h2>
          <ul className="ticks">
            {temple.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>

          <h2>Festivals</h2>
          <ul className="ticks ticks--flame">
            {temple.festivals.map((f) => <li key={f}>{f}</li>)}
          </ul>

          <div className="tip">
            <strong>🪔 Yatra tip</strong>
            <p>{temple.tip}</p>
          </div>
        </article>

        <aside className="facts card">
          <h3>At a glance</h3>
          <dl>
            <div><dt>Presiding deity</dt><dd>{temple.deity}</dd></div>
            <div><dt>Location</dt><dd>{temple.city}, {temple.state}</dd></div>
            <div><dt>History</dt><dd>{temple.era}</dd></div>
            <div><dt>Architecture</dt><dd>{temple.style}</dd></div>
            <div><dt>Best time to visit</dt><dd>{temple.bestTime}</dd></div>
          </dl>
          <a
            className="btn btn--ghost btn--block"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${temple.name} ${temple.city}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Maps ↗
          </a>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Bring it home</p>
              <h2>Pieces inspired by {temple.name}</h2>
            </div>
            <div className="product-grid">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {nearby.length > 0 && (
        <section className="section container">
          <div className="section-head">
            <p className="eyebrow">Continue the yatra</p>
            <h2>More temples in {temple.region} India</h2>
          </div>
          <div className="temple-grid temple-grid--3">
            {nearby.map((t) => <TempleCardLite key={t.slug} slug={t.slug} />)}
          </div>
        </section>
      )}
    </>
  );
}

function TempleCardLite({ slug }: { slug: string }) {
  const t = getTemple(slug)!;
  return (
    <Link href={`/temples/${t.slug}/`} className="temple-card temple-card--light">
      <h3>{t.name}</h3>
      <p className="temple-card__place">{t.city}, {t.state}</p>
      <p className="muted">{t.summary}</p>
    </Link>
  );
}
