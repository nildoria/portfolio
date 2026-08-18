const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://sabbir.bd");

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // API routes have nothing to index and shouldn't be crawled.
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
