"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Globe, Send } from "lucide-react"
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
    } catch (error) {
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
        <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Get In Touch</h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
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
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-3xl text-navy">Send Me a Message</CardTitle>
                    <CardDescription className="text-lg">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="h-12 text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="h-12 text-base"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your tutoring needs, goals, and any questions you have..."
                          required
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          rows={6}
                          className="text-base resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12 disabled:opacity-50"
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
                <Card className="border-2 border-primary/30">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-2xl text-navy">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-1">Email</h3>
                        <a
                          href="mailto:tutoringforthedeaf@gmail.com"
                          className="text-navy/70 hover:text-primary transition-colors break-all"
                        >
                          tutoringforthedeaf@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy mb-1">Website</h3>
                        <a
                          href="http://www.tutoringforthedeaf.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy/70 hover:text-secondary transition-colors break-all"
                        >
                          www.tutoringforthedeaf.co.uk
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/30">
                  <CardHeader className="bg-secondary/5">
                    <CardTitle className="text-2xl text-navy">Let's Study Together!</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-navy/70 mb-4">
                      I'm here to help you succeed in your English and Maths studies. Get in touch today 
                      to discuss how we can work together!
                    </p>
                    <div className="space-y-2 text-sm text-navy/60">
                      <p>✓ Personalised 1:1 sessions</p>
                      <p>✓ Fluent B.S.L communication</p>
                      <p>✓ Flexible scheduling</p>
                      <p>✓ Experienced specialist tutor</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-navy">What age groups do you tutor?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    I specialise in tutoring secondary school students (ages 11-18) in both English and Maths.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-navy">How are sessions conducted?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    Sessions can be conducted online or in-person, depending on your preference and location. 
                    All sessions include full B.S.L support.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-navy">What qualifications do you have?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    I hold degrees in both Teaching and Deaf Education, with over 10 years of experience 
                    working with deaf children. I am also fluent in British Sign Language.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-navy">How do I get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    Simply fill out the contact form above or email me directly. We'll arrange an initial 
                    consultation to discuss your needs and goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}