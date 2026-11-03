import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemple, readMinutes, temples } from "@/data/temples";
import { Kicker } from "@/components/Kicker";
import { LampLight } from "@/components/LampLight";
import { NativeName } from "@/components/NativeName";
import { TempleArt } from "@/components/TempleArt";
import { TemplePhoto } from "@/components/TemplePhoto";
import { TempleCard } from "@/components/TempleCard";
import { ShopAside, productsForTemple } from "@/components/ShopAside";

type Params = { slug: string };

export function generateStaticParams() {
  return temples.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTemple(slug);
  return t ? { title: `${t.name}, ${t.city}`, description: t.summary } : {};
}

export default async function TemplePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const temple = getTemple(slug);
  if (!temple) notFound();
  const shop = productsForTemple(temple);
  const nearby = temples.filter((t) => t.region === temple.region && t.slug !== temple.slug).slice(0, 3);
  const next = nearby.length ? nearby : temples.filter((t) => t.slug !== temple.slug).slice(0, 3);

  return (
    <article>
      <LampLight className={`story-hero ${temple.photo ? "story-hero--photo" : ""}`}>
        {temple.photo && <TemplePhoto temple={temple} className="story-hero__photo" />}
        <NativeName temple={temple} className="story-hero__native" />
        <div className="container story-hero__grid">
          <div className="story-hero__text">
            <nav className="crumbs crumbs--light" aria-label="Breadcrumb">
              <Link href="/temples/">Temples of India</Link> <span aria-hidden="true">/</span> {temple.region} India
            </nav>
            <Kicker light>{temple.tags.join(" · ")}</Kicker>
            <h1>{temple.name}</h1>
            <p className="story-hero__lede">{temple.summary}</p>
            <p className="byline byline--light">
              {temple.city}, {temple.state} · {temple.style} · {readMinutes(temple)} min read
            </p>
          </div>
          {!temple.photo && (
            <figure className="story-hero__art">
              <TempleArt kind={temple.silhouette} className="draw" label={`Line drawing in the ${temple.style} style`} />
              <figcaption>Drawn in the {temple.style} style. Photographs coming soon.</figcaption>
            </figure>
          )}
        </div>
      </LampLight>

      <div className="container story">
        <div className="story__body">
          <div className="prose">
            {temple.story.map((para, i) => <p key={i}>{para}</p>)}

            <h2>What to see</h2>
            <ul className="list-rule">
              {temple.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>

            <h2>Festivals</h2>
            <ul className="list-rule">
              {temple.festivals.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <h2>Getting there</h2>
            <dl className="reach">
              <div><dt>By train</dt><dd>{temple.reach.rail}</dd></div>
              <div><dt>By air</dt><dd>{temple.reach.air}</dd></div>
              <div><dt>When to go</dt><dd>{temple.bestTime}</dd></div>
            </dl>

            <aside className="pull">
              <span className="pull__label">Before you go</span>
              <p>{temple.tip}</p>
            </aside>

            <p className="fineprint">
              Distances are approximate. Timings and darshan rules change, so confirm with the temple
              administration before travelling.
            </p>
          </div>
        </div>

        <aside className="story__side">
          <section className="facts">
            <h3>At a glance</h3>
            <dl>
              <div><dt>Deity</dt><dd>{temple.deity}</dd></div>
              <div><dt>Place</dt><dd>{temple.city}, {temple.state}</dd></div>
              <div><dt>History</dt><dd>{temple.era}</dd></div>
              <div><dt>Architecture</dt><dd>{temple.style}</dd></div>
            </dl>
            <a
              className="text-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${temple.name} ${temple.city}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </section>
          <ShopAside items={shop} title={`Inspired by ${temple.city.split(",")[0]}`} />
        </aside>
      </div>

      <section className="band">
        <div className="container">
          <div className="section-title">
            <Kicker>Continue the yatra</Kicker>
            <h2>{nearby.length ? `More in ${temple.region} India` : "More temples"}</h2>
          </div>
          <div className="temple-grid temple-grid--3">
            {next.map((t) => <TempleCard key={t.slug} temple={t} compact />)}
          </div>
        </div>
      </section>
    </article>
  );
}
