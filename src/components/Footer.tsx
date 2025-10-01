import Link from "next/link"
import { Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Tutoring for the Deaf</h3>
            <p className="text-gray-300 text-base">
              Helping Deaf Students Succeed with Personalised Tutoring!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:tutoringforthedeaf@gmail.com"
                  className="text-gray-300 hover:text-gold transition-colors text-base break-all"
                >
                  tutoringforthedeaf@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="http://www.tutoringforthedeaf.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors text-base break-all"
                >
                  www.tutoringforthedeaf.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tutoring for the Deaf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}