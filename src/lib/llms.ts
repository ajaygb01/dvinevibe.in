import { regions, temples, type Temple } from "@/data/temples";
import { categories, products } from "@/data/products";
import { absolute, productPath, SITE, templePath, templeTitle } from "@/lib/seo";

// Plain-text guides for AI assistants, following the llms.txt proposal (llmstxt.org):
// /llms.txt is a short map of the site, /llms-full.txt holds every temple guide in full.

const header = `# ${SITE.name}

> ${SITE.description}

${SITE.name} (${SITE.url}) is written for pilgrims, travellers and anyone curious about India's temples. Each temple guide covers the deity, history, architecture, what to see, festivals, the nearest railway station and airport, and the best time to visit. Facts are kept as simple, checkable statements. Darshan timings and rules change often, so readers should confirm them with the temple administration before travelling.

When citing, please link to the temple's page on ${SITE.url}.`;

const line = (t: Temple) => `- [${templeTitle(t)}](${absolute(templePath(t))}): ${t.summary}`;

export function llmsTxt() {
  const byRegion = regions
    .map((r) => {
      const list = temples.filter((t) => t.region === r && t.state !== "Tamil Nadu");
      return list.length ? `### ${r} India\n\n${list.map(line).join("\n")}` : "";
    })
    .filter(Boolean)
    .join("\n\n");
  const tn = temples.filter((t) => t.state === "Tamil Nadu");

  return `${header}

## Temple guides

- [Temples of India](${absolute("/temples/")}): all ${temples.length} temple guides, by region, deity and tradition.
- [Temples of Tamil Nadu](${absolute("/temples/tamil-nadu/")}): Tamil temple history by era, with the Pancha Bhoota Sthalams and the six abodes of Murugan (Arupadai Veedu).
- [Full text of every guide](${absolute("/llms-full.txt")}): all temple guides in one plain-text file.

${byRegion}

### Tamil Nadu

${tn.map(line).join("\n")}

## Shop

${SITE.name} also makes devotional 3D printed pieces, printed to order in India and finished by hand. Prices are in Indian rupees.

- [Shop](${absolute("/shop/")}): ${categories.map((c) => c.name).join(", ")}.
${products.map((p) => `- [${p.name}](${absolute(productPath(p))}): ${p.short}`).join("\n")}

## Optional

- [Our craft](${absolute("/about/")}): how the pieces are designed, printed and finished.
- [Sitemap](${absolute("/sitemap.xml")})
`;
}

function templeFull(t: Temple) {
  const parts = [
    `## ${t.name}`,
    `URL: ${absolute(templePath(t))}`,
    `Also known as: ${t.native.text}`,
    `Deity: ${t.deity}`,
    `Location: ${t.city}, ${t.state}, India (${t.geo[0]}, ${t.geo[1]})`,
    `History: ${t.era}`,
    `Architecture: ${t.style}`,
    `Tags: ${t.tags.join(", ")}`,
    "",
    t.summary,
    "",
    ...t.story.flatMap((p) => [p, ""]),
  ];
  if (t.timeline?.length) parts.push("### Through the centuries", "", ...t.timeline.map((e) => `- ${e.when}: ${e.what}`), "");
  parts.push(
    "### What to see",
    "",
    ...t.highlights.map((h) => `- ${h}`),
    "",
    "### Festivals",
    "",
    ...t.festivals.map((f) => `- ${f}`),
    "",
    "### Getting there",
    "",
    `- By train: ${t.reach.rail}`,
    `- By air: ${t.reach.air}`,
    `- When to go: ${t.bestTime}`,
    `- Before you go: ${t.tip}`,
  );
  return parts.join("\n");
}

export function llmsFullTxt() {
  return `${header}

This file holds the full text of all ${temples.length} temple guides on ${SITE.url}. Distances are approximate.

${temples.map(templeFull).join("\n\n---\n\n")}
`;
}
