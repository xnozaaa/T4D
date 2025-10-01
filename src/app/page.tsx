import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calculator, Users, Mail } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal/20 to-gold/20 py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
                  Helping Deaf Students Succeed with Personalised Tutoring!
                </h1>
                <p className="text-xl md:text-2xl text-navy/80">
                  Supporting secondary students in English and Maths, making learning clear, engaging, and effective.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/hero-1759346019763.png"
                  alt="Tutoring for the Deaf Logo"
                  width={500}
                  height={500}
                  className="w-full max-w-md lg:max-w-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What We Offer</h2>
              <p className="text-xl text-navy/70 max-w-2xl mx-auto">
                Specialised tutoring services designed for deaf students
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">English Tutoring</h3>
                  <p className="text-navy/70">Comprehensive English language support tailored to your needs</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Calculator className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Maths Tutoring</h3>
                  <p className="text-navy/70">Clear and engaging mathematics instruction for all levels</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">1:1 Support</h3>
                  <p className="text-navy/70">Personalised one-to-one tutoring sessions focused on your goals</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Homework Help</h3>
                  <p className="text-navy/70">Assistance with homework and test preparation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Expert Qualifications</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-navy">Specialist Deaf Tutor with extensive experience</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-navy">Degrees in Teaching and Deaf Education</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-navy">10+ Years Experience Working with Deaf Children</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-navy">Fluent in B.S.L (British Sign Language)</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-navy text-lg px-8 py-6">
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
                  className="w-full max-w-md rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Study Together!</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to start your learning journey? Get in touch today for personalised tutoring support.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}