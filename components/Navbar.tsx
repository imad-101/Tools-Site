"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchDropdown from "@/components/SearchDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/#categories" },
    { name: "Popular", href: "/#popular" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Sample tools for navbar search
  const sampleTools = [
    {
      name: "Image Compressor",
      description: "Compress images",
      category: "Images",
    },
    {
      name: "JSON Formatter",
      description: "Format JSON",
      category: "Development",
    },
    {
      name: "Password Generator",
      description: "Generate passwords",
      category: "Text Tools",
    },
    {
      name: "Unit Converter",
      description: "Convert units",
      category: "Calculators",
    },
    {
      name: "QR Code Generator",
      description: "Create QR codes",
      category: "Text Tools",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Free Tool Now
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Quick search - desktop only */}
            <div className="hidden lg:flex items-center space-x-2">
              <SearchDropdown
                searchQuery={navSearchQuery}
                setSearchQuery={setNavSearchQuery}
                tools={sampleTools}
                className="w-64 h-9 bg-muted/50 border-border/50 focus:bg-background"
                placeholder="Quick search..."
              />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile search */}
              <div className="mb-3">
                <SearchDropdown
                  searchQuery={navSearchQuery}
                  setSearchQuery={setNavSearchQuery}
                  tools={sampleTools}
                  className="bg-muted/50 border-border/50"
                  placeholder="Search tools..."
                />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
