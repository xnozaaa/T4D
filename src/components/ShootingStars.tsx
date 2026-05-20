"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  top: number
  left: number
  delay: number
  duration: number
  tailLength: number
}

export default function ShootingStars({ count = 12 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 80,
        left: Math.random() * 70,
        delay: Math.random() * 12,
        duration: 1.2 + Math.random() * 1.4,
        tailLength: 120 + Math.random() * 180,
      }))
    )
  }, [count])

  return (
    <span className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <style>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(0px) translateY(0px);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(500px) translateY(300px);
            opacity: 0;
          }
        }
      `}</style>

      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationName: "shootingStar",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: 0,
            display: "inline-block",
            transform: "rotate(35deg)",
          }}
        >
          {/* Tail */}
          <span
            style={{
              display: "block",
              width: `${star.tailLength}px`,
              height: "2px",
              background: `linear-gradient(to right, transparent, #b7e4e6aa, #0fa3a3)`,
              borderRadius: "9999px",
              position: "relative",
            }}
          />
          {/* Head glow */}
          <span
            style={{
              position: "absolute",
              right: "-3px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 0 6px 3px #0fa3a3, 0 0 12px 6px #0fa3a340",
            }}
          />
        </span>
      ))}
    </span>
  )
}
