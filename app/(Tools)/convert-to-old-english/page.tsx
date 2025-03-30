import ConvertToOldEnglish from "./main";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConvertToOldEnglishPage() {
  return (
    <div
      className="flex min-h-screen flex-col bg-green-50  "
      id="convert-to-old-english"
    >
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-6 md:py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-transparent bg-emerald-100 text-blue-900">
                Free Tool
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                Convert to Old English
              </h1>
              <p className="text-slate-700 md:text-lg max-w-[800px]">
                Transform modern English text into the rich, historic language
                of Old English quickly and easily.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="w-full py-8 md:py-12 bg-white">
          <div className="container px-4 md:px-6">
            <ConvertToOldEnglish />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Converting modern English to Old English is as simple as three
                  steps:
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Input Your Text
                </h3>
                <p className="text-slate-600">
                  Enter the modern English text you wish to convert using our
                  easy-to-use text editor.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Convert to Old English
                </h3>
                <p className="text-slate-600">
                  Click the "Convert" button and let our advanced converter
                  transform your modern text into authentic Old English.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Copy or Download
                </h3>
                <p className="text-slate-600">
                  Once the conversion is complete, copy the Old English text or
                  download it as a document.
                </p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                About Old English
              </h3>
              <p className="text-slate-600 mb-4">
                Old English, the language of early medieval England, is known
                for its rich vocabulary and historical significance. Our
                converter recreates this unique style, giving your modern text a
                touch of history and authenticity.
              </p>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Key Features
              </h4>
              <ul className="space-y-2 text-slate-600 list-disc pl-5">
                <li>Authentic Old English vocabulary and syntax</li>
                <li>Easy-to-use online conversion without installation</li>
                <li>Instant conversion with high accuracy</li>
                <li>Copy, download, or share your converted text</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Find answers to common questions about our Old English
                  converter.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto ">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    What is Old English?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Old English is the earliest historical form of the English
                    language, spoken in parts of what are now England and
                    southern Scotland between the mid-5th and mid-12th
                    centuries. It has a unique vocabulary and grammar distinct
                    from modern English.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How accurate is the conversion?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Our converter uses advanced language processing techniques
                    to recreate the style of Old English. While it captures the
                    essence of Old English, some modern expressions may be
                    adapted to fit the historic context.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Can I edit the converted text?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, after conversion you can manually adjust the text to
                    better suit your needs. The output is provided in a format
                    that can be copied and edited easily.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Is there a limit to the text length I can convert?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Our free tool is designed for standard text lengths. For
                    extremely long texts or batch conversions, please consider
                    our premium options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Is my data secure during conversion?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Absolutely. All processing happens locally in your browser,
                    ensuring that your text remains private and secure.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Dedicated Article/Blog Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <article className="max-w-4xl mx-auto">
              <header className="mb-8 text-center">
                <h2 className="text-4xl font-bold tracking-tighter text-slate-900">
                  The Ultimate Guide to Converting Modern English to Old English
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Discover expert tips, best practices, and a step-by-step guide
                  for transforming modern English text into authentic Old
                  English.
                </p>
              </header>

              {/* Introduction */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Introduction
                </h3>
                <p className="text-slate-700 mb-4">
                  In a world where modern English is the norm, there remains a
                  timeless fascination with the language of the past. Converting
                  modern English into Old English not only gives your text an
                  archaic charm but also provides a unique way to explore
                  history and literature. Our{" "}
                  <strong>old english converter</strong> is designed to make
                  this transformation accessible and fun.
                </p>
                <p className="text-slate-700">
                  Whether you're a writer, historian, or simply a language
                  enthusiast, this guide will help you learn how to{" "}
                  <strong>convert modern english to old english online</strong>{" "}
                  and appreciate the beauty of a bygone era.
                </p>
              </section>

              {/* Why Convert to Old English */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Why Convert to Old English?
                </h3>
                <p className="text-slate-700 mb-4">
                  There are many reasons to convert modern English into Old
                  English:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Historical Appreciation:</strong> Experience the
                    language as it was spoken centuries ago.
                  </li>
                  <li>
                    <strong>Creative Expression:</strong> Add a unique, archaic
                    flair to your writing or creative projects.
                  </li>
                  <li>
                    <strong>Learning Opportunity:</strong> Gain insights into
                    the evolution of the English language.
                  </li>
                  <li>
                    <strong>Novelty and Fun:</strong> Explore a different
                    linguistic style and challenge yourself with a unique
                    transformation.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Our tool is ideal for anyone looking to{" "}
                  <strong>convert to old english</strong> and enjoy the rich
                  textures of historical language.
                </p>
              </section>

              {/* How the Converter Works */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  How Our Converter Works
                </h3>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 1: Input Your Text
                </h4>
                <p className="text-slate-700 mb-4">
                  Begin by entering the modern English text you wish to convert
                  in our text editor. You can type directly or paste text from
                  any source.
                </p>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 2: Convert the Text
                </h4>
                <p className="text-slate-700 mb-4">
                  Click the "Convert" button to initiate the transformation. Our
                  converter processes the text and applies Old English
                  vocabulary and syntax to generate a stylistically authentic
                  version.
                </p>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 3: Review and Download
                </h4>
                <p className="text-slate-700">
                  Once the conversion is complete, review the output. You can
                  copy the converted text, or download it as a document for
                  further use.
                </p>
              </section>

              {/* Benefits of Using Our Converter */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Benefits of Using Our Converter
                </h3>
                <p className="text-slate-700 mb-4">
                  Our online tool provides a seamless and efficient way to
                  transform modern English into Old English. Key benefits
                  include:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Instant Conversion:</strong> Get your transformed
                    text in seconds.
                  </li>
                  <li>
                    <strong>Authentic Style:</strong> Our converter applies
                    genuine Old English vocabulary and grammar.
                  </li>
                  <li>
                    <strong>User-Friendly Interface:</strong> Enjoy a simple,
                    intuitive process with no installation required.
                  </li>
                  <li>
                    <strong>Privacy and Security:</strong> All processing is
                    done locally in your browser to ensure your data remains
                    private.
                  </li>
                  <li>
                    <strong>Accessible Anywhere:</strong> Use our tool from any
                    device with an internet connection.
                  </li>
                </ul>
                <p className="text-slate-700">
                  By targeting keywords like{" "}
                  <strong>convert to old english</strong> and{" "}
                  <strong>modern english to old english converter</strong>, our
                  solution is optimized for both functionality and
                  discoverability.
                </p>
              </section>

              {/* Best Practices */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Best Practices for Converting to Old English
                </h3>
                <p className="text-slate-700 mb-4">
                  To ensure the best conversion results, consider the following
                  tips:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Use Clear Text:</strong> Ensure your modern English
                    text is well-structured and free of errors.
                  </li>
                  <li>
                    <strong>Review the Output:</strong> Check the converted text
                    for accuracy and make any necessary edits.
                  </li>
                  <li>
                    <strong>Experiment with Styles:</strong> Try different input
                    texts to see how various styles of Old English are applied.
                  </li>
                  <li>
                    <strong>Stay Informed:</strong> Learn about Old English
                    grammar and vocabulary to better understand the conversion
                    process.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Following these practices will enhance your experience when
                  you{" "}
                  <strong>convert modern english to old english online</strong>.
                </p>
              </section>

              {/* Troubleshooting */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Troubleshooting Common Issues
                </h3>
                <p className="text-slate-700 mb-4">
                  Occasionally, you might encounter issues during conversion.
                  Here are some common challenges and their solutions:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Incomplete Conversion:</strong> If the output is
                    missing parts, ensure your input text is complete and free
                    of errors.
                  </li>
                  <li>
                    <strong>Stylistic Inconsistencies:</strong> Some modern
                    expressions might not perfectly translate. A quick manual
                    edit can help maintain authenticity.
                  </li>
                  <li>
                    <strong>Slow Processing:</strong> For very long texts, the
                    conversion may take a bit more time. Please be patient.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Our support team is available to assist if you run into any
                  persistent issues, ensuring a smooth experience with our{" "}
                  <strong>old english converter</strong>.
                </p>
              </section>

              {/* Additional FAQs */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Additional Frequently Asked Questions
                </h3>
                <p className="text-slate-700 mb-4">
                  Here are some additional questions users often ask about our
                  tool:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Can I convert lengthy texts?</strong> Yes, our tool
                    supports texts of various lengths. For exceptionally long
                    texts, consider breaking them into sections.
                  </li>
                  <li>
                    <strong>Do I need an account to use the converter?</strong>{" "}
                    No, our tool is completely free and accessible without
                    registration.
                  </li>
                  <li>
                    <strong>
                      Is there any cost associated with conversion?
                    </strong>{" "}
                    No, you can <strong>convert to old english online</strong>{" "}
                    without any fees.
                  </li>
                </ul>
                <p className="text-slate-700">
                  We update our FAQ section regularly to address any further
                  queries and provide you with the most comprehensive support.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Conclusion
                </h3>
                <p className="text-slate-700 mb-4">
                  Converting modern English to Old English opens a window to the
                  past, blending history with creativity. Our free online tool
                  offers a seamless way to transform your text while preserving
                  the authentic flavor of Old English.
                </p>
                <p className="text-slate-700 mb-4">
                  By following the best practices and troubleshooting tips
                  provided in this guide, you can achieve outstanding conversion
                  results. Whether for creative projects, educational purposes,
                  or personal enjoyment, our{" "}
                  <strong>old english converter</strong> is here to help.
                </p>
                <p className="text-slate-700">
                  Try our tool today and experience the fascinating
                  transformation of modern text into timeless Old English. Join
                  our community of users who love to{" "}
                  <strong>convert modern english to old english online</strong>{" "}
                  and explore the beauty of language from a bygone era.
                </p>
              </section>

              <footer className="mt-8 text-center">
                <p className="text-slate-500 text-sm">
                  Stay updated with the latest tips, expert advice, and
                  comprehensive guides on language transformation by joining our
                  community.
                </p>
              </footer>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
