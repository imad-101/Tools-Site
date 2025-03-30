// import { ExtractYoutubeMusic } from "./main";
import Home from "./main";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ExtractYoutubeMusicPage() {
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
                Extract YouTube Music
              </h1>
              <p className="text-slate-700 md:text-lg max-w-[800px]">
                Extract audio from YouTube videos in high-quality MP3 format.
                Perfect for creating playlists, podcasts, or saving music for
                offline listening.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="w-full py-8 md:py-12 bg-slate-50">
          <div className="container px-4 md:px-6">
            <Home />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
                  Extracting audio from YouTube videos is simple with our tool.
                  Follow these three easy steps:
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Paste YouTube URL
                </h3>
                <p className="text-slate-600">
                  Copy the URL of any YouTube video (including standard videos,
                  shorts, and playlists) and paste it into our tool.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Choose Audio Quality
                </h3>
                <p className="text-slate-600">
                  Select your preferred audio quality and format. Options range
                  from standard to high-definition.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Download Your Audio
                </h3>
                <p className="text-slate-600">
                  Click the download button and save the extracted audio file to
                  your device. No registration or software installation is
                  required.
                </p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Supported Formats and Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">
                    Audio Formats
                  </h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• MP3 (128kbps, 192kbps, 320kbps)</li>
                    <li>• AAC (High quality)</li>
                    <li>• OGG (Variable bitrate)</li>
                    <li>• WAV (Lossless)</li>
                    <li>• FLAC (Lossless)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">
                    Special Features
                  </h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• ID3 tagging with video metadata</li>
                    <li>• Thumbnail embedding</li>
                    <li>• Playlist processing</li>
                    <li>• Custom start/end time extraction</li>
                    <li>• Audio normalization</li>
                  </ul>
                </div>
              </div>
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
                  Find answers to common questions about our YouTube audio
                  extraction tool.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Is it legal to extract audio from YouTube videos?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    The legality depends on the content and your intended use.
                    It is legal to extract audio from videos that you own, those
                    in the public domain, or videos with appropriate licenses
                    (like Creative Commons). However, downloading copyrighted
                    content without permission may violate YouTube's Terms of
                    Service and copyright laws.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    What's the highest audio quality available?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Our tool offers various quality options, up to 320kbps MP3
                    for compressed formats and lossless options like WAV or
                    FLAC, depending on the source.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Can I extract audio from age-restricted videos?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Our free tool is designed for non-age-restricted content.
                    For age-restricted videos, additional authentication is
                    required and may only be available in our premium version.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Is there a limit on how many videos I can process?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    The free version allows extraction from up to 5 videos per
                    day. For unlimited processing, batch extraction, and other
                    advanced features, consider upgrading to our premium
                    service.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Does the extracted audio include metadata?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, our tool automatically embeds ID3 tags such as the
                    video title, channel name, and upload date. Video thumbnails
                    can also be added as album art.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-slate-200">
                  <AccordionTrigger className="text-slate-900 hover:text-blue-600">
                    Can I extract a specific portion of the audio?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, our tool offers options to set custom start and end
                    times, allowing you to extract only the desired portion of
                    the audio.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Dedicated Article/Blog Section with Extended, Helpful Content */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <article className="max-w-4xl mx-auto">
              <header className="mb-8 text-center">
                <h2 className="text-4xl font-bold tracking-tighter text-slate-900">
                  The Ultimate Guide to Extracting YouTube Music Online
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Discover expert tips, best practices, and step-by-step
                  instructions for using our online YouTube music extractor.
                </p>
              </header>

              {/* Introduction */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Introduction
                </h3>
                <p className="text-slate-700 mb-4">
                  In today’s digital age, music is more accessible than ever.
                  Whether you're looking to create custom playlists, capture
                  background tracks for your projects, or simply enjoy your
                  favorite tunes offline, an online YouTube music extractor is
                  an invaluable tool. Our platform lets you{" "}
                  <strong>extract YouTube music</strong> quickly and securely.
                </p>
                <p className="text-slate-700">
                  This guide will walk you through the benefits, process, and
                  best practices for using our{" "}
                  <strong>online YouTube music extractor</strong>. We aim to
                  provide you with practical advice that ensures a smooth
                  experience every time you{" "}
                  <strong>extract YouTube music online</strong>.
                </p>
              </section>

              {/* Why Extract YouTube Music? */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Why Extract YouTube Music?
                </h3>
                <p className="text-slate-700 mb-4">
                  While YouTube is a fantastic resource for streaming music,
                  there are several reasons why you might want to extract the
                  audio:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Offline Listening:</strong> Enjoy your music even
                    without an internet connection.
                  </li>
                  <li>
                    <strong>Custom Playlists:</strong> Create personalized
                    playlists by extracting your favorite tracks.
                  </li>
                  <li>
                    <strong>Podcasting and Content Creation:</strong> Use the
                    audio as background music or samples in your creative
                    projects.
                  </li>
                  <li>
                    <strong>Archiving:</strong> Save music for long-term storage
                    and later reference.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Keywords such as <strong>extract YouTube music online</strong>{" "}
                  and <strong>YouTube music extractor</strong> are frequently
                  searched by users who need a reliable method to capture audio
                  for personal or professional use.
                </p>
              </section>

              {/* How Our Extractor Works */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  How Our YouTube Music Extractor Works
                </h3>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 1: Paste the YouTube URL
                </h4>
                <p className="text-slate-700 mb-4">
                  Start by copying the URL of your desired YouTube video and
                  pasting it into our input field. Our tool accepts standard
                  videos, shorts, and even playlists.
                </p>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 2: Choose Audio Quality
                </h4>
                <p className="text-slate-700 mb-4">
                  Next, select your preferred audio quality and format. Whether
                  you choose high-quality MP3 or lossless formats like WAV or
                  FLAC, our extractor adapts to deliver the best possible
                  output.
                </p>
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Step 3: Download the Extracted Audio
                </h4>
                <p className="text-slate-700">
                  Once processing is complete, click the download button to save
                  the extracted audio file to your device. The entire process is
                  managed securely in your browser.
                </p>
              </section>

              {/* Benefits of Using Our Tool */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Benefits of Using Our YouTube Music Extractor
                </h3>
                <p className="text-slate-700 mb-4">
                  Our tool is designed to provide a seamless, high-quality
                  experience for anyone looking to extract music from YouTube.
                  Key benefits include:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>User-Friendly Interface:</strong> Enjoy a simple and
                    intuitive experience with our drag-and-drop functionality.
                  </li>
                  <li>
                    <strong>High-Quality Output:</strong> Extracted audio
                    maintains excellent quality, with options for both
                    compressed and lossless formats.
                  </li>
                  <li>
                    <strong>Security and Privacy:</strong> All processing occurs
                    locally in your browser, ensuring that your data remains
                    secure.
                  </li>
                  <li>
                    <strong>Fast Processing:</strong> Our advanced extraction
                    algorithms deliver results quickly, even for longer videos
                    or playlists.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Use our extractor from any
                    device, at any time, with no installation required.
                  </li>
                </ul>
                <p className="text-slate-700">
                  By incorporating terms like{" "}
                  <strong>online YouTube music extractor</strong> and{" "}
                  <strong>YouTube music extractor</strong>, we ensure that our
                  solution is easily discoverable for users who need a fast and
                  reliable way to <strong>extract YouTube music</strong>.
                </p>
              </section>

              {/* Best Practices */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Best Practices for Extracting YouTube Music
                </h3>
                <p className="text-slate-700 mb-4">
                  To achieve the best results, consider the following tips:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Verify the URL:</strong> Ensure that the YouTube URL
                    you paste is correct and leads to the video you want to
                    extract audio from.
                  </li>
                  <li>
                    <strong>Select the Appropriate Quality:</strong> Choose an
                    audio quality that suits your needs. Higher quality may take
                    longer but provides better listening experience.
                  </li>
                  <li>
                    <strong>Check for Copyright:</strong> Only extract audio
                    from videos you have the right to download. Respect
                    copyright and YouTube's Terms of Service.
                  </li>
                  <li>
                    <strong>Review the Output:</strong> After downloading,
                    review the audio file to ensure all metadata and quality
                    settings meet your expectations.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Following these best practices will help you maximize the
                  benefits of our <strong>extract YouTube music online</strong>{" "}
                  tool.
                </p>
              </section>

              {/* Troubleshooting */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Troubleshooting Common Issues
                </h3>
                <p className="text-slate-700 mb-4">
                  While our tool is designed for optimal performance, you may
                  occasionally encounter issues. Here are some common challenges
                  and how to resolve them:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Incomplete Extraction:</strong> If the audio file is
                    missing segments, double-check that the video URL is correct
                    and that the source video is fully accessible.
                  </li>
                  <li>
                    <strong>Quality Issues:</strong> If the extracted audio
                    quality is lower than expected, try selecting a higher
                    quality option or re-run the extraction.
                  </li>
                  <li>
                    <strong>Slow Processing:</strong> For very long videos or
                    playlists, the extraction process may take additional time.
                    Be patient or try processing during off-peak hours.
                  </li>
                </ul>
                <p className="text-slate-700">
                  Our support team is available to assist you if you encounter
                  persistent issues, ensuring a smooth experience with our{" "}
                  <strong>youtube music extractor</strong> tool.
                </p>
              </section>

              {/* Additional FAQs */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Additional Frequently Asked Questions
                </h3>
                <p className="text-slate-700 mb-4">
                  Below are some more common questions from our users:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>
                    <strong>Can I extract audio from entire playlists?</strong>{" "}
                    Yes, our tool supports playlist extraction, enabling you to
                    download audio from multiple videos in one go.
                  </li>
                  <li>
                    <strong>Do I need an account to use the extractor?</strong>{" "}
                    No, our tool is completely free and does not require any
                    registration.
                  </li>
                  <li>
                    <strong>What formats are available?</strong> You can choose
                    from MP3, AAC, OGG, WAV, and FLAC, depending on your quality
                    preference.
                  </li>
                </ul>
                <p className="text-slate-700">
                  We continually update our FAQ section to address any
                  additional questions and provide you with the most
                  comprehensive support.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Conclusion
                </h3>
                <p className="text-slate-700 mb-4">
                  Extracting YouTube music for offline enjoyment or creative
                  projects has never been easier. Our online tool offers a fast,
                  secure, and high-quality solution to{" "}
                  <strong>extract YouTube music</strong> in just a few simple
                  steps.
                </p>
                <p className="text-slate-700 mb-4">
                  By following the best practices and troubleshooting tips
                  outlined in this guide, you can ensure that the audio
                  extraction process is smooth and that the resulting files meet
                  your expectations.
                </p>
                <p className="text-slate-700">
                  We invite you to try our{" "}
                  <strong>online YouTube music extractor</strong> today and
                  experience the convenience of converting YouTube videos into
                  high-quality audio files. Join the community of users who rely
                  on our tool for all their music extraction needs.
                </p>
              </section>

              <footer className="mt-8 text-center">
                <p className="text-slate-500 text-sm">
                  Stay updated with the latest tips, expert advice, and detailed
                  guides on audio extraction by joining our community.
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
