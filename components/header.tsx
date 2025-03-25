"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-700"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white">
              <div className="flex items-center mb-6">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl text-blue-600">
                    ToolMaster
                  </span>
                </Link>
                <SheetClose className="ml-auto">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>
              <nav className="grid gap-6 text-lg font-medium text-slate-700">
                <Link
                  href="/merger"
                  className="hover:text-blue-600 transition-colors"
                >
                  Word Document Merger
                </Link>
                <Link
                  href="/udf-to-pdf"
                  className="hover:text-purple-600 transition-colors"
                >
                  UDF to PDF Converter
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-blue-600 hidden sm:inline">
              ToolMaster
            </span>
            <span className="font-bold text-xl text-blue-600 sm:hidden">
              TM
            </span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 mx-auto justify-center">
          <Link
            href="/merger"
            className="hover:text-blue-600 transition-colors"
          >
            Word Document Merger
          </Link>
          <Link
            href="/udf-to-pdf"
            className="hover:text-purple-600 transition-colors"
          >
            UDF to PDF Converter
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search tools..."
                className="w-[200px] lg:w-[300px] pr-8 border-slate-300 focus-visible:ring-blue-500"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 text-slate-500"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-700"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
