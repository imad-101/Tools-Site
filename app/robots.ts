export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/*.xml$",
          "/_next/",
          "/static/",
          "/category/",
          "/tag/",
          "/search/",

          "/404",
          "/500",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/category/",
          "/tag/",
          "/search/",

          "/404",
          "/500",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/category/",
          "/tag/",
          "/search/",

          "/404",
          "/500",
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://freetoolnow.com/sitemap.xml",
    host: "https://freetoolnow.com",
  };
}
