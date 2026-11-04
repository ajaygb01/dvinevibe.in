"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories, products, type CategoryId } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const active = (params.get("c") as CategoryId | null) ?? null;
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");

  const setCategory = (id: CategoryId | null) => {
    router.replace(id ? `/shop/?c=${id}` : "/shop/", { scroll: false });
  };

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = products.filter(
      (p) =>
        (!active || p.category === active) &&
        (!q || [p.name, p.deity, p.short].some((s) => s?.toLowerCase().includes(q))),
    );
    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [active, query, sort]);

  const activeCat = categories.find((c) => c.id === active);

  return (
    <div className="shop">
      <div className="filters" role="tablist" aria-label="Categories">
        <button role="tab" aria-selected={!active} className={`pill ${!active ? "is-active" : ""}`} onClick={() => setCategory(null)}>
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            className={`pill ${active === c.id ? "is-active" : ""}`}
            onClick={() => setCategory(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="Search Ganesha, diya, gopuram…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />
        <label className="toolbar__sort">
          Sort
          <select className="input" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </label>
      </div>

      <p className="muted results-line">
        {activeCat ? <><strong>{activeCat.name}</strong>: {activeCat.blurb} </> : null}
        {list.length} {list.length === 1 ? "piece" : "pieces"}
      </p>

      {list.length ? (
        <div className="product-grid">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No pieces match “{query}”.</p>
          <button className="btn btn--ghost" onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </div>
  );
}
