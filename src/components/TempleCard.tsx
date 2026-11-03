import Link from "next/link";
import { readMinutes, type Temple } from "@/data/temples";
import { TempleArt } from "./TempleArt";

/** Editorial temple teaser: drawing, region, name, place and standfirst. */
export function TempleCard({ temple, compact = false }: { temple: Temple; compact?: boolean }) {
  return (
    <Link href={`/temples/${temple.slug}/`} className={`temple-card ${compact ? "temple-card--compact" : ""}`}>
      <div className="temple-card__art">
        <TempleArt kind={temple.silhouette} />
      </div>
      <div className="temple-card__body">
        <p className="temple-card__meta">
          {temple.region} India <span aria-hidden="true">·</span> {readMinutes(temple)} min read
        </p>
        <h3>{temple.name}</h3>
        <p className="temple-card__place">{temple.city}, {temple.state}</p>
        {!compact && <p className="temple-card__summary">{temple.summary}</p>}
      </div>
    </Link>
  );
}
