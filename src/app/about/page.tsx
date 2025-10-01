import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Award, Heart, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/20 to-primary/20 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">About Me</h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
              A dedicated specialist tutor with over 10 years of experience supporting deaf students
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">My Journey</h2>
                <div className="space-y-4 text-lg text-navy/80">
                  <p>
                    Welcome to Tutoring for the Deaf! I'm a specialist tutor dedicated to helping deaf 
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
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/hero-1759346019763.png"
                  alt="Tutoring Logo"
                  width={400}
                  height={400}
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Qualifications & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Education Degrees</h3>
                  <p className="text-navy/70">Degrees in Teaching and Deaf Education</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">10+ Years Experience</h3>
                  <p className="text-navy/70">Over a decade working with deaf children</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🤟</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy">B.S.L Fluent</h3>
                  <p className="text-navy/70">Fluent in British Sign Language</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Specialist Tutor</h3>
                  <p className="text-navy/70">Specialised in deaf education</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">My Teaching Approach</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Student-Centered</h3>
                  <p className="text-navy/70">
                    Every lesson is tailored to the individual student's needs, learning style, and pace
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📖</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Clear & Engaging</h3>
                  <p className="text-navy/70">
                    Making complex concepts accessible through visual aids and B.S.L communication
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Goal-Oriented</h3>
                  <p className="text-navy/70">
                    Focused on achieving academic goals while building confidence and independence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">My Mission</h2>
              <p className="text-xl text-navy/80 mb-8">
                "To empower deaf students to reach their full academic potential by providing accessible, 
                engaging, and personalised tutoring that celebrates their strengths and supports their learning journey."
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
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