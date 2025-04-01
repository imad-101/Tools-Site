import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Are all the tools really free?",
      answer:
        "Yes, all tools on our platform are completely free to use. We believe in providing accessible resources for everyone without any hidden costs or premium features.",
    },
    {
      question: "How often are new tools added?",
      answer:
        "We add new tools regularly. Our team is constantly working on developing new tools based on user feedback and needs. Check back often to see what's new!",
    },
    {
      question: "Do I need to create an account to use the tools?",
      answer:
        "No, you don't need to create an account to use most of the tools. All tools are freely accessible directly from the website without any registration required.",
    },
    {
      question: "Are the tools safe to use?",
      answer:
        "Yes, all tools on our platform are designed with security in mind. Many tools process data directly in your browser, meaning your information never leaves your computer.",
    },
    {
      question: "Can I suggest a new tool?",
      answer:
        "We welcome suggestions for new tools. You can submit your ideas through our contact form or by emailing us directly at suggestions@freetoolnow.com.",
    },
    {
      question: "Do the tools work on mobile devices?",
      answer:
        "Yes, all our tools are designed to be responsive and work on mobile devices, tablets, and desktop computers. The interface may adjust slightly to accommodate different screen sizes.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white inline-block rounded-lg bg-black px-3 py-1">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Find answers to common questions about our platform and tools.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full ">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-gray-200"
              >
                <AccordionTrigger className="text-gray-900 hover:text-gray-600  hover:no-underline text-md">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
