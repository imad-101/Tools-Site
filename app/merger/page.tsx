import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MergerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-blue-100 text-blue-900">
                Free Tool
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                Word Document Merger
              </h1>
              <p className="text-slate-700 md:text-lg max-w-[800px]">
                Easily combine multiple Word documents into a single file. Fast,
                secure, and completely free.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Section */}

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Merging your Word documents is simple and secure. Here's how
                  to do it:
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Upload Your Files
                </h3>
                <p className="text-slate-600">
                  Drag and drop your Word documents (.docx files) or use the
                  file selector to upload them.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Arrange Your Documents
                </h3>
                <p className="text-slate-600">
                  The documents will be merged in the order they appear in the
                  list. You can remove files if needed.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Download Merged Document
                </h3>
                <p className="text-slate-600">
                  Click the "Merge Documents" button and your combined document
                  will be ready to download.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Important Notes
              </h3>
              <ul className="space-y-2 text-slate-600 list-disc pl-5">
                <li>
                  All processing happens in your browser - your files are never
                  uploaded to our servers
                </li>
                <li>
                  The tool preserves formatting, styles, and images from your
                  original documents
                </li>
                <li>
                  There's no limit on the number of documents you can merge
                </li>
                <li>
                  For best results, ensure all documents use compatible
                  formatting
                </li>
                <li>Maximum file size: 10MB per document</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Find answers to common questions about our Word Document
                  Merger tool.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Is this tool completely free?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, our Word Document Merger is completely free to use with
                    no hidden fees or premium features. We believe in providing
                    accessible tools for everyone.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Are my documents secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Absolutely. All document processing happens directly in your
                    browser. Your files are never uploaded to our servers,
                    ensuring complete privacy and security.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    What file formats are supported?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Currently, our tool supports modern Word documents (.docx
                    format). We don't support older .doc files, PDF files, or
                    other document formats at this time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Is there a limit to how many documents I can merge?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    There's no limit on the number of documents you can merge.
                    However, each individual file should be under 10MB for
                    optimal performance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Will my document formatting be preserved?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, our tool preserves most formatting, styles, images, and
                    other elements from your original documents. However,
                    complex formatting or elements like macros may not transfer
                    perfectly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Can I change the order of documents before merging?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Currently, documents are merged in the order they are
                    uploaded. To change the order, you can remove files and
                    re-upload them in your preferred sequence.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
