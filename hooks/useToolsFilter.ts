import { useMemo } from "react";
import { Tool } from "@/lib/data/tools";
import { useTools } from "@/lib/context/ToolsContext";

interface UseToolsFilterProps {
  searchQuery: string;
  selectedCategory: string;
  sortBy: string;
  minRating: number;
  showFavoritesOnly: boolean;
  allTools: Tool[];
}

export const useToolsFilter = ({
  searchQuery,
  selectedCategory,
  sortBy,
  minRating,
  showFavoritesOnly,
  allTools,
}: UseToolsFilterProps) => {
  const { favorites, toolStats, getToolRating, recentlyUsed } = useTools();

  const filteredAndSortedTools = useMemo(() => {
    let filtered = allTools;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // Apply favorites filter
    if (showFavoritesOnly) {
      filtered = filtered.filter((tool) => favorites.includes(tool.id));
    }

    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter((tool) => getToolRating(tool.id) >= minRating);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return (
            (toolStats[b.id]?.usageCount || 0) -
            (toolStats[a.id]?.usageCount || 0)
          );
        case "rating":
          return getToolRating(b.id) - getToolRating(a.id);
        case "recent":
          const aIndex = recentlyUsed.indexOf(a.id);
          const bIndex = recentlyUsed.indexOf(b.id);
          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    showFavoritesOnly,
    minRating,
    sortBy,
    allTools,
    favorites,
    toolStats,
    getToolRating,
    recentlyUsed,
  ]);

  const favoriteTools = allTools.filter((tool) => favorites.includes(tool.id));
  const recentTools = recentlyUsed
    .map((id) => allTools.find((tool) => tool.id === id))
    .filter(Boolean) as Tool[];

  return {
    filteredAndSortedTools,
    favoriteTools,
    recentTools,
  };
};
