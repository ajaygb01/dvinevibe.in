"use client";

import { useRef } from "react";

/**
 * A dark section lit by an oil lamp: a warm glow follows the pointer,
 * as if you were carrying a deepam through a sanctum.
 */
export function LampLight({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--lx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--ly", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <section ref={ref} id={id} className={`night lamp ${className}`} onPointerMove={move}>
      {children}
    </section>
  );
}
