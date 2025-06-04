import React from "react";
import { FileText, PenTool } from "lucide-react";
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
    href: "/convert-udf-to-pdf",
  },
  {
    id: 6,
    title: "ZPL to PDF Converter",
    description:
      "Open and view your ZPL files (.zpl) and easily convert them into PDF with a single click and download instantly",
    icon: React.createElement(PenTool, { className: "h-8 w-8 text-black" }),
    category: "file-conversion",
    badge: "Popular",
    badgeColor: "blue",
    href: "/convert-zpl-to-pdf",
  },
];

export default allTools;
