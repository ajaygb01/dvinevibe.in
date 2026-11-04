import type { Metadata } from "next";
import Link from "next/link";
import { getTemple, temples } from "@/data/temples";
import { arupadaiVeedu, panchaBhoota, tamilNaduEras } from "@/data/tamilnadu";
import { Kicker } from "@/components/Kicker";
import { LampLight } from "@/components/LampLight";
import { TempleCard } from "@/components/TempleCard";
import { TamilNaduMap } from "@/components/TamilNaduMap";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, itemListLd, pageMeta, templePath } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Temples of Tamil Nadu: history, eras and sacred circuits",
  description:
    "The great temples of Tamil Nadu and their history, from the Pallava shore temples and Chola vimanas to the painted gopurams of Madurai and Srirangam, with the Pancha Bhoota and Arupadai Veedu circuits.",
  path: "/temples/tamil-nadu/",
  image: "/temples/meenakshi-amman-madurai.jpg",
  imageAlt: "The painted south gopuram of the Meenakshi Amman Temple, Madurai",
});

// North to south, Chennai to Kanyakumari.
const tn = temples.filter((t) => t.state === "Tamil Nadu").sort((a, b) => b.geo[0] - a.geo[0]);
const unesco = tn.filter((t) => t.tags.includes("UNESCO")).length;

export default function TamilNaduPage() {
  return (
    <>
      <Reveal />
      <JsonLd
        data={[
          itemListLd("Temples of Tamil Nadu", "/temples/tamil-nadu/", tn.map((t) => ({ name: t.name, path: templePath(t) }))),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Temples of India", path: "/temples/" },
            { name: "Tamil Nadu", path: "/temples/tamil-nadu/" },
          ]),
        ]}
      />

      <LampLight className="tn-hero">
        <span className="native native--taml tn-hero__native" lang="ta" aria-hidden="true">தமிழ்நாடு</span>
        <div className="container tn-hero__inner">
          <nav className="crumbs crumbs--light" aria-label="Breadcrumb">
            <Link href="/temples/">Temples of India</Link> <span aria-hidden="true">/</span> Tamil Nadu
          </nav>
          <Kicker light>Atlas · Tamil Nadu</Kicker>
          <h1>
            The temples of Tamil Nadu,
            <em> where the towers touch the sky.</em>
          </h1>
          <p className="tn-hero__lede">
            Fifteen centuries of temple building in one state: Pallava shrines by the sea, Chola towers of
            granite, and the painted gopurams that rise over every Tamil town. Here are {tn.length} of the
            greatest, with their stories and their history.
          </p>
          <dl className="tn-stats">
            <div><dt>{tn.length}</dt><dd>temple guides</dd></div>
            <div><dt>{unesco}</dt><dd>World Heritage temples</dd></div>
            <div><dt>1,300+</dt><dd>years since the Tevaram hymns</dd></div>
          </dl>
        </div>
      </LampLight>

      {/* History */}
      <section className="container section" id="history">
        <div className="section-title" data-reveal>
          <Kicker>History</Kicker>
          <h2>Fifteen centuries in stone</h2>
          <p className="section-title__note">
            Each dynasty left its mark on the Tamil temple. Read them in order and you can see the
            tower move from the sanctum to the gateway.
          </p>
        </div>
        <ol className="tn-eras">
          {tamilNaduEras.map((era) => (
            <li key={era.name} className="tn-era" data-reveal>
              <span className="tn-era__tamil native native--taml" lang="ta" aria-hidden="true">{era.tamil}</span>
              <p className="tn-era__span">{era.span}</p>
              <h3>{era.name}</h3>
              <p>{era.text}</p>
              <p className="tn-era__links">
                {era.slugs.map((s) => {
                  const t = getTemple(s);
                  return t ? <Link key={s} href={`/temples/${s}/`}>{t.name.replace(/ Temple$/, "")}</Link> : null;
                })}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Map */}
      <section className="night night--deep section" id="map">
        <div className="container">
          <div className="section-title section-title--light" data-reveal>
            <Kicker light>The map</Kicker>
            <h2>From Chennai to Kanyakumari</h2>
            <p className="section-title__note">
              Many of the great temples sit along the Kaveri, in the old Chola country around Thanjavur.
              Point at a lamp to see the temple.
            </p>
          </div>
          <TamilNaduMap temples={tn} start="ranganathaswamy-srirangam" />
        </div>
      </section>

      {/* Circuits */}
      <LampLight className="section tn-circuits">
        <div className="container">
          <div className="section-title section-title--light" data-reveal>
            <Kicker light>Sacred circuits</Kicker>
            <h2>The five elements and the six abodes</h2>
            <p className="section-title__note">
              Two pilgrimages that take devotees across the Tamil country, and beyond it.
            </p>
          </div>

          <div className="tn-circuits__grid">
            <div data-reveal>
              <h3 className="tn-circuits__title">Pancha Bhoota Sthalams</h3>
              <p className="tn-circuits__note">Five Shiva temples, one for each element. Four are in Tamil Nadu.</p>
              <ul className="tn-elements">
                {panchaBhoota.map((e) => {
                  const body = (
                    <>
                      <span className="tn-elements__tamil native native--taml" lang="ta" aria-hidden="true">{e.tamil}</span>
                      <span className="tn-elements__el">{e.element}</span>
                      <span className="tn-elements__name">{e.name}</span>
                      <span className="tn-elements__place">{e.place}</span>
                    </>
                  );
                  return (
                    <li key={e.element}>
                      {e.slug ? <Link href={`/temples/${e.slug}/`}>{body}</Link> : <div className="is-off">{body}</div>}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div data-reveal>
              <h3 className="tn-circuits__title">Arupadai Veedu</h3>
              <p className="tn-circuits__note">The six abodes of Lord Murugan, in their traditional order.</p>
              <ol className="tn-abodes">
                {arupadaiVeedu.map((a) => (
                  <li key={a.name}>
                    <span className="tn-abodes__tamil native native--taml" lang="ta">{a.tamil}</span>
                    {a.slug ? <Link href={`/temples/${a.slug}/`}>{a.name}</Link> : <span>{a.name}</span>}
                    <span className="tn-abodes__place">{a.place}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </LampLight>

      {/* All temples */}
      <section className="band">
        <div className="container">
          <div className="section-title" data-reveal>
            <Kicker>Temple guides</Kicker>
            <h2>All {tn.length} temples, north to south</h2>
          </div>
          <div className="temple-grid" data-reveal>
            {tn.map((t) => <TempleCard key={t.slug} temple={t} />)}
          </div>
          <p className="fineprint">
            Dates for the oldest shrines come from hymns, inscriptions and temple tradition, so many are
            given as centuries. Darshan timings and dress codes change, so check with the temple before you
            travel.
          </p>
        </div>
      </section>
    </>
  );
}
