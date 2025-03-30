"use client";

import Link from "next/link";
import { Menu, Search, X, LucideProps } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import allTools from "@/app/allTools"; // Update import path as needed
import React from "react";

// Define the Tool interface for proper type checking
interface Tool {
  id: number;
  title: string;
  description: string;
  icon: React.FunctionComponentElement<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  category: string;
  badge: string;
  badgeColor: string;
  href: string;
}

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Tool[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allTools.filter(
      (tool): tool is Tool =>
        tool.badge !== null && tool.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white sm:px-24">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-700"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="text-xl font-extrabold text-black">
                Free Tool Now
              </Link>
              <SheetClose>
                <X className="h-5 w-5" />
              </SheetClose>
            </div>
            <nav className="grid gap-4 text-lg font-medium text-slate-700">
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
              <Link href="/tools" className="hover:text-blue-800">
                All Tools
              </Link>
              <Link href="/new" className="hover:text-blue-800">
                New Tools
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-black">
          Free Tool Now
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 mx-auto">
          <Link href="/" className="hover:text-blue-800">
            Home
          </Link>
          <Link href="/tools" className="hover:text-blue-800">
            All Tools
          </Link>
          <Link href="/new" className="hover:text-blue-800">
            New Tools
          </Link>
          <Link href="/popular" className="hover:text-blue-800">
            Popular
          </Link>
          <Link href="#testimonials" className="hover:text-blue-800">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-blue-800">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-blue-800">
            About
          </Link>
        </nav>

        {/* Search and Contact Button */}
        <div className="flex items-center gap-3">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search tools..."
                className="w-[200px] lg:w-[300px] pr-8 border-slate-300"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 text-slate-500"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((tool) => (
                      <Link
                        key={tool.id}
                        href={tool.href}
                        className="block p-2 px-4 hover:bg-slate-100 text-slate-700 text-sm border-b last:border-0"
                        onClick={clearSearch}
                      >
                        {tool.title}
                      </Link>
                    ))
                  ) : (
                    <div className="p-2 px-4 text-sm text-slate-500">
                      No tools found
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-700"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button asChild className="hidden sm:flex bg-black hover:bg-gray-900">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <hr />
    </header>
  );
}
