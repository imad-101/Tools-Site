import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Gram to Ratti Converter | Free Online Ratti Calculator",
  description:
    "Convert grams to ratti instantly with our accurate online converter. Ideal for jewelers, gemstone enthusiasts, and anyone using traditional Indian weight units. 100% free, no signup required!",
  keywords: [
    "gram to ratti converter",
    "convert grams to ratti",
    "ratti calculator online",
    "gram to ratti for jewelry",
    "ratti to gram converter",
    "jewelry weight converter",
    "gemstone weight calculator",
    "traditional indian weight converter",
    "free ratti converter",
    "online gram to ratti tool",
    "ratti to carat converter",
    "gram to tola converter",
    "ratti to tola conversion",
  ],
  openGraph: {
    title: "Free Gram to Ratti Converter - Accurate Jewelry Weight Tool",
    description:
      "Transform grams to ratti with ease using our online calculator. Perfect for jewelry and gemstone measurements with regional variations supported.",
    url: "https://freetoolnow.com/gram-to-ratti-converter",
    images: [
      {
        url: "https://freetoolnow.com/gram-to-ratti.png",
        width: 1200,
        height: 630,
        alt: "Gram to Ratti Converter Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gram to Ratti Converter Online",
    description:
      "Free and precise conversion from grams to ratti for jewelry and gemstones, with regional variations.",
    images: ["https://freetoolnow.com/twitter/gram-to-ratti.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/gram-to-ratti-converter",
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

export default function GramToRattiConverterLayout({
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
          name: "Convert Grams to Ratti",
          description:
            "Step-by-step guide to convert weight from grams to ratti for jewelry and gemstones",
          image: "https://freetoolnow.com/gram-to-ratti.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "Gram to Ratti Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Enter the weight in grams in the input field",
              name: "Input Grams",
            },
            {
              "@type": "HowToStep",
              text: "Select the ratti type (standard or regional)",
              name: "Choose Ratti Type",
            },
            {
              "@type": "HowToStep",
              text: "View the converted ratti value and copy the result",
              name: "Get Results",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/gram-to-ratti-converter",
          },
        })}
      </script>
      {children}
    </>
  );
}
