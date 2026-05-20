import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import QualificationsSection from "@/components/QualificationsSection"
import ShootingStars from "@/components/ShootingStars"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen, Calculator, GraduationCap, ClipboardList,
  CheckCircle2, Shield, ChevronRight, MessageCircle, ArrowRight
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutoring for the Deaf | Specialist Online English & Maths Tutor",
  description: "Specialist online English and Maths tutoring for deaf and hearing-impaired students. BSL-supported, 1:1 sessions with a qualified Teacher of the Deaf. Book a free consultation today.",
}

const trustBadges = [
  { icon: "🎓", label: "Qualified Teacher of the Deaf" },
  { icon: "🤟", label: "BSL-Supported Learning" },
  { icon: "💻", label: "Online 1:1 Support" },
  { icon: "📚", label: "GCSE English & Maths" },
  { icon: "🛡️", label: "Safe & Professional" },
]

const whoWeSupport = [
  "Students preparing for GCSEs who need targeted subject support",
  "Learners who benefit from visual explanations and structured lessons",
  "Students who use BSL, spoken English, written English or a mixture",
  "Young people who need confidence-building alongside academic progress",
  "Students with cochlear implants or other hearing support",
  "Learners with EHCPs who need specialist educational input",
  "Anyone who would thrive in a calm, accessible online environment",
]

