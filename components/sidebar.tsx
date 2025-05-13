"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, FileSignature, History, Menu, Send, Settings, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  {
    name: "Send",
    href: "/send",
    icon: Send,
    description: "Send documents for signature",
  },
  {
    name: "Sign",
    href: "/sign",
    icon: FileSignature,
    description: "Sign pending documents",
  },
  {
    name: "Track",
    href: "/track",
    icon: BarChart3,
    description: "Track document status",
  },
  {
    name: "History",
    href: "/history",
    icon: History,
    description: "View document history",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Manage your account",
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex items-center justify-between">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <span className="text-xl font-bold text-carolina">SwiftSign</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid gap-1 px-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                        pathname === item.href ? "bg-carolina text-white" : "hover:bg-muted",
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <div>
                        <div>{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="p-4 border-t">
                <div className="text-xs text-muted-foreground">&copy; 2025 SwiftSign</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-[240px] md:flex-col md:fixed md:inset-y-0 z-10">
        <div className="flex flex-col h-full border-r bg-white">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-carolina">SwiftSign</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="grid gap-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    pathname === item.href ? "bg-carolina text-white" : "hover:bg-muted",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <div className="text-xs text-muted-foreground">&copy; 2025 SwiftSign</div>
          </div>
        </div>
      </div>
    </>
  )
}
