"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <nav
      className={cn(
        "flex items-center space-x-1 text-sm text-muted-foreground",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index === 0 ? (
            <Link
              href={item.href || "/"}
              className="flex items-center hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              {item.label}
            </Link>
          ) : (
            <>
              <ChevronRight className="w-4 h-4 mx-1" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">
                  {item.label}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </nav>
  );
};
