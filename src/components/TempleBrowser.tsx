"use client";

import { useMemo, useState } from "react";
import { regions, temples, type Region } from "@/data/temples";
import { TempleCard } from "./TempleCard";

const traditions = ["Shiva", "Vishnu", "Shakti", "Jyotirlinga", "Char Dham", "UNESCO"];

export function TempleBrowser() {
  const [region, setRegion] = useState<Region | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return temples.filter(
      (t) =>
        (!region || t.region === region) &&
        (!tag || t.tags.includes(tag)) &&
        (!q || [t.name, t.city, t.state, t.deity].some((s) => s.toLowerCase().includes(q))),
    );
  }, [region, tag, query]);

  const filtered = region || tag || query;

  return (
    <>
      <div className="temple-filters">
        <input
          className="input"
          type="search"
          placeholder="Search by temple, city, state or deity"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search temples"
        />
        <div className="filters" role="group" aria-label="Region">
          <span className="filters__label">Region</span>
          <button className={`pill ${!region ? "is-active" : ""}`} aria-pressed={!region} onClick={() => setRegion(null)}>All India</button>
          {regions.map((r) => (
            <button key={r} className={`pill ${region === r ? "is-active" : ""}`} aria-pressed={region === r} onClick={() => setRegion(r)}>{r}</button>
          ))}
        </div>
        <div className="filters" role="group" aria-label="Tradition">
          <span className="filters__label">Tradition</span>
          <button className={`pill ${!tag ? "is-active" : ""}`} aria-pressed={!tag} onClick={() => setTag(null)}>All</button>
          {traditions.map((d) => (
            <button key={d} className={`pill ${tag === d ? "is-active" : ""}`} aria-pressed={tag === d} onClick={() => setTag(d)}>{d}</button>
          ))}
        </div>
      </div>

      {filtered ? (
        <>
          <p className="results-line">{list.length} {list.length === 1 ? "temple" : "temples"}</p>
          {list.length ? (
            <div className="temple-grid">{list.map((t) => <TempleCard key={t.slug} temple={t} />)}</div>
          ) : (
            <p className="empty">No temples match yet. We add new guides every month.</p>
          )}
        </>
      ) : (
        regions.map((r) => {
          const inRegion = temples.filter((t) => t.region === r);
          return (
            <section key={r} className="region-group">
              <h2 className="region-group__title">
                {r} India <span>{inRegion.length} {inRegion.length === 1 ? "temple" : "temples"}</span>
              </h2>
              <div className="temple-grid">{inRegion.map((t) => <TempleCard key={t.slug} temple={t} />)}</div>
            </section>
          );
        })
      )}
    </>
  );
}
