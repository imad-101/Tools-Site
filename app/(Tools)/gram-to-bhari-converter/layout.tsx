import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Gram to Bhari Converter | Free Online Bhari Calculator",
  description:
    "Convert grams to bhari instantly with our accurate online converter. Ideal for jewelers, gold and silver traders, and anyone using traditional South Asian weight units. 100% free, no signup required!",
  keywords: [
    "gram to bhari converter",
    "convert grams to bhari",
    "bhari calculator online",
    "gold weight converter bhari",
    "bhari to gram converter",
    "jewelry weight converter",
    "south asian weight unit converter",
    "free bhari converter",
    "online gram to bhari tool",
    "bhari to tola converter",
    "grams to bhari for gold",
  ],
  openGraph: {
    title: "Free Gram to Bhari Converter - Accurate Gold Weight Tool",
    description:
      "Transform grams to bhari with ease using our online calculator. Perfect for gold and silver trading with North and South India standards supported.",
    url: "https://freetoolnow.com/gram-to-bhari-converter",
    images: [
      {
        url: "https://freetoolnow.com/gram-to-bhari.png",
        width: 1200,
        height: 630,
        alt: "Gram to Bhari Converter Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gram to Bhari Converter Online",
    description:
      "Free and precise conversion from grams to bhari for gold and silver, with regional variations.",
    images: ["https://freetoolnow.com/twitter/gram-to-bhari.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/gram-to-bhari-converter",
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

export default function GramToBhariConverterLayout({
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
          name: "Convert Grams to Bhari",
          description:
            "Step-by-step guide to convert weight from grams to bhari for gold and silver trading",
          image: "https://freetoolnow.com/gram-to-bhari.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "Gram to Bhari Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Enter the weight in grams in the input field",
              name: "Input Grams",
            },
            {
              "@type": "HowToStep",
              text: "Select the bhari standard (North or South India)",
              name: "Choose Bhari Standard",
            },
            {
              "@type": "HowToStep",
              text: "View the converted bhari value and copy the result",
              name: "Get Results",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/gram-to-bhari-converter",
          },
        })}
      </script>
      {children}
    </>
  );
}
