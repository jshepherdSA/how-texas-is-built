// Generates /robots.txt (App Router metadata convention). Allows all standard
// search crawlers and explicitly welcomes the major AI crawlers, and points them
// at the sitemap.
const BASE = 'https://www.howtexasisbuilt.com';

// Named so the allowance is explicit and verifiable, even though '*' already
// permits them.
const AI_CRAWLERS = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
