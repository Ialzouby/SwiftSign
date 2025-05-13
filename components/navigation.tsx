"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { History, Send, FileSignature, BarChart3 } from "lucide-react"

const navItems = [
  {
    name: "Send",
    href: "/send",
    icon: Send,
  },
  {
    name: "Sign",
    href: "/sign",
    icon: FileSignature,
  },
  {
    name: "Track",
    href: "/track",
    icon: BarChart3,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn("flex items-center gap-2 py-4", pathname === item.href && "bg-muted")}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
