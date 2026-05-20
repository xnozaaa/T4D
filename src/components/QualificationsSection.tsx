"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Languages, Star, CheckCircle2 } from "lucide-react"

const qualifications = [
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "Specialist Deaf Tutor",
    desc: "Extensive experience supporting deaf students in secondary school settings",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: "Degrees in Teaching & Deaf Education",
    desc: "Formally qualified with specialist academic credentials in both fields",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "10+ Years Experience",
    desc: "Over a decade working directly with deaf children and young people",
  },
  {
    icon: <Languages className="w-6 h-6 text-white" />,
    title: "Fluent in B.S.L",
    desc: "Full British Sign Language fluency for natural, effective communication",
  },
]

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "BSL Fluent" },
  { value: "GCSE", label: "Exam Ready" },
  { value: "1:1", label: "Personalised" },
]

export default function QualificationsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section ref={sectionRef} className="py-24 bg-[#b7e4e6]/25 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#0fa3a3] mb-3">
            Why Choose Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">
            Expert Qualifications
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#0fa3a3] rounded-full mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {qualifications.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-[#b7e4e6] shadow-sm hover:shadow-md hover:border-[#0fa3a3] transition-all group"
            >
              {/* Animated icon circle */}
              <motion.div
                className="w-14 h-14 rounded-2xl bg-[#0fa3a3] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#0fa3a3]/25"
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {q.icon}
              </motion.div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0fa3a3]" />
                  <h3 className="font-bold text-[#0d1b2a] text-base">{q.title}</h3>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#0d1b2a] rounded-2xl p-5 text-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
            >
              <p className="text-3xl font-extrabold text-[#0fa3a3] leading-none mb-1">{stat.value}</p>
              <p className="text-xs font-medium text-[#b7e4e6]/70 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-2 border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white font-semibold text-base px-8 py-6 transition-all"
          >
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
