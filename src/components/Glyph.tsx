import type { ArtGlyph } from "@/data/products";

/** Simple line-art symbols used in placeholder product images. */
export function Glyph({ name, className }: { name: ArtGlyph; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "om":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <text x="50" y="72" textAnchor="middle" fontSize="70" fill="currentColor" fontFamily="'Noto Sans Devanagari', 'Mukta', serif">ॐ</text>
        </svg>
      );
    case "deepam":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path {...common} d="M50 12c7 10 11 16 11 23a11 11 0 0 1-22 0c0-7 4-13 11-23z" fill="currentColor" fillOpacity="0.25" />
          <path {...common} d="M14 56h72c0 14-16 22-36 22S14 70 14 56z" />
          <path {...common} d="M40 78h20l4 10H36z" />
        </svg>
      );
    case "lotus":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path {...common} d="M50 22c10 12 12 28 0 46c-12-18-10-34 0-46z" />
          <path {...common} d="M50 68c-6-16-18-26-32-28c2 16 14 28 32 28z" />
          <path {...common} d="M50 68c6-16 18-26 32-28c-2 16-14 28-32 28z" />
          <path {...common} d="M50 68c-14-6-28-6-38 0c10 8 24 8 38 0z" />
          <path {...common} d="M50 68c14-6 28-6 38 0c-10 8-24 8-38 0z" />
          <path {...common} d="M30 82h40" />
        </svg>
      );
    case "trishul":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path {...common} d="M50 10v80" />
          <path {...common} d="M50 10l-5 10h10z" fill="currentColor" />
          <path {...common} d="M26 18c0 18 8 26 24 26s24-8 24-26" />
          <path {...common} d="M26 18l-4 8M74 18l4 8" />
          <path {...common} d="M42 56c0 6 16 6 16 0c0-6-16-6-16 0z" />
          <path {...common} d="M40 54l20 4M40 58l20-4" />
        </svg>
      );
    case "gopuram":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path {...common} d="M22 88h56M26 88V74h48v14M30 74V62h40v12M34 62V50h32v12M38 50V40h24v10M42 40V30h16v10" />
          <path {...common} d="M44 30c0-6 12-6 12 0M50 24v-8" />
          <circle cx="50" cy="14" r="2.5" fill="currentColor" />
          <path {...common} d="M45 88V80a5 5 0 0 1 10 0v8" />
        </svg>
      );
    case "flute":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <path {...common} d="M14 74L86 30" />
          <path {...common} d="M18 78l-6-8M82 26l6 8" />
          {[34, 44, 54, 64].map((x, i) => (
            <circle key={i} cx={x} cy={74 - (x - 14) * 0.61} r="2" fill="currentColor" />
          ))}
          <path {...common} d="M66 16c8 2 14 8 14 16c-8 0-14-6-14-16z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="72" cy="24" r="3" fill="currentColor" />
        </svg>
      );
    case "mace":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <circle {...common} cx="50" cy="32" r="18" />
          <path {...common} d="M36 32h28M50 14v36M38 20l24 24M62 20L38 44" strokeOpacity="0.5" />
          <path {...common} d="M50 50v38M44 88h12" />
          <path {...common} d="M50 10v4" />
        </svg>
      );
    case "veena":
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <circle {...common} cx="28" cy="70" r="16" />
          <circle {...common} cx="80" cy="24" r="8" />
          <path {...common} d="M40 60L74 30" />
          <path {...common} d="M36 64L76 28M38 66L78 30" strokeWidth="1.2" />
          {[46, 54, 62].map((x) => (
            <path key={x} {...common} d={`M${x - 3} ${103 - x * 0.88 - 4}l6 6`} strokeWidth="2" />
          ))}
        </svg>
      );
    case "chakra":
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
          <circle {...common} cx="50" cy="50" r="36" />
          <circle {...common} cx="50" cy="50" r="28" />
          <circle {...common} cx="50" cy="50" r="7" />
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} {...common} d="M50 43V22" transform={`rotate(${i * 45} 50 50)`} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={`d${i}`} cx="50" cy="18" r="2" fill="currentColor" transform={`rotate(${i * 45 + 22.5} 50 50)`} />
          ))}
        </svg>
      );
  }
}
