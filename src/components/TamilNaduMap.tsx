"use client";

import Link from "next/link";
import { useState } from "react";
import { readMinutes, type Temple } from "@/data/temples";
import { TempleArt } from "./TempleArt";
import { TemplePhoto } from "./TemplePhoto";
import { NativeName } from "./NativeName";

// A close survey chart of Tamil Nadu: the same projection idea as the yatra
// map, zoomed to 7.9–13.6°N and 76.6–80.6°E.
const W = 440;
const H = 600;
const LON0 = 76.6;
const LAT0 = 13.6;
const K = 98;
const COS = Math.cos((11 * Math.PI) / 180);
const project = ([lat, lon]: [number, number]) => ({
  x: 24 + (lon - LON0) * K * COS,
  y: 24 + (LAT0 - lat) * K,
});
const line = (pts: [number, number][]) =>
  pts.map((p, i) => { const { x, y } = project(p); return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`; }).join(" ");

// Approximate coastline, Pulicat to the Kerala border, and the Kaveri from Hogenakkal to the sea.
const coast = line([
  [13.6, 80.33], [13.08, 80.29], [12.62, 80.2], [11.93, 79.84], [11.4, 79.8], [10.77, 79.85], [10.3, 79.86],
  [10.33, 79.45], [9.95, 79.15], [9.74, 79.02], [9.28, 79.12], [9.23, 78.78], [8.8, 78.15], [8.5, 78.13],
  [8.08, 77.55], [8.25, 77.2],
]);
const island = line([[9.3, 79.2], [9.29, 79.32], [9.17, 79.43]]);
const kaveri = line([
  [12.12, 77.78], [11.8, 77.8], [11.45, 77.68], [11.34, 77.73], [10.96, 78.08], [10.83, 78.69], [10.8, 79.0],
  [10.95, 79.38], [11.14, 79.86],
]);

// Temples a few kilometres apart are spread out slightly so each lamp can be picked.
const nudge: Record<string, [number, number]> = {
  "ekambareswarar-kanchipuram": [-8, -5],
  "kamakshi-amman-kanchipuram": [2, 4],
  "varadharaja-perumal-kanchipuram": [11, 9],
  "ranganathaswamy-srirangam": [-6, -2],
  "jambukeswarar-thiruvanaikaval": [6, 3],
};

// One label per place, so clustered temples share a name.
const places: { text: string; geo: [number, number]; dx: number; dy: number; end?: boolean }[] = [
  { text: "Chennai", geo: [13.034, 80.27], dx: -12, dy: 4, end: true },
  { text: "Kanchipuram", geo: [12.84, 79.7], dx: -16, dy: 4, end: true },
  { text: "Mamallapuram", geo: [12.62, 80.2], dx: -12, dy: 12, end: true },
  { text: "Tiruvannamalai", geo: [12.23, 79.07], dx: -12, dy: 4, end: true },
  { text: "Chidambaram", geo: [11.4, 79.69], dx: -12, dy: 4, end: true },
  { text: "Gangaikonda Cholapuram", geo: [11.21, 79.45], dx: -12, dy: 4, end: true },
  { text: "Kumbakonam", geo: [10.95, 79.36], dx: 10, dy: -8 },
  { text: "Thanjavur", geo: [10.78, 79.13], dx: 10, dy: 14 },
  { text: "Tiruchirappalli", geo: [10.86, 78.69], dx: -16, dy: -10, end: true },
  { text: "Palani", geo: [10.45, 77.52], dx: 12, dy: 4 },
  { text: "Madurai", geo: [9.92, 78.12], dx: 12, dy: 4 },
  { text: "Srivilliputhur", geo: [9.51, 77.63], dx: -12, dy: 4, end: true },
  { text: "Rameswaram", geo: [9.29, 79.32], dx: -6, dy: 20 },
  { text: "Tiruchendur", geo: [8.5, 78.13], dx: 12, dy: 4 },
  { text: "Kanyakumari", geo: [8.08, 77.55], dx: 12, dy: 10 },
];

/** Every Tamil Nadu temple in the guide on a close chart of the state. */
export function TamilNaduMap({ temples, start }: { temples: Temple[]; start: string }) {
  const [active, setActive] = useState<Temple>(temples.find((t) => t.slug === start) ?? temples[0]);

  return (
    <div className="yatra tn-map">
      <div className="yatra__map">
        <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Map of the Tamil Nadu temples in this guide">
          <g className="yatra__grid">
            {[8, 9, 10, 11, 12, 13].map((lat) => {
              const { y } = project([lat, LON0]);
              return (
                <g key={`lat${lat}`}>
                  <path d={`M24 ${y}H${W - 6}`} />
                  <text x={W - 8} y={y - 4} textAnchor="end">{lat}°N</text>
                </g>
              );
            })}
            {[77, 78, 79, 80].map((lon) => {
              const { x } = project([LAT0, lon]);
              return (
                <g key={`lon${lon}`}>
                  <path d={`M${x} 24V${H - 6}`} />
                  <text x={x + 4} y={H - 10}>{lon}°E</text>
                </g>
              );
            })}
          </g>

          <path d={coast} className="tn-map__coast" />
          <path d={island} className="tn-map__coast" />
          <path d={kaveri} className="tn-map__river" />

          <g className="yatra__labels">
            <text x={project([12.0, 80.05]).x} y={project([12.0, 80.05]).y}>Bay of</text>
            <text x={project([11.8, 80.05]).x} y={project([11.8, 80.05]).y}>Bengal</text>
            <text x={project([8.75, 78.55]).x} y={project([8.75, 78.55]).y}>Gulf of Mannar</text>
            <text className="tn-map__river-label" x={project([11.62, 77.35]).x} y={project([11.62, 77.35]).y}>Kaveri</text>
          </g>

          <g className="tn-map__places" aria-hidden="true">
            {places.map((p) => {
              const { x, y } = project(p.geo);
              return (
                <text key={p.text} x={x + p.dx} y={y + p.dy} textAnchor={p.end ? "end" : "start"}>
                  {p.text}
                </text>
              );
            })}
          </g>

          {temples.map((t) => {
            const base = project(t.geo);
            const [dx, dy] = nudge[t.slug] ?? [0, 0];
            const p = { x: base.x + dx, y: base.y + dy };
            const on = t.slug === active.slug;
            return (
              <g key={t.slug} className={`yatra__diya ${on ? "is-on" : ""}`}>
                <circle cx={p.x} cy={p.y} r={on ? 22 : 13} fill="url(#tn-diya-glow)" className="yatra__glow" />
                <circle cx={p.x} cy={p.y} r={on ? 5 : 3.6} className="yatra__flame" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="7"
                  className="yatra__hit"
                  tabIndex={0}
                  role="button"
                  aria-label={`${t.name}, ${t.city}`}
                  aria-pressed={on}
                  onMouseEnter={() => setActive(t)}
                  onFocus={() => setActive(t)}
                  onClick={() => setActive(t)}
                />
              </g>
            );
          })}
          <defs>
            <radialGradient id="tn-diya-glow">
              <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#ffb347" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <p className="yatra__legend">
          <span className="yatra__key yatra__key--on" /> Temple guide
          <span className="yatra__key tn-map__key--river" /> Kaveri, the Chola heartland
        </p>
      </div>

      <article className="yatra__card" aria-live="polite">
        <NativeName temple={active} className="yatra__native" />
        <div className={`yatra__art ${active.photo ? "has-photo" : ""}`}>
          {active.photo ? (
            <TemplePhoto key={active.slug} temple={active} credit={false} />
          ) : (
            <TempleArt key={active.slug} kind={active.silhouette} className="draw" />
          )}
        </div>
        <p className="kicker kicker--light">
          {active.deity} · {readMinutes(active)} min read
        </p>
        <h3>{active.name}</h3>
        <p className="yatra__place">{active.city}</p>
        <p className="yatra__sum">{active.summary}</p>
        <Link href={`/temples/${active.slug}/`} className="text-link text-link--light">
          Read the story
        </Link>
      </article>
    </div>
  );
}
