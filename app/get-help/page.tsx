"use client"

import React from "react"

import { AlertCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"

export default function GetHelpPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      issueType: formData.get("issue-type"),
      description: formData.get("description"),
      urgency: formData.get("urgency"),
    }

    const res = await fetch("/api/help", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    setLoading(false)

    if (res.ok) {
      setSubmitted(true)
    } else {
      alert("Failed to send request. Try again.")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Get Help Now
            </h1>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {"We're"} here to help you navigate digital privacy violations. Fill out the form
              below and {"we'll"} provide guidance tailored to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>If you are in immediate danger</strong>Please contact local law
              enforcement or call 911. This form is for guidance and resources, not emergency
              response.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tell Us What Happened</CardTitle>
                  <CardDescription>
                    We only collect basic information needed to guide you to the right resources.
                    No sensitive personal data is stored.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                        <Mail className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Thank You for Reaching Out
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Based on your situation, {"we'll"} send you a personalized resource guide
                        with next steps and relevant contact information.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline">
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">First Name (Optional)</Label>
                        <Input id="name" name="name" placeholder="How should we address you?" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="issue-type">
                          Type of Issue <span className="text-destructive">*</span>
                        </Label>
                        <Select name="issue-type" required>
                          <SelectTrigger id="issue-type">
                            <SelectValue placeholder="Select the type of violation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="data-breach">Data Breach</SelectItem>
                            <SelectItem value="identity-theft">Identity Theft</SelectItem>
                            <SelectItem value="deepfake">AI Deepfake</SelectItem>
                            <SelectItem value="doxing">Doxing</SelectItem>
                            <SelectItem value="account-takeover">Account Takeover</SelectItem>
                            <SelectItem value="privacy-violation">Privacy Violation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">
                          Brief Description <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Please describe what happened in a few sentences. You do not need to include sensitive personal details."
                          rows={5}
                          required
                        />
                        <p className="text-sm text-muted-foreground">
                          Do not include sensitive information like passwords, SSN, or financial
                          details
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency">
                          Urgency Level <span className="text-destructive">*</span>
                        </Label>
                        <Select name="urgency" required>
                          <SelectTrigger id="urgency">
                            <SelectValue placeholder="How urgent is your situation?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">
                              Immediate - Ongoing harm or threat
                            </SelectItem>
                            <SelectItem value="urgent">Urgent - Within last 7 days</SelectItem>
                            <SelectItem value="moderate">Moderate - Within last 30 days</SelectItem>
                            <SelectItem value="general">
                              General - Seeking preventive guidance
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={loading}>
                        {loading ? "Sending..." : "Submit Request"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <p className="text-sm text-foreground font-medium">Review</p>
                      <p className="text-sm text-muted-foreground">
                        We review your situation to identify the right resources
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-sm text-foreground font-medium">Guidance</p>
                      <p className="text-sm text-muted-foreground">
                        Receive step-by-step instructions tailored to your case
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <p className="text-sm text-foreground font-medium">Resources</p>
                      <p className="text-sm text-muted-foreground">
                        Get connected to legal aid and reporting channels
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Immediate Assistance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">FBI IC3</p>
                      <p className="text-sm text-muted-foreground">Report internet crimes</p>
                      <a
                        href="https://www.ic3.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        ic3.gov
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">FTC</p>
                      <p className="text-sm text-muted-foreground">Report identity theft</p>
                      <a
                        href="https://www.identitytheft.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        identitytheft.gov
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
