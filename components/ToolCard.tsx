"use client";

import type React from "react";

import { useState } from "react";
import { Heart, Star, TrendingUp, Share2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTools } from "@/lib/context/ToolsContext";
import { ShareDialog } from "./ShareDialog";
import { useRouter } from "next/navigation";

interface Tool {
  name: string;
  description: string;
  icon: any;
  category: string;
  id: string;
  route?: string;
}

interface ToolCardProps {
  tool: Tool;
  showCategory?: boolean;
  variant?: "default" | "compact";
}

export function ToolCard({
  tool,
  showCategory = false,
  variant = "default",
}: ToolCardProps) {
  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    incrementUsage,
    getToolRating,
    toolStats,
  } = useTools();

  const [showShareDialog, setShowShareDialog] = useState(false);
  const router = useRouter();
  const ToolIcon = tool.icon;
  const isToolFavorite = isFavorite(tool.id);
  const rating = getToolRating(tool.id);
  const usageCount = toolStats[tool.id]?.usageCount || 0;

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isToolFavorite) {
      removeFromFavorites(tool.id);
    } else {
      addToFavorites(tool.id);
    }
  };

  const handleToolClick = () => {
    incrementUsage(tool.id);
    if (tool.route) {
      router.push(tool.route);
    } else {
      console.log(`Opening tool: ${tool.name}`);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareDialog(true);
  };

  if (variant === "compact") {
    return (
      <>
        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border hover:border-accent/20 bg-card hover:-translate-y-1">
          <CardContent className="p-4 text-center relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleFavoriteToggle}
            >
              <Heart
                className={`h-4 w-4 ${isToolFavorite ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>

            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ToolIcon className="w-6 h-6 text-accent" />
            </div>

            <h3 className="font-medium text-foreground text-sm mb-1 group-hover:text-accent transition-colors leading-tight">
              {tool.name}
            </h3>

            {rating > 0 && (
              <div className="flex items-center justify-center mt-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground ml-1">
                  {rating.toFixed(1)}
                </span>
              </div>
            )}

            {usageCount > 0 && (
              <Badge variant="secondary" className="text-xs mt-1">
                {usageCount} uses
              </Badge>
            )}
          </CardContent>
        </Card>

        <ShareDialog
          isOpen={showShareDialog}
          onClose={() => setShowShareDialog(false)}
          tool={tool}
        />
      </>
    );
  }

  return (
    <>
      <Card
        className="group hover:shadow-xl transition-all duration-300 cursor-pointer border hover:border-accent/30 bg-card hover:-translate-y-1"
        onClick={handleToolClick}
      >
        <CardContent className="p-6 text-center relative">
          <div className="absolute top-4 right-4 flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleFavoriteToggle}
            >
              <Heart
                className={`h-4 w-4 ${isToolFavorite ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
          </div>

          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
            <ToolIcon className="w-6 h-6 text-accent" />
          </div>

          <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {tool.name}
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            {tool.description}
          </p>

          {showCategory && (
            <Badge variant="outline" className="mb-3">
              {tool.category}
            </Badge>
          )}

          <div className="flex items-center justify-center space-x-4 mb-4 text-xs text-muted-foreground">
            {rating > 0 && (
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                {rating.toFixed(1)}
              </div>
            )}
            {usageCount > 0 && (
              <div className="flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {usageCount} uses
              </div>
            )}
          </div>

          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90"
            onClick={(e) => {
              e.stopPropagation();
              handleToolClick();
            }}
          >
            Use Tool
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        tool={tool}
      />
    </>
  );
}
