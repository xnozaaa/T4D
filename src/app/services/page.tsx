import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Calculator, GraduationCap, ClipboardList, Monitor, CheckCircle2, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutoring Services | Tutoring for the Deaf",
  description: "Specialist English, Maths and GCSE tutoring for deaf and hearing-impaired students. Online 1:1 sessions with BSL support. Book a free consultation.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#0fa3a3]" />,
      title: "English Tutoring",
      who: "Secondary-age deaf and hearing-impaired students who need support with English language, literacy and communication skills.",
      covers: [
        "Reading comprehension — fiction, non-fiction and media texts",
        "Creative writing, essay writing and structured responses",
        "Grammar, punctuation, vocabulary and sentence structure",
        "Spoken and written communication skills",
        "Exam preparation and past paper practice",
      ],
      adapted: "English sessions are designed with visual clarity in mind — using structured frameworks, written prompts and clear step-by-step explanations. BSL support is available for students who benefit from it, and all explanations are adapted to your child's preferred communication style.",
    },
    {
      icon: <Calculator className="w-8 h-8 text-[#0fa3a3]" />,
      title: "Maths Tutoring",
      who: "Deaf and hearing-impaired students at secondary school level who need support with Maths — from building core skills to working at GCSE level.",
      covers: [
        "Number, place value, fractions and percentages",
        "Algebra and equations",
        "Geometry, shape and measurement",
        "Statistics and data handling",
        "Problem-solving and reasoning skills",
      ],
      adapted: "Maths sessions use visual, structured methods that work well for deaf learners — with concepts broken into clear steps, diagrams used to support understanding and explanations tailored to the individual student's pace and learning style.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#0fa3a3]" />,
      title: "GCSE English & Maths Support",
      who: "Students in Years 9–11 preparing for their GCSE exams in English Language, English Literature and/or Maths.",
      covers: [
        "Curriculum content matched to current GCSE specifications",
        "Exam technique and question analysis",
        "Timed practice and past paper work",
        "Targeted revision of key topics",
        "Building exam confidence and reducing anxiety",
      ],
      adapted: "GCSE preparation is fully accessible for deaf students. Sessions focus on making exam demands clear and manageable — breaking down questions, practising responses and building the confidence to perform well on exam day.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#0fa3a3]" />,
      title: "Homework & Confidence Support",
      who: "Students who need help completing homework, keeping up with class work or rebuilding their confidence in English or Maths.",
      covers: [
        "Homework support and guidance",
        "Catch-up sessions for missed or difficult topics",
        "Confidence-building in both subject areas",
        "Developing independent study habits",
        "Reducing academic stress and anxiety",
      ],
      adapted: "This support is delivered at your child's pace — calm, encouraging and free from pressure. The aim is to help your child understand and feel more confident, not just to complete the work.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#0fa3a3]" />,
      title: "Online Tutoring for Deaf Learners",
      who: "Any deaf or hearing-impaired student who would benefit from specialist, accessible 1:1 tutoring in an online environment.",
      covers: [
        "1:1 sessions via accessible video call platform",
        "Visual materials shared on screen during lessons",
        "BSL-supported communication where needed",
        "Sessions adapted to hearing aids, cochlear implants or preferred communication",
        "Calm, quiet online learning environment",
      ],
      adapted: "Online tutoring is genuinely accessible for deaf students. Sessions use a platform that supports visual communication, screen sharing and BSL where required. The online environment can actually be easier for many deaf students — quieter, more controlled and with full visual focus on the lesson.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Personalised for Every Student
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">Tutoring Services</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              Specialist, accessible online tutoring for deaf and hearing-impaired students — designed around each individual learner.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 max-w-4xl mx-auto">
              {services.map((s) => (
                <Card key={s.title} className="border border-[#b7e4e6] rounded-2xl shadow-sm hover:shadow-md hover:border-[#0fa3a3] transition-all overflow-hidden">
                  <CardHeader className="bg-[#b7e4e6]/20 px-8 pt-8 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                        {s.icon}
                      </div>
                      <CardTitle className="text-2xl text-[#0d1b2a]">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 py-7 space-y-6">
                    <div>
                      <h3 className="text-xs font-bold text-[#0fa3a3] uppercase tracking-wider mb-2">Who Is This For?</h3>
                      <p className="text-[#0d1b2a]/70 leading-relaxed">{s.who}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#0fa3a3] uppercase tracking-wider mb-3">What Sessions Can Cover</h3>
                      <ul className="space-y-2">
                        {s.covers.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                            <span className="text-[#0d1b2a] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#f8f8ff] rounded-xl p-5 border border-[#b7e4e6]">
                      <h3 className="text-xs font-bold text-[#0fa3a3] uppercase tracking-wider mb-2">How It&apos;s Adapted for Deaf Learners</h3>
                      <p className="text-[#0d1b2a]/70 text-sm leading-relaxed">{s.adapted}</p>
                    </div>
                    <Button asChild className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold px-6 shadow-sm transition-all">
                      <Link href="/contact" className="flex items-center gap-2">
                        Book a Free Consultation <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Service Is Right?</h2>
            <p className="text-xl text-[#b7e4e6]/75 mb-10 max-w-2xl mx-auto">
              Book a free consultation and we&apos;ll talk through your child&apos;s needs together.
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
