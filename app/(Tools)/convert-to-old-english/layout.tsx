import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert to Old English | Free Online Text Transformer",
  description:
    "Transform modern English text into Old English style with our free online converter. Add medieval flair to your writing with authentic Old English vocabulary, spelling, and grammar.",
  keywords:
    "old english converter, medieval english, archaic english, ye olde english, middle english translator, shakespeare english, medieval text generator, old english translator, archaic text converter",
};

export default function DocsendToPdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
