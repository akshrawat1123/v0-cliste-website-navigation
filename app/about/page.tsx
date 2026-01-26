import { Shield, Eye, Users, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              About Us
            </h1>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              A nonprofit organization committed to protecting digital rights and supporting
              victims of privacy violations
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why We Exist</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AI Integrity Foundation was founded in response to a growing crisis: the rapid
              advancement of AI technology and the increasing frequency of data breaches have left
              millions of people vulnerable to privacy violations, identity theft, and digital
              harassment. Yet many victims {"don't"} know where to turn for help.
            </p>
            <p>
              Our founders—a team of privacy advocates, legal professionals, and technology
              experts—recognized that existing resources were fragmented, difficult to navigate, or
              inaccessible to those who needed them most. Too often, victims were left alone to
              figure out complex reporting processes, understand their legal rights, and protect
              themselves from ongoing harm.
            </p>
            <p>
              We created AI Integrity Foundation to change that. Our mission is simple: provide
              free, accessible, victim-centered support for anyone affected by data privacy
              breaches, personal data leaks, and AI-generated deepfakes.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Makes Us Different
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our approach is grounded in ethics, accessibility, and public interest
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Victim-Centered</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We put the needs and safety of victims first, providing compassionate support
                without judgment
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Privacy First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not collect sensitive personal data and maintain strict privacy standards in
                all our operations
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Accessible</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All our resources are free, easy to understand, and designed for people without
                technical expertise
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Transparent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We operate with full transparency about our methods, partnerships, and limitations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Commitment to Ethics</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              As a public interest organization focused on privacy violations, we hold ourselves to
              the highest ethical standards:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <strong className="text-foreground">We do not sell or share user data.</strong> Any
                information collected through our intake form is used solely to provide guidance
                and is not stored long-term or shared with third parties.
              </li>
              <li>
                <strong className="text-foreground">
                  We maintain independence and objectivity.
                </strong>{" "}
                Our recommendations are based on what best serves victims, not commercial
                interests.
              </li>
              <li>
                <strong className="text-foreground">We stay current on technology and policy.</strong>{" "}
                Our team continuously monitors developments in AI, privacy law, and cybersecurity
                to provide accurate, up-to-date information.
              </li>
              <li>
                <strong className="text-foreground">We acknowledge our limitations.</strong> We are
                not a law firm and do not provide legal advice. We connect people to appropriate
                resources and professionals.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Leadership</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            AI Integrity Foundation was founded by two technology leaders committed to protecting
            digital rights and privacy in the age of AI.
          </p>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="p-8 bg-card rounded-lg border border-border">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Agastya Khati</h3>
                <p className="text-sm text-primary font-medium">Co-Founder</p>
              </div>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Shobhit Kapoor</h3>
                <p className="text-sm text-primary font-medium">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Looking Forward</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The challenges facing digital privacy will only grow as AI technology becomes more
            sophisticated and data collection more pervasive. We {"don't"} have all the answers,
            but we are committed to adapting our resources to meet emerging threats and evolving
            needs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our vision is a future where everyone has the knowledge, tools, and support they need
            to protect their digital rights—and where technology companies and policymakers are
            held accountable for the systems they create.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Questions About Our Work?
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            If you need immediate help with a privacy violation, please visit our Get Help page. For
            general inquiries about our organization, {"we'd"} love to hear from you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-help">Get Help</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/resources">View Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
