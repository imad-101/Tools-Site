"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import allTools from "@/app/allTools";
import React from "react";

// Update the Tool interface to expect icon as a JSX.Element
interface Tool {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  badge: string | null;
  badgeColor: string;
  href: string;
}

export function SearchTools() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allTools.filter((tool: Tool) =>
      tool.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleResultClick = (href: string) => {
    setSearchQuery("");
    setIsFocused(false);
    router.push(href);
  };

  return (
    <div className="w-full max-w-2xl mt-6 relative">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search all tools..."
          className="w-full h-14 px-6 text-lg rounded-full border-2 border-slate-200 hover:border-slate-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        <Search className="absolute right-6 top-4 h-6 w-6 text-slate-500" />
      </div>

      {searchQuery && isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            searchResults.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center p-4 hover:bg-slate-50 text-slate-700 border-b last:border-0 group transition-colors cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleResultClick(tool.href);
                }}
              >
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{tool.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 ml-4 group-hover:translate-x-1 transition-transform" />
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-slate-500">
              {`No tools found for "${searchQuery}"`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
