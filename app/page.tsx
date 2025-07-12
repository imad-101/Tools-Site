"use client"

import { useState, useMemo } from "react"
import {
  Search,
  User,
  FileImage,
  Sparkles,
  Video,
  Maximize,
  Scale,
  Scissors,
  ArrowRightLeft,
  Palette,
  Braces,
  Minimize,
  CheckCircle,
  Key,
  Globe,
  Type,
  Hash,
  CaseSensitive,
  GitCompare,
  Lock,
  QrCode,
  Calculator,
  Percent,
  Calendar,
  Activity,
  DollarSign,
  Receipt,
  TrendingUp,
  Database,
  ImageIcon,
  Code,
  FileText,
  Heart,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchDropdown from "@/components/SearchDropdown"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AdvancedSearch } from "@/components/AdvancedSearch"
import { ToolCard } from "@/components/ToolCard"
import { TrendingDashboard } from "@/components/TrendingDashboard"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { useTools } from "@/lib/context/ToolsContext"

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [minRating, setMinRating] = useState(0)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const { favorites, toolStats, getToolRating, recentlyUsed, getRecommendations } = useTools()

  const toolsData = {
    "Images Editing Tools": {
      icon: ImageIcon,
      color: "from-blue-500 to-blue-600",
      description:
        "Create a favicon, compress an image or resize a picture with a single click. All essentials for image editing are available in one place.",
      tools: [
        {
          name: "Reverse Image Search",
          description: "Find similar images across the web",
          icon: Search,
          category: "Images Editing Tools",
          id: "reverse-image-search",
        },
        {
          name: "Face Search",
          description: "Search for faces in images",
          icon: User,
          category: "Images Editing Tools",
          id: "face-search",
        },
        {
          name: "Image Compressor",
          description: "Compress images without quality loss",
          icon: FileImage,
          category: "Images Editing Tools",
          id: "image-compressor",
        },
        {
          name: "Favicon Generator",
          description: "Create favicons for your website",
          icon: Sparkles,
          category: "Images Editing Tools",
          id: "favicon-generator",
        },
        {
          name: "Video To GIF Converter",
          description: "Convert video files to GIF format",
          icon: Video,
          category: "Images Editing Tools",
          id: "video-to-gif",
        },
        {
          name: "Image Resizer",
          description: "Resize images to any dimension",
          icon: Maximize,
          category: "Images Editing Tools",
          id: "image-resizer",
        },
        {
          name: "Photo Resizer In KB",
          description: "Resize photos to specific file sizes",
          icon: Scale,
          category: "Images Editing Tools",
          id: "photo-resizer-kb",
        },
        {
          name: "Crop Image",
          description: "Crop images to desired dimensions",
          icon: Scissors,
          category: "Images Editing Tools",
          id: "crop-image",
        },
        {
          name: "Convert To JPG",
          description: "Convert images to JPG format",
          icon: ArrowRightLeft,
          category: "Images Editing Tools",
          id: "convert-to-jpg",
        },
        {
          name: "RGB To Hex",
          description: "Convert RGB colors to Hex codes",
          icon: Palette,
          category: "Images Editing Tools",
          id: "rgb-to-hex",
        },
        {
          name: "PNG To JPG",
          description: "Convert PNG images to JPG",
          icon: ArrowRightLeft,
          category: "Images Editing Tools",
          id: "png-to-jpg",
        },
        {
          name: "JPG To PNG",
          description: "Convert JPG images to PNG",
          icon: ArrowRightLeft,
          category: "Images Editing Tools",
          id: "jpg-to-png",
        },
      ],
    },
    "Development Tools": {
      icon: Code,
      color: "from-green-500 to-green-600",
      description:
        "Essential development tools for coding, formatting, and validation. Everything developers need in one place.",
      tools: [
        {
          name: "JSON Formatter",
          description: "Format and validate JSON data",
          icon: Braces,
          category: "Development Tools",
          id: "json-formatter",
        },
        {
          name: "CSS Minifier",
          description: "Minify your CSS code",
          icon: Minimize,
          category: "Development Tools",
          id: "css-minifier",
        },
        {
          name: "HTML Validator",
          description: "Validate HTML markup",
          icon: CheckCircle,
          category: "Development Tools",
          id: "html-validator",
        },
        {
          name: "Base64 Encoder",
          description: "Encode/decode Base64 strings",
          icon: Key,
          category: "Development Tools",
          id: "base64-encoder",
        },
        {
          name: "URL Encoder",
          description: "Encode URLs for web use",
          icon: Globe,
          category: "Development Tools",
          id: "url-encoder",
        },
        {
          name: "Color Picker",
          description: "Pick colors from images or palette",
          icon: Palette,
          category: "Development Tools",
          id: "color-picker",
        },
      ],
    },
    "Text Tools": {
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      description:
        "Powerful text processing tools for content creation, formatting, and analysis. Streamline your text workflows.",
      tools: [
        {
          name: "Lorem Ipsum Generator",
          description: "Generate placeholder text",
          icon: Type,
          category: "Text Tools",
          id: "lorem-ipsum",
        },
        {
          name: "Word Counter",
          description: "Count words, characters, and paragraphs",
          icon: Hash,
          category: "Text Tools",
          id: "word-counter",
        },
        {
          name: "Case Converter",
          description: "Convert text case (upper, lower, title)",
          icon: CaseSensitive,
          category: "Text Tools",
          id: "case-converter",
        },
        {
          name: "Text Diff Checker",
          description: "Compare two text files",
          icon: GitCompare,
          category: "Text Tools",
          id: "text-diff",
        },
        {
          name: "Password Generator",
          description: "Generate secure passwords",
          icon: Lock,
          category: "Text Tools",
          id: "password-generator",
        },
        {
          name: "QR Code Generator",
          description: "Create QR codes instantly",
          icon: QrCode,
          category: "Text Tools",
          id: "qr-generator",
        },
      ],
    },
    Calculators: {
      icon: Calculator,
      color: "from-orange-500 to-orange-600",
      description:
        "Comprehensive calculators for everyday math, finance, and health calculations. Quick and accurate results.",
      tools: [
        {
          name: "Unit Converter",
          description: "Convert between different units",
          icon: ArrowRightLeft,
          category: "Calculators",
          id: "unit-converter",
        },
        {
          name: "Percentage Calculator",
          description: "Calculate percentages easily",
          icon: Percent,
          category: "Calculators",
          id: "percentage-calc",
        },
        {
          name: "Age Calculator",
          description: "Calculate age in years, months, days",
          icon: Calendar,
          category: "Calculators",
          id: "age-calculator",
        },
        {
          name: "BMI Calculator",
          description: "Calculate Body Mass Index",
          icon: Activity,
          category: "Calculators",
          id: "bmi-calculator",
        },
        {
          name: "Loan Calculator",
          description: "Calculate loan payments and interest",
          icon: DollarSign,
          category: "Calculators",
          id: "loan-calculator",
        },
        {
          name: "Tip Calculator",
          description: "Calculate tips and split bills",
          icon: Receipt,
          category: "Calculators",
          id: "tip-calculator",
        },
      ],
    },
  }

  const categories = Object.entries(toolsData).map(([name, data]) => ({
    name,
    icon: data.icon,
    color: data.color,
    description: data.description,
    tools: data.tools,
  }))

  const allTools = Object.values(toolsData).flatMap((category) => category.tools)

  const filteredAndSortedTools = useMemo(() => {
    let filtered = allTools

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory)
    }

    // Apply favorites filter
    if (showFavoritesOnly) {
      filtered = filtered.filter((tool) => favorites.includes(tool.id))
    }

    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter((tool) => getToolRating(tool.id) >= minRating)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popularity":
          return (toolStats[b.id]?.usageCount || 0) - (toolStats[a.id]?.usageCount || 0)
        case "rating":
          return getToolRating(b.id) - getToolRating(a.id)
        case "recent":
          const aIndex = recentlyUsed.indexOf(a.id)
          const bIndex = recentlyUsed.indexOf(b.id)
          if (aIndex === -1 && bIndex === -1) return 0
          if (aIndex === -1) return 1
          if (bIndex === -1) return -1
          return aIndex - bIndex
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
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
  ])

  const favoriteTools = allTools.filter((tool) => favorites.includes(tool.id))
  const recentTools = recentlyUsed
    .map((id) => allTools.find((tool) => tool.id === id))
    .filter(Boolean) as typeof allTools

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />

      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1" />
                50+ Free Tools
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Free Online Tools to
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                {" "}
                Simplify
              </span>
              <br />
              Your Workflow
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              A collection of free, easy-to-use online tools designed to boost your productivity and streamline your
              daily tasks.
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
                <div className="text-2xl font-bold text-white">{allTools.length}+</div>
                <div>Free Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{categories.length}</div>
                <div>Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div>Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5">
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
                        {searchQuery ? `Search Results (${filteredAndSortedTools.length})` : "All Tools"}
                      </h2>
                      {searchQuery && <p className="text-muted-foreground">Tools matching "{searchQuery}"</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedTools.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} showCategory={true} />
                    ))}
                  </div>

                  {filteredAndSortedTools.length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-muted-foreground mb-4">No tools found matching your criteria.</div>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchQuery("")
                          setSelectedCategory("all")
                          setShowFavoritesOnly(false)
                          setMinRating(0)
                        }}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Your Favorite Tools</h2>
                  {favoriteTools.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {favoriteTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} showCategory={true} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Start adding tools to your favorites by clicking the heart icon.
                      </p>
                      <Button onClick={() => setActiveTab("all")}>Browse All Tools</Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Recently Used Tools</h2>
                  {recentTools.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recentTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} showCategory={true} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-muted-foreground mb-4">No recently used tools.</div>
                      <Button onClick={() => setActiveTab("all")}>Start Using Tools</Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="space-y-6">
                <TrendingDashboard allTools={allTools} />
              </TabsContent>

              <TabsContent value="categories" className="space-y-12">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <div key={category.name}>
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                          <p className="text-muted-foreground">{category.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {category.tools.map((tool) => (
                          <ToolCard key={tool.id} tool={tool} variant="compact" />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </TabsContent>
            </Tabs>
          </div>

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
                        {Object.values(toolStats).reduce((sum, stats) => sum + stats.usageCount, 0)}
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
                      <Badge className="bg-accent text-white font-medium">Always</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
