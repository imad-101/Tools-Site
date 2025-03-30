import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MHTML to PDF Converter - Convert Web Archives Online",
  description:
    "Free online tool to convert MHTML web archives to PDF documents. Preserve web page layouts and content in a universally accessible format.",
  keywords:
    "mhtml to pdf, mht converter, web archive converter, convert mhtml, mhtml converter",
};

export default function MhtmlToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
