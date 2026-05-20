import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Award, Heart, Target, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Tutoring for the Deaf",
  description: "Meet the specialist Deaf tutor behind Tutoring for the Deaf. BSL fluent, 10+ years experience, qualified in Teaching and Deaf Education.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Specialist Deaf Tutor
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">About Me</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              A dedicated specialist tutor with over 10 years of experience supporting deaf students
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
              <div className="order-2 lg:order-1">
                <div className="h-1 w-12 bg-[#0fa3a3] rounded-full mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6">My Journey</h2>
                <div className="space-y-5 text-lg text-[#0d1b2a]/70 leading-relaxed">
                  <p>
                    Welcome to Tutoring for the Deaf! I&apos;m a specialist tutor dedicated to helping deaf
                    secondary students succeed in their English and Maths studies.
                  </p>
                  <p>
                    With over 10 years of experience working with deaf children and young people, I understand
                    the unique challenges they face in mainstream education. My approach combines academic
                    excellence with a deep understanding of deaf culture and communication.
                  </p>
                  <p>
                    I am fluent in British Sign Language (B.S.L) and hold degrees in both Teaching and
                    Deaf Education. This combination of qualifications and experience allows me to provide
                    truly personalised support that makes a real difference.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-4 rounded-3xl bg-[#b7e4e6]/40 blur-xl" />
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/hero-1759346019763.png"
                    alt="Tutoring Logo"
                    width={400}
                    height={400}
                    className="relative w-full max-w-md rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">Qualifications &amp; Experience</h2>
              <p className="text-[#0d1b2a]/60 text-lg max-w-xl mx-auto">A strong foundation built on specialist knowledge and real-world experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-[#0fa3a3]" />,
                  title: "Education Degrees",
                  desc: "Degrees in Teaching and Deaf Education",
                },
                {
                  icon: <Award className="w-8 h-8 text-[#0fa3a3]" />,
                  title: "10+ Years Experience",
                  desc: "Over a decade working with deaf children",
                },
                {
                  icon: <span className="text-3xl">🤟</span>,
                  title: "B.S.L Fluent",
                  desc: "Fluent in British Sign Language",
                },
                {
                  icon: <Target className="w-8 h-8 text-[#0fa3a3]" />,
                  title: "Specialist Tutor",
                  desc: "Specialised in deaf education",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border border-[#b7e4e6] rounded-2xl hover:border-[#0fa3a3] hover:shadow-md hover:shadow-[#0fa3a3]/10 transition-all bg-white"
                >
                  <CardContent className="p-7 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#b7e4e6]/60 rounded-2xl flex items-center justify-center mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0d1b2a]">{item.title}</h3>
                    <p className="text-[#0d1b2a]/60 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">My Teaching Approach</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    icon: <Heart className="w-10 h-10 text-white" />,
                    title: "Student-Centered",
                    desc: "Every lesson is tailored to the individual student's needs, learning style, and pace",
                  },
                  {
                    icon: <span className="text-4xl">📖</span>,
                    title: "Clear & Engaging",
                    desc: "Making complex concepts accessible through visual aids and B.S.L communication",
                  },
                  {
                    icon: <span className="text-4xl">🎯</span>,
                    title: "Goal-Oriented",
                    desc: "Focused on achieving academic goals while building confidence and independence",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-20 h-20 bg-[#0fa3a3] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#0fa3a3]/20">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0d1b2a] mb-3">{item.title}</h3>
                    <p className="text-[#0d1b2a]/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-1 bg-[#0fa3a3] rounded-full mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">My Mission</h2>
              <p className="text-xl text-[#b7e4e6]/80 mb-10 leading-relaxed italic">
                &ldquo;To empower deaf students to reach their full academic potential by providing accessible,
                engaging, and personalised tutoring that celebrates their strengths and supports their learning journey.&rdquo;
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base px-8 py-6 shadow-lg shadow-[#0fa3a3]/30 transition-all"
              >
                <Link href="/contact">Work With Me</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
