"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-black">
            Free Tool Now
          </Link>

          <nav className="flex flex-wrap gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Categories
            </Link>
            <Link
              href="/new-tools"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              New Tools
            </Link>
            <Link
              href="/popular"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Popular
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search tools..."
                className="w-full md:w-64 pr-8 rounded-full"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800"
            >
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Error Information */}
          <div className="space-y-6">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl font-semibold text-gray-900">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Oops! The tool or page you're looking for seems to have
              disappeared from our toolkit. It may have been moved, renamed, or
              it doesn't exist.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <Home size={18} />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#featured">Browse All Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
