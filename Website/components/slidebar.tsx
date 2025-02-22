"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, GraduationCap, Home, LogOut, PiggyBank, Plane, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Travel Agent", href: "/dashboard/travel", icon: Plane },
  { name: "Finance", href: "/dashboard/finance", icon: PiggyBank },
  { name: "Portfolio", href: "/dashboard/portfolio", icon: GraduationCap },
  { name: "Tasks", href: "/dashboard/tasks", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-muted/50 min-h-screen p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-4">My College Life</h2>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === link.href ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/80",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => {
              // TODO: Implement logout
            }}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

