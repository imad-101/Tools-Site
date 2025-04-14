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
    category: "file-conversion",
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
    category: "file-conversion",
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
    category: "file-conversion",
    badge: null,
    badgeColor: "",
    href: "/docsend-to-pdf",
  },
  {
    id: 5,
    title: "C to Assembly Converter",
    description:
      "Convert C code to assembly language (x86, ARM) with our free online tool. Features syntax highlighting and downloadable .asm files.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "development",
    badge: null,
    badgeColor: "",
    href: "/c-to-assembly-converter",
  },
  {
    id: 6,
    title: "Gram to Bhari Converter",
    description:
      "Easily convert grams to bhari with our accurate and user-friendly tool.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "measurement",
    badge: null,
    badgeColor: "",
    href: "/gram-to-bhari-converter",
  },
  {
    id: 7,
    title: "Gram to Ratti Converter",
    description:
      "Quickly convert grams to ratti with our precise and easy-to-use converter.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "measurement",
    badge: null,
    badgeColor: "",
    href: "/gram-to-ratti-converter",
  },
  {
    id: 8,
    title: "Tonnes to Bushels Converter",
    description:
      "Convert tonnes to bushels effortlessly with our reliable online tool.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "measurement",
    badge: null,
    badgeColor: "",
    href: "/tonnes-to-bushels-converter",
  },
  {
    id: 9,
    title: "ZPL to PDF Converter",
    description:
      "Convert ZPL files to PDF format quickly and easily for printing and sharing.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
    category: "file-conversion",
    badge: null,
    badgeColor: "",
    href: "/zpl-to-pdf-converter",
  },
];

export default allTools;
