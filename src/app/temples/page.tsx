import type { Metadata } from "next";
import { TempleBrowser } from "@/components/TempleBrowser";
import { Mandala } from "@/components/Mandala";

export const metadata: Metadata = {
  title: "Temples of India",
  description: "A guide to the great Hindu temples of India: stories, architecture, festivals and visiting tips.",
};

export default function TemplesPage() {
  return (
    <>
      <section className="page-hero page-hero--ultra">
        <Mandala className="page-hero__mandala" petals={20} />
        <div className="container">
          <p className="eyebrow eyebrow--light">Teertha Yatra</p>
          <h1>Temples of India</h1>
          <p className="lead lead--light">
            From Himalayan Jyotirlingas to the gopurams of the South: the stories, architecture
            and festivals of the temples that inspire our craft.
          </p>
        </div>
      </section>
      <section className="section container">
        <TempleBrowser />
        <p className="muted small disclaimer">
          Darshan timings, dress codes and yatra rules change. Please check with the temple
          administration before you travel.
        </p>
      </section>
    </>
  );
}
