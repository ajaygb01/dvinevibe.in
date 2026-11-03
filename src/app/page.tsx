import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { TempleArt } from "@/components/TempleArt";
import { TempleCard } from "@/components/TempleCard";
import { ProductCard } from "@/components/ProductCard";
import { LampLight } from "@/components/LampLight";
import { NativeName } from "@/components/NativeName";
import { ScriptRibbon } from "@/components/ScriptRibbon";
import { YatraMap } from "@/components/YatraMap";
import { JyotirlingaRing } from "@/components/JyotirlingaRing";
import { FestivalYear } from "@/components/FestivalYear";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";
import { charDham, getTemple, readMinutes, temples } from "@/data/temples";

export default function HomePage() {
  const lead = getTemple("meenakshi-amman-madurai")!;
  const guides = ["kashi-vishwanath-varanasi", "jagannath-puri", "brihadeeswarar-thanjavur", "kamakhya-guwahati", "somnath", "padmanabhaswamy-thiruvananthapuram"].map((s) => getTemple(s)!);
  const workshop = ["meenakshi-gopuram-miniature", "nataraja-cosmic-dance", "akhanda-deepam-stand", "kedarnath-temple-model"].map((s) => products.find((p) => p.slug === s)!);

  return (
    <>
      <Reveal />

      {/* Hero: the sanctum */}
      <LampLight className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Kicker light>Teertha · A guide to the temples of India</Kicker>
            <h1 className="hero__title">
              Temples of India,
              <em> lit one lamp at a time.</em>
            </h1>
            <p className="hero__lede">
              The stories, architecture, festivals and the road there, for {temples.length} of India&apos;s great
              temples. And from our workshop, pieces to bring their blessing home.
            </p>
            <div className="hero__ctas">
              <Link href="#yatra" className="btn btn--gold btn--lg">Begin the yatra</Link>
              <Link href={`/temples/${lead.slug}/`} className="text-link text-link--light">Read about Meenakshi Amman</Link>
            </div>
          </div>
          <div className="hero__art">
            <NativeName temple={lead} className="hero__native" />
            <div className="hero__halo" aria-hidden="true" />
            <TempleArt kind="gopuram" className="draw hero__drawing" label="A gopuram drawn in gold line" />
          </div>
        </div>
        <ScriptRibbon />
      </LampLight>

      {/* Yatra map */}
      <section className="night night--deep section" id="yatra">
        <div className="container">
          <div className="section-title section-title--light" data-reveal>
            <Kicker light>The yatra map</Kicker>
            <h2>Every temple, where it stands</h2>
            <p className="section-title__note">
              Each lamp is a temple guide. Point at one to see it, then read its story. The dim lamps are
              Jyotirlingas and Dhams we are still writing about.
            </p>
          </div>
          <YatraMap />
        </div>
      </section>

      {/* Featured story */}
      <section className="feature">
        <div className="container feature__grid" data-reveal>
          <Link href={`/temples/${lead.slug}/`} className="feature__art">
            <NativeName temple={lead} className="feature__native" />
            <TempleArt kind={lead.silhouette} label={`Line drawing of ${lead.name}`} />
          </Link>
          <div className="feature__text">
            <Kicker>Featured story · {lead.state}</Kicker>
            <h2 className="feature__title">
              <Link href={`/temples/${lead.slug}/`}>{lead.name}</Link>
            </h2>
            <p className="standfirst">
              {lead.summary} Why the goddess&apos;s wedding still fills Madurai&apos;s streets every spring.
            </p>
            <blockquote className="feature__quote">
              &ldquo;The Hall of a Thousand Pillars, each pillar carved with a different figure.&rdquo;
            </blockquote>
            <p className="byline">{lead.city} · {lead.style} · {readMinutes(lead)} min read</p>
            <Link href={`/temples/${lead.slug}/`} className="text-link">Read the story</Link>
          </div>
        </div>
      </section>

      {/* Sacred circuits */}
      <LampLight className="section circuits-band" id="circuits">
        <div className="container circuits__grid">
          <div className="circuits__intro" data-reveal>
            <Kicker light>Sacred circuit</Kicker>
            <h2>The twelve Jyotirlingas</h2>
            <p className="section-title__note">
              Shrines where Shiva is worshipped as a column of light. A lamp is lit here for every one we have
              written up; the rest are on their way.
            </p>
            <div className="dham">
              <p className="kicker kicker--light">And the Char Dham</p>
              <ul>
                {charDham.map((d) => (
                  <li key={d.name}>
                    <span className="dham__dir">{d.direction}</span>
                    {d.slug ? <Link href={`/temples/${d.slug}/`}>{d.name}</Link> : <span>{d.name}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-reveal>
            <JyotirlingaRing />
          </div>
        </div>
      </LampLight>

      {/* Festival year */}
      <section className="container section" id="festivals">
        <div className="section-title" data-reveal>
          <Kicker>Through the year</Kicker>
          <h2>A year of festivals</h2>
          <p className="section-title__note">When to be where: the great temple festivals, month by month.</p>
        </div>
        <div data-reveal>
          <FestivalYear />
        </div>
      </section>

      {/* Guides */}
      <section className="band">
        <div className="container">
          <div className="section-title section-title--row" data-reveal>
            <div>
              <Kicker>Temple guides</Kicker>
              <h2>Read before you go</h2>
            </div>
            <Link href="/temples/" className="text-link">All {temples.length} temples</Link>
          </div>
          <div className="temple-grid" data-reveal>
            {guides.map((t) => (
              <TempleCard key={t.slug} temple={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <LampLight className="section workshop" id="shop">
        <div className="container">
          <div className="section-title section-title--row section-title--light" data-reveal>
            <div>
              <Kicker light>From our workshop</Kicker>
              <h2>Bring a temple home</h2>
              <p className="section-title__note">
                Idols and miniatures drawn from these same temples, 3D printed to order and finished by hand.
              </p>
            </div>
            <Link href="/shop/" className="text-link text-link--light">Visit the shop</Link>
          </div>
          <div className="product-grid product-grid--night" data-reveal>
            {workshop.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </LampLight>
    </>
  );
}
