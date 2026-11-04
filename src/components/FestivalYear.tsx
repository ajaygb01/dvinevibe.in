"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { festivalCalendar, getTemple } from "@/data/temples";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const startMonth = (m: string) => MONTHS.indexOf(m.slice(0, 3));

/** A year of festivals laid out month by month, with the current month marked. */
export function FestivalYear() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(new Date().getMonth()), []);

  return (
    <div className="year">
      <ol className="year__months">
        {MONTHS.map((m, i) => {
          const fests = festivalCalendar.filter((f) => startMonth(f.months) === i);
          return (
            <li key={m} className={`year__month ${now === i ? "is-now" : ""} ${fests.length ? "has-fest" : ""}`}>
              <span className="year__label">
                {m}
                {now === i && <span className="year__now">Now</span>}
              </span>
              <span className="year__bar" aria-hidden="true" />
              {fests.map((f) => {
                const t = getTemple(f.slug)!;
                return (
                  <Link key={f.name} href={`/temples/${t.slug}/`} className="year__fest">
                    <strong>{f.name}</strong>
                    <span>{t.city.split(",")[0]}</span>
                  </Link>
                );
              })}
            </li>
          );
        })}
      </ol>
      <p className="fineprint">Lunar dates move each year. Months shown are when each festival usually begins.</p>
    </div>
  );
}
