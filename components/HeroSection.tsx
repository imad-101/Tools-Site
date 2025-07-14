import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchDropdown from "@/components/SearchDropdown";
import { Tool } from "@/lib/data/tools";
import { SITE_CONFIG } from "@/lib/constants";

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
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800">
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {SITE_CONFIG.stats.totalTools} Free Tools
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {SITE_CONFIG.tagline.split("Simplify")[0]}
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              {" "}
              Simplify
            </span>
            <br />
            {SITE_CONFIG.tagline.split("Simplify")[1]}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <SearchDropdown
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              tools={allTools}
              className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:bg-white/20 focus:border-accent/50 rounded-xl"
              placeholder="Search free tools..."
            />
          </div>

          <div className="flex justify-center space-x-8 text-sm text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {allTools.length}+
              </div>
              <div>Free Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {SITE_CONFIG.stats.categories}
              </div>
              <div>Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
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
