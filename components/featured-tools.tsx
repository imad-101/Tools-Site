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
import {
  ArrowRight,
  FileText,
  Image,
  Code,
  LineChart,
  PenTool,
  Zap,
} from "lucide-react";

export function FeaturedTools() {
  // Sample tools data - in a real app, this would come from an API or database
  const tools = [
    {
      id: 1,
      title: "Text Formatter",
      description:
        "Format, clean, and transform text with various options. Perfect for content creators and developers.",
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      category: "productivity",
      badge: "Popular",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: 2,
      title: "Image Optimizer",
      description:
        "Compress and optimize images without losing quality. Reduce file sizes for faster websites.",
      icon: <Image className="h-8 w-8 text-green-600" />,
      category: "design",
      badge: "New",
      badgeColor: "bg-green-100 text-green-800 border-green-200",
    },
    {
      id: 3,
      title: "Code Beautifier",
      description:
        "Format and beautify code in various programming languages. Make your code more readable and maintainable.",
      icon: <Code className="h-8 w-8 text-purple-600" />,
      category: "development",
      badge: null,
      badgeColor: "",
    },
    {
      id: 4,
      title: "Data Visualizer",
      description:
        "Create beautiful charts and graphs from your data. Perfect for reports and presentations.",
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      category: "productivity",
      badge: null,
      badgeColor: "",
    },
    {
      id: 5,
      title: "Color Picker",
      description:
        "Find the perfect color palette for your projects. Includes accessibility checks and color harmony tools.",
      icon: <PenTool className="h-8 w-8 text-pink-600" />,
      category: "design",
      badge: null,
      badgeColor: "",
    },
    {
      id: 6,
      title: "Performance Analyzer",
      description:
        "Analyze and optimize your website's performance. Get actionable insights to improve speed and user experience.",
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      category: "development",
      badge: "Featured",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <Card
          key={tool.id}
          className="overflow-hidden bg-white border-slate-200 shadow-sm hover:shadow transition-shadow"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-slate-100 rounded-md">{tool.icon}</div>
              {tool.badge && (
                <Badge variant="outline" className={tool.badgeColor}>
                  {tool.badge}
                </Badge>
              )}
            </div>
            <CardTitle className="mt-4 text-slate-900">{tool.title}</CardTitle>
            <CardDescription className="text-slate-600">
              {tool.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-slate-200 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <Link href={`/tools/${tool.id}`}>
                Use Tool <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
