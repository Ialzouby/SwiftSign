"use client"

import { useState } from "react"
// Navigation is now handled by the sidebar
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Edit, ImageIcon } from "lucide-react"

export default function SignPage() {
  const [signatureType, setSignatureType] = useState("type")
  const [documentUploaded, setDocumentUploaded] = useState(false)

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Sign Document</h1>

          {!documentUploaded ? (
            <Card>
              <CardContent className="pt-6">
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload a document to sign</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop your PDF file here, or click to browse
                  </p>
                  <Button onClick={() => setDocumentUploaded(true)} className="bg-carolina hover:bg-carolina-dark">
                    Browse Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Document preview</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Click on the document where you want to place your signature
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Create Your Signature</h3>

                  <Tabs value={signatureType} onValueChange={setSignatureType}>
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="type">Type</TabsTrigger>
                      <TabsTrigger value="draw">Draw</TabsTrigger>
                      <TabsTrigger value="upload">Upload</TabsTrigger>
                    </TabsList>

                    <TabsContent value="type" className="space-y-4">
                      <div className="border rounded-lg p-6 text-center">
                        <p className="italic text-2xl text-muted-foreground">Your Name</p>
                      </div>
                      <Button className="w-full bg-carolina hover:bg-carolina-dark">Use This Signature</Button>
                    </TabsContent>

                    <TabsContent value="draw" className="space-y-4">
                      <div className="border rounded-lg p-6 h-[150px] flex items-center justify-center">
                        <Edit className="h-8 w-8 text-muted-foreground" />
                        <span className="ml-2 text-muted-foreground">Draw your signature here</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          Clear
                        </Button>
                        <Button className="flex-1">Use This Signature</Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="upload" className="space-y-4">
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-4">Upload an image of your signature</p>
                        <Button variant="outline">Browse Files</Button>
                      </div>
                      <Button disabled className="w-full">
                        Use This Signature
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setDocumentUploaded(false)}>
                  Cancel
                </Button>
                <Button className="bg-carolina hover:bg-carolina-dark">Confirm Signature</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
