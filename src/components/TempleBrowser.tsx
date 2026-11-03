"use client";

import { useMemo, useState } from "react";
import { regions, temples, type Region } from "@/data/temples";
import { TempleCard } from "./TempleCard";

const deityFilters = ["Shiva", "Vishnu", "Shakti", "Jyotirlinga", "Char Dham", "UNESCO"];

export function TempleBrowser() {
  const [region, setRegion] = useState<Region | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const list = useMemo(
    () => temples.filter((t) => (!region || t.region === region) && (!tag || t.tags.includes(tag))),
    [region, tag],
  );

  return (
    <>
      <div className="temple-filters">
        <div className="filters">
          <span className="filters__label">Region</span>
          <button className={`pill ${!region ? "is-active" : ""}`} onClick={() => setRegion(null)}>All India</button>
          {regions.map((r) => (
            <button key={r} className={`pill ${region === r ? "is-active" : ""}`} onClick={() => setRegion(r)}>{r}</button>
          ))}
        </div>
        <div className="filters">
          <span className="filters__label">Tradition</span>
          <button className={`pill pill--ultra ${!tag ? "is-active" : ""}`} onClick={() => setTag(null)}>All</button>
          {deityFilters.map((d) => (
            <button key={d} className={`pill pill--ultra ${tag === d ? "is-active" : ""}`} onClick={() => setTag(d)}>{d}</button>
          ))}
        </div>
      </div>
      <p className="muted results-line">{list.length} {list.length === 1 ? "temple" : "temples"}</p>
      {list.length ? (
        <div className="temple-grid">
          {list.map((t) => <TempleCard key={t.slug} temple={t} />)}
        </div>
      ) : (
        <div className="empty"><p>No temples match those filters yet. We are adding more every month.</p></div>
      )}
    </>
  );
}
