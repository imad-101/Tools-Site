"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AdvancedSearch } from "@/components/AdvancedSearch";
import { TrendingDashboard } from "@/components/TrendingDashboard";
import { HeroSection } from "@/components/HeroSection";
import { Sidebar } from "@/components/Sidebar";
import { ToolsGrid } from "@/components/ToolsGrid";
import { CategoriesView } from "@/components/CategoriesView";
import { EmptyState } from "@/components/EmptyState";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useTools } from "@/lib/context/ToolsContext";
import { getAllTools, getCategories } from "@/lib/data/tools";
import { useToolsFilter } from "@/hooks/useToolsFilter";
import { DEFAULT_FILTERS } from "@/lib/constants";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(DEFAULT_FILTERS.searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(
    DEFAULT_FILTERS.selectedCategory
  );
  const [sortBy, setSortBy] = useState(DEFAULT_FILTERS.sortBy);
  const [minRating, setMinRating] = useState(DEFAULT_FILTERS.minRating);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(
    DEFAULT_FILTERS.showFavoritesOnly
  );
  const [activeTab, setActiveTab] = useState(DEFAULT_FILTERS.activeTab);

  const { toolStats } = useTools();
  const allTools = getAllTools();
  const categories = getCategories();

  // Handle URL hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "categories") {
        setActiveTab("categories");
        // Smooth scroll to tabs section
        setTimeout(() => {
          const tabsSection = document.querySelector("[data-tabs-section]");
          if (tabsSection) {
            tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else if (hash === "popular") {
        setActiveTab("trending");
        // Smooth scroll to tabs section
        setTimeout(() => {
          const tabsSection = document.querySelector("[data-tabs-section]");
          if (tabsSection) {
            tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // Check hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const { filteredAndSortedTools, favoriteTools, recentTools } = useToolsFilter(
    {
      searchQuery,
      selectedCategory,
      sortBy,
      minRating,
      showFavoritesOnly,
      allTools,
    }
  );

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setShowFavoritesOnly(false);
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />

      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        allTools={allTools}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
              data-tabs-section
            >
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="all">All Tools</TabsTrigger>
                <TabsTrigger value="favorites">
                  <Heart className="w-4 h-4 mr-1" />
                  Favorites ({favoriteTools.length})
                </TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <AdvancedSearch
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  showFavoritesOnly={showFavoritesOnly}
                  setShowFavoritesOnly={setShowFavoritesOnly}
                  categories={categories.map((cat) => cat.name)}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {searchQuery
                          ? `Search Results (${filteredAndSortedTools.length})`
                          : "All Tools"}
                      </h2>
                      {searchQuery && (
                        <p className="text-muted-foreground">
                          Tools matching "{searchQuery}"
                        </p>
                      )}
                    </div>
                  </div>

                  <ToolsGrid
                    tools={filteredAndSortedTools}
                    searchQuery={searchQuery}
                    onClearFilters={handleClearFilters}
                    showCategory={true}
                  />
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Your Favorite Tools
                  </h2>
                  {favoriteTools.length > 0 ? (
                    <ToolsGrid
                      tools={favoriteTools}
                      searchQuery=""
                      onClearFilters={() => {}}
                      showCategory={true}
                    />
                  ) : (
                    <EmptyState
                      type="favorites"
                      onAction={() => setActiveTab("all")}
                    />
                  )}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Recently Used Tools
                  </h2>
                  {recentTools.length > 0 ? (
                    <ToolsGrid
                      tools={recentTools}
                      searchQuery=""
                      onClearFilters={() => {}}
                      showCategory={true}
                    />
                  ) : (
                    <EmptyState
                      type="recent"
                      onAction={() => setActiveTab("all")}
                    />
                  )}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="space-y-6">
                <TrendingDashboard allTools={allTools} />
              </TabsContent>

              <TabsContent value="categories" className="space-y-12">
                <CategoriesView categories={categories} />
              </TabsContent>
            </Tabs>
          </div>

          <Sidebar
            favoriteTools={favoriteTools}
            recentTools={recentTools}
            toolStats={toolStats}
            allTools={allTools}
            categories={categories}
          />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
