// Generates /sitemap.xml (App Router metadata convention). Covers every public
// route; lastModified is the build time. Referenced from app/robots.js.
const BASE = 'https://www.howtexasisbuilt.com';

const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/fueling-growth', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/jobs', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/responsible', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/local-sourcing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/quality', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/how-its-made', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/insights/taca-72nd-annual-meeting', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/insights/cim-gala-workforce-development', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/take-action', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
