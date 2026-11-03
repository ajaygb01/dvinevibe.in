import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { TempleArt } from "@/components/TempleArt";
import { TempleCard } from "@/components/TempleCard";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { charDham, festivalCalendar, getTemple, jyotirlingas, readMinutes, regions, temples } from "@/data/temples";

export default function HomePage() {
  const lead = getTemple("meenakshi-amman-madurai")!;
  const alsoRead = ["kedarnath", "jagannath-puri", "konark-sun-temple", "mahakaleshwar-ujjain"].map((s) => getTemple(s)!);
  const recent = ["kashi-vishwanath-varanasi", "brihadeeswarar-thanjavur", "kamakhya-guwahati", "somnath", "padmanabhaswamy-thiruvananthapuram", "khajuraho-kandariya-mahadeva"].map((s) => getTemple(s)!);
  const workshop = ["meenakshi-gopuram-miniature", "nataraja-cosmic-dance", "akhanda-deepam-stand", "kedarnath-temple-model"].map((s) => products.find((p) => p.slug === s)!);

  return (
    <>
      {/* Lead story */}
      <section className="container lead">
        <Link href={`/temples/${lead.slug}/`} className="lead__story">
          <div className="lead__art">
            <TempleArt kind={lead.silhouette} label={`Line drawing of ${lead.name}`} />
          </div>
          <div className="lead__text">
            <Kicker>Featured story · {lead.region} India</Kicker>
            <h1>{lead.name}</h1>
            <p className="standfirst">
              {lead.summary} Why the goddess&apos;s wedding still fills Madurai&apos;s streets every spring.
            </p>
            <p className="byline">
              {lead.city}, {lead.state} · {lead.style} · {readMinutes(lead)} min read
            </p>
            <span className="text-link">Read the story</span>
          </div>
        </Link>

        <aside className="lead__side">
          <h2 className="side-title">Also on the yatra</h2>
          <ol className="side-list">
            {alsoRead.map((t) => (
              <li key={t.slug}>
                <Link href={`/temples/${t.slug}/`}>
                  <span className="side-list__meta">{t.state}</span>
                  <strong>{t.name}</strong>
                  <span className="side-list__sum">{t.summary}</span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      {/* Browse by region */}
      <section className="band">
        <div className="container">
          <div className="section-title">
            <Kicker>Atlas</Kicker>
            <h2>Temples across India</h2>
            <p className="section-title__note">
              {temples.length} temple guides so far, each with its story, festivals and how to get there.
            </p>
          </div>
          <div className="atlas">
            {regions.map((r) => {
              const list = temples.filter((t) => t.region === r);
              return (
                <div key={r} className="atlas__col">
                  <h3>
                    {r} <span>{list.length}</span>
                  </h3>
                  <ul>
                    {list.map((t) => (
                      <li key={t.slug}>
                        <Link href={`/temples/${t.slug}/`}>{t.name.replace(/ Temple$/, "")}</Link>
                        <span>{t.city.split(",")[0]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <Link href="/temples/" className="text-link">Browse all temples</Link>
        </div>
      </section>

      {/* Recent guides */}
      <section className="container section">
        <div className="section-title">
          <Kicker>Temple guides</Kicker>
          <h2>Read before you go</h2>
        </div>
        <div className="temple-grid">
          {recent.map((t) => (
            <TempleCard key={t.slug} temple={t} />
          ))}
        </div>
      </section>

      {/* Sacred circuits */}
      <section className="ink-band" id="circuits">
        <div className="container circuits">
          <div>
            <Kicker light>Sacred circuit</Kicker>
            <h2>The twelve Jyotirlingas</h2>
            <p className="ink-band__note">
              Shrines where Shiva is worshipped as a column of light. We have written up{" "}
              {jyotirlingas.filter((j) => j.slug).length} of the twelve so far.
            </p>
            <ol className="numbered">
              {jyotirlingas.map((j, i) => (
                <li key={j.name}>
                  <span className="numbered__n">{String(i + 1).padStart(2, "0")}</span>
                  {j.slug ? <Link href={`/temples/${j.slug}/`}>{j.name}</Link> : <span>{j.name}</span>}
                  <span className="numbered__place">{j.place}</span>
                  {!j.slug && <span className="numbered__soon">Guide coming</span>}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <Kicker light>Sacred circuit</Kicker>
            <h2>The Char Dham</h2>
            <p className="ink-band__note">Four abodes at the four corners of India.</p>
            <div className="compass">
              {charDham.map((d) => (
                <div key={d.name} className={`compass__point compass__point--${d.direction.toLowerCase()}`}>
                  <span className="compass__dir">{d.direction}</span>
                  {d.slug ? <Link href={`/temples/${d.slug}/`}>{d.name}</Link> : <span>{d.name}</span>}
                  <span className="compass__place">{d.place}</span>
                </div>
              ))}
              <div className="compass__centre" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Festival calendar */}
      <section className="container section" id="festivals">
        <div className="section-title">
          <Kicker>Through the year</Kicker>
          <h2>Festival calendar</h2>
          <p className="section-title__note">Lunar dates move each year, so check the exact day before you plan.</p>
        </div>
        <ul className="calendar">
          {festivalCalendar.map((f) => {
            const t = getTemple(f.slug)!;
            return (
              <li key={f.name}>
                <span className="calendar__month">{f.months}</span>
                <div>
                  <strong>{f.name}</strong>
                  <span className="calendar__note">{f.note}</span>
                </div>
                <Link href={`/temples/${t.slug}/`} className="calendar__place">
                  {t.name}, {t.city.split(",")[0]}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Shop, on the side */}
      <section className="band band--shop">
        <div className="container">
          <div className="section-title section-title--row">
            <div>
              <Kicker>From our workshop</Kicker>
              <h2>Bring a temple home</h2>
              <p className="section-title__note">
                Idols and miniatures drawn from these same temples, 3D printed to order and finished by hand.
              </p>
            </div>
            <Link href="/shop/" className="text-link">Visit the shop</Link>
          </div>
          <div className="product-grid">
            {workshop.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
