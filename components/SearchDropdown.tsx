"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Tool {
  name: string
  description: string
  category: string
}

interface SearchDropdownProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  tools: Tool[]
  className?: string
  placeholder?: string
}

const SearchDropdown = ({
  searchQuery,
  setSearchQuery,
  tools,
  className,
  placeholder = "Search tools...",
}: SearchDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredTools = tools.filter((tool) => tool.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)

  useEffect(() => {
    setShowDropdown(searchQuery.length > 0 && filteredTools.length > 0)
    setSelectedIndex(-1)
  }, [searchQuery, filteredTools.length])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredTools.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          handleToolSelect(filteredTools[selectedIndex])
        }
        break
      case "Escape":
        setShowDropdown(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleToolSelect = (tool: Tool) => {
    setSearchQuery(tool.name)
    setShowDropdown(false)
    setSelectedIndex(-1)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(searchQuery.length > 0 && filteredTools.length > 0)}
          className={cn("pl-12", className)}
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-xl z-[9999] max-h-64 overflow-y-auto backdrop-blur-sm">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.name}
              className={cn(
                "flex items-center justify-between p-3 hover:bg-muted cursor-pointer transition-colors border-b border-border/50 last:border-b-0",
                selectedIndex === index && "bg-muted",
              )}
              onClick={() => handleToolSelect(tool)}
            >
              <div>
                <div className="font-medium text-foreground">{tool.name}</div>
                <div className="text-sm text-muted-foreground">{tool.category}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchDropdown
