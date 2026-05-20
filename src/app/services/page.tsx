import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Calculator, CheckCircle2, Users, ClipboardList } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services - Tutoring for the Deaf",
  description: "Specialist English and Maths tutoring for deaf secondary students. 1:1 support, homework help, GCSE preparation, and BSL-fluent sessions.",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Personalised for Every Student
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">Our Services</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              Specialised tutoring services designed specifically for deaf secondary students,
              helping them excel in English and Maths.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

              {/* English Tutoring */}
              <Card className="border border-[#b7e4e6] rounded-2xl hover:border-[#0fa3a3] hover:shadow-lg hover:shadow-[#0fa3a3]/10 transition-all overflow-hidden">
                <CardHeader className="bg-[#b7e4e6]/30 pb-6 pt-8 px-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    <BookOpen className="w-7 h-7 text-[#0fa3a3]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0d1b2a]">English Tutoring</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 pb-8 px-8 space-y-4">
                  <p className="text-[#0d1b2a]/65 leading-relaxed">
                    Comprehensive English language support covering reading, writing, grammar, and comprehension.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Reading comprehension and analysis",
                      "Creative and essay writing skills",
                      "Grammar and vocabulary development",
                      "Exam preparation and study techniques",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0d1b2a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Maths Tutoring */}
              <Card className="border border-[#b7e4e6] rounded-2xl hover:border-[#0fa3a3] hover:shadow-lg hover:shadow-[#0fa3a3]/10 transition-all overflow-hidden">
                <CardHeader className="bg-[#b7e4e6]/30 pb-6 pt-8 px-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    <Calculator className="w-7 h-7 text-[#0fa3a3]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0d1b2a]">Maths Tutoring</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 pb-8 px-8 space-y-4">
                  <p className="text-[#0d1b2a]/65 leading-relaxed">
                    Clear and engaging mathematics instruction for all secondary school levels and topics.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Algebra, geometry, and trigonometry",
                      "Problem-solving strategies",
                      "GCSE and A-Level preparation",
                      "Visual learning methods",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0d1b2a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-[#b7e4e6] rounded-2xl hover:border-[#0fa3a3] hover:shadow-md hover:shadow-[#0fa3a3]/10 transition-all bg-white">
                <CardHeader className="pb-3 pt-7 px-7">
                  <div className="w-12 h-12 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-[#0fa3a3]" />
                  </div>
                  <CardTitle className="text-xl text-[#0d1b2a]">1:1 Support Sessions</CardTitle>
                </CardHeader>
                <CardContent className="pb-7 px-7">
                  <p className="text-[#0d1b2a]/65 leading-relaxed">
                    Personalised one-to-one tutoring sessions tailored to each student's individual learning style,
                    pace, and goals. Sessions conducted with full B.S.L support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#b7e4e6] rounded-2xl hover:border-[#0fa3a3] hover:shadow-md hover:shadow-[#0fa3a3]/10 transition-all bg-white">
                <CardHeader className="pb-3 pt-7 px-7">
                  <div className="w-12 h-12 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center mb-3">
                    <ClipboardList className="w-6 h-6 text-[#0fa3a3]" />
                  </div>
                  <CardTitle className="text-xl text-[#0d1b2a]">Homework &amp; Test Prep</CardTitle>
                </CardHeader>
                <CardContent className="pb-7 px-7">
                  <p className="text-[#0d1b2a]/65 leading-relaxed">
                    Get assistance with homework assignments, projects, and test preparation. Build confidence
                    and develop effective study habits for academic success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">Why Choose Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              {[
                { emoji: "👂", title: "Deaf Education Specialist", desc: "Expertise specifically in teaching deaf students with proven teaching methods" },
                { emoji: "🤟", title: "Fluent in B.S.L", desc: "Full British Sign Language fluency for clear and effective communication" },
                { emoji: "📚", title: "Personalised Approach", desc: "Tailored learning plans designed around each student's unique needs" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-20 h-20 bg-[#0fa3a3] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#0fa3a3]/20">
                    <span className="text-4xl">{item.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1b2a] mb-3">{item.title}</h3>
                  <p className="text-[#0d1b2a]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-[#0d1b2a]/60 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your tutoring needs and schedule your first session.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-lg px-10 py-6 shadow-lg shadow-[#0fa3a3]/25 transition-all"
            >
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
