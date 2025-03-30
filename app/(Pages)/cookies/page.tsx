import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookies Policy - Free Tool Now",
  description:
    "Learn how Free Tool Now uses cookies to enhance your experience and improve our services.",
};

export default function CookiesPolicyPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList className="text-gray-500">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/cookies"
                className="font-semibold text-black"
              >
                Cookies Policy
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Cookies Policy Content */}
        <h1 className="text-3xl font-bold mt-6 mb-4">Cookies Policy</h1>
        <p className="text-gray-700 mb-6">
          At <strong>Free Tool Now</strong>, we use cookies to enhance your
          browsing experience. This page explains how we use cookies and how you
          can manage them.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. What Are Cookies?
        </h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files stored on your device that help websites
          recognize you, save preferences, and improve performance.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Cookies
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Enhancing website functionality and user experience.</li>
          <li>Analyzing website traffic and performance.</li>
          <li>Providing relevant advertisements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Managing Cookies</h2>
        <p className="text-gray-700 mb-4">
          You can manage or disable cookies through your browser settings.
          However, some features may not function properly without them.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about our Cookies Policy, contact us at:
        </p>
        <p className="font-semibold text-gray-900">support@freetoolnow.com</p>
      </div>
      <Footer />
    </>
  );
}
