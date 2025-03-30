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
  title: "Privacy Policy - Free Tool Now",
  description:
    "Learn how we collect, use, and protect your information when using Free Tool Now.",
};

export default function PrivacyPolicyPage() {
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
                href="/privacy"
                className="font-semibold text-black"
              >
                Privacy Policy
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Privacy Policy Content */}
        <h1 className="text-3xl font-bold mt-6 mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          Thank you for choosing <strong>Free Tool Now</strong> (“we,” “us,” or
          “our”). This Privacy Policy explains how we collect, use, and
          safeguard your personal information when you visit our website and use
          our services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect different types of information depending on how you
          interact with our website, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>
            <strong>Personal Information:</strong> If you contact us, we may
            collect your email address or name.
          </li>
          <li>
            <strong>Technical Data:</strong> We collect browser type, IP
            address, and other analytics for security and performance
            improvements.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to enhance user experience
            and analyze site traffic.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the collected information to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Improve our website functionality and content.</li>
          <li>Analyze trends and monitor security.</li>
          <li>Respond to user inquiries and feedback.</li>
          <li>
            Comply with legal requirements and prevent fraudulent activities.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Data Protection and Security
        </h2>
        <p className="text-gray-700 mb-4">
          We take necessary security measures to protect your data. However, we
          cannot guarantee complete security as online data transmission is
          never 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="font-semibold text-gray-900">support@freetoolnow.com</p>
      </div>
      <Footer />
    </>
  );
}
