"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  Code,
  Image,
  Wrench,
  Palette,
  Database,
  Lock,
  Cloud,
  Video,
  Megaphone,
  BrainCircuit,
  BookText,
  Network,
  Smartphone,
  Mail,
  Shield,
  Globe,
  BarChart,
  Zap,
  Wallet,
} from "lucide-react";

interface Category {
  id: number;
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  // First 10 categories (5 left, 5 right)
  {
    id: 1,
    name: "Productivity",
    description: "Tools to help you work smarter and accomplish more",
    href: "/category/productivity",
    icon: <FileText className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 2,
    name: "Development",
    description: "Tools for developers to streamline coding workflows",
    href: "/category/development",
    icon: <Code className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 3,
    name: "Design",
    description: "Creative tools to bring your design ideas to life",
    href: "/category/design",
    icon: <Image className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 4,
    name: "Utilities",
    description: "Essential utilities for everyday digital tasks",
    href: "/category/utilities",
    icon: <Wrench className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 5,
    name: "Security",
    description: "Tools to protect your digital assets and privacy",
    href: "/category/security",
    icon: <Lock className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 6,
    name: "Cloud",
    description: "Cloud storage and management tools",
    href: "/category/cloud",
    icon: <Cloud className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 7,
    name: "Data",
    description: "Data analysis and management tools",
    href: "/category/data",
    icon: <Database className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 8,
    name: "Graphics",
    description: "Advanced graphic design and editing tools",
    href: "/category/graphics",
    icon: <Palette className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 9,
    name: "Video",
    description: "Video editing and processing tools",
    href: "/category/video",
    icon: <Video className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 10,
    name: "Marketing",
    description: "Digital marketing and campaign management tools",
    href: "/category/marketing",
    icon: <Megaphone className="h-8 w-8 text-gray-600" />,
  },
  // Additional 10 categories (5 left, 5 right)
  {
    id: 11,
    name: "AI Tools",
    description: "Artificial intelligence and machine learning tools",
    href: "/category/ai",
    icon: <BrainCircuit className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 12,
    name: "Documentation",
    description: "Technical writing and documentation tools",
    href: "/category/documentation",
    icon: <BookText className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 13,
    name: "Networking",
    description: "Network monitoring and optimization tools",
    href: "/category/networking",
    icon: <Network className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 14,
    name: "Mobile",
    description: "Mobile app development and testing tools",
    href: "/category/mobile",
    icon: <Smartphone className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 15,
    name: "Email",
    description: "Email marketing and management tools",
    href: "/category/email",
    icon: <Mail className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 16,
    name: "Privacy",
    description: "Online privacy and anonymity tools",
    href: "/category/privacy",
    icon: <Shield className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 17,
    name: "SEO",
    description: "Search engine optimization and analytics tools",
    href: "/category/seo",
    icon: <Globe className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 18,
    name: "Analytics",
    description: "Business intelligence and analytics platforms",
    href: "/category/analytics",
    icon: <BarChart className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 19,
    name: "Automation",
    description: "Workflow automation and scripting tools",
    href: "/category/automation",
    icon: <Zap className="h-8 w-8 text-gray-600" />,
  },
  {
    id: 20,
    name: "Finance",
    description: "Financial management and accounting tools",
    href: "/category/finance",
    icon: <Wallet className="h-8 w-8 text-gray-600" />,
  },
];

export function CategoriesSection() {
  const [expanded, setExpanded] = useState(false);

  // Split categories into groups
  const mainCategories = categories.slice(0, 8);
  const additionalCategories = categories.slice(8);

  const leftMain = mainCategories.slice(0, 4);
  const rightMain = mainCategories.slice(4, 8);
  const leftAdditional = additionalCategories.slice(0, 5);
  const rightAdditional = additionalCategories.slice(5, 10);

  return (
    <section className="w-full pt-12 pb-6 md:py-20 bg-gray-50" id="categories">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight inline-block rounded-lg bg-black text-white px-3 py-1">
              Browse by Category
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Find the perfect tool for your specific needs
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Main */}
            <div className="flex flex-col space-y-6">
              {leftMain.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>

            {/* Right Column - Main */}
            <div className="flex flex-col space-y-6">
              {rightMain.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>

            {/* Additional Categories */}
            {expanded && (
              <>
                <div className="flex flex-col space-y-6">
                  {leftAdditional.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                  ))}
                </div>
                <div className="flex flex-col space-y-6">
                  {rightAdditional.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="border-gray-200 text-gray-700 hover:bg-gray-50"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "View All Categories"}
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-200 transition-colors">
        {category.icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm">{category.description}</p>
      </div>
      <div className="flex-shrink-0 ml-4">
        <ArrowRight className="hidden sm:block h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>
    </Link>
  );
}
