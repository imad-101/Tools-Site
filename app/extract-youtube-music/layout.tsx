import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract YouTube Music - YouTube to MP3 Converter",
  description:
    "Free online tool to extract high-quality audio from YouTube videos. Convert YouTube videos to MP3, AAC, OGG, and more formats.",
  keywords:
    "youtube to mp3, extract youtube audio, youtube music downloader, youtube audio extractor, youtube mp3 converter",
};

export default function ExtractYoutubeMusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
