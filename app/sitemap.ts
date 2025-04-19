import { getSortedPostsData } from "@/lib/posts";

export default async function sitemap() {
  const posts = getSortedPostsData();
  const postUrls = posts.map((post) => ({
    url: `https://freetoolnow/blog/${post.id}`,
    lastModified: new Date(post.date),
  }));

  return [
    ...postUrls,
    {
      url: "https://freetoolnow.com/",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/convert-to-old-english",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/c-to-assembly-converter",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/gram-to-bhari-converter",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/gram-to-ratti-converter",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/tonnes-to-bushels-converter",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/udf-to-pdf",
      lastModified: new Date(),
    },
    {
      url: "https://freetoolnow.com/remove-line-breaks-online",
      lastModified: new Date(),
    },
  ];
}
