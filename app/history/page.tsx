// Navigation is now handled by the sidebar
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, Eye } from "lucide-react"

const documents = [
  {
    id: "doc-1",
    name: "NDA_April.pdf",
    status: "Completed",
    date: "Apr 15, 2025",
    recipients: "Noor, Alex, Jamie",
  },
  {
    id: "doc-2",
    name: "Contract_2025.pdf",
    status: "In Progress",
    date: "Apr 12, 2025",
    recipients: "Alex, Jamie",
  },
  {
    id: "doc-3",
    name: "Invoice_Q1.pdf",
    status: "Completed",
    date: "Apr 10, 2025",
    recipients: "Jamie",
  },
  {
    id: "doc-4",
    name: "Proposal_Project_X.pdf",
    status: "Declined",
    date: "Apr 5, 2025",
    recipients: "Taylor",
  },
  {
    id: "doc-5",
    name: "Agreement_Services.pdf",
    status: "Completed",
    date: "Mar 28, 2025",
    recipients: "Noor, Jamie",
  },
]

export default function HistoryPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Document History</h1>
          <div className="flex gap-2">
            <Input placeholder="Search documents" className="w-64" />
            <Button size="icon" className="bg-carolina hover:bg-carolina-dark">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.name}</TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell>{doc.recipients}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          doc.status === "Completed"
                            ? "default"
                            : doc.status === "In Progress"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {doc.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
