import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  url: string;
}

const dummyTools: Tool[] = [
  {
    id: 1,
    name: "Old English Converter",
    description: "Convert modern English to old English effortlessly",
    category: "Converters",
    url: "/old-english-converter",
  },
  {
    id: 2,
    name: "DocSend to PDF Converter",
    description: "Convert DocSend files to PDF format quickly and easily",
    category: "Converters",
    url: "/docsend-pdf-converter",
  },
  {
    id: 3,
    name: "Yourtube Music Extractor",
    description: "Extract audio from YouTube videos to MP3 format",
    category: "Media",
    url: "/youtube-mp3-extractor",
  },
  {
    id: 4,
    name: "MHTML to PDF Converter",
    description: "Convert MHTML files to PDF format",
    category: "Converters",
    url: "/mhtml-pdf-converter",
  },
  {
    id: 5,
    name: "Performance Analyzer",
    description: "Analyze and optimize your website's performance",
    category: "Analytics",
    url: "/performance-analyzer",
  },
];

export default function ToolsPage() {
  const groupedTools = dummyTools.reduce(
    (acc: { [key: string]: Tool[] }, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(tool);
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb remains same */}

          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Browse All Tools
          </h1>
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb my-14">
            <Breadcrumb>
              <BreadcrumbList className="text-gray-500">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/tools"
                    className="font-semibold text-black"
                  >
                    Tools
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {Object.entries(groupedTools).map(([category, tools]) => (
            <section key={category} className="mb-16">
              <div className="mb-8 border-l-4 border-blue-900 pl-4">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-blue-900"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon Container */}
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <svg
                            className="w-6 h-6 text-blue-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {tool.name}
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {tool.description}
                          </p>

                          {/* Hover Arrow */}
                          <div className="mt-6 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <a
                              href={tool.url}
                              className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 font-medium"
                            >
                              Get Started
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-blue-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
