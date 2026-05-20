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
    <nav className="sticky top-0 z-50 w-full border-b border-[#BDE3E4]/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
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
                className="rounded-lg px-4 py-2 text-base font-medium text-[#0B1724] transition-colors hover:bg-[#BFEAEA]/40 hover:text-[#00AEB0] focus:outline-none focus:ring-2 focus:ring-[#00AEB0]/50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-lg p-2 text-[#0B1724] transition-colors hover:bg-[#BFEAEA]/40 hover:text-[#00AEB0] focus:outline-none focus:ring-2 focus:ring-[#00AEB0]/50"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button
              asChild
              size="sm"
              className="ml-3 rounded-lg bg-[#00AEB0] hover:bg-[#008C8E] text-white font-semibold px-5 py-2 shadow-sm transition-all"
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
              className="rounded-lg p-2 text-[#0B1724] hover:bg-[#BFEAEA]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00AEB0]/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#BDE3E4]/60 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-[#0B1724] transition-colors hover:bg-[#BFEAEA]/40 hover:text-[#00AEB0] focus:outline-none focus:ring-2 focus:ring-[#00AEB0]/50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-[#0B1724] transition-colors hover:bg-[#BFEAEA]/40 hover:text-[#00AEB0]"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <div className="pt-2">
              <Button
                asChild
                className="w-full rounded-lg bg-[#00AEB0] hover:bg-[#008C8E] text-white font-semibold"
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
