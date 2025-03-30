import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UDF to PDF Converter - Convert UDF Files Online",
  description:
    "Free online tool to convert Universal Disk Format (UDF) files to PDF documents. No installation required, secure browser-based conversion.",
  keywords:
    "udf to pdf, convert udf, udf converter, iso to pdf, optical media conversion",
};

export default function UdfToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
