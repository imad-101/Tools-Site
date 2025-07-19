import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { ToolsProvider } from "@/lib/context/ToolsContext";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Free Tool Now - Free Online Tools to Simplify Your Workflow",
  description:
    "A collection of free, easy-to-use online tools designed to boost your productivity and streamline your daily tasks.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <ToolsProvider>
            {children}
            <Toaster />
          </ToolsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
