"use client"

import type React from "react"

import { useState } from "react"
// Navigation is now handled by the sidebar
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function TrackPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearched, setIsSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearched(true)
    }
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Track Document Status</h1>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  placeholder="Enter document ID or name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="bg-carolina hover:bg-carolina-dark">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>

          {isSearched && (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Document: NDA_April.pdf</h3>
                    <Badge>In Progress</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">Noor Ahmed</p>
                          <p className="text-sm text-muted-foreground">noor@example.com</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Signed at 10:32 AM
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-amber-500" />
                        <div>
                          <p className="font-medium">Alex Johnson</p>
                          <p className="text-sm text-muted-foreground">alex@example.com</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Viewed at 11:45 AM
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Jamie Smith</p>
                          <p className="text-sm text-muted-foreground">jamie@example.com</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Not viewed yet</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Resend Link
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      Cancel Document
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
