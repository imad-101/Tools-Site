import React from "react";
import { FileText, Code } from "lucide-react";

const allTools = [
  {
    id: 1,
    title: "Old English Converter",
    description:
      "Convert modern English to old English effortlessly with our modern to old English converter.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "productivity",
    badge: "Popular",
    badgeColor: "bg-green-100 text-green-800 border-green-200",
    href: "/convert-to-old-english",
  },
  {
    id: 2,
    title: "UDF to PDF Converter",
    description:
      "Convert UDF files to PDF format quickly and easily. Perfect for sharing and printing.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "design",
    badge: "New",
    badgeColor: "bg-green-100 text-green-800 border-green-200",
    href: "/udf-to-pdf",
  },
  {
    id: 3,
    title: "MHTML to PDF Converter",
    description:
      "Convert MHTML files to PDF format quickly and easily. Perfect for sharing and printing.",
    icon: React.createElement(Code, { className: "h-8 w-8 text-black" }),
    category: "development",
    badge: null,
    badgeColor: "",
    href: "/mhtml-to-pdf",
  },
  {
    id: 4,
    title: "DocSend to PDF Converter",
    description:
      "Convert DocSend files to PDF format quickly and easily. Perfect for sharing and printing.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "productivity",
    badge: null,
    badgeColor: "",
    href: "/docsend-to-pdf",
  },
];

export default allTools;
