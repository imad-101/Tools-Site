"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <Navbar />
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
                <Link href="/tools">Browse All Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
