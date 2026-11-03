"use client";

import Link from "next/link";
import { useState } from "react";
import { charDham, jyotirlingas, readMinutes, temples, type Temple } from "@/data/temples";
import { TempleArt } from "./TempleArt";
import { NativeName } from "./NativeName";

// Equirectangular projection, squeezed by cos(22°) so India keeps its shape.
const W = 560;
const H = 620;
const LON0 = 67.5;
const LAT0 = 36.5;
const K = 19.6;
const COS = Math.cos((22 * Math.PI) / 180);
const project = ([lat, lon]: [number, number]) => ({
  x: 20 + (lon - LON0) * K * COS,
  y: 20 + (LAT0 - lat) * K,
});

const covered = new Set(temples.map((t) => t.name));
const others = [
  ...jyotirlingas.filter((j) => !j.slug && j.geo).map((j) => ({ name: j.name, place: j.place, geo: j.geo! })),
  ...charDham.filter((d) => !d.slug && d.geo).map((d) => ({ name: d.name, place: d.place, geo: d.geo! })),
].filter((o) => !covered.has(o.name));

const route = ["badrinath", "jagannath-puri", "ramanathaswamy-rameswaram"].map((s) => project(temples.find((t) => t.slug === s)!.geo));
const dwarka = project(charDham.find((d) => d.name === "Dwarka")!.geo!);
const routePath = `M${route[0].x} ${route[0].y} L${route[1].x} ${route[1].y} L${route[2].x} ${route[2].y} L${dwarka.x} ${dwarka.y} Z`;

/** Every temple plotted where it stands, lit like a diya. Pick one to read about it. */
export function YatraMap() {
  const [active, setActive] = useState<Temple>(temples.find((t) => t.slug === "kedarnath")!);

  return (
    <div className="yatra">
      <div className="yatra__map">
        <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Map of the temples in this guide">
          <defs>
            <radialGradient id="diya-glow">
              <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#ffb347" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* survey graticule */}
          <g className="yatra__grid">
            {[10, 15, 20, 25, 30, 35].map((lat) => {
              const { y } = project([lat, LON0]);
              return (
                <g key={`lat${lat}`}>
                  <path d={`M20 ${y}H${W - 10}`} />
                  <text x={W - 12} y={y - 4} textAnchor="end">{lat}°N</text>
                </g>
              );
            })}
            {[70, 75, 80, 85, 90, 95].map((lon) => {
              const { x } = project([LAT0, lon]);
              return (
                <g key={`lon${lon}`}>
                  <path d={`M${x} 20V${H - 10}`} />
                  <text x={x + 4} y={H - 14}>{lon}°E</text>
                </g>
              );
            })}
          </g>

          <g className="yatra__labels">
            <text x={project([33.5, 76.5]).x} y={project([33.5, 76.5]).y}>H I M A L A Y A</text>
            <text x={project([16.5, 68.2]).x} y={project([16.5, 68.2]).y}>Arabian Sea</text>
            <text x={project([16, 86.2]).x} y={project([16, 86.2]).y}>Bay of Bengal</text>
            <text x={project([7.2, 79.5]).x} y={project([7.2, 79.5]).y}>Indian Ocean</text>
          </g>

          <path d={routePath} className="yatra__route" />
          <text className="yatra__route-label" x={project([24.5, 71.2]).x} y={project([24.5, 71.2]).y}>Char Dham</text>

          {others.map((o) => {
            const p = project(o.geo);
            return (
              <g key={o.name} className="yatra__other">
                <circle cx={p.x} cy={p.y} r="3.2" />
                <title>{`${o.name}, ${o.place} (guide coming)`}</title>
              </g>
            );
          })}

          {temples.map((t) => {
            const p = project(t.geo);
            const on = t.slug === active.slug;
            return (
              <g key={t.slug} className={`yatra__diya ${on ? "is-on" : ""}`}>
                <circle cx={p.x} cy={p.y} r={on ? 26 : 16} fill="url(#diya-glow)" className="yatra__glow" />
                <circle cx={p.x} cy={p.y} r={on ? 5.5 : 4} className="yatra__flame" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="14"
                  className="yatra__hit"
                  tabIndex={0}
                  role="button"
                  aria-label={`${t.name}, ${t.city}`}
                  aria-pressed={on}
                  onMouseEnter={() => setActive(t)}
                  onFocus={() => setActive(t)}
                  onClick={() => setActive(t)}
                />
                {on && (
                  <text x={p.x + 12} y={p.y - 10} className="yatra__name">
                    {t.name.replace(/ (Temple|Jyotirlinga|Shrine)$/, "")}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        <p className="yatra__legend">
          <span className="yatra__key yatra__key--on" /> Temple guide
          <span className="yatra__key yatra__key--off" /> Jyotirlinga or Dham, guide coming
          <span className="yatra__key yatra__key--route" /> Char Dham circuit
        </p>
      </div>

      <article className="yatra__card" aria-live="polite">
        <NativeName temple={active} className="yatra__native" />
        <div className="yatra__art">
          <TempleArt key={active.slug} kind={active.silhouette} className="draw" />
        </div>
        <p className="kicker kicker--light">
          {active.region} India · {readMinutes(active)} min read
        </p>
        <h3>{active.name}</h3>
        <p className="yatra__place">{active.city}, {active.state}</p>
        <p className="yatra__sum">{active.summary}</p>
        <Link href={`/temples/${active.slug}/`} className="text-link text-link--light">
          Read the story
        </Link>
      </article>
    </div>
  );
}
