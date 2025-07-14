import { TrendingUp, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Tool } from "@/lib/data/tools";

interface SidebarProps {
  favoriteTools: Tool[];
  recentTools: Tool[];
  toolStats: Record<string, { usageCount: number; rating: number }>;
  allTools: Tool[];
  categories: {
    name: string;
    icon: any;
    color: string;
    description: string;
    tools: Tool[];
  }[];
}

export const Sidebar = ({
  favoriteTools,
  recentTools,
  toolStats,
  allTools,
  categories,
}: SidebarProps) => {
  return (
    <div className="lg:w-80">
      <div className="sticky top-24 space-y-6">
        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <TrendingUp className="w-5 h-5 mr-2" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Favorites</span>
                <Badge variant="secondary">{favoriteTools.length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Recently Used</span>
                <Badge variant="secondary">{recentTools.length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Usage</span>
                <Badge className="bg-accent text-white">
                  {Object.values(toolStats).reduce(
                    (sum, stats) => sum + stats.usageCount,
                    0
                  )}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <NewsletterSignup />

        <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-border/50">
          <CardContent className="p-6">
            <h4 className="font-semibold text-foreground mb-4 flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Platform Stats
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Tools</span>
                <Badge variant="secondary" className="font-medium">
                  {allTools.length}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Categories</span>
                <Badge variant="secondary" className="font-medium">
                  {categories.length}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">100% Free</span>
                <Badge className="bg-accent text-white font-medium">
                  Always
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
