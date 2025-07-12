"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Check, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")

    toast({
      title: "Successfully subscribed!",
      description: "You'll receive weekly tool highlights and tips.",
    })
  }

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <Check className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">You're all set!</h3>
          <p className="text-sm text-muted-foreground">
            Thanks for subscribing. You'll receive our weekly newsletter with the latest tools and tips.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center">
          <Mail className="w-5 h-5 mr-2" />
          Stay Updated
        </CardTitle>
        <CardDescription>
          Get weekly highlights of new tools and productivity tips delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe to Newsletter"
            )}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-3 text-center">No spam, unsubscribe at any time.</p>
      </CardContent>
    </Card>
  )
}
