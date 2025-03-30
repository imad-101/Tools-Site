"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import allTools from "@/app/allTools";

// Define TypeScript interface for tools
interface Tool {
  id: number; // Change to match the type used in allTools
  title: string;
  href: string;
}

// Mock tools data - replace with your actual import
// This prevents TypeScript errors if allTools import isn't working

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allTools.filter((tool) =>
      tool.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white sm:px-24">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile Menu Toggle - Left on mobile */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Logo - Centered on mobile, left on desktop */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:ml-16 ${
            isSearchOpen ? "hidden sm:block" : "block"
          }`}
        >
          <Link href="/" className="text-xl font-extrabold text-black">
            Free Tool Now
          </Link>
        </div>
        {/* Centered Navigation - Desktop only */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 mx-auto">
          <Link href="/" className="hover:text-blue-800 transition-colors">
            Home
          </Link>
          <Link
            href="#categories"
            className="hover:text-blue-800 transition-colors"
          >
            Categories
          </Link>
          <Link href="/tools" className="hover:text-blue-800 transition-colors">
            All Tools
          </Link>
          <Link
            href="#featured"
            className="hover:text-blue-800 transition-colors"
          >
            Popular
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-blue-800 transition-colors"
          >
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-blue-800 transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="hover:text-blue-800 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Search and Contact Button - Right aligned */}
        <div className="flex items-center gap-3">
          {isSearchOpen ? (
            <div className="relative flex-1 sm:flex-none">
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pr-8 rounded-full transition-all"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 text-slate-500 h-full"
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
          <Button asChild className="hidden sm:flex bg-black hover:bg-gray-800">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>

      {/* Modern Dropdown Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top">
          <nav className="flex flex-col py-4 px-6">
            <Link
              href="/"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#categories"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="#featured"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              New Tools
            </Link>
            <Link
              href="#featured"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Popular
            </Link>
            <Link
              href="#testimonials"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="py-3 px-2 hover:bg-gray-50 rounded-md flex items-center text-slate-800 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="mt-2 py-3 px-2 bg-black text-white rounded-md flex items-center justify-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      <hr />
    </header>
  );
}
