import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Calculator, CheckCircle2, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Services</h1>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
              Specialised tutoring services designed specifically for deaf secondary students, 
              helping them excel in English and Maths.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* English Tutoring */}
              <Card className="border-2 border-primary/30 hover:border-primary transition-colors">
                <CardHeader className="bg-primary/5">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-navy">English Tutoring</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg text-navy/70">
                    Comprehensive English language support covering reading, writing, grammar, and comprehension.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Reading comprehension and analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Creative and essay writing skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Grammar and vocabulary development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Exam preparation and study techniques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Maths Tutoring */}
              <Card className="border-2 border-secondary/30 hover:border-secondary transition-colors">
                <CardHeader className="bg-secondary/5">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Calculator className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl text-navy">Maths Tutoring</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg text-navy/70">
                    Clear and engaging mathematics instruction for all secondary school levels and topics.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Algebra, geometry, and trigonometry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Problem-solving strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">GCSE and A-Level preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-navy">Visual learning methods</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-navy">1:1 Support Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-navy/70">
                    Personalised one-to-one tutoring sessions tailored to each student's individual learning style, 
                    pace, and goals. Sessions conducted with full B.S.L support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Homework & Test Prep</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-navy/70">
                    Get assistance with homework assignments, projects, and test preparation. Build confidence 
                    and develop effective study habits for academic success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👂</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Deaf Education Specialist</h3>
                <p className="text-navy/70">
                  Expertise specifically in teaching deaf students with proven teaching methods
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤟</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Fluent in B.S.L</h3>
                <p className="text-navy/70">
                  Full British Sign Language fluency for clear and effective communication
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Personalised Approach</h3>
                <p className="text-navy/70">
                  Tailored learning plans designed around each student's unique needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-navy/70 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your tutoring needs and schedule your first session.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}