const services = [
  {
    icon: <BookOpen className="w-7 h-7 text-[#0fa3a3]" />,
    title: "English Tutoring",
    desc: "Personalised English support covering reading, writing, comprehension and grammar — adapted for deaf and hearing-impaired learners.",
  },
  {
    icon: <Calculator className="w-7 h-7 text-[#0fa3a3]" />,
    title: "Maths Tutoring",
    desc: "Clear, visual maths instruction that breaks down complex topics into manageable steps — from number work to algebra and beyond.",
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#0fa3a3]" />,
    title: "GCSE Support",
    desc: "Focused GCSE preparation in English and Maths, including exam technique, past paper practice and targeted revision strategies.",
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-[#0fa3a3]" />,
    title: "Homework & Confidence",
    desc: "Friendly homework help and confidence-building sessions designed to reduce stress and develop independent learning skills.",
  },
]

const whyChoose = [
  { icon: "👂", title: "Specialist Deaf Education", desc: "Led by an experienced professional with a deep understanding of how deaf learners access education." },
  { icon: "🤟", title: "BSL-Supported Lessons", desc: "British Sign Language can be incorporated into sessions wherever it helps communication and understanding." },
  { icon: "🖼️", title: "Visual Teaching Methods", desc: "Lessons use structured, visual approaches that make abstract concepts clear and accessible." },
  { icon: "💬", title: "Clear Communication", desc: "Sessions are adapted to each student's preferred communication style — no one-size-fits-all approach." },
  { icon: "📋", title: "Personalised Learning", desc: "Every student receives a tailored plan based on their goals, current level and learning preferences." },
  { icon: "👪", title: "Parent-Friendly Updates", desc: "Regular communication with parents and carers to keep everyone informed and involved." },
]

const steps = [
  { num: "01", title: "Book a Free Consultation", desc: "Get in touch and we'll arrange a free, no-obligation chat to understand your child's needs." },
  { num: "02", title: "Discuss Your Child's Needs", desc: "We talk through your child's current level, goals, communication preferences and any EHCP or additional needs." },
  { num: "03", title: "Receive a Personalised Plan", desc: "A tailored tutoring plan is created, outlining subjects, session structure and learning objectives." },
  { num: "04", title: "Start Online Lessons", desc: "Regular 1:1 online sessions begin — calm, structured and adapted to your child every step of the way." },
]

const faqs = [
  { q: "Do you tutor deaf students online?", a: "Yes — all sessions are delivered online via video call. The setup is accessible, calm and can be adapted to suit your child's communication needs." },
  { q: "Can lessons include BSL support?", a: "Absolutely. British Sign Language can be incorporated into sessions wherever it helps. Sessions can also be delivered using spoken English, written communication or a combination." },
  { q: "Do you support GCSE English and Maths?", a: "Yes. GCSE preparation is a key part of the service, covering curriculum content, exam technique and practice papers for both English and Maths." },
  { q: "Do you work with students who use cochlear implants?", a: "Yes. The tutor has experience working with students who use cochlear implants alongside other deaf and hearing-impaired young people." },
  { q: "Do you support students with EHCPs?", a: "Yes. The service can work alongside a student's EHCP, supporting their identified learning needs in English and Maths." },
  { q: "How does online tutoring work?", a: "Sessions take place over video call using a platform that works well for your child. Materials are shared on screen, and the environment is kept calm and distraction-free." },
  { q: "How do we get started?", a: "Simply fill in the contact form or send an email. We'll get back to you to arrange a free consultation and discuss the next steps." },
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative bg-[#f8f8ff] py-20 md:py-32 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#b7e4e6]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#b7e4e6]/20 blur-3xl pointer-events-none" />
          <ShootingStars count={10} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 bg-[#b7e4e6]/60 text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#0fa3a3]/20">
                  <span className="w-2 h-2 rounded-full bg-[#0fa3a3] animate-pulse" />
                  BSL-Supported · Specialist Deaf Education
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b2a] leading-tight">
                  Specialist Online English &amp; Maths Tutoring for{" "}
                  <span className="text-[#0fa3a3]">Deaf Students</span>
                </h1>
                <p className="text-xl text-[#0d1b2a]/70 leading-relaxed">
                  Accessible 1:1 tutoring designed for deaf and hearing-impaired learners — with clear communication, visual teaching methods and personalised support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base px-8 py-6 shadow-md shadow-[#0fa3a3]/25 transition-all">
                    <Link href="/contact">Book a Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-xl border-2 border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white font-semibold text-base px-8 py-6 transition-all">
                    <Link href="/services">View Tutoring Services</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {trustBadges.map((b) => (
                    <div key={b.label} className="flex items-center gap-2 bg-white border border-[#b7e4e6] text-[#0d1b2a] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      <span>{b.icon}</span>{b.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="relative w-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#b7e4e6]/40 blur-3xl" />
                  <Image src="/tfd-hero.png" alt="Tutoring for the Deaf" width={800} height={800} className="relative w-full h-auto drop-shadow-xl" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Support */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Who We Support</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2 mb-6">Is This the Right Support for Your Child?</h2>
                <p className="text-[#0d1b2a]/65 text-lg leading-relaxed mb-8">
                  This service supports secondary-age deaf and hearing-impaired students who need specialist, accessible academic help — including learners who:
                </p>
                <ul className="space-y-3">
                  {whoWeSupport.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0d1b2a]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold px-8 py-6 shadow-md shadow-[#0fa3a3]/20 transition-all">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="bg-[#b7e4e6]/20 rounded-3xl p-10 border border-[#b7e4e6]">
                <p className="text-2xl font-bold text-[#0d1b2a] mb-5 leading-snug">
                  &ldquo;Every deaf learner deserves a tutor who truly understands their world.&rdquo;
                </p>
                <div className="h-1 w-12 bg-[#0fa3a3] rounded-full mb-5" />
                <p className="text-[#0d1b2a]/65 leading-relaxed">
                  This service was built from real experience working within deaf education — understanding the barriers, the communication needs and the individual strengths that every deaf student brings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2 mb-4">Tutoring Services</h2>
              <p className="text-xl text-[#0d1b2a]/60 max-w-2xl mx-auto">Specialist, accessible support in the subjects that matter most</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <Card key={s.title} className="border border-[#b7e4e6] rounded-2xl hover:border-[#0fa3a3] hover:shadow-lg hover:shadow-[#0fa3a3]/10 transition-all bg-white flex flex-col">
                  <CardContent className="p-7 flex flex-col flex-1 space-y-4">
                    <div className="w-14 h-14 bg-[#b7e4e6]/60 rounded-2xl flex items-center justify-center">{s.icon}</div>
                    <h3 className="text-lg font-bold text-[#0d1b2a]">{s.title}</h3>
                    <p className="text-[#0d1b2a]/60 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <Link href="/services" className="inline-flex items-center gap-1 text-[#0fa3a3] font-semibold text-sm hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">Why Tutoring for the Deaf?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl border border-[#b7e4e6] bg-[#f8f8ff] hover:border-[#0fa3a3] hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#0fa3a3] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-[#0fa3a3]/20 text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#0d1b2a] mb-1">{item.title}</h3>
                    <p className="text-[#0d1b2a]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Getting Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                    <div className="text-4xl font-extrabold text-[#0fa3a3] mb-4 leading-none">{step.num}</div>
                    <h3 className="font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#b7e4e6]/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-[#0fa3a3]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base px-10 py-6 shadow-lg shadow-[#0fa3a3]/30 transition-all">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <QualificationsSection />

        {/* About Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">About the Tutor</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2 mb-5">Specialist. Experienced. Dedicated.</h2>
                <div className="space-y-4 text-[#0d1b2a]/65 leading-relaxed">
                  <p>Tutoring for the Deaf is led by a specialist tutor with extensive experience in deaf education. With a background in both teaching and working directly with deaf children and young people, this service was built with a genuine understanding of the challenges deaf learners can face in mainstream education.</p>
                  <p>Every session is designed to be accessible, structured and encouraging — adapting communication and teaching methods to suit each individual learner, whether they use BSL, spoken English, or a combination.</p>
                </div>
                <Button asChild size="lg" variant="outline" className="mt-8 rounded-xl border-2 border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white font-semibold px-8 py-6 transition-all">
                  <Link href="/about">Read More About Me</Link>
                </Button>
              </div>
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-4 rounded-full bg-[#b7e4e6]/40 blur-2xl" />
                  <Image src="/tfd-icon.png" alt="Tutoring for the Deaf" width={280} height={280} className="relative drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safeguarding Reassurance */}
        <section className="py-16 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 bg-[#0fa3a3] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#0fa3a3]/20">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b2a] mb-4">Safe, Professional Online Tutoring</h2>
              <p className="text-[#0d1b2a]/65 leading-relaxed mb-6">
                Online lessons are delivered professionally and safely. Parent and carer communication is maintained throughout, and appropriate professional boundaries are always upheld. Safeguarding is taken seriously at every stage.
              </p>
              <Link href="/safeguarding" className="inline-flex items-center gap-1 text-[#0fa3a3] font-semibold hover:gap-2 transition-all">
                Read our Safeguarding information <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">What Parents Say</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#b7e4e6]/20 border border-[#b7e4e6] rounded-2xl p-10 text-center">
                <MessageCircle className="w-10 h-10 text-[#0fa3a3] mx-auto mb-4 opacity-60" />
                <p className="text-[#0d1b2a]/60 text-lg italic mb-3">Parent feedback coming soon.</p>
                <p className="text-[#0d1b2a]/40 text-sm">We are currently gathering feedback from parents and carers. Check back soon.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-widest uppercase text-[#0fa3a3]">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mt-2">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.q} className="border border-[#b7e4e6] rounded-2xl shadow-sm bg-white">
                  <CardContent className="px-7 py-6">
                    <h3 className="font-bold text-[#0d1b2a] mb-2">{faq.q}</h3>
                    <p className="text-[#0d1b2a]/65 text-sm leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to support your child&apos;s confidence in English or Maths?
            </h2>
            <p className="text-xl text-[#b7e4e6]/75 mb-10 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation consultation. We&apos;d love to hear from you.
            </p>
            <Button asChild size="lg" className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-lg px-10 py-6 shadow-lg shadow-[#0fa3a3]/30 transition-all">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
