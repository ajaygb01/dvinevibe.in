type Props = { size?: number; className?: string; animated?: boolean };

/** The brand mark: a brass deepam (oil lamp) with a living flame. */
export function Deepam({ size = 40, className, animated = true }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dv-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#ffd56b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd56b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dv-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6c9" />
          <stop offset="45%" stopColor="#ffb52e" />
          <stop offset="100%" stopColor="#e2541b" />
        </linearGradient>
        <linearGradient id="dv-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7d774" />
          <stop offset="55%" stopColor="#d4a017" />
          <stop offset="100%" stopColor="#8a5a0b" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="22" r="18" fill="url(#dv-glow)" className={animated ? "dv-glow" : undefined} />
      <path
        className={animated ? "dv-flame" : undefined}
        d="M32 6c4 6 7 10 7 15a7 7 0 0 1-14 0c0-5 3-9 7-15z"
        fill="url(#dv-flame)"
      />
      <path d="M32 16c1.8 3 3 5 3 7a3 3 0 0 1-6 0c0-2 1.2-4 3-7z" fill="#fff8dc" opacity="0.85" />
      <path
        d="M8 34h48c0 9-10.7 15-24 15S8 43 8 34z"
        fill="url(#dv-brass)"
      />
      <path d="M8 34c6-2 14-3 24-3s18 1 24 3" stroke="#8a5a0b" strokeWidth="1.5" fill="none" />
      <path d="M26 49h12l3 6H23z" fill="url(#dv-brass)" />
      <rect x="18" y="55" width="28" height="4" rx="2" fill="url(#dv-brass)" />
    </svg>
  );
}
