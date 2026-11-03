import Link from "next/link";
import { Deepam } from "./Deepam";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="toran" aria-hidden="true" />
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand--light">
            <Deepam size={40} />
            <span className="brand__text">
              <span className="brand__name">Dvinevibe</span>
              <span className="brand__tag">dvinevibe.in</span>
            </span>
          </Link>
          <p className="footer-note">
            Devotional idols, temple miniatures and pooja essentials, 3D printed in India
            and finished by hand. <em>Sarve bhavantu sukhinah.</em>
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/shop/?c=${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/temples/">Temples of India</Link></li>
            <li><Link href="/about/">Our Craft</Link></li>
            <li><Link href="/cart/">Your Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4>Care</h4>
          <ul>
            <li>Printed to order in 3–5 days</li>
            <li>Shipped in 5–7 days across India</li>
            <li>7-day replacement on damage</li>
            <li>hello@dvinevibe.in</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dvinevibe. All rights reserved.</span>
        <span>Made with bhakti 🪔</span>
      </div>
    </footer>
  );
}
