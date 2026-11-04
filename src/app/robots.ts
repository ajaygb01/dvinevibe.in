import type { MetadataRoute } from "next";
import { absolute } from "@/lib/seo";

export const dynamic = "force-static";

// Search engines and AI assistants are all welcome to read the temple guides.
// They are named one by one so the welcome is explicit, and so any one of them
// can be turned away later by changing a single line.
const aiCrawlers = [
  "GPTBot", // OpenAI
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User",
  "ClaudeBot", // Anthropic
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini
  "GoogleOther",
  "Applebot",
  "Applebot-Extended", // Apple Intelligence
  "Bingbot", // Bing and Copilot
  "DuckAssistBot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "cohere-ai",
  "YouBot",
  "CCBot", // Common Crawl, which many models learn from
];

const privatePaths = ["/cart/", "/checkout/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: privatePaths },
      { userAgent: aiCrawlers, allow: "/", disallow: privatePaths },
    ],
    sitemap: absolute("/sitemap.xml"),
    host: absolute("/"),
  };
}
