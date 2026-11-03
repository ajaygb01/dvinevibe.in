import Link from "next/link";
import { Deepam } from "@/components/Deepam";
import { Mandala } from "@/components/Mandala";
import { ProductCard } from "@/components/ProductCard";
import { TempleCard } from "@/components/TempleCard";
import { Glyph } from "@/components/Glyph";
import { categories, products } from "@/data/products";
import { temples } from "@/data/temples";

const categoryGlyph = {
  idols: "om",
  "temple-miniatures": "gopuram",
  "diyas-lamps": "deepam",
  "wall-art": "chakra",
  "pooja-essentials": "lotus",
  gifts: "trishul",
} as const;

export default function HomePage() {
  const featured = products.filter((p) => p.badge).slice(0, 4);
  const featuredTemples = ["meenakshi-amman-madurai", "kashi-vishwanath-varanasi", "jagannath-puri", "somnath"]
    .map((s) => temples.find((t) => t.slug === s)!)
    .filter(Boolean);

  return (
    <>
      <section className="hero">
        <Mandala className="hero__mandala" petals={24} />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">ॐ Shubh Aarambh</p>
            <h1>
              Divinity, <span className="text-gold">layer by layer.</span>
            </h1>
            <p className="lead">
              Hand-finished 3D printed idols, temple miniatures and deepam stands for your home
              mandir, made to order in India. And a guide to the temples that inspire every piece.
            </p>
            <div className="hero__ctas">
              <Link href="/shop/" className="btn btn--gold btn--lg">Shop the collection</Link>
              <Link href="/temples/" className="btn btn--ghost btn--lg">Explore temples</Link>
            </div>
            <ul className="hero__trust">
              <li>✦ Printed to order</li>
              <li>✦ Hand-finished</li>
              <li>✦ Ships pan-India</li>
            </ul>
          </div>
          <div className="hero__art" aria-hidden="true">
            <div className="hero__halo" />
            <Deepam size={260} />
          </div>
        </div>
        <div className="hero__border" aria-hidden="true" />
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">Shop by category</p>
          <h2>For every corner of your mandir</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c.id} href={`/shop/?c=${c.id}`} className="category-tile">
              <Glyph name={categoryGlyph[c.id]} className="category-tile__icon" />
              <h3>{c.name}</h3>
              <p>{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow">Loved by devotees</p>
              <h2>Featured pieces</h2>
            </div>
            <Link href="/shop/" className="link-arrow">View all products →</Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="craft-band">
          <div>
            <p className="eyebrow eyebrow--light">How each piece is made</p>
            <h2>From sacred form to your altar</h2>
          </div>
          <ol className="steps">
            <li><span>1</span><strong>Sculpted</strong> following traditional iconography and proportions.</li>
            <li><span>2</span><strong>Printed</strong> at fine layer heights once you order.</li>
            <li><span>3</span><strong>Finished</strong> by hand: sanded, sealed, gilded or painted.</li>
            <li><span>4</span><strong>Packed</strong> with care and shipped across India.</li>
          </ol>
        </div>
      </section>

      <section className="section section--ultra">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <p className="eyebrow eyebrow--light">Teertha Yatra</p>
              <h2>Temples of India</h2>
              <p className="lead lead--light">Stories, architecture and visiting tips for the temples that inspire our work.</p>
            </div>
            <Link href="/temples/" className="link-arrow link-arrow--light">See all {temples.length} temples →</Link>
          </div>
          <div className="temple-grid">
            {featuredTemples.map((t) => (
              <TempleCard key={t.slug} temple={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="testimonials">
          {[
            ["The Ganesha idol looks like brass in our mandir. Everyone asks where we bought it.", "Priya, Chennai"],
            ["The LED deepam stand is perfect for our flat. Safe for the kids and so beautiful.", "Rohit, Pune"],
            ["Gifted the Meenakshi gopuram to my parents. The detail is unbelievable.", "Ananya, Bengaluru"],
          ].map(([quote, who]) => (
            <figure key={who} className="testimonial">
              <blockquote>“{quote}”</blockquote>
              <figcaption>{who}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
