import type { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "HTML File Merger - Combine HTML Files Online Free",
  description: "Merge multiple HTML files into a single document instantly. Preserve formatting, links, and structure with our free browser-based tool. No installation required.",
  openGraph: {
    title: "Free HTML File Merger - Combine HTML Documents Online",
    description: "Easily merge HTML files into one document with our secure, browser-based tool. Perfect for combining reports, articles, and web content.",
    url: "https://freetoolnow.com/merge-html",
    type: "website",
    images: [
      {
        url: "https://freetoolnow.com/merge-html.png",
        width: 1200,
        height: 630,
        alt: "HTML File Merger Tool Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML File Merger - Free Online Tool",
    description: "Combine HTML files into one document instantly with our free online merger. No downloads, fully secure, and easy to use.",
    images: ["https://freetoolnow.com/twitter/merge-html.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/merge-html",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function HtmlMergerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Merge HTML Files",
    description: "Step-by-step guide to combine multiple HTML files into one document using a free online tool",
    image: "https://freetoolnow.com/merge-html.png",
    totalTime: "PT1M",
    tool: { "@type": "HowToTool", name: "HTML File Merger" },
    step: [
      {
        "@type": "HowToStep",
        name: "Upload HTML Files",
        text: "Select and upload multiple HTML files from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Arrange Files",
        text: "Drag and drop files to set the merge order.",
      },
      {
        "@type": "HowToStep",
        name: "Merge Files",
        text: "Click the 'Merge HTML' button to combine your files.",
      },
      {
        "@type": "HowToStep",
        name: "Download Result",
        text: "Download the merged HTML file or copy to clipboard.",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://freetoolnow.com/merge-html",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://freetoolnow.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "HTML Merger",
        item: "https://freetoolnow.com/merge-html",
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://freetoolnow.com/merge-html"
        />
      </Head>

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      {children}
    </>
  );
}