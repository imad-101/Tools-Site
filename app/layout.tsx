import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Tools - Free Utilities for Document Processing",
  description:
    "Free online tools for document processing, file conversion, and more. All tools are secure, browser-based, and require no installation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
