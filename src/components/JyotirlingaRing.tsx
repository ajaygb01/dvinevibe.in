import Link from "next/link";
import { jyotirlingas } from "@/data/temples";

/** The twelve Jyotirlingas as a ring of lamps. Lamps are lit where a guide exists. */
export function JyotirlingaRing() {
  const lit = jyotirlingas.filter((j) => j.slug).length;
  return (
    <div className="ring">
      <div className="ring__circle" aria-hidden="true" />
      <div className="ring__centre">
        <span className="ring__count">{lit}<span>/12</span></span>
        <span className="ring__caption">lamps lit so far</span>
      </div>
      <ol className="ring__list">
        {jyotirlingas.map((j, i) => {
          const angle = (i / jyotirlingas.length) * 2 * Math.PI - Math.PI / 2;
          const style = {
            "--x": `${50 + 50 * Math.cos(angle)}%`,
            "--y": `${50 + 50 * Math.sin(angle)}%`,
          } as React.CSSProperties;
          const side = Math.cos(angle) > 0.2 ? "right" : Math.cos(angle) < -0.2 ? "left" : Math.sin(angle) < 0 ? "top" : "bottom";
          const body = (
            <>
              <span className="ring__lamp" aria-hidden="true" />
              <span className="ring__label">
                <span className="ring__n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{j.name}</strong>
                <span className="ring__place">{j.place}</span>
              </span>
            </>
          );
          return (
            <li key={j.name} className={`ring__item ring__item--${side} ${j.slug ? "is-lit" : ""}`} style={style}>
              {j.slug ? (
                <Link href={`/temples/${j.slug}/`}>{body}</Link>
              ) : (
                <span title="Guide coming">{body}</span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
