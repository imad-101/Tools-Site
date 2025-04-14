import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Tonnes to Bushels Converter | Free Online Bushel Calculator",
  description:
    "Convert tonnes to bushels instantly with our accurate online converter. Ideal for farmers, traders, and anyone working with agricultural commodities like wheat, corn, and soybeans. 100% free, no signup required!",
  keywords: [
    "tonnes to bushels converter",
    "convert tonnes to bushels",
    "bushel calculator online",
    "agriculture weight converter",
    "bushels to tonnes converter",
    "wheat bushel converter",
    "corn bushel calculator",
    "soybeans tonnes to bushels",
    "free bushel converter",
    "online tonnes to bushels tool",
  ],
  openGraph: {
    title: "Free Tonnes to Bushels Converter - Accurate Agriculture Tool",
    description:
      "Transform tonnes to bushels with ease using our online calculator. Perfect for wheat, corn, and soybeans with crop-specific conversions.",
    url: "https://freetoolnow.com/tonnes-to-bushels-converter",
    images: [
      {
        url: "https://freetoolnow.com/tonnes-to-bushels.png",
        width: 1200,
        height: 630,
        alt: "Tonnes to Bushels Converter Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonnes to Bushels Converter Online",
    description:
      "Free and precise conversion from tonnes to bushels for agricultural commodities, with crop-specific options.",
    images: ["https://freetoolnow.com/twitter/tonnes-to-bushels.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/tonnes-to-bushels-converter",
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

export default function TonnesToBushelsConverterLayout({
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
          name: "Convert Tonnes to Bushels",
          description:
            "Step-by-step guide to convert weight from tonnes to bushels for agricultural commodities",
          image: "https://freetoolnow.com/tonnes-to-bushels.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "Tonnes to Bushels Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Enter the weight in tonnes in the input field",
              name: "Input Tonnes",
            },
            {
              "@type": "HowToStep",
              text: "Select the crop type (wheat, corn, soybeans)",
              name: "Choose Crop",
            },
            {
              "@type": "HowToStep",
              text: "View the converted bushel value and copy the result",
              name: "Get Results",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/tonnes-to-bushels-converter",
          },
        })}
      </script>
      {children}
    </>
  );
}
