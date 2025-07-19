import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchDropdown from "@/components/SearchDropdown";
import { Tool } from "@/lib/data/tools";
import { SITE_CONFIG } from "@/lib/constants";
import { getCategories } from "@/lib/data/tools";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  allTools: Tool[];
}

export const HeroSection = ({
  searchQuery,
  setSearchQuery,
  allTools,
}: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
      {/* Overlay for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 dark:block hidden"></div>
      {/* Overlay for light mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-gray-100/40 to-white/60 dark:hidden"></div>
      {/* Accent blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm dark:text-white text-gray-800 dark:bg-white/10 bg-gray-100 dark:border-white/20 border-gray-300"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {allTools.length}+ Free Tools
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
            {SITE_CONFIG.tagline.split("Simplify")[0]}
            <span className="bg-gradient-to-r from-blue-500 via-accent to-blue-400 bg-clip-text text-transparent dark:from-accent dark:via-accent/80 dark:to-accent/60">
              {" "}
              Simplify
            </span>
            <br />
            {SITE_CONFIG.tagline.split("Simplify")[1]}
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <SearchDropdown
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              tools={allTools}
              className="pl-12 pr-4 py-4 text-lg bg-white/80 border-gray-300 dark:bg-white/10 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 backdrop-blur-sm focus:bg-white/90 focus:border-accent/50 rounded-xl"
              placeholder="Search free tools..."
            />
          </div>

          <div className="flex justify-center space-x-8 text-sm dark:text-gray-300 text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold dark:text-white text-gray-900">
                {allTools.length}+
              </div>
              <div>Free Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold dark:text-white text-gray-900">
                {getCategories().length}
              </div>
              <div>Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold dark:text-white text-gray-900">
                {SITE_CONFIG.stats.freeStatus}
              </div>
              <div>Free</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
