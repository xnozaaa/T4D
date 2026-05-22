"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/safeguarding", label: "Safeguarding" },
    { href: "/recruitment", label: "Join Our Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#b7e4e6]/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/tfd-logo-light.png"
              alt="Tutoring for the Deaf"
              width={440}
              height={100}
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
                className="rounded-lg px-4 py-2 text-base font-medium text-[#0d1b2a] transition-colors hover:bg-[#b7e4e6]/40 hover:text-[#0fa3a3] focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-lg p-2 text-[#0d1b2a] transition-colors hover:bg-[#b7e4e6]/40 hover:text-[#0fa3a3] focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/50"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@tutoringforthedeaf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-[#0d1b2a] transition-colors hover:bg-[#b7e4e6]/40 hover:text-[#0fa3a3] focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/50"
              aria-label="Follow us on TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <Button
              asChild
              size="sm"
              className="ml-3 rounded-lg bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold px-5 py-2 shadow-sm transition-all"
            >
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="rounded-lg p-2 text-[#0d1b2a] hover:bg-[#b7e4e6]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#b7e4e6]/60 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-[#0d1b2a] transition-colors hover:bg-[#b7e4e6]/40 hover:text-[#0fa3a3] focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-[#0d1b2a] transition-colors hover:bg-[#b7e4e6]/40 hover:text-[#0fa3a3]"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@tutoringforthedeaf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-[#0d1b2a] transition-colors hover:bg-[#b7e4e6]/40 hover:text-[#0fa3a3]"
              onClick={() => setIsOpen(false)}
            >
              <TikTokIcon className="h-5 w-5" />
              TikTok
            </a>
            <div className="pt-2">
              <Button
                asChild
                className="w-full rounded-lg bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Book a Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
