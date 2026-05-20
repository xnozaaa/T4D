import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Heart, GraduationCap, Eye, MessageSquare } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Tutoring for the Deaf",
  description: "Tutoring for the Deaf was founded by a qualified Teacher of the Deaf who understands, both personally and professionally, the barriers that deaf learners can face in education.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-[#b7e4e6]/25 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white text-[#0fa3a3] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#b7e4e6] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0fa3a3]" />
              Qualified Teacher of the Deaf
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">About Me</h1>
            <p className="text-xl text-[#0d1b2a]/70 max-w-3xl mx-auto">
              A qualified Teacher of the Deaf who understands, both personally and professionally, the barriers that deaf learners can face in education.
            </p>
          </div>
        </section>

        {/* Main intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="order-2 lg:order-1">
                <div className="h-1 w-12 bg-[#0fa3a3] rounded-full mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6">
                  Personal Experience. Professional Expertise.
                </h2>
                <div className="space-y-5 text-lg text-[#0d1b2a]/70 leading-relaxed">
                  <p>
                    Tutoring for the Deaf was founded by a qualified Teacher of the Deaf who understands, both personally and professionally, the barriers that deaf learners can face in education.
                  </p>
                  <p>
                    As a profoundly deaf person, I know first-hand that deafness does not limit potential. With the right support, clear communication and accessible teaching, deaf students can achieve highly, grow in confidence and succeed academically.
                  </p>
                  <p>
                    My own journey has shaped the way I teach. I have overcome many of the challenges linked to being deaf in education, gone on to graduate from multiple universities, and become a qualified Teacher of the Deaf. This experience allows me to support students not only as a teacher, but as someone who truly understands the importance of feeling heard, included and believed in.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-4 rounded-full bg-[#b7e4e6]/40 blur-2xl" />
                  <Image
                    src="/tfd-hero.png"
                    alt="Tutoring for the Deaf"
                    width={420}
                    height={420}
                    className="relative w-full max-w-sm drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-16 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-1 bg-[#0fa3a3] rounded-full mx-auto mb-8" />
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
                &ldquo;Deafness does not limit potential. With the right support, deaf students can achieve highly, grow in confidence and succeed academically.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Specialist approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="h-1 w-12 bg-[#0fa3a3] rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-8">How I Teach</h2>
            <div className="space-y-5 text-lg text-[#0d1b2a]/70 leading-relaxed">
              <p>
                I specialise in supporting deaf and hearing-impaired learners through personalised online tutoring in English and Maths. My sessions are designed to be clear, visual, structured and accessible, helping students understand difficult topics at their own pace.
              </p>
              <p>
                Every learner is different, so I adapt my teaching to the individual needs of the student. Whether a young person uses spoken English, written English, BSL, a cochlear implant, hearing aids, or a combination of communication methods, my aim is to create a calm and supportive learning environment where they can thrive.
              </p>
              <p>
                At Tutoring for the Deaf, the focus is not just on improving subject knowledge. It is also about building confidence, independence and self-belief.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {[
                "Sessions paced to the individual student — never rushed",
                "Visual, structured and accessible teaching materials",
                "BSL support available throughout",
                "Adapted for cochlear implants, hearing aids or any communication method",
                "Open and friendly communication with parents and carers",
                "Confidence-building alongside academic progress",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0d1b2a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I bring */}
        <section className="py-20 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-3">What I Bring to Every Session</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <GraduationCap className="w-7 h-7 text-white" />,
                  title: "Qualified Teacher of the Deaf",
                  desc: "Formally qualified with specialist expertise in deaf education and teaching.",
                },
                {
                  icon: <Eye className="w-7 h-7 text-white" />,
                  title: "Visual Teaching Methods",
                  desc: "Clear, structured lessons using visual approaches that work for deaf learners.",
                },
                {
                  icon: <MessageSquare className="w-7 h-7 text-white" />,
                  title: "Communication Flexibility",
                  desc: "Sessions adapted to BSL, spoken English, written communication or a combination.",
                },
                {
                  icon: <Heart className="w-7 h-7 text-white" />,
                  title: "Lived Understanding",
                  desc: "Personal experience of being deaf — bringing genuine empathy and insight to every lesson.",
                },
              ].map((item) => (
                <Card key={item.title} className="border border-[#b7e4e6] rounded-2xl bg-white hover:border-[#0fa3a3] hover:shadow-md transition-all">
                  <CardContent className="p-7 text-center space-y-4">
                    <div className="w-14 h-14 bg-[#0fa3a3] rounded-2xl flex items-center justify-center mx-auto shadow-md shadow-[#0fa3a3]/20">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[#0d1b2a]">{item.title}</h3>
                    <p className="text-[#0d1b2a]/60 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0d1b2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-1 bg-[#0fa3a3] rounded-full mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-[#b7e4e6]/80 mb-10 leading-relaxed">
                Get in touch today for a free, no-obligation consultation. I&apos;d love to hear about your child and discuss how I can help.
              </p>
              <Button asChild size="lg" className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold text-base px-8 py-6 shadow-lg shadow-[#0fa3a3]/30 transition-all">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
