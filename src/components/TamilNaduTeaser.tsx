import Link from "next/link";
import { temples } from "@/data/temples";

/** A lamp-lit doorway into the Tamil Nadu atlas. */
export function TamilNaduTeaser() {
  const count = temples.filter((t) => t.state === "Tamil Nadu").length;
  return (
    <Link href="/temples/tamil-nadu/" className="tn-teaser">
      <span className="native native--taml tn-teaser__native" lang="ta" aria-hidden="true">தமிழ்நாடு</span>
      <div>
        <p className="kicker kicker--light">New · State atlas</p>
        <h2>The temples of Tamil Nadu</h2>
        <p>
          {count} temples and fifteen centuries of history, from the Pallava Shore Temple to the gopurams of
          Srirangam, with the five element temples and Murugan&apos;s six abodes.
        </p>
      </div>
      <span className="tn-teaser__go">Explore Tamil Nadu</span>
    </Link>
  );
}
