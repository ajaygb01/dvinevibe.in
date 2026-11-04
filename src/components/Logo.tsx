type MarkProps = { size?: number; className?: string };

/**
 * The brand mark: a "D" whose counter is a temple doorway, with a lamp lit inside.
 * Gold and flame colours come from --logo-gold / --logo-flame so it can sit on night or day.
 */
export function LogoMark({ size = 40, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        fill="var(--logo-gold, #e0ad2c)"
        d="M12 7h18a25 25 0 0 1 0 50H12z M25 54V31a7 7 0 0 1 14 0v23z"
      />
      <path
        className="logo-flame"
        fill="var(--logo-flame, #ffb347)"
        d="M32 33c3 4.3 4.8 7.2 4.8 10.4a4.8 4.8 0 0 1-9.6 0c0-3.2 1.8-6.1 4.8-10.4z"
      />
    </svg>
  );
}

/** "Dvinevibe" set in Fraunces, the dots on both i's drawn as small flames. */
export function Wordmark({ className }: { className?: string }) {
  const i = (
    <span className="wordmark__i">
      ı<span className="wordmark__dot" />
    </span>
  );
  return (
    <span className={`wordmark ${className ?? ""}`}>
      <span className="sr-only">Dvinevibe</span>
      <span aria-hidden="true">
        Dv{i}nev{i}be
      </span>
    </span>
  );
}
