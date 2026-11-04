import type { Metadata } from "next";
import { TempleBrowser } from "@/components/TempleBrowser";
import { Kicker } from "@/components/Kicker";
import { TamilNaduTeaser } from "@/components/TamilNaduTeaser";

export const metadata: Metadata = {
  title: "Temples of India",
  description: "A guide to the great Hindu temples of India: stories, architecture, festivals and how to get there.",
};

export default function TemplesPage() {
  return (
    <>
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
