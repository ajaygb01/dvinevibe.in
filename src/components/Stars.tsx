export function Stars({ rating, reviews }: { rating: number; reviews?: number }) {
  return (
    <span className="stars" aria-label={`Rated ${rating} out of 5`}>
      <span className="stars__icons" style={{ ["--pct" as string]: `${(rating / 5) * 100}%` }}>★★★★★</span>
      <span className="stars__num">{rating.toFixed(1)}</span>
      {reviews !== undefined && <span className="stars__count">({reviews})</span>}
    </span>
  );
}
