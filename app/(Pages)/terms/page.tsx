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
  title: "Terms of Use - Free Tool Now",
  description:
    "Understand the terms and conditions for using Free Tool Now and its services.",
};

export default function TermsOfUsePage() {
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
                href="/terms-of-use"
                className="font-semibold text-black"
              >
                Terms of Use
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Terms of Use Content */}
        <h1 className="text-3xl font-bold mt-6 mb-4">Terms of Use</h1>
        <p className="text-gray-700 mb-6">
          Welcome to <strong>Free Tool Now</strong>. By using our website and
          services, you agree to these terms. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-700 mb-4">
          By accessing and using our website, you accept and agree to abide by
          these terms. If you do not agree, you should discontinue use
          immediately.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Permitted Use</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>You may use our tools for personal and professional purposes.</li>
          <li>
            Misuse, hacking, or unauthorized access to our systems is strictly
            prohibited.
          </li>
          <li>
            Scraping, replicating, or redistributing our services without
            permission is not allowed.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Intellectual Property
        </h2>
        <p className="text-gray-700 mb-4">
          All content, including logos, text, and UI designs, is the
          intellectual property of <strong>Free Tool Now</strong>. Unauthorized
          use or reproduction is prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Disclaimers & Liability
        </h2>
        <p className="text-gray-700 mb-4">
          Our tools are provided "as is" without warranties. We are not liable
          for any damages resulting from the use or inability to use our
          services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to modify these terms at any time. Continued use
          of our services means you accept the latest version of these terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions regarding these Terms of Use, please contact
          us at:
        </p>
        <p className="font-semibold text-gray-900">support@freetoolnow.com</p>
      </div>
      <Footer />
    </>
  );
}
