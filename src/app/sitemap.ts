import type { MetadataRoute } from "next";
import { temples } from "@/data/temples";
import { products } from "@/data/products";
import { absolute, productPath, templePath } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly", images?: string[]) => ({
    url: absolute(path),
    lastModified,
    changeFrequency,
    priority,
    ...(images && { images: images.map((src) => absolute(src)) }),
  });

  return [
    page("/", 1, "weekly"),
    page("/temples/", 0.9, "weekly"),
    page("/temples/tamil-nadu/", 0.9, "monthly"),
    ...temples.map((t) => page(templePath(t), 0.8, "monthly", t.photo ? [t.photo.src] : undefined)),
    page("/shop/", 0.6, "weekly"),
    ...products.map((p) => page(productPath(p), 0.5, "monthly")),
    page("/about/", 0.4, "monthly"),
  ];
}
