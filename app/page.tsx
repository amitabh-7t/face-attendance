import Link from "next/link"
import { ArrowRight, Camera, Database, FileText, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const features = [
    {
      title: "Live Attendance",
      description: "Track attendance in real-time using facial recognition",
      icon: Camera,
      href: "/live-attendance",
    },
    {
      title: "Student Records",
      description: "View and manage student attendance records",
      icon: Database,
      href: "/records",
    },
    {
      title: "System Settings",
      description: "Configure system parameters and user accounts",
      icon: Settings,
      href: "/settings",
    },
    {
      title: "Documentation",
      description: "Learn how to use the system effectively",
      icon: FileText,
      href: "/documentation",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-background py-24">
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center justify-center">
            <img src="/dsu-logo.png" alt="DSU Logo" className="h-20 w-20 dark:invert" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered Attendance System
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Dayananda Sagar University&apos;s advanced facial recognition system for automated, accurate, and efficient
            attendance tracking.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/live-attendance">
                Start Attendance <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/documentation">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">System Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" asChild className="w-full">
                    <Link href={feature.href}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
