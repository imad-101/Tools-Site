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
import { ArrowRight, FileText, Code, PenTool, Zap } from "lucide-react";

export function FeaturedTools() {
  // Sample tools data - in a real app, this would come from an API or database
  const tools = [
    {
      id: 1,
      title: "Old English Converter",
      description:
        "Convert modern English to old English effortlessly with our modern to old English converter.",
      icon: <FileText className="h-8 w-8 text-black" />,
      category: "productivity",
      badge: "Popular",
      badgeColor: "bg-blue-900 text-white",
      href: "/convert-to-old-english",
    },
    {
      id: 2,
      title: "UDF to PDF Converter",
      description:
        "Convert UDF files to PDF format quickly and easily. Perfect for sharing and printing.",
      icon: <FileText className="h-8 w-8 text-black" />,
      category: "design",
      badge: "New",
      badgeColor: "bg-pink-900 text-white ",
      href: "/udf-to-pdf",
    },
    {
      id: 3,
      title: "MHTML to PDF Converter",
      description:
        "Convert MHTML files to PDF format quickly and easily. Perfect for sharing and printing.",
      icon: <Code className="h-8 w-8 text-black" />,
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
      icon: <FileText className="h-8 w-8 text-black" />,
      category: "productivity",
      badge: null,
      badgeColor: "",
      href: "/docsend-to-pdf",
    },
    {
      id: 5,
      title: "Youtube Music Extractor",
      description:
        "Extract audio from YouTube videos and convert them to MP3 format. Perfect for offline listening.",
      icon: <PenTool className="h-8 w-8 text-black" />,
      category: "design",
      badge: null,
      badgeColor: "",
      href: "/extract-youtube-music",
    },
    {
      id: 6,
      title: "Performance Analyzer",
      description:
        "Analyze and optimize your website's performance. Get actionable insights to improve speed and user experience.",
      icon: <Zap className="h-8 w-8 text-black" />,
      category: "development",
      badge: "Featured",
      badgeColor: " text-black border-black",
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
