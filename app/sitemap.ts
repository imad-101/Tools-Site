import { getSortedPostsData } from "@/lib/posts";

export default async function sitemap() {
  const posts = getSortedPostsData();
  const postUrls = posts.map((post) => ({
    url: `https://freetoolnow.com/blog/${post.id}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://freetoolnow.com/",
      lastModified: new Date(),
    },
    ...postUrls,
    {
      url: "https://freetoolnow.com/convert-to-old-english",
      lastModified: new Date(),
    },
  ];
}
