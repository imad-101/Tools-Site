// import { getSortedPostsData } from "@/lib/posts";

export default async function sitemap() {
  // const posts = getSortedPostsData();
  // const postUrls = posts.map((post) => ({
  //   url: `https://freetoolnow/blog/${post.id}`,
  //   lastModified: new Date(post.date),
  // }));

  return [
    // ...postUrls,
    {
      url: "https://freetoolnow.com/",
      lastModified: new Date(),
    },

    {
      url: "https://freetoolnow.com/convert-udf-to-pdf",
      lastModified: new Date(),
    },
  ];
}
