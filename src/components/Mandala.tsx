/** Decorative mandala ring used behind hero art and product tiles. */
export function Mandala({ className, petals = 16 }: { className?: string; petals?: number }) {
  const items = Array.from({ length: petals });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="84" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="40" />
        {items.map((_, i) => (
          <g key={i} transform={`rotate(${(360 / petals) * i} 100 100)`}>
            <path d="M100 18c10 14 10 28 0 42c-10-14-10-28 0-42z" />
            <circle cx="100" cy="72" r="2" fill="currentColor" />
          </g>
        ))}
      </g>
    </svg>
  );
}
