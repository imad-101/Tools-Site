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
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://freetoolnow.com/sitemap.xml",
    host: "https://freetoolnow.com",
  };
}
