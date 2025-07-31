import type { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "YouTube Audio Extractor - Download Audio from YouTube Videos",
  description: "Extract high-quality audio from YouTube videos instantly. Convert to MP3, WAV, M4A and other formats with our free online YouTube audio extractor. No installation required.",
  openGraph: {
    title: "Free YouTube Audio Extractor - Download Audio from Videos",
    description: "Extract audio from YouTube videos in MP3, WAV, M4A formats. Our browser-based YouTube audio extractor works instantly with no software installation.",
    url: "https://freetoolnow.com/youtube-audio-extractor",
    type: "website",
    images: [
      {
        url: "https://freetoolnow.com/youtube-audio-extractor.png",
        width: 1200,
        height: 630,
        alt: "YouTube Audio Extractor Tool Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Audio Extractor - Free Online Tool",
    description: "Extract audio from YouTube videos instantly. Convert to MP3, WAV and other formats with our free YouTube audio extractor.",
    images: ["https://freetoolnow.com/twitter/youtube-audio-extractor.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/youtube-audio-extractor",
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

export default function YoutubeAudioExtractorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Extract Audio from YouTube Videos",
    description: "Step-by-step guide to extract audio from YouTube using our free online tool",
    image: "https://freetoolnow.com/youtube-audio-extractor.png",
    totalTime: "PT1M",
    tool: { "@type": "HowToTool", name: "YouTube Audio Extractor" },
    step: [
      {
        "@type": "HowToStep",
        name: "Paste YouTube URL",
        text: "Copy and paste the YouTube video link you want to extract audio from",
      },
      {
        "@type": "HowToStep",
        name: "Choose Format",
        text: "Select your preferred audio format (MP3, WAV, M4A, etc.)",
      },
      {
        "@type": "HowToStep",
        name: "Extract Audio",
        text: "Click the 'Extract Audio' button to process the video",
      },
      {
        "@type": "HowToStep",
        name: "Download Audio",
        text: "Save the extracted audio file to your device",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://freetoolnow.com/youtube-audio-extractor",
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
        name: "YouTube Audio Extractor",
        item: "https://freetoolnow.com/youtube-audio-extractor",
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://freetoolnow.com/youtube-audio-extractor"
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