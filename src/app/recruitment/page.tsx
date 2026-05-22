"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ChevronRight, Shield, Send } from "lucide-react"
import { useState, useRef } from "react"
import { toast } from "sonner"

const whoWeWant = [
  "Qualified teachers",
  "Teachers of the Deaf",
  "English tutors",
  "Maths tutors",
  "GCSE subject specialists",
  "BSL users or tutors with deaf awareness",
  "Tutors with experience supporting deaf or hearing-impaired learners",
  "Patient, reliable and professional educators",
  "Tutors who can deliver online sessions confidently",
]

const values = [
  { icon: "💬", label: "Clear Communication" },
  { icon: "🖼️", label: "Accessible Teaching" },
  { icon: "🤝", label: "Patience & Empathy" },
  { icon: "🏆", label: "Professionalism" },
  { icon: "🛡️", label: "Safeguarding Awareness" },
  { icon: "⏰", label: "Reliability" },
  { icon: "💡", label: "Student Confidence" },
  { icon: "🌍", label: "Inclusive Learning" },
]

const requirements = [
  "Strong subject knowledge",
  "Experience teaching or tutoring children or young people",
  "A professional and reliable approach",
  "Confidence delivering online lessons",
  "An understanding of safeguarding responsibilities",
  "Willingness to follow Tutoring for the Deaf policies and expectations",
  "Clear communication with students and families",
]

const mayProvide = [
  "Proof of qualifications",
  "DBS certificate or willingness to complete DBS checks",
  "References",
  "Evidence of teaching, tutoring or specialist experience",
  "BSL qualification or deaf awareness training, if relevant",
]

const benefits = [
  "Flexible online tutoring opportunities",
  "Supporting a specialist and meaningful provision",
  "Working with students who benefit from accessible teaching",
  "Being part of an inclusive education-focused service",
  "Opportunities to use your teaching, subject or BSL skills to make a difference",
]

const steps = [
  { num: "01", title: "Complete the Expression of Interest Form", desc: "Fill in the form below with your details, experience and availability." },
  { num: "02", title: "We Review Your Experience", desc: "We review your information and assess whether your experience and approach may be a suitable fit." },
  { num: "03", title: "Informal Discussion", desc: "If suitable, we may contact you for an informal conversation to learn more about you." },
  { num: "04", title: "Checks Before Joining", desc: "Suitable tutors will complete appropriate checks and review our expectations before joining the tutor network." },
]

