import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calculator, Users, ClipboardList, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutoring for the Deaf - Personalised English & Maths Support",
  description: "Supporting secondary deaf students with expert tutoring in English and Maths. 10+ years experience, B.S.L fluent, and specialist qualifications in Deaf Education.",
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="relative bg-[#F7F8FC] py-20 md:py-32 overflow-hidden">
          {/* Subtle decorative aqua blob */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#BFEAEA]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#BFEAEA]/20 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-7">
                {/* Tag line */}
                <div className="inline-flex items-center gap-2 bg-[#BFEAEA]/60 text-[#00AEB0] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#00AEB0]/20">
                  <span className="w-2 h-2 rounded-full bg-[#00AEB0] animate-pulse" />
                  BSL Fluent · 10+ Years Experience
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1724] leading-tight">
                  Helping Deaf Students{" "}
                  <span className="text-[#00AEB0]">Succeed</span>{" "}
                  with Personalised Tutoring
                </h1>
                <p className="text-xl text-[#0B1724]/70 leading-relaxed">
                  Supporting secondary students in English and Maths — making learning clear, engaging, and effective.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl bg-[#00AEB0] hover:bg-[#008C8E] text-white font-semibold text-base px-8 py-6 shadow-md shadow-[#00AEB0]/25 transition-all"
                  >
                    <Link href="/contact">Book a Free Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-2 border-[#0B1724] text-[#0B1724] hover:bg-[#0B1724] hover:text-white font-semibold text-base px-8 py-6 transition-all"
                  >
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-5 pt-2">
                  {["Specialist Deaf Tutor", "BSL Fluent", "Flexible Online & In-Person"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#0B1724]/70">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEB0] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 -m-8 rounded-full bg-[#BFEAEA]/40 blur-3xl" />
                  <Image
                    src="/tfd-stacked-light.png"
                    alt="Tutoring for the Deaf"
                    width={600}
                    height={600}
                    className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1724] mb-4">What We Offer</h2>
              <p className="text-xl text-[#0B1724]/60 max-w-2xl mx-auto">
                Specialised tutoring services designed for deaf students
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BookOpen className="w-8 h-8 text-[#00AEB0]" />,
                  title: "English Tutoring",
                  desc: "Comprehensive English language support tailored to your needs",
                  accent: "bg-[#BFEAEA]/60",
                },
                {
                  icon: <Calculator className="w-8 h-8 text-[#00AEB0]" />,
                  title: "Maths Tutoring",
                  desc: "Clear and engaging mathematics instruction for all levels",
                  accent: "bg-[#BFEAEA]/60",
                },
                {
                  icon: <Users className="w-8 h-8 text-[#00AEB0]" />,
                  title: "1:1 Support",
                  desc: "Personalised one-to-one tutoring sessions focused on your goals",
                  accent: "bg-[#BFEAEA]/60",
                },
                {
                  icon: <ClipboardList className="w-8 h-8 text-[#00AEB0]" />,
                  title: "Homework Help",
                  desc: "Assistance with homework and test preparation",
                  accent: "bg-[#BFEAEA]/60",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border border-[#BDE3E4] rounded-2xl hover:border-[#00AEB0] hover:shadow-md hover:shadow-[#00AEB0]/10 transition-all duration-200 bg-white"
                >
                  <CardContent className="p-7 text-center space-y-4">
                    <div className={`w-16 h-16 ${item.accent} rounded-2xl flex items-center justify-center mx-auto`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1724]">{item.title}</h3>
                    <p className="text-[#0B1724]/60 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20 bg-[#BFEAEA]/25">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1724] mb-8">Expert Qualifications</h2>
                <ul className="space-y-5">
                  {[
                    "Specialist Deaf Tutor with extensive experience",
                    "Degrees in Teaching and Deaf Education",
                    "10+ Years Experience Working with Deaf Children",
                    "Fluent in B.S.L (British Sign Language)",
                  ].map((qual, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#00AEB0] flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-lg text-[#0B1724]">{qual}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-2 border-[#0B1724] text-[#0B1724] hover:bg-[#0B1724] hover:text-white font-semibold text-base px-8 py-6 transition-all"
                  >
                    <Link href="/about">Learn More About Me</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759346072605.png"
                  alt="Tutoring Services"
                  width={500}
                  height={600}
                  className="w-full max-w-md rounded-2xl shadow-xl shadow-[#0B1724]/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0B1724]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Study Together!</h2>
            <p className="text-xl text-[#BFEAEA]/80 mb-10 max-w-2xl mx-auto">
              Ready to start your learning journey? Get in touch today for personalised tutoring support.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-[#00AEB0] hover:bg-[#008C8E] text-white font-semibold text-lg px-10 py-6 shadow-lg shadow-[#00AEB0]/30 transition-all"
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
