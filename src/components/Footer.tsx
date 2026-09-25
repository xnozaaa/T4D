import Link from "next/link"
import Image from "next/image"
import { Mail, Globe, Instagram } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1b2a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <Image
              src="/tfd-logo-dark.png"
              alt="Tutoring for the Deaf"
              width={440}
              height={100}
              className="h-11 w-auto mb-4"
            />
            <p className="text-[#b7e4e6]/80 text-base leading-relaxed">
              Helping Deaf Students Succeed with Personalised English &amp; Maths Tutoring.
            </p>
            <div className="mt-4 h-0.5 w-12 bg-[#0fa3a3] rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/safeguarding", label: "Safeguarding" },
                { href: "/recruitment", label: "Join Our Team" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#b7e4e6]/70 hover:text-[#0fa3a3] transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#0fa3a3] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:tutoringforthedeaf@gmail.com"
                  className="text-[#b7e4e6]/70 hover:text-[#0fa3a3] transition-colors text-base break-all"
                >
                  tutoringforthedeaf@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-[#0fa3a3] mt-0.5 flex-shrink-0" />
                <a
                  href="http://www.tutoringforthedeaf.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b7e4e6]/70 hover:text-[#0fa3a3] transition-colors text-base break-all"
                >
                  www.tutoringforthedeaf.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-[#0fa3a3] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b7e4e6]/70 hover:text-[#0fa3a3] transition-colors text-base"
                >
                  @tutoringforthedeaf
                </a>
              </li>
              <li className="flex items-start gap-3">
                <TikTokIcon className="h-5 w-5 text-[#0fa3a3] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.tiktok.com/@tutoringforthedeaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b7e4e6]/70 hover:text-[#0fa3a3] transition-colors text-base"
                >
                  @tutoringforthedeaf
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[#b7e4e6]/50 text-sm">
            © {new Date().getFullYear()} Tutoring for the Deaf. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/privacy" className="text-[#b7e4e6]/70 hover:text-white">Privacy &amp; Cookies</Link>
            <span className="text-[#b7e4e6]/40">Specialist Deaf Tutor · BSL Fluent · 10+ Years Experience</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
