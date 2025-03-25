import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedTools } from "@/components/featured-tools";
import { Newsletter } from "@/components/newsletter";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-900">
                <Sparkles className="mr-1 h-3 w-3" /> New tools added weekly
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
                Powerful Tools to Simplify Your Workflow
              </h1>
              <p className="text-slate-700 md:text-xl max-w-[800px]">
                A collection of free, easy-to-use tools designed to boost your
                productivity and streamline your daily tasks.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="#tools">
                    Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  Why Use My Tools?
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Designed with simplicity and efficiency in mind, my tools help
                  you accomplish more in less time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-900">Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Simple and intuitive interfaces that require no learning
                    curve or technical expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-900">Time-Saving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Automate repetitive tasks and streamline your workflow to
                    save valuable time.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-900">
                    Regularly Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    New features and improvements added regularly based on user
                    feedback and needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  Featured Tools
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Discover the most popular tools that users love.
                </p>
              </div>
            </div>
            <FeaturedTools />
            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/tools">
                  View All Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  Browse by Category
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Find the perfect tool for your specific needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Link href="/category/productivity" className="group">
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-slate-900">Productivity</h3>
                </div>
              </Link>
              <Link href="/category/development" className="group">
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-700"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-slate-900">Development</h3>
                </div>
              </Link>
              <Link href="/category/design" className="group">
                <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-slate-900">Design</h3>
                </div>
              </Link>
              <Link href="/category/utilities" className="group">
                <div className="bg-amber-50 p-6 rounded-lg text-center hover:bg-amber-100 transition-colors h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-700"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-slate-900">Utilities</h3>
                </div>
              </Link>
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
