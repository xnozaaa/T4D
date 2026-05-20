"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Globe, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              We'd Love to Hear From You
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">Get In Touch</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              Ready to start your learning journey? Contact me today to discuss your tutoring needs.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm">
                  <CardHeader className="px-8 pt-8 pb-2">
                    <CardTitle className="text-2xl text-[#0d1b2a]">Send Me a Message</CardTitle>
                    <CardDescription className="text-base text-[#0d1b2a]/60">
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-[#0d1b2a]">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="h-12 text-base rounded-xl border-[#b7e4e6] focus:border-[#0fa3a3] focus:ring-[#0fa3a3]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-[#0d1b2a]">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="h-12 text-base rounded-xl border-[#b7e4e6] focus:border-[#0fa3a3] focus:ring-[#0fa3a3]/20"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-[#0d1b2a]">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="h-12 text-base rounded-xl border-[#b7e4e6] focus:border-[#0fa3a3] focus:ring-[#0fa3a3]/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-[#0d1b2a]">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your tutoring needs, goals, and any questions you have..."
                          required
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          rows={6}
                          className="text-base resize-none rounded-xl border-[#b7e4e6] focus:border-[#0fa3a3] focus:ring-[#0fa3a3]/20"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base h-12 disabled:opacity-50 shadow-md shadow-[#0fa3a3]/20 transition-all"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm overflow-hidden">
                  <CardHeader className="bg-[#b7e4e6]/30 px-7 pt-7 pb-4">
                    <CardTitle className="text-xl text-[#0d1b2a]">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 pb-7 px-7 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#0fa3a3]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0d1b2a] mb-1 text-sm">Email</h3>
                        <a
                          href="mailto:tutoringforthedeaf@gmail.com"
                          className="text-[#0d1b2a]/65 hover:text-[#0fa3a3] transition-colors break-all text-sm"
                        >
                          tutoringforthedeaf@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-[#0fa3a3]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0d1b2a] mb-1 text-sm">Website</h3>
                        <a
                          href="http://www.tutoringforthedeaf.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0d1b2a]/65 hover:text-[#0fa3a3] transition-colors break-all text-sm"
                        >
                          www.tutoringforthedeaf.co.uk
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm bg-[#0d1b2a] text-white">
                  <CardHeader className="px-7 pt-7 pb-3">
                    <CardTitle className="text-xl text-white">Let&apos;s Study Together!</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-7 px-7">
                    <p className="text-[#b7e4e6]/75 mb-5 text-sm leading-relaxed">
                      I&apos;m here to help you succeed in your English and Maths studies. Get in touch today
                      to discuss how we can work together!
                    </p>
                    <div className="space-y-2.5">
                      {[
                        "Personalised 1:1 sessions",
                        "Fluent B.S.L communication",
                        "Flexible scheduling",
                        "Experienced specialist tutor",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0fa3a3] flex-shrink-0" />
                          <span className="text-sm text-[#b7e4e6]/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "What age groups do you tutor?",
                  a: "I specialise in tutoring secondary school students (ages 11-18) in both English and Maths.",
                },
                {
                  q: "How are sessions conducted?",
                  a: "Sessions can be conducted online or in-person, depending on your preference and location. All sessions include full B.S.L support.",
                },
                {
                  q: "What qualifications do you have?",
                  a: "I hold degrees in both Teaching and Deaf Education, with over 10 years of experience working with deaf children. I am also fluent in British Sign Language.",
                },
                {
                  q: "How do I get started?",
                  a: "Simply fill out the contact form above or email me directly. We'll arrange an initial consultation to discuss your needs and goals.",
                },
              ].map((faq) => (
                <Card key={faq.q} className="border border-[#b7e4e6] rounded-2xl shadow-sm bg-white">
                  <CardHeader className="px-7 pt-6 pb-2">
                    <CardTitle className="text-lg text-[#0d1b2a]">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-7 pb-6">
                    <p className="text-[#0d1b2a]/65 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
