import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedTools } from "@/components/featured-tools";
import Testimonials from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { SearchTools } from "@/components/SearchTools";
import { CategoriesSection } from "@/components/Categories";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-24  bg-white sm:h-[44rem]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-7">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-900 text-white">
                <Sparkles className="mr-1 h-3 w-3" /> New tools added weekly
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl xl:text-6xl/none text-slate-900">
                Free Online Tools to Simplify Your Workflow
              </h1>
              <p className="text-slate-700 md:text-xl max-w-[800px]">
                A collection of free, easy-to-use online tools designed to boost
                your productivity and streamline your daily tasks.
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
        <section className="w-full pt-12  md:py-20 bg-gray-50 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white inline-block rounded-lg bg-black px-3 py-1">
                  Why Use Our Tools?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Designed with simplicity and efficiency in mind, Our tools
                  help you accomplish more in less time.
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
        <section className="w-full py-6 md:py-20 bg-white" id="featured">
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

        <CategoriesSection />
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
