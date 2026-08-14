// Renders a JSON-LD structured-data block. `data` may be a single schema object
// or an array of them. Server component — the script ships in the initial HTML so
// crawlers see it without executing JavaScript.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
