// import { getSortedPostsData } from "@/lib/posts";

export default async function sitemap() {
  // const posts = getSortedPostsData();
  // const postUrls = posts.map((post) => ({
  //   url: `https://merge-json-files.com/blog/${post.id}`,
  //   lastModified: new Date(post.date),
  // }));

  return [
    {
      url: "https://www.freetoolnow.com/",
      lastModified: new Date(),
    },
    // ...postUrls,
    {
      url: "https://www.freetoolnow.com/convert-udf-to-pdf",
      lastModified: new Date(),
    },
    {
      url: "https://www.freetoolnow.com/convert-zpl-to-pdf",
      lastModified: new Date(),
    },
    {
      url: "https://www.freetoolnow.com/youtube-audio-extractor",
      lastModified: new Date(),
    },
    {
      url: "https://www.freetoolnow.com/merge-html",
      lastModified: new Date(),
    },
    
  ];
}
