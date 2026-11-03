import type { Silhouette } from "@/data/temples";

/**
 * Line drawing of a temple's architectural form, used until real
 * photography is added. Each style follows the shape of its tradition:
 * Dravidian gopuram and vimana, Nagara and Kalinga spires, Himalayan
 * stone shrines, Kerala roofs, cave shrines and the Assamese beehive dome.
 */
export function TempleArt({ kind, className, label }: { kind: Silhouette; className?: string; label?: string }) {
  return (
    <svg viewBox="0 0 240 160" className={className} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        {/* ground and steps */}
        <path d="M14 146h212M30 146v-5h180v5M44 141v-4h152v4" />
        {shapes[kind]}
      </g>
    </svg>
  );
}

const tiers = (count: number, baseW: number, topW: number, baseY: number, h: number) =>
  Array.from({ length: count }).map((_, i) => {
    const t0 = i / count;
    const t1 = (i + 1) / count;
    const w0 = baseW - (baseW - topW) * t0;
    const w1 = baseW - (baseW - topW) * t1;
    const y0 = baseY - h * t0;
    const y1 = baseY - h * t1;
    const x0 = 120 - w0 / 2;
    const x1 = 120 - w1 / 2;
    const niches = Math.max(2, Math.round(w1 / 16));
    return (
      <g key={i}>
        <path d={`M${x0} ${y0}L${x1 + 2} ${y1 + 2}H${240 - x1 - 2}L${240 - x0} ${y0}`} />
        <path d={`M${x1 - 1} ${y1 + 2}h${w1 + 2}`} />
        {Array.from({ length: niches }).map((__, j) => {
          const cx = x1 + 6 + ((w1 - 12) / (niches - 1)) * j;
          return <path key={j} d={`M${cx - 2} ${y0 - 2}v-${(y0 - y1) * 0.5}a2 2 0 0 1 4 0v${(y0 - y1) * 0.5}`} strokeWidth="1" />;
        })}
      </g>
    );
  });

