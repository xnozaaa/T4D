import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Calendar, MessageSquare, FileText, Monitor, RefreshCw, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | Tutoring for the Deaf",
  description: "Find out how to get started with specialist online tutoring for deaf and hearing-impaired students. Book a free consultation today.",
}

const steps = [
  {
    num: "01",
    icon: <Calendar className="w-7 h-7 text-white" />,
    title: "Book a Free Consultation",
    desc: "Get in touch via the contact form or email. We'll arrange a free, no-obligation consultation at a time that works for you and your family.",
    points: [
      "No commitment required",
      "Online or by phone",
      "Takes around 30 minutes",
    ],
  },
  {
    num: "02",
    icon: <MessageSquare className="w-7 h-7 text-white" />,
    title: "Discuss Your Child's Needs",
    desc: "We'll talk through your child's current level, the subjects they need support in, their communication preferences and any relevant additional needs or EHCP targets.",
    points: [
      "Subject focus: English and/or Maths",
      "Communication style — BSL, spoken, written or mixed",
      "Any EHCP or specialist learning needs",
      "Goals and what success looks like for your child",
    ],
  },
  {
    num: "03",
    icon: <FileText className="w-7 h-7 text-white" />,
    title: "Receive a Personalised Tutoring Plan",
    desc: "Based on your consultation, a tailored plan is put together — covering the subject areas to focus on, lesson structure, pace and how sessions will be adapted for your child.",
    points: [
      "Clear learning objectives",
      "Adapted teaching approach",
      "Flexible session timing",
    ],
  },
  {
    num: "04",
    icon: <Monitor className="w-7 h-7 text-white" />,
    title: "Online Lesson Setup",
    desc: "Sessions take place online via video call using a platform that is accessible and easy to use. You will be guided through the setup so everything is ready before the first lesson.",
    points: [
      "Simple online setup",
      "Visual materials shared on screen",
      "Calm, distraction-free environment",
    ],
  },
  {
    num: "05",
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Regular 1:1 Tutoring Sessions",
    desc: "Your child begins their regular, personalised 1:1 sessions. Each lesson is structured, accessible and focused on building understanding, confidence and skills.",
    points: [
      "BSL support available throughout",
      "Visual, structured teaching methods",
      "Pace adjusted to your child",
    ],
  },
  {
    num: "06",
    icon: <RefreshCw className="w-7 h-7 text-white" />,
    title: "Review and Parent Updates",
    desc: "Regular check-ins ensure the plan is working and progress is being made. Parents and carers are kept informed throughout with clear, friendly updates.",
    points: [
      "Progress reviews built in",
      "Open communication with parents",
      "Plan adjusted as your child develops",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Simple & Straightforward
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">How It Works</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              Getting started is simple. From your first enquiry to your child&apos;s first lesson, here is exactly what to expect.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <Card className="border border-[#b7e4e6] rounded-2xl shadow-sm hover:shadow-md hover:border-[#0fa3a3] transition-all overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Step number + icon */}
                        <div className="bg-[#0d1b2a] md:w-48 flex-shrink-0 flex flex-col items-center justify-center p-8 gap-3">
                          <div className="text-5xl font-extrabold text-[#0fa3a3] leading-none">{step.num}</div>
                          <div className="w-12 h-12 bg-[#0fa3a3] rounded-xl flex items-center justify-center shadow-md shadow-[#0fa3a3]/30">
                            {step.icon}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-8 flex-1">
                          <h2 className="text-xl font-bold text-[#0d1b2a] mb-3">{step.title}</h2>
                          <p className="text-[#0d1b2a]/65 leading-relaxed mb-4">{step.desc}</p>
                          <ul className="space-y-2">
                            {step.points.map((p) => (
                              <li key={p} className="flex items-center gap-2 text-sm text-[#0d1b2a]">
                                <CheckCircle2 className="w-4 h-4 text-[#0fa3a3] flex-shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {i < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowRight className="w-5 h-5 text-[#0fa3a3] rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-4">What to Expect From Every Session</h2>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "A calm, structured and welcoming environment",
                "Teaching adapted to your child's communication needs",
                "BSL support where helpful",
                "Visual, accessible learning materials",
                "Clear explanations at the right pace",
                "Time to ask questions and review progress",
                "Confidence-building alongside academic progress",
                "Parent updates and open communication",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#b7e4e6] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0d1b2a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-[#b7e4e6]/75 mb-10 max-w-2xl mx-auto">
              Book a free, no-obligation consultation and take the first step towards personalised support for your child.
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
