import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Convert to Old English Online | Free Medieval Text Generator",
  description:
    "Instantly convert modern English to authentic Old English/Olde English with our AI-powered translator. Perfect for historical projects, medieval-themed content, and Shakespearean-style writing. 100% free, no signup required!",
  keywords: [
    "convert to old english",
    "convert modern english to old english",
    "old english generator",
    "convert to old english online",
    "old english converter online",
    "convert modern english to old english online",
    "convert to olde english",
    "medieval text converter",
    "shakespearean english converter",
    "archaic english translator",
    "ye olde english generator",
    "old english style converter",
    "middle english translator online",
    "historical text converter",
  ],
  openGraph: {
    title:
      "Free Old English Converter - Transform Modern Text to Medieval English",
    description:
      "Turn contemporary English into authentic Old English text instantly with our advanced conversion tool. Ideal for writers, students, and history enthusiasts!",
    url: "https://freetoolnow.com/convert-to-old-english",
    images: [
      {
        url: "https://freetoolnow.com/old-english.png",
        width: 1200,
        height: 630,
        alt: "Old English Converter Interface Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Modern English to Old English Online",
    description:
      "Free instant conversion from modern to medieval English with authentic vocabulary and grammar preservation",
    images: ["https://freetoolnow.com/twitter/old-english.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/convert-to-old-english",
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
  // verification: {
  //   google: "GOOGLE_VERIFICATION_CODE",
  //   yandex: "YANDEX_VERIFICATION_CODE",
  //   other: {
  //     "msvalidate.01": "BING_VERIFICATION_CODE",
  //   },
  // },
};

export default function OldEnglishConverterLayout({
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
          name: "Convert Modern English to Old English",
          description:
            "Step-by-step guide to transform contemporary text into medieval English",
          image: "https://freetoolnow.com/old-english.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "Old English Text Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Paste your modern English text into the input box",
              name: "Input Modern Text",
            },
            {
              "@type": "HowToStep",
              text: "Click the 'Convert to Old English' button",
              name: "Start Conversion",
            },
            {
              "@type": "HowToStep",
              text: "Copy your transformed Old English text from the output box",
              name: "Get Results",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/convert-to-old-english",
          },
        })}
      </script>
      {children}
    </>
  );
}
