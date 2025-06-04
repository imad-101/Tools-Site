import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedTools() {
  // Sample tools data - in a real app, this would come from an API or database
  const tools = [
    {
      id: 7,
      title: "UDF to PDF Converter",
      description:
        "Open and view your UDF files (.udf) and easily convert them into PDF with a single click and download instantly",
      category: "File Conversion",
      badgeColor: "bg-blue-950/10 text-blue-950 border-blue-950/20",
      href: "/convert-udf-to-pdf",
      image: "/placeholder-udf.png", // You'll need to add these images
    },
    {
      id: 6,
      title: "ZPL to PDF Converter",
      description:
        "Open and view your ZPL files (.zpl) and easily convert them into PDF with a single click and download instantly",
      category: "File Conversion",
      badgeColor: "bg-blue-950/10 text-blue-950 border-blue-950/20",
      href: "/convert-zpl-to-pdf",
      image: "/placeholder-zpl.png", // You'll need to add these images
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:px-24 ">
      {tools.map((tool) => (
        <Card
          key={tool.id}
          className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-950/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer max-w-sm"
        >
          {/* Image Section */}
          <div className="relative h-48 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 to-blue-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
            <div className="relative h-full w-full">
              <Image
                src={tool.image}
                alt={tool.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <CardHeader className="pb-2 pt-4">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className={`${tool.badgeColor} border font-medium px-3 py-0.5 rounded-full text-sm capitalize`}
              >
                {tool.category}
              </Badge>
            </div>
            <CardTitle className="mt-3 text-blue-950 text-lg font-bold tracking-tight group-hover:text-blue-900 transition-colors duration-300">
              {tool.title}
            </CardTitle>
            <CardDescription className="text-blue-950/70 mt-1 leading-relaxed text-sm">
              {tool.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button
              asChild
              variant="outline"
              className="w-full border border-blue-950/20 text-blue-950 hover:text-white hover:bg-blue-950 hover:border-blue-950 transition-all duration-300 group-hover:shadow-md relative overflow-hidden"
            >
              <Link
                href={`${tool.href}`}
                className="flex items-center justify-center py-2"
              >
                <span className="relative z-10 text-sm font-medium">
                  Use Tool
                </span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
