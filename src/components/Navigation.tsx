"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1759346031353.png"
              alt="Tutoring for the Deaf"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-2 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-md p-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}