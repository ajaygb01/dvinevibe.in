import { ImageResponse } from "next/og";
import { temples } from "@/data/temples";

// The link-preview card shown when a page without its own photo is shared.
// Served as /og.png (a route, not opengraph-image.tsx) so the exported file keeps
// its .png extension and static hosts send it with the right content type.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 78% 30%, #3a2a10 0%, #141842 38%, #0a0d2b 75%)",
          color: "#f6ecd6",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="76" height="76" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#141842" />
            <g transform="translate(5.5 5.5) scale(.83)">
              <path fillRule="evenodd" fill="#e0ad2c" d="M12 7h18a25 25 0 0 1 0 50H12z M25 54V31a7 7 0 0 1 14 0v23z" />
              <path fill="#ffb347" d="M32 33c3 4.3 4.8 7.2 4.8 10.4a4.8 4.8 0 0 1-9.6 0c0-3.2 1.8-6.1 4.8-10.4z" />
            </g>
          </svg>
          <div style={{ fontSize: 44, letterSpacing: 2, color: "#e0ad2c" }}>Dvinevibe</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 92, lineHeight: 1.02, maxWidth: 900 }}>The temples of India</div>
          <div style={{ fontSize: 34, lineHeight: 1.35, color: "#d9ccb0", maxWidth: 900 }}>
            {`Stories, architecture, festivals and how to get there, for ${temples.length} great temples.`}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#e0ad2c", letterSpacing: 4 }}>DVINEVIBE.IN</div>
      </div>
    ),
    size,
  );
}
