import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "C to Assembly Converter Online | Free Assembly Code Generator",
  description:
    "Instantly convert C code to assembly language (x86, ARM) with our free online tool. Features syntax highlighting and downloadable .asm files, perfect for students and developers.",
  keywords: [
    "c to assembly converter",
    "convert c to assembly online",
    "c code to assembly",
    "assembly code generator",
    "c to assembly online",
    "free c to assembly converter",
    "c to x86 assembly",
    "c to arm assembly",
    "assembly language converter",
    "c programming to assembly",
    "learn assembly from c",
    "online c to asm converter",
    "c code to machine code",
    "assembly code from c",
  ],
  openGraph: {
    title: "Free C to Assembly Converter - Generate Assembly Code Online",
    description:
      "Transform C code into x86 or ARM assembly with syntax highlighting and downloadable outputs. Ideal for learning low-level programming.",
    url: "https://freetoolnow.com/c-to-assembly-converter",
    images: [
      {
        url: "https://freetoolnow.com/c-to-assembly.png",
        width: 1200,
        height: 630,
        alt: "C to Assembly Converter Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert C to Assembly Online",
    description:
      "Free tool to convert C code to assembly language with x86 and ARM support.",
    images: ["https://freetoolnow.com/twitter/c-to-assembly.png"],
  },
  alternates: {
    canonical: "https://freetoolnow.com/c-to-assembly-converter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function CToAssemblyConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Convert C Code to Assembly Language",
          description:
            "Step-by-step guide to transform C code into assembly language online",
          image: "https://freetoolnow.com/c-to-assembly.png",
          totalTime: "PT1M",
          tool: {
            "@type": "HowToTool",
            name: "C to Assembly Converter",
          },
          step: [
            {
              "@type": "HowToStep",
              text: "Paste your C code into the input editor",
              name: "Input C Code",
            },
            {
              "@type": "HowToStep",
              text: "Select x86 or ARM architecture and click 'Convert'",
              name: "Choose Architecture",
            },
            {
              "@type": "HowToStep",
              text: "View and download the assembly code",
              name: "Get Assembly Output",
            },
          ],
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://freetoolnow.com/c-to-assembly-converter",
          },
        })}
      </script>
      {children}
    </>
  );
}
