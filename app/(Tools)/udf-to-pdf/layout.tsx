import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "UDF to PDF Converter - Convert UDF Files Online Free",
  description:
    "Convert Universal Disk Format (UDF) files to PDF documents instantly with our free online tool. No software installation required, secure browser-based conversion for optical media and more.",
  keywords: [
    "udf to pdf",
    "convert udf to pdf",
    "udf converter",
    "udf file to pdf",
    "free udf to pdf converter",
    "online udf converter",
    "universal disk format to pdf",
    "udf to pdf online",
    "optical media to pdf",
    "udf file converter",
    "convert udf file",
    "udf to pdf free",
    "browser-based udf converter",
    "udf to pdf tool",
    "convert disc image to pdf",
  ],
  openGraph: {
    title: "Free UDF to PDF Converter - Online File Conversion",
    description:
      "Easily convert UDF files to PDF with our free, secure, and browser-based tool. Perfect for optical media, disc images, and document conversion.",
    url: "https://freetoolnow.com/udf-to-pdf",
    type: "website",
    images: [
      {
        url: "https://freetoolnow.com/udf-to-pdf.png",
        width: 1200,
        height: 630,
        alt: "UDF to PDF Converter Tool Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDF to PDF Converter - Free Online Tool",
    description:
      "Transform UDF files to PDF instantly with our free online converter. No downloads, fully secure, and easy to use.",
    images: ["https://freetoolnow.com/twitter/udf-to-pdf.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/udf-to-pdf",
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

export default function UdfToPdfLayout({
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
          name: "Convert UDF to PDF",
          description:
            "Step-by-step guide to convert Universal Disk Format (UDF) files to PDF using a free online tool",
          image: "https://freetoolnow.com/udf-to-pdf.png",
          totalTime: "PT2M",
          tool: {
            "@type": "HowToTool",
            name: "UDF to PDF Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              name: "Upload UDF File",
              text: "Select and upload your UDF file from your device or cloud storage.",
            },
            {
              "@type": "HowToStep",
              name: "Configure Conversion",
              text: "Choose PDF as the output format and adjust any conversion settings if needed.",
            },
            {
              "@type": "HowToStep",
              name: "Process File",
              text: "Click the 'Convert' button to transform the UDF file to PDF.",
            },
            {
              "@type": "HowToStep",
              name: "Download PDF",
              text: "Download the converted PDF file or save it to your preferred location.",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/udf-to-pdf",
          },
        })}
      </script>
      {children}
    </>
  );
}
