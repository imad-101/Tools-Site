// app/convert-zpl-to-pdf/layout.tsx
import type { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "ZPL to PDF Converter - Convert ZPL Files to PDF Labels Online Free",
  description:
    "Convert Zebra Programming Language (ZPL) files to PDF label formats instantly. Perfect for printing, sharing, and archiving ZPL label designs. Free online tool with no installation required.",
  openGraph: {
    title: "Free ZPL to PDF Converter - Online Label Conversion",
    description:
      "Transform ZPL files into printable PDF labels instantly. Preserve barcode data and label formatting with our secure browser-based converter.",
    url: "https://freetoolnow.com/convert-zpl-to-pdf",
    type: "website",
    images: [
      {
        url: "https://freetoolnow.com/convert-zpl-to-pdf.png",
        width: 1200,
        height: 630,
        alt: "ZPL to PDF Converter Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZPL to PDF Converter - Free Online Tool",
    description:
      "Convert Zebra ZPL files to PDF labels instantly. Maintain barcode integrity and label layout with our free conversion tool.",
    images: ["https://freetoolnow.com/twitter/zpl-to-pdf.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/convert-zpl-to-pdf",
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

export default function ZplToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Convert ZPL to PDF",
    description:
      "Step-by-step guide to convert Zebra Programming Language files to PDF labels using our free online converter",
    image: "https://freetoolnow.com/zpl-to-pdf-converter.png",
    totalTime: "PT2M",
    tool: { "@type": "HowToTool", name: "ZPL to PDF Converter" },
    step: [
      {
        "@type": "HowToStep",
        name: "Upload ZPL File",
        text: "Select and upload your ZPL file from your device or cloud storage.",
      },
      {
        "@type": "HowToStep",
        name: "Convert to PDF",
        text: "Click the 'Convert' button to transform the ZPL file to PDF.",
      },
      {
        "@type": "HowToStep",
        name: "Download PDF Label",
        text: "Download the converted PDF label or save it to your preferred location.",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://freetoolnow.com/convert-zpl-to-pdf",
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
        name: "ZPL to PDF",
        item: "https://freetoolnow.com/convert-zpl-to-pdf",
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://freetoolnow.com/convert-zpl-to-pdf"
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
