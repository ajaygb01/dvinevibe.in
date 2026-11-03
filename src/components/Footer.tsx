import Link from "next/link";
import { Deepam } from "./Deepam";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="site-footer">
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
            A guide to the temples of India, and a small workshop making devotional idols and
            temple miniatures, 3D printed to order and finished by hand.
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
          <h4>Read</h4>
          <ul>
            <li><Link href="/temples/">Temples of India</Link></li>
            <li><Link href="/#circuits">Jyotirlingas & Char Dham</Link></li>
            <li><Link href="/#festivals">Festival calendar</Link></li>
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
        <span>Sarve bhavantu sukhinah</span>
      </div>
    </footer>
  );
}
