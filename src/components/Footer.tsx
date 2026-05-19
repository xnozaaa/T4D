import Link from "next/link"
import Image from "next/image"
import { Mail, Globe, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1724] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <Image
              src="/logo-dark.svg"
              alt="Tutoring for the Deaf"
              width={200}
              height={48}
              className="h-11 w-auto mb-4"
            />
            <p className="text-[#BFEAEA]/80 text-base leading-relaxed">
              Helping Deaf Students Succeed with Personalised English &amp; Maths Tutoring.
            </p>
            <div className="mt-4 h-0.5 w-12 bg-[#00AEB0] rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#BFEAEA]/70 hover:text-[#00AEB0] transition-colors text-base"
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
                <Mail className="h-5 w-5 text-[#00AEB0] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:tutoringforthedeaf@gmail.com"
                  className="text-[#BFEAEA]/70 hover:text-[#00AEB0] transition-colors text-base break-all"
                >
                  tutoringforthedeaf@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-[#00AEB0] mt-0.5 flex-shrink-0" />
                <a
                  href="http://www.tutoringforthedeaf.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BFEAEA]/70 hover:text-[#00AEB0] transition-colors text-base break-all"
                >
                  www.tutoringforthedeaf.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-[#00AEB0] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/tutoringforthedeaf/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BFEAEA]/70 hover:text-[#00AEB0] transition-colors text-base"
                >
                  @tutoringforthedeaf
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[#BFEAEA]/50 text-sm">
            © {new Date().getFullYear()} Tutoring for the Deaf. All rights reserved.
          </p>
          <p className="text-[#BFEAEA]/40 text-xs">
            Specialist Deaf Tutor · BSL Fluent · 10+ Years Experience
          </p>
        </div>
      </div>
    </footer>
  )
}
