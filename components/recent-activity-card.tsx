import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock } from "lucide-react"

const recentDocuments = [
  {
    id: "doc-1",
    name: "NDA_April.pdf",
    status: "Sent",
    recipient: "Noor",
    date: "Today, 2:30 PM",
  },
  {
    id: "doc-2",
    name: "Contract_2025.pdf",
    status: "Awaiting Signature",
    recipient: "Alex",
    date: "Yesterday, 10:15 AM",
  },
  {
    id: "doc-3",
    name: "Invoice_Q1.pdf",
    status: "Completed",
    recipient: "Jamie",
    date: "Apr 10, 2025",
  },
]

export default function RecentActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Track your document status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDocuments.map((doc) => (
            <div key={doc.id} className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="bg-muted rounded-md p-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium truncate">{doc.name}</p>
                  <Badge variant={doc.status === "Completed" ? "default" : "outline"}>{doc.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground truncate">Recipient: {doc.recipient}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  {doc.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
