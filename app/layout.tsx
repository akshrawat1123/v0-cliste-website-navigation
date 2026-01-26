import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "AI Integrity Foundation - Protecting Privacy in the AI Age",
  description:
    "Supporting individuals affected by data privacy breaches, personal data leaks, and AI-generated deepfakes. Access educational resources, step-by-step guidance, and connections to legal aid.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <Navigation />
          {children}
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
