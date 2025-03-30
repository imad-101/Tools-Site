// app/category/[category]/page.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import allTools from "@/app/allTools";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const normalizedCategory = resolvedParams.category.toLowerCase();

  const filteredTools = allTools.filter(
    (tool) => tool.category.toLowerCase() === normalizedCategory
  );

  const categoryName =
    normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" asChild>
                  <Link className="text-gray-500 hover:text-gray-700" href="/">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories" asChild>
                  <Link
                    className="text-gray-500 hover:text-gray-700"
                    href="/categories"
                  >
                    Categories
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-gray-700">{categoryName}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold text-gray-white bg-gray-900 py-3 rounded-md text-white text-center my-16">
            {categoryName} Tools
          </h1>

          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">
                No tools found in this category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5 pb-14">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {tool.icon}
                      </div>
                      {tool.badge && (
                        <span
                          className={`${tool.badgeColor} text-sm font-medium px-2.5 py-0.5 rounded-full border ml-auto`}
                        >
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6">
                      {tool.description}
                    </p>
                    <Link
                      href={tool.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Use Tool →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
