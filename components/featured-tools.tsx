import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, PenTool } from "lucide-react";

export function FeaturedTools() {
  // Sample tools data - in a real app, this would come from an API or database
  const tools = [
    {
      id: 1,
      title: "C to Assembly Converter",
      description:
        "Convert C code to assembly language (x86, ARM) with our free online tool.",
      icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
      category: "development",
      badge: null,
      badgeColor: "",
      href: "/c-to-assembly-converter",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 6,
      title: "Java to C Converter",
      description:
        "Easily convert any code written in Java language to C withing one click .",
      icon: <PenTool className="h-8 w-8 text-black" />,
      category: "development",
      badge: null,
      badgeColor: "",
      href: "/java-to-c-converter",
    },
    {
      id: 7,
      title: "UDF to PDF Converter",
      description:
        "Open and view your UDF files (.udf) and easily convert them into PDF with a single click and download instantly",
      icon: <PenTool className="h-8 w-8 text-black" />,
      category: "file-conversion",
      badge: "Popular",
      badgeColor: "blue",
      href: "/udf-to-pdf",
    },
    {
      id: 8,
      title: "Line Breaks Remover",
      description:
        "Remove unwanted line breaks from your text quickly and efficiently. Perfect for cleaning up copied text.",
      icon: React.createElement(FileText, { className: "h-8 w-8 text-black" }),
      category: "text-tools",
      badge: null,
      badgeColor: "",
      href: "/remove-line-breaks-online",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:px-32">
      {tools.map((tool) => (
        <Card
          key={tool.id}
          className="overflow-hidden bg-white border-gray-200 shadow-sm hover:shadow transition-shadow"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-gray-100 rounded-md">{tool.icon}</div>
              {tool.badge && (
                <Badge variant="outline" className={tool.badgeColor}>
                  {tool.badge}
                </Badge>
              )}
            </div>
            <CardTitle className="mt-4 text-gray-900  text-xl my-3">
              {tool.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {tool.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-gray-200 text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            >
              <Link href={`${tool.href}`}>
                Use Tool <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
