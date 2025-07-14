import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";
import { Tool } from "@/lib/data/tools";

interface ToolsGridProps {
  tools: Tool[];
  searchQuery: string;
  onClearFilters: () => void;
  showCategory?: boolean;
}

export const ToolsGrid = ({
  tools,
  searchQuery,
  onClearFilters,
  showCategory = true,
}: ToolsGridProps) => {
  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">
          No tools found matching your criteria.
        </div>
        <Button variant="outline" onClick={onClearFilters}>
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} showCategory={showCategory} />
      ))}
    </div>
  );
};
