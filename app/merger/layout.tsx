import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Document Merger - Combine DOCX Files Online",
  description:
    "Easily merge multiple Word documents into a single file. Free, secure, and browser-based - no uploads required.",
  keywords:
    "word merger, docx merger, combine word documents, merge docx files, document merger",
};

export default function MergerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
