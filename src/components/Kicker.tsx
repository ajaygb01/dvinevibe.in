/** Small uppercase label above a heading, set between two short gold rules. */
export function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`kicker ${light ? "kicker--light" : ""}`}>{children}</p>;
}
