import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Heart, Users, Eye, MessageSquare } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Tutoring for the Deaf",
  description: "Learn about the specialist tutor behind Tutoring for the Deaf — experienced in deaf education, BSL-supported teaching and personalised learning for deaf students.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Specialist. Experienced. Dedicated.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">About Me</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              A specialist tutor with extensive experience supporting deaf and hearing-impaired young people in English and Maths.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-0">
              <div className="order-2 lg:order-1">
                <div className="h-1 w-12 bg-[#0fa3a3] rounded-full mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6">A Service Built From Real Experience</h2>
                <div className="space-y-5 text-lg text-[#0d1b2a]/70 leading-relaxed">
                  <p>
                    Welcome to Tutoring for the Deaf. I&apos;m a specialist tutor with extensive experience working within deaf education — and I set up this service because I understand, first-hand, the challenges that deaf and hearing-impaired young people can face in mainstream schools.
                  </p>
                  <p>
                    Deaf students are often bright, capable and motivated — but too often they miss out on clear explanations, accessible communication or the right level of support in subjects like English and Maths. This service exists to change that.
                  </p>
                  <p>
                    Every session is designed to be calm, visual, structured and adapted to your child&apos;s communication needs. Whether your child uses BSL, spoken English, written communication or a mixture — we work with what works for them.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-4 rounded-full bg-[#b7e4e6]/40 blur-2xl" />
                  <Image src="/tfd-hero.png" alt="Tutoring for the Deaf" width={420} height={420} className="relative w-full max-w-sm drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">What I Bring to Every Session</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <Users className="w-7 h-7 text-white" />, title: "Experience in Deaf Education", desc: "A background working directly with deaf children and young people in educational settings." },
                { icon: <Eye className="w-7 h-7 text-white" />, title: "Visual Teaching Methods", desc: "Lessons use clear visual structure, written explanations and accessible materials." },
                { icon: <MessageSquare className="w-7 h-7 text-white" />, title: "Communication Flexibility", desc: "Sessions adapted to BSL, spoken English, written communication or a combination." },
                { icon: <Heart className="w-7 h-7 text-white" />, title: "Personalised & Encouraging", desc: "A warm, patient approach focused on building confidence alongside academic progress." },
              ].map((item) => (
                <Card key={item.title} className="border border-[#b7e4e6] rounded-2xl bg-white hover:border-[#0fa3a3] hover:shadow-md transition-all">
                  <CardContent className="p-7 text-center space-y-4">
                    <div className="w-14 h-14 bg-[#0fa3a3] rounded-2xl flex items-center justify-center mx-auto shadow-md shadow-[#0fa3a3]/20">{item.icon}</div>
                    <h3 className="font-bold text-[#0d1b2a]">{item.title}</h3>
                    <p className="text-[#0d1b2a]/60 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="h-1 w-12 bg-[#0fa3a3] rounded-full mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-8">Understanding the Barriers</h2>
            <div className="space-y-5 text-lg text-[#0d1b2a]/70 leading-relaxed">
              <p>Deaf students often face a unique set of challenges in mainstream education — from difficulties following verbal-only classroom instruction to gaps in subject knowledge caused by access barriers rather than ability.</p>
              <p>I understand these barriers. I know how exhausting it can be for deaf students to keep up in a classroom environment that wasn&apos;t designed with them in mind — and how quickly confidence can slip when the right support isn&apos;t there.</p>
              <p>That&apos;s why every aspect of this tutoring service is built around accessibility and individual need — not as an afterthought, but as the foundation of everything we do.</p>
            </div>
            <div className="mt-10 space-y-3">
              {[
                "Sessions are paced to your child — not rushed or overloaded",
                "All materials are visually clear and well-structured",
                "BSL support is available throughout where helpful",
                "Parent communication is open, friendly and regular",
                "Progress is celebrated, and difficulty is met with patience",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0d1b2a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-1 bg-[#0fa3a3] rounded-full mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">My Mission</h2>
              <p className="text-xl text-[#b7e4e6]/80 mb-10 leading-relaxed italic">
                &ldquo;To give every deaf student access to the specialist, accessible tutoring they deserve — building their knowledge, their confidence and their belief in what they can achieve.&rdquo;
              </p>
              <Button asChild size="lg" className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base px-8 py-6 shadow-lg shadow-[#0fa3a3]/30 transition-all">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
