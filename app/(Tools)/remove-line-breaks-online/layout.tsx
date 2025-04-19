import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Remove Line Breaks Online | Free Line Breaks Remover Tool",
  description:
    "Instantly remove line breaks from text with our free online tool. Perfect for developers, writers, and anyone needing clean, continuous text. No signup required!",
  keywords: [
    "remove line breaks online",
    "line break remover tool",
    "remove newlines from text",
    "text line breaks remover",
    "free line breaks remover",
    "online newline remover",
    "strip line breaks",
    "remove carriage returns",
    "text formatting tool",
    "clean text online",
    "remove line breaks from code",
    "text processing tool",
    "newline stripper",
  ],
  openGraph: {
    title: "Free Line Breaks Remover - Clean Text Online",
    description:
      "Remove line breaks from text instantly with our free online tool. Ideal for coding, data processing, and content editing.",
    url: "https://freetoolnow.com/remove-line-break-online",
    images: [
      {
        url: "https://freetoolnow.com/remove-line-break.png",
        width: 1200,
        height: 630,
        alt: "Line Break Remover Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove Line Break Online Tool",
    description:
      "Free and easy tool to remove line breaks from text for coding, data, and content needs.",
    images: ["https://freetoolnow.com/twitter/remove-line-break.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/remove-line-break-online",
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

export default function RemoveLineBreakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Remove Line Breaks from Text",
          description:
            "Step-by-step guide to remove line breaks from text using an online tool",
          image: "https://freetoolnow.com/remove-line-break.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "Line Breaks Remover",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Paste the text with line breaks into the input field",
              name: "Input Text",
            },
            {
              "@type": "HowToStep",
              text: "Click the remove line breaks button",
              name: "Process Text",
            },
            {
              "@type": "HowToStep",
              text: "Copy the processed text or save to history",
              name: "Get Results",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/remove-line-break-online",
          },
        })}
      </script>
      {children}
    </>
  );
}
