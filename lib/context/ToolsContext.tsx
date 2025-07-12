"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { useLocalStorage } from "@/lib/hooks/useLocalStorage"

interface Tool {
  name: string
  description: string
  icon: any
  category: string
  id: string
}

interface ToolStats {
  [toolId: string]: {
    usageCount: number
    lastUsed: string
    rating: number
    totalRatings: number
  }
}

interface ToolsContextType {
  favorites: string[]
  addToFavorites: (toolId: string) => void
  removeFromFavorites: (toolId: string) => void
  isFavorite: (toolId: string) => boolean
  toolStats: ToolStats
  incrementUsage: (toolId: string) => void
  rateTool: (toolId: string, rating: number) => void
  getToolRating: (toolId: string) => number
  getTrendingTools: () => string[]
  getRecommendations: (toolId: string) => string[]
  recentlyUsed: string[]
}

const ToolsContext = createContext<ToolsContextType | undefined>(undefined)

export function ToolsProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<string[]>("tool-favorites", [])
  const [toolStats, setToolStats] = useLocalStorage<ToolStats>("tool-stats", {})
  const [recentlyUsed, setRecentlyUsed] = useLocalStorage<string[]>("recently-used", [])

  const addToFavorites = (toolId: string) => {
    setFavorites((prev) => [...prev.filter((id) => id !== toolId), toolId])
  }

  const removeFromFavorites = (toolId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== toolId))
  }

  const isFavorite = (toolId: string) => {
    return favorites.includes(toolId)
  }

  const incrementUsage = (toolId: string) => {
    setToolStats((prev) => ({
      ...prev,
      [toolId]: {
        ...prev[toolId],
        usageCount: (prev[toolId]?.usageCount || 0) + 1,
        lastUsed: new Date().toISOString(),
        rating: prev[toolId]?.rating || 0,
        totalRatings: prev[toolId]?.totalRatings || 0,
      },
    }))

    setRecentlyUsed((prev) => {
      const filtered = prev.filter((id) => id !== toolId)
      return [toolId, ...filtered].slice(0, 10)
    })
  }

  const rateTool = (toolId: string, rating: number) => {
    setToolStats((prev) => {
      const currentStats = prev[toolId] || {
        usageCount: 0,
        lastUsed: new Date().toISOString(),
        rating: 0,
        totalRatings: 0,
      }
      const newTotalRatings = currentStats.totalRatings + 1
      const newRating = (currentStats.rating * currentStats.totalRatings + rating) / newTotalRatings

      return {
        ...prev,
        [toolId]: {
          ...currentStats,
          rating: newRating,
          totalRatings: newTotalRatings,
        },
      }
    })
  }

  const getToolRating = (toolId: string) => {
    return toolStats[toolId]?.rating || 0
  }

  const getTrendingTools = () => {
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    return Object.entries(toolStats)
      .filter(([_, stats]) => new Date(stats.lastUsed) > weekAgo)
      .sort((a, b) => b[1].usageCount - a[1].usageCount)
      .slice(0, 10)
      .map(([toolId]) => toolId)
  }

  const getRecommendations = (toolId: string) => {
    // Simple recommendation based on users who used this tool also used
    const currentToolStats = toolStats[toolId]
    if (!currentToolStats) return []

    return Object.entries(toolStats)
      .filter(([id]) => id !== toolId)
      .sort((a, b) => b[1].usageCount - a[1].usageCount)
      .slice(0, 5)
      .map(([id]) => id)
  }

  return (
    <ToolsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toolStats,
        incrementUsage,
        rateTool,
        getToolRating,
        getTrendingTools,
        getRecommendations,
        recentlyUsed,
      }}
    >
      {children}
    </ToolsContext.Provider>
  )
}

export function useTools() {
  const context = useContext(ToolsContext)
  if (context === undefined) {
    throw new Error("useTools must be used within a ToolsProvider")
  }
  return context
}
