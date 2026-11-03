import type { Metadata } from "next";
import Link from "next/link";
import { Deepam } from "@/components/Deepam";

export const metadata: Metadata = { title: "Our Craft" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Craft</p>
          <h1>Ancient forms, modern making</h1>
          <p className="lead">
            Dvinevibe brings the beauty of traditional Indian iconography into every home through
            careful 3D printing and patient hand finishing.
          </p>
        </div>
      </section>
      <section className="section container about">
        <div className="prose">
          <h2>Why 3D printing?</h2>
          <p>
            Traditional bronze casting and stone carving are treasures, and they are often out of
            reach for a small apartment mandir or a thoughtful gift. Printing lets us reproduce fine
            detail, such as the folds of a dhoti or the tiers of a gopuram, at a size and price that
            fits modern homes, and we only print what is ordered, so nothing goes to waste.
          </p>
          <h2>Respect in every layer</h2>
          <p>
            We follow traditional proportions and iconography, never print sacred forms on items
            meant for the floor or footwear, and recommend LED tealights with every lamp so your
            deepam glows safely.
          </p>
          <h2>Materials</h2>
          <ul className="ticks">
            <li>Silk PLA: a plant-based plastic with a lustrous, metal-like sheen.</li>
            <li>PETG: tougher and heat-resistant, for lamps, cars and pooja ware.</li>
            <li>Resin: for our finest miniatures with the tiniest details.</li>
          </ul>
          <Link href="/shop/" className="btn btn--gold btn--lg">Explore the collection</Link>
        </div>
        <div className="about__art"><Deepam size={220} /></div>
      </section>
    </>
  );
}
