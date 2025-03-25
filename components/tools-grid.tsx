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
  Code,
  FileText,
  Image,
  LineChart,
  PenTool,
  Zap,
} from "lucide-react";

interface ToolsGridProps {
  category: string;
}

export function ToolsGrid({ category }: ToolsGridProps) {
  // Sample tools data - in a real app, this would come from an API or database
  const allTools = [
    {
      id: 1,
      title: "Text Formatter",
      description: "Format, clean, and transform text with various options.",
      icon: <FileText className="h-8 w-8" />,
      category: "productivity",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Image Optimizer",
      description: "Compress and optimize images without losing quality.",
      icon: <Image className="h-8 w-8" />,
      category: "design",
      badge: "New",
    },
    {
      id: 3,
      title: "Code Beautifier",
      description: "Format and beautify code in various programming languages.",
      icon: <Code className="h-8 w-8" />,
      category: "development",
      badge: null,
    },
    {
      id: 4,
      title: "Data Visualizer",
      description: "Create beautiful charts and graphs from your data.",
      icon: <LineChart className="h-8 w-8" />,
      category: "productivity",
      badge: null,
    },
    {
      id: 5,
      title: "Color Picker",
      description: "Find the perfect color palette for your projects.",
      icon: <PenTool className="h-8 w-8" />,
      category: "design",
      badge: null,
    },
    {
      id: 6,
      title: "Performance Analyzer",
      description: "Analyze and optimize your website's performance.",
      icon: <Zap className="h-8 w-8" />,
      category: "development",
      badge: "Featured",
    },
  ];

  // Filter tools based on category
  const tools =
    category === "all"
      ? allTools
      : allTools.filter((tool) => tool.category === category);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <Card key={tool.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-muted rounded-md">{tool.icon}</div>
              {tool.badge && <Badge variant="secondary">{tool.badge}</Badge>}
            </div>
            <CardTitle className="mt-4">{tool.title}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </CardHeader>
          <CardFooter className="pt-3">
            <Button asChild variant="outline" className="w-full">
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
