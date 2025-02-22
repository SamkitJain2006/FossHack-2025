import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold">My College Life</h1>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Your All-in-One College Companion</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Manage your academics, finances, travel plans and more with our AI-powered platform designed
                specifically for college students.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Link href="/register">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="AI Travel Agent"
                description="Plan your trips effortlessly with personalized recommendations and budget-friendly options."
                icon="🌍"
              />
              <FeatureCard
                title="Finance Tracker"
                description="Take control of your finances with intuitive expense tracking and budgeting tools."
                icon="💰"
              />
              <FeatureCard
                title="Portfolio Builder"
                description="Showcase your academic journey with a professional and visually appealing portfolio."
                icon="📚"
              />
              <FeatureCard
                title="Task Manager"
                description="Stay organized with a smart task manager for assignments, exams, and events."
                icon="✅"
              />
              <FeatureCard
                title="Study Assistant"
                description="Get instant academic support with our AI-powered study companion."
                icon="🤖"
              />
              <FeatureCard
                title="Secure Platform"
                description="Focus on your goals while we take care of your privacy and data security."
                icon="🔒"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 My College Life. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div className="p-6 bg-background rounded-lg shadow-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