export default function RecruitmentPage() {
  const formRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", location: "", currentRole: "",
    subjects: "", ageGroups: "", deafExperience: "", usesBsl: "",
    bslLevel: "", hasQts: "", isToD: "", hasDbs: "",
    experience: "", whyJoin: "", availability: "",
    consent: false,
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) { toast.error("Please tick the consent box before submitting."); return }
    setSubmitting(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)))
      if (cvFile) fd.append('cv', cvFile)

      const response = await fetch('/api/recruitment-application', {
        method: 'POST',
        body: fd,
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitted(true)
      } else {
        toast.error(data.error || 'Failed to send application. Please try again.')
      }
    } catch {
      toast.error('Failed to send application. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative bg-[#f8f8ff] py-20 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#b7e4e6]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#b7e4e6]/20 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="inline-flex items-center gap-2 bg-[#b7e4e6]/60 text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#0fa3a3]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3] animate-pulse" />
              Now Welcoming Expressions of Interest
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b2a] mb-6 leading-tight">
              Join Our Specialist<br className="hidden sm:block" />{" "}
              <span className="text-[#0fa3a3]">Tutor Team</span>
            </h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto mb-4 leading-relaxed">
              Tutoring for the Deaf is looking to connect with passionate, reliable and skilled tutors who want to make learning more accessible for deaf and hearing-impaired students.
            </p>
            <p className="text-lg text-[#0d1b2a]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              We are especially interested in hearing from qualified teachers, Teachers of the Deaf, subject specialists, BSL users and experienced tutors who understand the importance of clear communication, patience and inclusive teaching.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base px-8 py-6 shadow-md shadow-[#0fa3a3]/25 transition-all"
            >
              Apply to Become a Tutor
            </Button>
          </div>
        </section>

        {/* Section 1 — Who We're Looking For */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Who We Welcome</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">Who We Are Looking For</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {whoWeWant.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-[#f8f8ff] rounded-xl p-4 border border-[#b7e4e6]">
                    <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0d1b2a] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-[#0d1b2a]/60 leading-relaxed text-base">
                You do not need to meet every point on this list. What matters most is a genuine commitment to inclusive, accessible teaching and a willingness to support deaf and hearing-impaired learners.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — What We Value */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Our Standards</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">What We Value</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto mb-10">
              {values.map((v) => (
                <Card key={v.label} className="border border-[#b7e4e6] rounded-2xl bg-white hover:border-[#0fa3a3] hover:shadow-md transition-all">
                  <CardContent className="p-5 text-center space-y-3">
                    <div className="w-12 h-12 bg-[#0fa3a3] rounded-xl flex items-center justify-center mx-auto shadow-sm shadow-[#0fa3a3]/20 text-2xl">
                      {v.icon}
                    </div>
                    <p className="text-sm font-bold text-[#0d1b2a]">{v.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-[#0d1b2a]/60 leading-relaxed max-w-3xl mx-auto">
              Our tutors should be able to adapt their teaching to meet the needs of individual learners. Sessions should be calm, structured, visual where appropriate and focused on helping students build both understanding and confidence.
            </p>
          </div>
        </section>

        {/* Section 3 — Requirements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Standards</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">Tutor Requirements</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm">
                <CardContent className="p-8">
                  <h3 className="font-bold text-[#0d1b2a] text-lg mb-5">To work with Tutoring for the Deaf, tutors should be able to demonstrate:</h3>
                  <ul className="space-y-3">
                    {requirements.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0d1b2a]">{r}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm bg-[#f8f8ff]">
                <CardContent className="p-8">
                  <h3 className="font-bold text-[#0d1b2a] text-lg mb-5">Where applicable, tutors may also be asked to provide:</h3>
                  <ul className="space-y-3">
                    {mayProvide.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0d1b2a]">{r}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-[#0d1b2a]/55 leading-relaxed border-t border-[#b7e4e6] pt-5">
                    All expressions of interest are reviewed carefully. Submitting this form does not guarantee tutoring work or placement on the tutor network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4 — Why Join */}
        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Why Join Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Why Join Tutoring for the Deaf?</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-5 text-[#b7e4e6]/75 text-lg leading-relaxed">
                <p>
                  By joining Tutoring for the Deaf, you will have the opportunity to support learners who may not always receive fully accessible support in mainstream education.
                </p>
                <p>
                  You will be part of a growing specialist tutoring service focused on helping deaf and hearing-impaired students feel understood, supported and capable of achieving their potential.
                </p>
              </div>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#b7e4e6]/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Application Process */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Getting Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">The Application Process</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="bg-white border border-[#b7e4e6] rounded-2xl p-6 h-full shadow-sm">
                    <div className="text-3xl font-extrabold text-[#0fa3a3] mb-3 leading-none">{step.num}</div>
                    <h3 className="font-bold text-[#0d1b2a] text-sm mb-2">{step.title}</h3>
                    <p className="text-[#0d1b2a]/55 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-[#0fa3a3]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-[#0d1b2a]/55 text-sm max-w-2xl mx-auto leading-relaxed">
              Submitting the form does not guarantee tutoring work. It allows us to understand your experience and whether you may be a suitable fit for future tutoring opportunities.
            </p>
          </div>
        </section>

        {/* Section 6 — Application Form */}
        <section ref={formRef} className="py-20 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Get Involved</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">Tutor Expression of Interest Form</h2>
            </div>

            {submitted ? (
              <Card className="border border-[#0fa3a3] rounded-2xl bg-[#b7e4e6]/10">
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 bg-[#0fa3a3] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#0fa3a3]/20">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0d1b2a] mb-3">Thank You for Your Interest</h3>
                  <p className="text-[#0d1b2a]/65 leading-relaxed text-lg">
                    Thank you for your interest in joining Tutoring for the Deaf. We will review your information and contact you if your experience matches current or future tutoring needs.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Personal Details */}
                    <div>
                      <h3 className="text-sm font-bold text-[#0fa3a3] uppercase tracking-wider mb-4">Personal Details</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="fullName" className="text-sm font-semibold text-[#0d1b2a]">Full Name *</Label>
                            <Input id="fullName" name="fullName" placeholder="Your full name" required value={form.fullName} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-sm font-semibold text-[#0d1b2a]">Email Address *</Label>
                            <Input id="email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="phone" className="text-sm font-semibold text-[#0d1b2a]">Phone Number</Label>
                            <Input id="phone" name="phone" type="tel" placeholder="Your phone number" value={form.phone} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="location" className="text-sm font-semibold text-[#0d1b2a]">Location / Time Zone</Label>
                            <Input id="location" name="location" placeholder="e.g. London, UK / GMT" value={form.location} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="currentRole" className="text-sm font-semibold text-[#0d1b2a]">Current Role</Label>
                          <Input id="currentRole" name="currentRole" placeholder="e.g. Secondary school teacher, private tutor, HLTA..." value={form.currentRole} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                      </div>
                    </div>

                    {/* Teaching Details */}
                    <div className="border-t border-[#b7e4e6] pt-6">
                      <h3 className="text-sm font-bold text-[#0fa3a3] uppercase tracking-wider mb-4">Teaching Details</h3>
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="subjects" className="text-sm font-semibold text-[#0d1b2a]">Subject(s) You Can Tutor *</Label>
                          <Input id="subjects" name="subjects" placeholder="e.g. English, Maths, GCSE English Language..." required value={form.subjects} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="ageGroups" className="text-sm font-semibold text-[#0d1b2a]">Age Groups / Key Stages You Can Support</Label>
                          <Input id="ageGroups" name="ageGroups" placeholder="e.g. KS3, KS4, Years 7–11, GCSE..." value={form.ageGroups} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                      </div>
                    </div>

                    {/* Deaf Awareness */}
                    <div className="border-t border-[#b7e4e6] pt-6">
                      <h3 className="text-sm font-bold text-[#0fa3a3] uppercase tracking-wider mb-4">Deaf Awareness & Communication</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="deafExperience" className="text-sm font-semibold text-[#0d1b2a]">Experience Supporting Deaf / Hearing-Impaired Learners</Label>
                            <select id="deafExperience" name="deafExperience" value={form.deafExperience} onChange={handleChange} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                              <option value="">Please select</option>
                              <option>Yes</option>
                              <option>Some experience</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="usesBsl" className="text-sm font-semibold text-[#0d1b2a]">Do You Use BSL?</Label>
                            <select id="usesBsl" name="usesBsl" value={form.usesBsl} onChange={handleChange} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                              <option value="">Please select</option>
                              <option>Yes</option>
                              <option>Currently learning</option>
                              <option>No</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="bslLevel" className="text-sm font-semibold text-[#0d1b2a]">If You Use BSL, What Is Your Level?</Label>
                          <Input id="bslLevel" name="bslLevel" placeholder="e.g. Level 1, Level 2, Level 6, CACDP, working towards..." value={form.bslLevel} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                      </div>
                    </div>

                    {/* Qualifications */}
                    <div className="border-t border-[#b7e4e6] pt-6">
                      <h3 className="text-sm font-bold text-[#0fa3a3] uppercase tracking-wider mb-4">Qualifications &amp; Checks</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="hasQts" className="text-sm font-semibold text-[#0d1b2a]">Qualified Teacher Status (QTS)?</Label>
                            <select id="hasQts" name="hasQts" value={form.hasQts} onChange={handleChange} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                              <option value="">Please select</option>
                              <option>Yes</option>
                              <option>No</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="isToD" className="text-sm font-semibold text-[#0d1b2a]">Qualified Teacher of the Deaf?</Label>
                            <select id="isToD" name="isToD" value={form.isToD} onChange={handleChange} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                              <option value="">Please select</option>
                              <option>Yes</option>
                              <option>Currently training</option>
                              <option>No</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="hasDbs" className="text-sm font-semibold text-[#0d1b2a]">Enhanced DBS Certificate?</Label>
                            <select id="hasDbs" name="hasDbs" value={form.hasDbs} onChange={handleChange} className="w-full h-11 rounded-xl border border-[#b7e4e6] bg-white px-3 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#0fa3a3]/20 focus:border-[#0fa3a3]">
                              <option value="">Please select</option>
                              <option>Yes</option>
                              <option>Willing to apply</option>
                              <option>No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Experience & Motivation */}
                    <div className="border-t border-[#b7e4e6] pt-6">
                      <h3 className="text-sm font-bold text-[#0fa3a3] uppercase tracking-wider mb-4">Experience &amp; Motivation</h3>
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="experience" className="text-sm font-semibold text-[#0d1b2a]">Tell Us About Your Teaching, Tutoring or Relevant Experience *</Label>
                          <Textarea id="experience" name="experience" placeholder="Please describe your background, the subjects and age groups you have taught, and any experience with deaf or hearing-impaired learners..." required value={form.experience} onChange={handleChange} rows={5} className="rounded-xl border-[#b7e4e6] resize-none" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="whyJoin" className="text-sm font-semibold text-[#0d1b2a]">Why Would You Like to Work With Tutoring for the Deaf? *</Label>
                          <Textarea id="whyJoin" name="whyJoin" placeholder="Tell us why this role appeals to you and what you would bring to the team..." required value={form.whyJoin} onChange={handleChange} rows={4} className="rounded-xl border-[#b7e4e6] resize-none" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="availability" className="text-sm font-semibold text-[#0d1b2a]">Availability for Online Tutoring</Label>
                          <Input id="availability" name="availability" placeholder="e.g. weekday evenings, Saturday mornings, flexible..." value={form.availability} onChange={handleChange} className="h-11 rounded-xl border-[#b7e4e6]" />
                        </div>
                      </div>
                    </div>

                    {/* CV Upload */}
                    <div className="border-t border-[#b7e4e6] pt-6">
                      <h3 className="text-sm font-bold text-[#0fa3a3] uppercase tracking-wider mb-4">Supporting Documents</h3>
                      <div className="space-y-1.5">
                        <Label htmlFor="cv" className="text-sm font-semibold text-[#0d1b2a]">Upload Your CV (Optional)</Label>
                        <input
                          id="cv"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                          className="w-full text-sm text-[#0d1b2a]/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#b7e4e6]/40 file:text-[#0fa3a3] hover:file:bg-[#b7e4e6]/60 border border-[#b7e4e6] rounded-xl p-2 cursor-pointer"
                        />
                        <p className="text-xs text-[#0d1b2a]/45">PDF, DOC or DOCX. Max 5MB.</p>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="border-t border-[#b7e4e6] pt-6">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={form.consent}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 accent-[#0fa3a3] flex-shrink-0"
                        />
                        <span className="text-sm text-[#0d1b2a]/70 leading-relaxed group-hover:text-[#0d1b2a] transition-colors">
                          I confirm that the information provided is accurate and I consent to Tutoring for the Deaf contacting me about tutoring opportunities.
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base h-12 disabled:opacity-50 shadow-md shadow-[#0fa3a3]/20 transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {submitting ? "Submitting..." : "Submit Expression of Interest"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Section 7 — Safeguarding Notice */}
        <section className="py-14 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="flex items-start gap-5 bg-white rounded-2xl p-7 border border-[#b7e4e6] shadow-sm">
              <div className="w-12 h-12 bg-[#0fa3a3] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#0fa3a3]/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0d1b2a] mb-2">Safeguarding Notice</h3>
                <p className="text-[#0d1b2a]/65 text-sm leading-relaxed">
                  Tutoring for the Deaf is committed to safeguarding and promoting the welfare of children and young people. Tutors may be required to complete appropriate checks, provide references and follow safeguarding expectations before working with students.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
