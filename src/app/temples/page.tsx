import type { Metadata } from "next";
import { TempleBrowser } from "@/components/TempleBrowser";
import { Kicker } from "@/components/Kicker";
import { TamilNaduTeaser } from "@/components/TamilNaduTeaser";
import { JsonLd } from "@/components/JsonLd";
import { temples } from "@/data/temples";
import { breadcrumbLd, itemListLd, pageMeta, templePath } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Temples of India",
  description: `A guide to ${temples.length} great Hindu temples of India, from the Char Dham and the Jyotirlingas to the gopurams of the South: their stories, architecture, festivals and how to get there.`,
  path: "/temples/",
});

export default function TemplesPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListLd("Temples of India", "/temples/", temples.map((t) => ({ name: t.name, path: templePath(t) }))),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Temples of India", path: "/temples/" }]),
        ]}
      />
      <header className="container page-head">
        <Kicker>Atlas</Kicker>
        <h1>Temples of India</h1>
        <p className="standfirst">
          From Himalayan Jyotirlingas to the gopurams of the South: the stories, architecture and
          festivals of India&apos;s great temples, and how to reach them.
        </p>
      </header>
      <section className="container section section--tight">
        <div className="tn-teaser-wrap tn-teaser-wrap--top">
          <TamilNaduTeaser />
        </div>
        <TempleBrowser />
        <p className="fineprint">
          Darshan timings, dress codes and yatra rules change. Please check with the temple
          administration before you travel.
        </p>
      </section>
    </>
  );
}
