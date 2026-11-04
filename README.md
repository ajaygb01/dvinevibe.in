# Dvinevibe.in

Storefront for **Dvinevibe**: devotional 3D printed idols, temple miniatures, LED deepam stands and pooja essentials, plus a guide to the temples of India.

Built with Next.js (App Router) + TypeScript, exported as a fully static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out, deploy anywhere (Netlify, Vercel, GitHub Pages, S3)
```

## What's inside

| Route | What it is |
| --- | --- |
| `/` | Home: hero, categories, featured pieces, how it's made, temples teaser |
| `/shop/` | Catalogue with category filter (`?c=idols`), search and sort |
| `/shop/[slug]/` | Product page: finish picker, quantity, add to cart / buy now, related items, linked temple |
| `/cart/` | Cart (saved in the browser), free-shipping meter |
| `/checkout/` | Checkout **placeholder**: address + payment choice, no payment taken |
| `/temples/` | Temples of India, filter by region and tradition |
| `/temples/[slug]/` | Temple story, highlights, festivals, yatra tip, related products |
| `/about/` | Our craft |

## Editing content

- Products, categories and finishes: `src/data/products.ts`
- Temples: `src/data/temples.ts`
- Theme colours (gold, flame, ultramarine): CSS variables at the top of `src/app/globals.css`

## Before going live

- [ ] Replace placeholder products, prices, ratings and testimonials with real ones.
- [ ] Add product photos (swap `ProductArt` for real images).
- [ ] Connect a payment gateway (Razorpay, Cashfree, Shopify Buy Button…) in `src/components/CheckoutForm.tsx`.
- [ ] Set the real contact email and shipping/returns policy.
