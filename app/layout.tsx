import type { Metadata } from "next";
import React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Tool Now - 100+ Free Online Tools for Instant Solutions",
  description:
    "Get access to 100+ completely free online tools for all your needs - text conversion, formatting, coding, calculators, and more. No signup required!",
  keywords: [
    "free online tools",
    "instant web tools",
    "text converter",
    "code formatter",
    "PDF tools",
    "image converter",
    "SEO tools",
    "calculator",
    "generator tools",
    "online utilities",
    "Free Tool Now",
  ],
  openGraph: {
    title: "Free Tool Now - Instant Free Online Tools Collection",
    description:
      "Completely free online toolkit for developers, students, and professionals. Daily updated tools with no registration required!",
    url: "https://freetoolnow.com",
    type: "website",
    images: [
      {
        url: "https://freetoolnow.com/main.png",
        width: 1200,
        height: 630,
        alt: "Free Tool Now - Online Tools Collection",
      },
    ],
    siteName: "Free Tool Now",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tool Now - 100+ Free Online Tools",
    description:
      "Your ultimate free online toolkit for all daily needs - text, code, files, and productivity tools",
    images: ["https://freetoolnow.com/main.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "yandex-verification-code",
  //   other: {
  //     "msvalidate.01": "bing-verification-code",
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Free Tool Now",
            url: "https://freetoolnow.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://freetoolnow.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            description:
              "Comprehensive collection of free online tools for instant solutions",
            publisher: {
              "@type": "Organization",
              name: "Free Tool Now",
              logo: {
                "@type": "ImageObject",
                url: "https://freetoolnow.com/main.png",
              },
            },
          })}
        </script>
      </head>
      <body className={`${inter.className}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
