import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedTools } from "@/components/featured-tools";
import { Testimonials } from "@/components/testemonials";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { SearchTools } from "@/components/SearchTools";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Code,
  Image,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24  bg-white sm:h-[44rem]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-7">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-800 text-black-900">
                <Sparkles className="mr-1 h-3 w-3" /> New tools added weekly
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl xl:text-6xl/none text-slate-900">
                Powerful Tools to Simplify Your Workflow
              </h1>
              <p className="text-slate-700 md:text-xl max-w-[800px]">
                A collection of free, easy-to-use tools designed to boost your
                productivity and streamline your daily tasks.
              </p>

              <SearchTools />

              <Button asChild size="lg" variant={"outline"} className="mt-4 ">
                <Link href="/tools">
                  Browse All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white inline-block rounded-lg bg-black px-3 py-1">
                  Why Use Our Tools?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Designed with simplicity and efficiency in mind, my tools help
                  you accomplish more in less time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <Card className="bg-white border-gray-200 shadow-sm hover:shadow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-gray-900">Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Simple and intuitive interfaces that require no learning
                    curve or technical expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 shadow-sm hover:shadow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-gray-900">Time-Saving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Automate repetitive tasks and streamline your workflow to
                    save valuable time.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 shadow-sm hover:shadow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-gray-900">
                    Regularly Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    New features and improvements added regularly based on user
                    feedback and needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                  Featured Tools
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Discover the most popular tools that users love.
                </p>
              </div>
            </div>
            <FeaturedTools />
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-black hover:bg-gray-800">
                <Link href="/tools">
                  View All Tools{" "}
                  <ArrowRight className=" hidden sm:block ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50" id="categories">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight inline-block rounded-lg bg-black text-white px-3 py-1">
                  Browse by Category
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Find the perfect tool for your specific needs
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-6">
                  <Link
                    href="/category/productivity"
                    className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-200 transition-colors">
                      <FileText className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        Productivity
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Tools to help you work smarter and accomplish more
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ArrowRight className=" hidden sm:block h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </Link>

                  <Link
                    href="/category/development"
                    className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-200 transition-colors">
                      <Code className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        Development
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Tools for developers to streamline coding workflows
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ArrowRight className=" hidden sm:block h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </Link>
                </div>

                <div className="flex flex-col space-y-6">
                  <Link
                    href="/category/design"
                    className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-200 transition-colors">
                      <Image className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        Design
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Creative tools to bring your design ideas to life
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ArrowRight className=" hidden sm:block h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </Link>

                  <Link
                    href="/category/utilities"
                    className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-200 transition-colors">
                      <Wrench className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        Utilities
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Essential utilities for everyday digital tasks
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ArrowRight className=" hidden sm:block h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <Link href="/categories">
                    View All Categories{" "}
                    <ArrowRight className=" hidden sm:block ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
