"use client"

import { useState } from "react"
// Navigation is now handled by the sidebar
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Plus, Trash2 } from "lucide-react"

export default function SendPage() {
  const [step, setStep] = useState(1)
  const [recipients, setRecipients] = useState([{ name: "", email: "" }])

  const addRecipient = () => {
    setRecipients([...recipients, { name: "", email: "" }])
  }

  const removeRecipient = (index: number) => {
    const newRecipients = [...recipients]
    newRecipients.splice(index, 1)
    setRecipients(newRecipients)
  }

  const updateRecipient = (index: number, field: string, value: string) => {
    const newRecipients = [...recipients]
    newRecipients[index] = { ...newRecipients[index], [field]: value }
    setRecipients(newRecipients)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Send Document</h1>
            <div className="text-sm text-muted-foreground">Step {step} of 3</div>
          </div>

          <Tabs value={`step-${step}`} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="step-1" disabled>
                Upload Document
              </TabsTrigger>
              <TabsTrigger value="step-2" disabled>
                Add Recipients
              </TabsTrigger>
              <TabsTrigger value="step-3" disabled>
                Signature Fields
              </TabsTrigger>
            </TabsList>

            <TabsContent value="step-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="border-2 border-dashed rounded-lg p-12 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload your document</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop your PDF file here, or click to browse
                    </p>
                    <Button>Browse Files</Button>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button onClick={nextStep} className="bg-carolina hover:bg-carolina-dark">
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="step-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Add Recipients</h3>

                    {recipients.map((recipient, index) => (
                      <div key={index} className="space-y-4 p-4 border rounded-lg relative">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`name-${index}`}>Name</Label>
                            <Input
                              id={`name-${index}`}
                              value={recipient.name}
                              onChange={(e) => updateRecipient(index, "name", e.target.value)}
                              placeholder="Recipient name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`email-${index}`}>Email</Label>
                            <Input
                              id={`email-${index}`}
                              type="email"
                              value={recipient.email}
                              onChange={(e) => updateRecipient(index, "email", e.target.value)}
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id={`requires-signature-${index}`} />
                          <Label htmlFor={`requires-signature-${index}`}>Requires signature</Label>
                        </div>

                        {recipients.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => removeRecipient(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}

                    <Button variant="outline" onClick={addRecipient} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add another recipient
                    </Button>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-carolina hover:bg-carolina-dark">
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="step-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Signature Fields</h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-place" defaultChecked />
                        <Label htmlFor="auto-place">Auto-place signature tags</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        SwiftSign will automatically detect where signatures are needed in your document.
                      </p>
                    </div>

                    <div className="space-y-4 border-t pt-4">
                      <h4 className="font-medium">Additional Fields</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="allow-initials" />
                          <Label htmlFor="allow-initials">Allow initials</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="allow-date" defaultChecked />
                          <Label htmlFor="allow-date">Date fields</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="allow-text" />
                          <Label htmlFor="allow-text">Text fields</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button className="bg-carolina hover:bg-carolina-dark">Send Document</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
