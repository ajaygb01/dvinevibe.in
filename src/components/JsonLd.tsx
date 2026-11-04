/** Structured data for search engines and AI assistants, as a JSON-LD script tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  // Escape "<" so text in the data can never close the script tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
