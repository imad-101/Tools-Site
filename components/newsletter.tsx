"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your API
    setIsSubmitted(true);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
              Stay Updated
            </h2>
            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed">
              Subscribe to get notified about new tools and updates.
            </p>
          </div>
          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg max-w-md">
              Thank you for subscribing! You'll be the first to know about new
              tools.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row"
            >
              <Input
                placeholder="Enter your email"
                type="email"
                required
                className="bg-white border-slate-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          )}
          <p className="text-xs text-slate-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
