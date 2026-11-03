import Link from "next/link";
import type { Temple } from "@/data/temples";
import { Glyph } from "./Glyph";

export function TempleCard({ temple }: { temple: Temple }) {
  return (
    <Link href={`/temples/${temple.slug}/`} className="temple-card">
      <div className="temple-card__top">
        <Glyph name="gopuram" className="temple-card__icon" />
        <span className="chip chip--region">{temple.region} India</span>
      </div>
      <h3>{temple.name}</h3>
      <p className="temple-card__place">{temple.city}, {temple.state}</p>
      <p className="muted">{temple.summary}</p>
      <div className="temple-card__tags">
        {temple.tags.slice(0, 3).map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
    </Link>
  );
}
