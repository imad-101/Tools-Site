// import { getSortedPostsData } from "@/lib/posts";
import allTools from "./allTools";

export default async function sitemap() {
  // const posts = getSortedPostsData();
  // const postUrls = posts.map((post) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`,
  //   lastModified: new Date(post.date),
  //   changefreq: 'weekly',
  //   priority: 0.7
  // }));

  const baseUrl = "https://freetoolnow.com";

  // Generate URLs for all tools with category-based priorities
  // Filter out tools that don't have enough content
  const toolUrls = allTools
    .filter((tool) => {
      // Add your content validation logic here
      // For example, check if the tool has a minimum description length
      return tool.description && tool.description.length > 100;
    })
    .map((tool) => ({
      url: `${baseUrl}${tool.href}`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: tool.category === "Popular" ? 0.9 : 0.8,
    }));

  // Static pages with higher priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 0.8,
    },
  ];

  // Sort URLs by priority for better crawling
  const allUrls = [...staticPages, ...toolUrls].sort(
    (a, b) => b.priority - a.priority
  );

  return allUrls;
}
