import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";
import areas from "./lib/practice-areas.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://adhukukvedanismanlik.com"
  ).replace(/\/$/, "");
  const routes = [
    "/",
    "/hakkimda/",
    "/uzmanlik/",
    "/blog/",
    "/iletisim/",
    "/gizlilik/",
    "/kullanim-kosullari/",
    ...areas.map((area) => `/uzmanlik/${area.slug}/`),
    ...blogPosts.map((post) => `/blog/${post.id}/`),
  ];
  return routes.map((route) => ({ url: `${base}${route}` }));
}