const shapes: Record<Silhouette, React.ReactNode> = {
  gopuram: (
    <>
      <path d="M78 137V112h84v25" />
      <path d="M110 137v-14a10 10 0 0 1 20 0v14" />
      {tiers(6, 92, 44, 112, 66)}
      <path d="M96 46c0-12 48-12 48 0" />
      <path d="M96 46h48" />
      {[104, 112, 120, 128, 136].map((x) => (
        <path key={x} d={`M${x} 37v-6`} />
      ))}
      <circle cx="104" cy="29" r="1.6" fill="currentColor" />
      <circle cx="120" cy="29" r="1.6" fill="currentColor" />
      <circle cx="136" cy="29" r="1.6" fill="currentColor" />
    </>
  ),
  vimana: (
    <>
      <path d="M70 137V104h100v33M80 104V96h80v8" />
      <path d="M112 137v-16h16v16" />
      {tiers(7, 76, 30, 96, 52)}
      <path d="M104 44c0-16 32-16 32 0z" />
      <path d="M120 28v-8" />
      <circle cx="120" cy="18" r="2" fill="currentColor" />
      <path d="M182 137v-12h22v12M186 125c0-6 14-6 14 0" strokeWidth="1.2" />
    </>
  ),
  nagara: (
    <>
      <path d="M62 137v-24h40v24M70 113c4-10 24-10 28 0" />
      <path d="M100 137V98h40v39" />
      <path d="M112 137v-18a8 8 0 0 1 16 0v18" />
      <path d="M100 98C98 70 108 44 120 32C132 44 142 70 140 98" />
      <path d="M108 98c0-22 6-42 12-54M132 98c0-22-6-42-12-54" strokeWidth="1" />
      {[90, 80, 70, 60, 50].map((y) => (
        <path key={y} d={`M${104 + (98 - y) * 0.12} ${y}h${32 - (98 - y) * 0.24}`} strokeWidth="1" />
      ))}
      <ellipse cx="120" cy="29" rx="9" ry="3.5" />
      <path d="M120 25v-8M120 17l10 4-10 3" />
      <path d="M138 137v-20c6-14 20-14 26 0v20" />
    </>
  ),
  kalinga: (
    <>
      <path d="M48 137v-26h52v26M52 111l22-18 22 18" />
      <path d="M58 99h32M62 93h24" strokeWidth="1" />
      <path d="M118 137V102h56v35" />
      <path d="M118 102c-4-30 4-56 28-70c24 14 32 40 28 70" />
      {[94, 84, 74, 64, 54].map((y, i) => (
        <path key={y} d={`M${121 + i * 1.5} ${y}h${50 - i * 3}`} strokeWidth="1" />
      ))}
      <ellipse cx="146" cy="30" rx="11" ry="4" />
      <path d="M146 26v-7" />
      <circle cx="146" cy="16" r="3" />
      <path d="M137 137v-16a9 9 0 0 1 18 0v16" />
      <circle cx="74" cy="124" r="7" strokeWidth="1.2" />
      <path d="M74 117v14M67 124h14" strokeWidth="0.8" />
    </>
  ),
  himalayan: (
    <>
      <path d="M14 104l38-48 22 26 24-40 30 44" strokeWidth="1.1" />
      <path d="M150 86l26-40 50 58" strokeWidth="1.1" />
      <path d="M38 74l14-18 8 10M88 58l10-16 10 14" strokeWidth="0.9" />
      <path d="M86 137V96h68v41" />
      <path d="M96 84l24-34 24 34" fill="var(--panel, #131a5e)" />
      <path d="M86 96l6-12h56l6 12" fill="var(--panel, #131a5e)" />
      <path d="M86 137V96h68v41" fill="var(--panel, #131a5e)" />
      <path d="M104 84l16-22 16 22" strokeWidth="1" />
      <path d="M120 50v-8" />
      <circle cx="120" cy="40" r="2" fill="currentColor" />
      <path d="M110 137v-18a10 10 0 0 1 20 0v18" />
      {[104, 112].map((y) => (
        <path key={y} d={`M90 ${y}h12M138 ${y}h12`} strokeWidth="1" />
      ))}
    </>
  ),
  kerala: (
    <>
      <path d="M40 137v-30h160v30" />
      <path d="M28 107l30-24h124l30 24z" />
      <path d="M70 83l18-18h64l18 18" />
      <path d="M96 65l24-20 24 20" />
      <path d="M120 45v-8" />
      <circle cx="120" cy="35" r="2" fill="currentColor" />
      {[60, 80, 160, 180].map((x) => (
        <path key={x} d={`M${x} 137v-26`} strokeWidth="1" />
      ))}
      <path d="M104 137v-22h32v22" />
      <path d="M98 111h44" strokeWidth="1" />
    </>
  ),
  cave: (
    <>
      <path d="M14 137c20-40 40-80 76-92c22-8 40-4 56 4c30 14 54 50 80 88" />
      <path d="M62 112c18-12 40-20 60-20" strokeWidth="0.9" />
      <path d="M150 64c10 6 20 14 28 24" strokeWidth="0.9" />
      <path d="M100 137v-20c0-16 40-16 40 0v20" />
      <path d="M108 137v-10M120 137v-14M132 137v-10" strokeWidth="1.2" />
      <path d="M120 70v-14M114 60l6-4 6 4" />
      <path d="M116 52h8v4h-8z" fill="currentColor" />
    </>
  ),
  dome: (
    <>
      <path d="M58 137v-30h124v30" />
      <path d="M50 107h140" />
      <path d="M86 107V92h68v15" />
      <path d="M90 92c-6-28 10-50 30-60c20 10 36 32 30 60" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${98 + i * 0} ${86 - i * 12}c8 ${-4} 36 ${-4} ${44 - i * 4} 0`} strokeWidth="0.9" transform={`translate(${i * 2} 0)`} />
      ))}
      <path d="M120 32v-10" />
      <circle cx="120" cy="20" r="2.5" />
      <path d="M110 137v-18a10 10 0 0 1 20 0v18" />
      <path d="M66 107c0-12 16-12 16 0M158 107c0-12 16-12 16 0" />
    </>
  ),
};
