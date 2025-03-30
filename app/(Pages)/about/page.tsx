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
  title: "About Us - Free Tool Now",
  description:
    "Discover our mission and how Free Tool Now helps users with free online tools.",
};

export default function AboutUsPage() {
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
                href="/about"
                className="font-semibold text-black"
              >
                About Us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* About Us Content */}
        <h1 className="text-3xl font-bold mt-6 mb-4">About Us</h1>
        <p className="text-gray-700 mb-6">
          Welcome to <strong>Free Tool Now</strong>, a platform dedicated to
          providing high-quality free online tools to help users with various
          tasks.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our goal is to make essential online tools accessible to everyone. We
          strive to offer user-friendly, reliable, and efficient solutions for
          developers, students, and professionals.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Completely free tools with no hidden charges.</li>
          <li>Fast, responsive, and easy-to-use interfaces.</li>
          <li>
            Constant updates and new tool additions based on user feedback.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Meet the Team</h2>
        <p className="text-gray-700 mb-4">
          Our team consists of passionate developers and designers dedicated to
          building high-quality tools that simplify everyday tasks.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Have suggestions or feedback? We'd love to hear from you! Reach out to
          us at:
        </p>
        <p className="font-semibold text-gray-900">support@freetoolnow.com</p>
      </div>
      <Footer />
    </>
  );
}
