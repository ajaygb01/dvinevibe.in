import type { Temple } from "@/data/temples";
import { TempleArt } from "./TempleArt";

/**
 * A temple's photograph, toned to sit in the site's night palette, with its
 * licence credit. Falls back to the line drawing when no photo has been added.
 */
export function TemplePhoto({
  temple,
  className = "",
  draw = false,
  credit = true,
}: {
  temple: Temple;
  className?: string;
  draw?: boolean;
  credit?: boolean;
}) {
  const p = temple.photo;
  if (!p) return <TempleArt kind={temple.silhouette} className={draw ? "draw" : undefined} label={`Line drawing in the ${temple.style} style`} />;
  return (
    <figure className={`photo ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
      {credit && (
        <figcaption className="photo__credit">
          Photo: {p.credit} ·{" "}
          <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
            {p.license}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
