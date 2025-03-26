"use client";

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
import { useState } from "react";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-blue-100 to-blue-50 sm:px-24">
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
              <Link href="/" className="text-xl font-bold text-blue-600">
                ToolMaster
              </Link>
              <SheetClose>
                <X className="h-5 w-5" />
              </SheetClose>
            </div>
            <nav className="grid gap-4 text-lg font-medium text-slate-700">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/tools" className="hover:text-blue-600">
                All Tools
              </Link>
              <Link href="/new" className="hover:text-blue-600">
                New Tools
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hidden sm:block"
        >
          ToolMaster
        </Link>
        <Link href="/" className="text-xl font-bold text-blue-600 sm:hidden">
          TM
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700 mx-auto">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/tools" className="hover:text-blue-600">
            All Tools
          </Link>
          <Link href="/new" className="hover:text-blue-600">
            New Tools
          </Link>
          <Link href="/popular" className="hover:text-blue-600">
            Popular
          </Link>
          <Link href="#testimonials" className="hover:text-blue-600">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-blue-600">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </nav>

        {/* Search and Contact Button */}
        <div className="flex items-center gap-3">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search tools..."
                className="w-[200px] lg:w-[300px] pr-8 border-slate-300"
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
            </Button>
          )}
          <Button
            asChild
            className="hidden sm:flex bg-blue-600 hover:bg-blue-700"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <hr />
    </header>
  );
}
