"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  top: string
  left: string
  delay: string
  duration: string
  size: number
  angle: number
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function ShootingStars({ count = 8 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generated: Star[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${randomBetween(0, 70)}%`,
      left: `${randomBetween(-10, 60)}%`,
      delay: `${randomBetween(0, 8)}s`,
      duration: `${randomBetween(1.4, 2.6)}s`,
      size: randomBetween(1.5, 2.5),
      angle: randomBetween(20, 45),
    }))
    setStars(generated)
  }, [count])

  return (
    <>
      <style>{`
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) scaleX(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(340px) translateY(200px) scaleX(1);
            opacity: 0;
          }
        }
        .shooting-star {
          position: absolute;
          border-radius: 9999px;
          animation: shoot linear infinite;
          pointer-events: none;
        }
        .shooting-star::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 80px;
          height: 1px;
          background: linear-gradient(to left, transparent, #0fa3a3);
          border-radius: 9999px;
        }
      `}</style>

      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size * 3}px`,
            height: `${star.size}px`,
            background: `radial-gradient(circle, #0fa3a3, #b7e4e6)`,
            boxShadow: `0 0 6px 1px #0fa3a380`,
            animationDelay: star.delay,
            animationDuration: star.duration,
            rotate: `${star.angle}deg`,
            opacity: 0,
          }}
        />
      ))}
    </>
  )
}
