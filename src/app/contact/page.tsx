"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Globe, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", yearGroup: "", subject: "",
    usesBsl: "", goal: "", preferredTimes: "", preferredContact: "", heardAboutUs: "", message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        toast.success("Message sent! We'll be in touch soon.")
        setFormData({ name: "", email: "", phone: "", yearGroup: "", subject: "", usesBsl: "", goal: "", preferredTimes: "", preferredContact: "", heardAboutUs: "", message: "" })
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Free Consultation Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">Get In Touch</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              Tell us a little about your child and the support they need. We will use this information to understand how we can help and respond with suitable next steps.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm">
                  <CardHeader className="px-8 pt-8 pb-2">
                    <CardTitle className="text-2xl text-[#0d1b2a]">Enquiry Form</CardTitle>
                    <CardDescription className="text-base text-[#0d1b2a]/60">
                      Your information will only be used to respond to your enquiry and discuss tutoring support.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-4">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-[#0d1b2a]">Parent / Carer Name *</Label>
                          <Input id="name" name="name" placeholder="Your full name" required value={formData.name} onChange={handleChange} disabled={isSubmitting} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-[#0d1b2a]">Email Address *</Label>
                          <Input id="email" name="email" type="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} disabled={isSubmitting} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-semibold text-[#0d1b2a]">Phone Number (Optional)</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} disabled={isSubmitting} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearGroup" className="text-sm font-semibold text-[#0d1b2a]">Student Year Group</Label>
                          <select id="yearGroup" name="yearGroup" value={formData.yearGroup} onChange={handleChange} disabled={isSubmitting} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                            <option value="">Select year group</option>
                            {["Year 7","Year 8","Year 9","Year 10","Year 11","Year 12","Year 13","Other"].map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-semibold text-[#0d1b2a]">Subject Support Needed</Label>
                          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                            <option value="">Select subject</option>
                            {["English","Maths","English & Maths","GCSE English","GCSE Maths","GCSE English & Maths","Not sure yet"].map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="usesBsl" className="text-sm font-semibold text-[#0d1b2a]">Does Your Child Use BSL?</Label>
                          <select id="usesBsl" name="usesBsl" value={formData.usesBsl} onChange={handleChange} disabled={isSubmitting} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                            <option value="">Please select</option>
                            {["Yes — BSL is their main language","Yes — BSL alongside spoken/written English","No — spoken English","No — mainly written communication","A mixture / not sure"].map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal" className="text-sm font-semibold text-[#0d1b2a]">Main Goal for Tutoring</Label>
                        <Input id="goal" name="goal" placeholder="e.g. GCSE preparation, confidence building, homework support..." value={formData.goal} onChange={handleChange} disabled={isSubmitting} className="h-11 rounded-xl border-[#b7e4e6]" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="preferredTimes" className="text-sm font-semibold text-[#0d1b2a]">Preferred Lesson Times</Label>
                          <Input id="preferredTimes" name="preferredTimes" placeholder="e.g. weekday evenings, Saturday mornings" value={formData.preferredTimes} onChange={handleChange} disabled={isSubmitting} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredContact" className="text-sm font-semibold text-[#0d1b2a]">Preferred Way to Respond</Label>
                          <select id="preferredContact" name="preferredContact" value={formData.preferredContact} onChange={handleChange} disabled={isSubmitting} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                            <option value="">Please select</option>
                            {["Email","Phone call","Either is fine"].map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heardAboutUs" className="text-sm font-semibold text-[#0d1b2a]">How Did You Hear About Us? *</Label>
                        <Input id="heardAboutUs" name="heardAboutUs" placeholder="e.g. Google, social media, a friend or your child's school" required maxLength={200} value={formData.heardAboutUs} onChange={handleChange} disabled={isSubmitting} className="h-11 rounded-xl border-[#b7e4e6]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-[#0d1b2a]">Anything Else You Would Like Us to Know?</Label>
                        <Textarea id="message" name="message" placeholder="Any additional context, questions, or information about your child's needs..." value={formData.message} onChange={handleChange} disabled={isSubmitting} rows={5} className="rounded-xl border-[#b7e4e6] resize-none" />
                      </div>
                      <p className="text-xs text-[#0d1b2a]/45 leading-relaxed">
                        Your information will only be used to respond to your enquiry and discuss tutoring support. It will not be shared with third parties.
                      </p>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base h-12 disabled:opacity-50 shadow-md shadow-[#0fa3a3]/20 transition-all">
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm overflow-hidden">
                  <CardHeader className="bg-[#b7e4e6]/30 px-7 pt-7 pb-4">
                    <CardTitle className="text-xl text-[#0d1b2a]">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 pb-7 px-7 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#0fa3a3]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0d1b2a] mb-1 text-sm">Email</h3>
                        <a href="mailto:tutoringforthedeaf@gmail.com" className="text-[#0d1b2a]/65 hover:text-[#0fa3a3] transition-colors text-sm break-all">tutoringforthedeaf@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-[#0fa3a3]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0d1b2a] mb-1 text-sm">Website</h3>
                        <a href="http://www.tutoringforthedeaf.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#0d1b2a]/65 hover:text-[#0fa3a3] transition-colors text-sm break-all">www.tutoringforthedeaf.co.uk</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm bg-[#0d1b2a] text-white">
                  <CardContent className="p-7">
                    <h3 className="text-lg font-bold text-white mb-4">What Happens Next?</h3>
                    <div className="space-y-3">
                      {[
                        "We'll read your enquiry carefully",
                        "We'll respond within 1–2 working days",
                        "We'll suggest a free consultation call",
                        "No commitment required at this stage",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#b7e4e6]/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm bg-white">
                  <CardContent className="p-7">
                    <h3 className="text-base font-bold text-[#0d1b2a] mb-4">Follow Us</h3>
                    <div className="space-y-3">
                      <a href="https://www.instagram.com/tutoringforthedeaf/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0d1b2a]/65 hover:text-[#0fa3a3] transition-colors text-sm">
                        <div className="w-8 h-8 bg-[#b7e4e6]/60 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </div>
                        @tutoringforthedeaf
                      </a>
                      <a href="https://www.tiktok.com/@tutoringforthedeaf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0d1b2a]/65 hover:text-[#0fa3a3] transition-colors text-sm">
                        <div className="w-8 h-8 bg-[#b7e4e6]/60 rounded-lg flex items-center justify-center">
                          <TikTokIcon className="w-4 h-4" />
                        </div>
                        @tutoringforthedeaf
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
