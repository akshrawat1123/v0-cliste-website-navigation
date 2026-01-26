import {
  BookOpen,
  Shield,
  FileText,
  Building2,
  Scale,
  AlertCircle,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Resources
            </h1>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Educational guides, reporting channels, and trusted organizations to help protect
              your digital rights
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="guides">Educational Guides</TabsTrigger>
              <TabsTrigger value="government">Government Agencies</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
            </TabsList>

            {/* Educational Guides */}
            <TabsContent value="guides" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Educational Guides
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Learn about digital privacy, AI technology, and how to protect yourself
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>Understanding Data Breaches</CardTitle>
                    <CardDescription>
                      What happens when your data is exposed and what steps to take immediately
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <AlertCircle className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>Recognizing AI Deepfakes</CardTitle>
                    <CardDescription>
                      How to identify synthetic media and what to do if your likeness is used
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>Identity Theft Recovery</CardTitle>
                    <CardDescription>
                      Step-by-step process for recovering from identity theft
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>Your Privacy Rights</CardTitle>
                    <CardDescription>
                      Understanding GDPR, CCPA, and other privacy laws that protect you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>Securing Your Accounts</CardTitle>
                    <CardDescription>
                      Best practices for passwords, two-factor authentication, and account security
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle>Documenting Violations</CardTitle>
                    <CardDescription>
                      How to collect evidence and document digital harassment or privacy violations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Government Agencies */}
            <TabsContent value="government" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Government Agencies
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Official channels for reporting violations and seeking government assistance
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Building2 className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>Federal Trade Commission (FTC)</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Report identity theft, fraud, and privacy violations</p>
                      <a
                        href="https://www.identitytheft.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        identitytheft.gov <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Building2 className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>FBI Internet Crime Complaint Center (IC3)</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Report internet crimes including cyberstalking and harassment</p>
                      <a
                        href="https://www.ic3.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        ic3.gov <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Building2 className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>Consumer Financial Protection Bureau (CFPB)</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>File complaints about financial data breaches and fraud</p>
                      <a
                        href="https://www.consumerfinance.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        consumerfinance.gov <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Building2 className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>State Attorney General</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Contact your state AG for local privacy protection assistance</p>
                      <a
                        href="https://www.naag.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Find Your State AG <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Organizations */}
            <TabsContent value="organizations" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Trusted Organizations
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nonprofits, legal aid, and advocacy groups dedicated to digital rights
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Scale className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>Electronic Frontier Foundation (EFF)</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Leading nonprofit defending digital privacy and free expression</p>
                      <a
                        href="https://www.eff.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        eff.org <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Scale className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>Privacy Rights Clearinghouse</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Consumer advocacy providing privacy rights information and resources</p>
                      <a
                        href="https://www.privacyrights.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        privacyrights.org <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Scale className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>Cyber Civil Rights Initiative (CCRI)</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Support for victims of online harassment and nonconsensual content</p>
                      <a
                        href="https://www.cybercivilrights.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        cybercivilrights.org <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                        <Scale className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <CardTitle>National Network to End Domestic Violence</CardTitle>
                    <CardDescription className="space-y-2">
                      <p>Technology safety resources for domestic violence survivors</p>
                      <a
                        href="https://www.nnedv.org/content/technology-safety"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        nnedv.org <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our intake form will help connect you with the right resources for your specific
            situation.
          </p>
          <Button asChild size="lg">
            <Link href="/get-help">Get Help Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
