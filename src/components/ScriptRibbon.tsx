import { temples } from "@/data/temples";

/** A slow ribbon of temple names, each in its own script. */
export function ScriptRibbon() {
  const items = [...temples, ...temples];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        {items.map((t, i) => (
          <span key={i} className={`ribbon__item native--${t.native.script}`} lang={t.native.lang}>
            {t.native.text}
            <span className="ribbon__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
