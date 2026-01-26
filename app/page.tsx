import { Shield, Users, FileText, AlertTriangle, Scale, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Protecting Your Digital Rights in the{" "}
              <span className="text-primary">AI Age</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We support individuals affected by data privacy breaches, personal data leaks, and
              AI-generated deepfakes. Access free resources, expert guidance, and connections to
              legal aid.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button asChild size="lg">
                <Link href="/get-help">Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Help
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide support and resources for anyone affected by digital privacy violations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Data Breach Victims</CardTitle>
                <CardDescription>
                  If your personal information was exposed in a security breach, we can help you
                  understand your rights and take action
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Identity Theft Survivors</CardTitle>
                <CardDescription>
                  When someone misuses your personal data or likeness, we guide you through
                  reporting and recovery steps
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Deepfake Targets</CardTitle>
                <CardDescription>
                  If AI-generated content falsely uses your image or voice, we connect you with
                  legal resources and reporting channels
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Address Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Problems We Address
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the challenges of digital privacy in an AI-powered world
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Data Leaks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Personal information exposed through corporate breaches, hacks, or unauthorized
                access to databases
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Identity Misuse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your personal data being used without consent for fraud, harassment, or other
                harmful purposes
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Deepfakes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Synthetic media using your likeness or voice created without permission for
                deception or harm
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Doxing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Private information published online with malicious intent to harass, threaten, or
                intimidate
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Account Takeovers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unauthorized access to your online accounts, social media profiles, or digital
                services
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Privacy Violations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unauthorized collection, use, or sharing of your personal data by companies or
                individuals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Help
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support to protect your digital rights
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Educational Resources
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear, accessible guides on privacy rights, AI technology, and steps to protect
                yourself online
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Step-by-Step Guidance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Practical action plans for reporting incidents, securing accounts, and documenting
                violations
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <Scale className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Legal Connections</h3>
              <p className="text-muted-foreground leading-relaxed">
                Direct links to government agencies, legal aid organizations, and trusted reporting
                channels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Need Help Right Now?
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {"Don't"} face digital privacy violations alone. Our resources and guidance are here to
            support you through every step of the process.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-help">Get Help Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/mission">Learn About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
