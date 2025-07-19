import UdfToPdfConverter from "./main";
import ToolContent from "./ToolContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UdfToPdfPage() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-12 md:pt-16 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-blue-900 text-white">
                Free Tool
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                UDF to PDF Converter
              </h1>
              <p className="text-slate-700 md:text-lg max-w-[800px]">
                Convert Universal Disk Format (UDF) files to PDF documents quickly and
                easily. No installation required.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="w-full py-8 md:py-12 ">
          <div className="container px-4 md:px-6">
            <UdfToPdfConverter />
          </div>
        </section>

        {/* All SEO Content */}
        <ToolContent />
      </main>
      <Footer />
    </div>
  );
}
