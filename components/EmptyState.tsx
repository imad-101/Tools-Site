import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  type: "favorites" | "recent";
  onAction: () => void;
}

export const EmptyState = ({ type, onAction }: EmptyStateProps) => {
  if (type === "favorites") {
    return (
      <div className="text-center py-12">
        <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
        <p className="text-muted-foreground mb-4">
          Start adding tools to your favorites by clicking the heart icon.
        </p>
        <Button onClick={onAction}>Browse All Tools</Button>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="text-muted-foreground mb-4">No recently used tools.</div>
      <Button onClick={onAction}>Start Using Tools</Button>
    </div>
  );
};
