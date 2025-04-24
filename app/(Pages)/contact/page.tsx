"use client";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send, CheckCircle } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("submitting");

    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-6 px-4 max-w-6xl">
          {/* Breadcrumb navigation */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="font-semibold">
                    Contact Us
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to our team and we'll
              get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">
                    Get in Touch
                  </CardTitle>
                  <CardDescription>
                    We're here to help and answer any questions you might have.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-900 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-gray-600">+92 301 8969 409</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-900 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-gray-600">freetoolnow@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-900 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-gray-600">
                            Danin - Chitral Pakistan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll get back to you
                        shortly.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setFormStatus("idle")}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="What is your message about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={errors.subject ? "border-red-500" : ""}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </form>
                  )}
                </CardContent>
                {formStatus !== "success" && (
                  <CardFooter className="flex justify-center sm:justify-end">
                    <Button
                      type="submit"
                      size="lg"
                      onClick={handleSubmit}
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </div>
          </div>

          <div className="my-16 text-center">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How quickly will you respond?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within 24 hours during
                    business days. For urgent matters, please indicate in your
                    subject line.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Do you offer custom tool development?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! If you need a specialized tool that's not in our
                    collection, let us know your requirements and we'd be happy
                    to discuss custom solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
