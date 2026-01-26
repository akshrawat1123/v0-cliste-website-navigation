import { Shield, Target, Heart, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Our Mission
            </h1>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Empowering individuals to protect their digital rights in an age of unprecedented
              technological change
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Growing Risks of AI Misuse and Data Exposure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We live in an era where artificial intelligence can generate convincing fake videos,
              corporate data breaches expose millions of personal records, and digital harassment
              can destroy reputations overnight. The technology that powers our modern world also
              creates new vulnerabilities that most people are unprepared to face.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every day, individuals discover their personal information has been leaked online,
              their likeness has been used in deepfake content without consent, or their identity
              has been stolen for malicious purposes. The psychological, financial, and social
              consequences can be devastating, and many victims {"don't"} know where to turn for
              help.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This crisis demands a coordinated response that puts victims first and provides them
              with the knowledge, resources, and support they need to protect themselves and seek
              justice.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Drives Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission is built on three foundational principles
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Harm Prevention</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in proactive education and early intervention to help people protect
                their digital privacy before violations occur
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Access to Resources</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every victim deserves clear guidance and direct connections to legal aid,
                government agencies, and reporting channels
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Policy-Aware Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                We stay informed about evolving privacy laws and AI regulations to provide
                up-to-date, actionable information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              AI Integrity Foundation is a nonprofit organization dedicated to supporting
              individuals affected by data privacy breaches, personal data leaks, and AI-generated
              deepfakes. We provide:
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                  <Users className="h-4 w-4 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Free Educational Resources
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive guides on understanding your privacy rights, recognizing different
                  types of digital violations, and learning how AI technologies can be misused
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                  <Users className="h-4 w-4 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Step-by-Step Action Plans
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practical guidance for documenting violations, securing compromised accounts,
                  reporting incidents to the appropriate authorities, and seeking legal recourse
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                  <Users className="h-4 w-4 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Connections to Legal Aid
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Direct links to government agencies like the FTC and FBI, legal aid
                  organizations, privacy advocacy groups, and trusted reporting channels
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                  <Users className="h-4 w-4 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  AI Accountability Advocacy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work to raise awareness about the ethical implications of AI misuse and
                  advocate for stronger protections for individuals in the digital age
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AI Integrity Foundation was founded by privacy advocates, legal professionals, and
            technology experts who recognized the urgent need for victim-centered support in the
            face of growing digital threats.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are committed to public interest work, operating with transparency and integrity. We
            do not collect sensitive personal information through our platform and maintain strict
            ethical standards in all our operations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our work is guided by the belief that privacy is a fundamental human right, and that
            everyone deserves access to the knowledge and resources needed to protect themselves in
            an increasingly complex digital landscape.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Join Us in Protecting Digital Rights
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need help right now or want to learn more about digital privacy protection,
            {"we're"} here to support you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild size="lg">
              <Link href="/get-help">Get Help</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
