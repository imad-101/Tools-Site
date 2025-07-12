"use client"

import { TrendingUp, Star, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTools } from "@/lib/context/ToolsContext"

interface Tool {
  name: string
  description: string
  icon: any
  category: string
  id: string
}

interface TrendingDashboardProps {
  allTools: Tool[]
}

export function TrendingDashboard({ allTools }: TrendingDashboardProps) {
  const { getTrendingTools, toolStats, recentlyUsed } = useTools()

  const trendingToolIds = getTrendingTools()
  const trendingTools = trendingToolIds.map((id) => allTools.find((tool) => tool.id === id)).filter(Boolean) as Tool[]

  const recentTools = recentlyUsed.map((id) => allTools.find((tool) => tool.id === id)).filter(Boolean) as Tool[]

  const topRatedTools = allTools
    .filter((tool) => toolStats[tool.id]?.totalRatings > 0)
    .sort((a, b) => (toolStats[b.id]?.rating || 0) - (toolStats[a.id]?.rating || 0))
    .slice(0, 5)

  const totalUsage = Object.values(toolStats).reduce((sum, stats) => sum + stats.usageCount, 0)

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">{totalUsage}</div>
            <div className="text-xs text-muted-foreground">Total Uses</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">{trendingTools.length}</div>
            <div className="text-xs text-muted-foreground">Trending Tools</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">{topRatedTools.length}</div>
            <div className="text-xs text-muted-foreground">Top Rated</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">{recentTools.length}</div>
            <div className="text-xs text-muted-foreground">Recently Used</div>
          </CardContent>
        </Card>
      </div>

      {/* Trending Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Trending This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {trendingTools.slice(0, 5).map((tool, index) => {
              const ToolIcon = tool.icon
              const stats = toolStats[tool.id]
              return (
                <div key={tool.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent to-orange-500 rounded-lg flex items-center justify-center">
                      <ToolIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs">
                      #{index + 1}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">{stats?.usageCount || 0} uses</div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Top Rated Tools */}
      {topRatedTools.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Top Rated Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topRatedTools.map((tool) => {
                const ToolIcon = tool.icon
                const stats = toolStats[tool.id]
                return (
                  <div key={tool.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-orange-500 rounded-lg flex items-center justify-center">
                        <ToolIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{stats.rating.toFixed(1)}</span>
                      <span className="text-xs text-muted-foreground">({stats.totalRatings})</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
