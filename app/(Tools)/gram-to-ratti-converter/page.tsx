import GramToRattiConverter from "./main";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GramToRattiConverterPage() {
  return (
    <div
      className="flex min-h-screen flex-col bg-amber-50"
      id="gram-to-ratti-converter"
    >
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="w-full py-6 md:py-8 bg-white"
          itemScope
          itemType="https://schema.org/SoftwareApplication"
        >
          <meta itemProp="applicationCategory" content="Conversion Tool" />
          <meta itemProp="operatingSystem" content="Web" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-transparent bg-emerald-100 text-blue-900">
                Free Online Tool
              </div>
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900"
                itemProp="name"
              >
                Gram to Ratti Converter{" "}
                <span className="hidden sm:block">
                  - Free Online Ratti Calculator
                </span>
              </h1>
              <p
                className="text-slate-700 md:text-lg max-w-[800px] hidden sm:block"
                itemProp="description"
              >
                Convert grams to ratti instantly with our accurate online
                converter. Perfect for jewelers, gemstone enthusiasts, and
                anyone working with traditional Indian weight units. 100% free,
                no signup required!
              </p>
              <meta
                itemProp="url"
                content="https://freetoolnow.com/gram-to-ratti-converter"
              />
            </div>
          </div>
        </section>
        {/* Tool Section */}
        <section className="w-full py-8 md:py-12 bg-white">
          <div className="container px-4 md:px-6">
            <GramToRattiConverter />
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
                  Converting grams to ratti is as simple as three steps:
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Enter Weight in Grams
                </h3>
                <p className="text-slate-600">
                  Input the weight in grams using our user-friendly interface.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Select Ratti Type
                </h3>
                <p className="text-slate-600">
                  Choose standard ratti or regional variations for precise
                  conversion.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  View and Copy
                </h3>
                <p className="text-slate-600">
                  See the converted ratti value instantly and copy it for your
                  use.
                </p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                About Ratti
              </h3>
              <p className="text-slate-600 mb-4">
                Ratti is a traditional Indian unit of weight used primarily for
                gemstones and jewelry. One standard ratti is approximately 0.182
                grams, with regional variations like Gujarat and South India
                having slightly different values.
              </p>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Key Features
              </h4>
              <ul className="space-y-2 text-slate-600 list-disc pl-5">
                <li>High-precision gram to ratti conversion</li>
                <li>Support for standard and regional ratti types</li>
                <li>
                  Bidirectional conversion (grams to ratti and ratti to grams)
                </li>
                <li>Conversion history for quick reference</li>
                <li>Static conversion table for reference</li>
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
                  Find answers to common questions about gram to ratti
                  conversion for jewelry and gemstones.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How much is 1 gram in Ratti?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    One gram is approximately 5.4945 standard ratti, based on
                    the common jewelry standard where 1 ratti equals 0.182
                    grams. However, this value varies by region: in Gujarat, 1
                    gram is about 5.2632 ratti (1 ratti ≈ 0.19 grams), and in
                    South India, 1 gram is about 5.7143 ratti (1 ratti ≈ 0.175
                    grams). Use our converter to get precise results based on
                    your selected ratti type.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How is Ratti calculated?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Ratti is calculated by dividing the weight in grams by the
                    weight of one ratti in grams. For standard ratti, 1 ratti is
                    0.182 grams, so the formula is: Ratti = Grams ÷ 0.182. For
                    example, 2 grams would be 2 ÷ 0.182 ≈ 10.989 ratti. Regional
                    variations adjust the divisor (e.g., 0.19 grams for Gujarat
                    ratti). Our tool automates this calculation for accuracy and
                    convenience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How to calculate weight into Ratti?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    To calculate weight into ratti, determine the weight in
                    grams and divide it by the ratti value in grams for your
                    region. For standard ratti, use 0.182 grams per ratti: Ratti
                    = Grams ÷ 0.182. For example, 1.5 grams is 1.5 ÷ 0.182 ≈
                    8.2418 ratti. Select the appropriate ratti type in our
                    converter to account for regional differences, and the tool
                    will handle the math instantly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How much is 1 Ratti in carats?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    One standard ratti is approximately 0.91 carats, as 1 ratti
                    is 0.182 grams and 1 carat is 0.2 grams (0.182 ÷ 0.2 =
                    0.91). For regional variations, a Gujarat ratti (0.19 grams)
                    is 0.95 carats, and a South Indian ratti (0.175 grams) is
                    0.875 carats. Our tool can help you convert ratti to carats
                    by first converting to grams and then to carats.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How many 1 tola in gram?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    One tola, a traditional Indian unit of weight, is equal to
                    11.66 grams in the metric system, commonly used for gold and
                    silver in India. This value is standardized for jewelry
                    trading. To convert tola to ratti, first convert tola to
                    grams (e.g., 1 tola = 11.66 grams), then use our converter
                    to transform grams to ratti based on your selected ratti
                    type.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    How much is Ratti in Tola?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    To determine ratti in tola, first convert ratti to grams and
                    then to tola. Since 1 standard ratti is 0.182 grams and 1
                    tola is 11.66 grams, 1 tola is approximately 64.066 ratti
                    (11.66 ÷ 0.182). For example, 100 ratti is 100 × 0.182 =
                    18.2 grams, which is 18.2 ÷ 11.66 ≈ 1.56 tola. Use our tool
                    to perform these conversions easily by switching to
                    ratti-to-grams mode.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    What is the difference between Ratti and Carat?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Ratti and carat are both units for measuring gemstone
                    weight, but they differ in origin and value. Ratti is a
                    traditional Indian unit, with 1 standard ratti equaling
                    0.182 grams, while 1 carat, used internationally, is 0.2
                    grams. Thus, 1 ratti is about 0.91 carats. Ratti is often
                    used in India for cultural jewelry measurements, whereas
                    carat is the global standard for diamonds and gemstones. Our
                    converter supports both units for versatile use.
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
                  The Ultimate Guide to Converting Grams to Ratti
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Learn how to convert grams to ratti accurately for jewelry and
                  gemstones with our step-by-step guide and expert tips.
                </p>
              </header>

              {/* Introduction */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Introduction
                </h3>
                <p className="text-slate-700 mb-4">
                  In the world of jewelry and gemstones, the ratti is a
                  time-honored unit of weight in India, cherished for its
                  precision and cultural significance. Converting grams to ratti
                  is essential for jewelers, gemstone traders, and enthusiasts.
                  Our <strong>gram to ratti converter</strong> simplifies this
                  process with accuracy and ease.
                </p>
                <p className="text-slate-700">
                  Whether you’re pricing a sapphire or crafting a gold ring,
                  this guide will help you master the art of{" "}
                  <strong>converting grams to ratti online</strong>.
                </p>
              </section>

              {/* Why Convert Grams to Ratti */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Why Convert Grams to Ratti?
                </h3>
                <p className="text-slate-700 mb-4">
                  Converting grams to ratti offers several benefits:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Tradition:</strong> Ratti is widely used in India’s
                    jewelry industry, maintaining cultural practices.
                  </li>
                  <li>
                    <strong>Precision:</strong> Ratti provides a fine-grained
                    measurement ideal for small gemstones.
                  </li>
                  <li>
                    <strong>Market Relevance:</strong> Many gemstone prices are
                    quoted in ratti, making conversion essential for trade.
                  </li>
                  <li>
                    <strong>Regional Accuracy:</strong> Account for regional
                    variations to ensure compatibility with local standards.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Our tool makes it easy to{" "}
                  <strong>convert grams to ratti</strong> for any purpose.
                </p>
              </section>

              {/* How the Converter Works */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  How Our Converter Works
                </h3>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 1: Input Your Weight
                </h4>
                <p className="text-slate-700 mb-4">
                  Enter the weight in grams or ratti directly into the input
                  field. The converter updates in real-time as you type.
                </p>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 2: Select Ratti Type and Direction
                </h4>
                <p className="text-slate-700 mb-4">
                  Choose between standard ratti or regional variations (e.g.,
                  Gujarat or South India) and select whether to convert from
                  grams to ratti or ratti to grams.
                </p>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 3: Review and Copy
                </h4>
                <p className="text-slate-700">
                  View the converted value instantly. Copy the result for your
                  use or check the history for previous conversions.
                </p>
              </section>

              {/* Benefits of Using Our Converter */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Benefits of Using Our Converter
                </h3>
                <p className="text-slate-700 mb-4">
                  Our online tool offers a seamless way to convert grams to
                  ratti. Key benefits include:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Real-Time Conversion:</strong> Get instant results
                    as you input grams or ratti.
                  </li>
                  <li>
                    <strong>Regional Support:</strong> Choose from standard and
                    regional ratti types.
                  </li>
                  <li>
                    <strong>Bidirectional Conversion:</strong> Convert both
                    grams to ratti and ratti to grams.
                  </li>
                  <li>
                    <strong>Conversion History:</strong> Track recent
                    calculations for convenience.
                  </li>
                  <li>
                    <strong>Static Table:</strong> Reference a built-in
                    conversion table for quick lookups.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Optimized for keywords like{" "}
                  <strong>ratti calculator online</strong> and{" "}
                  <strong>gram to ratti for jewelry</strong>, our tool is both
                  functional and discoverable.
                </p>
              </section>

              {/* Best Practices */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Best Practices for Converting Grams to Ratti
                </h3>
                <p className="text-slate-700 mb-4">
                  To get the best results, follow these tips:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Verify Ratti Type:</strong> Confirm whether your
                    region uses standard or a specific ratti variation.
                  </li>
                  <li>
                    <strong>Use Precise Inputs:</strong> Enter accurate gram
                    values for reliable conversions.
                  </li>
                  <li>
                    <strong>Save History:</strong> Use the conversion history to
                    avoid re-entering frequent values.
                  </li>
                  <li>
                    <strong>Adjust Precision:</strong> Set the desired decimal
                    places for your conversion results.
                  </li>
                </ul>
                <p className="text-slate-700">
                  These practices enhance your experience with our{" "}
                  <strong>gram to ratti converter</strong>.
                </p>
              </section>

              {/* Troubleshooting */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Troubleshooting Common Issues
                </h3>
                <p className="text-slate-700 mb-4">
                  If you encounter issues, try these solutions:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Incorrect Results:</strong> Double-check the ratti
                    type selected for your region.
                  </li>
                  <li>
                    <strong>Copy Fails:</strong> Ensure your browser supports
                    clipboard access or try a different device.
                  </li>
                  <li>
                    <strong>History Not Saving:</strong> Clear your browser
                    cache or refresh the page.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Contact our support team if issues persist with your{" "}
                  <strong>ratti calculator online</strong>.
                </p>
              </section>

              {/* Additional FAQs */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Additional Frequently Asked Questions
                </h3>
                <p className="text-slate-700 mb-4">
                  More questions users ask about our tool:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Is the converter free?</strong> Yes, it’s 100% free
                    with no hidden costs.
                  </li>
                  <li>
                    <strong>Do I need an account?</strong> No, conversions are
                    available without registration.
                  </li>
                  <li>
                    <strong>Can I convert to other units?</strong> Yes, our tool
                    supports conversions to carats and tola via grams.
                  </li>
                </ul>
                <p className="text-slate-700">
                  We regularly update our FAQs to ensure comprehensive support.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Conclusion
                </h3>
                <p className="text-slate-700 mb-4">
                  Converting grams to ratti is a vital skill for anyone in the
                  jewelry or gemstone trade. Our free online tool makes this
                  process quick, accurate, and accessible, supporting both
                  standard and regional ratti types.
                </p>
                <p className="text-slate-700 mb-4">
                  With features like real-time conversion, history tracking, and
                  bidirectional support, our{" "}
                  <strong>gram to ratti converter</strong> is designed to meet
                  your needs. Follow the tips in this guide to achieve perfect
                  results every time.
                </p>
                <p className="text-slate-700">
                  Try our tool today and simplify your{" "}
                  <strong>gram to ratti for jewelry</strong> calculations. Join
                  our community of users who trust us for precise conversions!
                </p>
              </section>

              <footer className="mt-8 text-center">
                <p className="text-slate-500 text-sm">
                  Stay updated with the latest tools and guides for jewelry and
                  gemstone measurements by joining our community.
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
