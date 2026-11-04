/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` writes plain HTML to ./out,
  // which can be hosted on any static host (Netlify, Vercel, GitHub Pages, S3...).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
