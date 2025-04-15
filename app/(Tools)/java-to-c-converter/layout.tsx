import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Java to C Converter Online | Free Code Translator",
  description:
    "Instantly convert Java code to C with our free online tool. Features real-time translation, syntax highlighting, and downloadable .c files for developers and students.",
  keywords: [
    "java to c converter",
    "convert java to c online",
    "java code to c code",
    "java to c translator",
    "java to c online",
    "free java to c converter",
    "java to c code converter",
    "translate java to c",
    "java to c conversion tool",
    "java c converter online",
    "convert java program to c",
    "java to c code translator",
    "online java to c converter",
    "java to c programming",
  ],
  openGraph: {
    title: "Free Java to C Converter - Transform Java Code Online",
    description:
      "Convert Java to C instantly with syntax highlighting, annotations, and downloadable outputs. Perfect for learning and porting code.",
    url: "https://freetoolnow.com/java-to-c-converter",
    images: [
      {
        url: "https://freetoolnow.com/java-to-c.png",
        width: 1200,
        height: 630,
        alt: "Java to C Converter Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Java to C Online",
    description:
      "Free tool to translate Java code to C with real-time updates and downloadable files.",
    images: ["https://freetoolnow.com/twitter/java-to-c.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/java-to-c-converter",
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

export default function JavaToCConverterLayout({
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
          name: "Convert Java Code to C",
          description:
            "Step-by-step guide to transform Java code into C code online",
          image: "https://freetoolnow.com/java-to-c.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "Java to C Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Paste your Java code into the input editor",
              name: "Input Java Code",
            },
            {
              "@type": "HowToStep",
              text: "Click 'Convert' or use real-time translation",
              name: "Convert to C",
            },
            {
              "@type": "HowToStep",
              text: "Review and download the C code",
              name: "Get C Output",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/java-to-c-converter",
          },
        })}
      </script>
      {children}
    </>
  );
}
