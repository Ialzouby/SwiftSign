import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function QuickStartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Start</CardTitle>
        <CardDescription>Get started with SwiftSign in minutes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded-full p-2 flex items-center justify-center w-8 h-8">
              1
            </div>
            <span>Upload a document</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded-full p-2 flex items-center justify-center w-8 h-8">
              2
            </div>
            <span>Add signers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded-full p-2 flex items-center justify-center w-8 h-8">
              3
            </div>
            <span>Send for signature</span>
          </div>
          <Button asChild className="w-full mt-4 bg-carolina hover:bg-carolina-dark">
            <Link href="/send">
              Send a document
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
