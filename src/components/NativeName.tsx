import type { Temple } from "@/data/temples";

/** A temple's name in its own script, set large and quiet behind the English title. */
export function NativeName({ temple, className = "" }: { temple: Temple; className?: string }) {
  return (
    <span className={`native native--${temple.native.script} ${className}`} lang={temple.native.lang} aria-hidden="true">
      {temple.native.text}
    </span>
  );
}
