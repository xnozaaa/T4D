import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, CheckCircle2, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safeguarding | Tutoring for the Deaf",
  description: "Tutoring for the Deaf is committed to the safety and wellbeing of all students. Read our safeguarding and online safety information.",
}

const sections = [
  {
    title: "Our Commitment to Safeguarding",
    content: "The welfare and safety of every student is the highest priority. Tutoring for the Deaf is committed to creating a safe, professional and respectful environment for all learners. This commitment applies to every interaction — online sessions, communications with students and families, and all aspects of the tutoring relationship.",
    points: [
      "Every student's safety and wellbeing comes first",
      "A professional, respectful environment is maintained at all times",
      "Concerns are taken seriously and acted upon promptly",
    ],
  },
  {
    title: "Online Tutoring Expectations",
    content: "All tutoring sessions are conducted online via video call. Sessions take place in a professional, appropriate environment. The following expectations apply to all online lessons:",
    points: [
      "Sessions are conducted in a suitable, professional setting",
      "Appropriate dress and behaviour is maintained throughout",
      "Sessions are kept focused on learning and the student's needs",
      "No recordings are made of sessions without prior consent",
      "Online platforms used are appropriate and age-suitable",
    ],
  },
  {
    title: "Parent and Carer Communication",
    content: "Open, clear communication with parents and carers is an important part of this service. Parents and carers are kept informed about their child's progress and are encouraged to raise any questions or concerns at any time.",
    points: [
      "Regular updates on your child's progress are provided",
      "Parents and carers are welcome to contact the tutor at any time",
      "Any changes to session arrangements are communicated clearly",
      "Parent/carer consent is sought before any changes to approach",
    ],
  },
  {
    title: "Professional Boundaries",
    content: "Appropriate professional boundaries are maintained at all times. The tutoring relationship is strictly professional, and all communication between the tutor and student is kept focused on learning.",
    points: [
      "All communication takes place through professional channels",
      "Contact is kept within agreed session times and professional email",
      "Social media contact with students is not appropriate",
      "Any concerns about boundaries should be raised with the tutor directly",
    ],
  },
  {
    title: "Appropriate Lesson Environment",
    content: "Students are asked to join online sessions from a suitable home environment. Parents and carers are welcome to be present during sessions, particularly for younger students.",
    points: [
      "A quiet, distraction-free space is recommended for best learning",
      "Parents and carers are welcome to sit in on any session",
      "Any concerns about the learning environment can be discussed",
    ],
  },
  {
    title: "Confidentiality",
    content: "Information shared by students and families is treated with respect and confidentiality. It is only shared where needed to provide the service, with trusted service providers, or where required for safeguarding or by law. See our Privacy & Cookies notice for details.",
    points: [
      "Personal information is kept private and secure",
      "Session content is treated confidentially",
      "Information is only shared when there is a clear service, safeguarding or legal reason",
    ],
  },
]

export default function SafeguardingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-[#0d1b2a] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-[#0fa3a3] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0fa3a3]/30">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Safeguarding</h1>
            <p className="text-xl text-[#b7e4e6]/80 max-w-3xl mx-auto">
              The safety, wellbeing and welfare of every student is our absolute priority. Here is how we keep tutoring safe, professional and appropriate.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              {sections.map((section) => (
                <Card key={section.title} className="border border-[#b7e4e6] rounded-2xl shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-[#b7e4e6]/60 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#0fa3a3]" />
                      </div>
                      <h2 className="text-xl font-bold text-[#0d1b2a] mt-1">{section.title}</h2>
                    </div>
                    <p className="text-[#0d1b2a]/65 leading-relaxed mb-5">{section.content}</p>
                    <ul className="space-y-2.5">
                      {section.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#0fa3a3] flex-shrink-0 mt-0.5" />
                          <span className="text-[#0d1b2a]">{p}</span>
                        </li>
                      ))}
                    </ul>
                    {section.title === "Confidentiality" && (
                      <Link href="/privacy" className="mt-4 inline-block text-sm font-semibold text-[#0d8f8f] underline underline-offset-2">
                        Read our Privacy &amp; Cookies notice
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Raise a Concern */}
              <Card className="border-2 border-[#0fa3a3] rounded-2xl shadow-sm bg-[#b7e4e6]/10">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-[#0d1b2a] mb-3">What to Do If You Have a Concern</h2>
                  <p className="text-[#0d1b2a]/65 leading-relaxed mb-5">
                    If you have any concerns about the safety or wellbeing of a student, or about any aspect of the tutoring service, please raise this directly and promptly. Concerns will be taken seriously, dealt with respectfully and acted upon appropriately.
                  </p>
                  <p className="text-[#0d1b2a]/65 leading-relaxed mb-6">
                    If you believe a child is at immediate risk of harm, please contact the relevant local authority children&apos;s services or emergency services immediately.
                  </p>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#b7e4e6]">
                    <Mail className="w-5 h-5 text-[#0fa3a3] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#0d1b2a]">To raise a concern, contact:</p>
                      <a href="mailto:tutoringforthedeaf@gmail.com" className="text-[#0fa3a3] hover:underline text-sm">
                        tutoringforthedeaf@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#b7e4e6]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b2a] mb-4">Questions or Concerns?</h2>
            <p className="text-[#0d1b2a]/65 mb-8 max-w-xl mx-auto">
              We welcome questions from parents and carers. Please do not hesitate to get in touch.
            </p>
            <Button asChild size="lg" className="rounded-xl bg-[#0fa3a3] hover:bg-[#0d8f8f] text-white font-semibold px-8 py-6 shadow-md transition-all">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
