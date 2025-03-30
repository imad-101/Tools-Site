import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocSend to PDF Converter - Download DocSend Documents",
  description:
    "Free online tool to convert DocSend documents to PDF format. Save DocSend files for offline access, printing, and archiving.",
  keywords:
    "docsend to pdf, convert docsend, docsend downloader, docsend converter, save docsend as pdf",
};

export default function DocsendToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
