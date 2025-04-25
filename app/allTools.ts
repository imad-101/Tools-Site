import React from "react";
import { FileText } from "lucide-react";
const allTools = [
  {
    id: 2,
    title: "UDF to PDF Converter",
    description:
      "Convert UDF files to PDF format quickly and easily. Perfect for sharing and printing.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "file-conversion",
    badge: "New",
    badgeColor: "bg-green-100 text-green-800 border-green-200",
    href: "/udf-to-pdf",
  },
];

export default allTools;
