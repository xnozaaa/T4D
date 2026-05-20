"use client"

import { useEffect, useRef } from "react"

interface StarState {
  x: number
  y: number
  len: number
  speed: number
  size: number
  opacity: number
  trail: { x: number; y: number; opacity: number }[]
  active: boolean
  delay: number
  elapsed: number
}

const ANGLE = 35 * (Math.PI / 180) // 35 degrees in radians
const cos = Math.cos(ANGLE)
const sin = Math.sin(ANGLE)

function createStar(W: number, H: number): StarState {
  return {
    x: Math.random() * W * 0.7,
    y: Math.random() * H * 0.6,
    len: 180 + Math.random() * 220,
    speed: 14 + Math.random() * 12,
    size: 1.5 + Math.random() * 1.5,
    opacity: 0,
    trail: [],
    active: false,
    delay: Math.random() * 10000,
    elapsed: 0,
  }
}

export default function ShootingStars({ count = 10 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let lastTime = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    resize()
    const observer = new ResizeObserver(resize)
    if (canvas.parentElement) observer.observe(canvas.parentElement)

    // Initialise stars
    let stars: StarState[] = Array.from({ length: count }, () =>
      createStar(canvas.width, canvas.height)
    )

    const draw = (timestamp: number) => {
      const dt = Math.min(timestamp - lastTime, 32) // cap at 32ms
      lastTime = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star, i) => {
        star.elapsed += dt

        // Wait for delay before activating
        if (!star.active) {
          if (star.elapsed >= star.delay) {
            star.active = true
            star.elapsed = 0
          }
          return
        }

        // Move star
        const dx = cos * star.speed
        const dy = sin * star.speed
        star.x += dx
        star.y += dy

        // Track trail
        star.trail.unshift({ x: star.x, y: star.y, opacity: 1 })
        if (star.trail.length > 30) star.trail.pop()

        // Fade in / out opacity
        const distanceTravelled = star.elapsed * star.speed * 0.06
        const fadeInDist = 60
        const totalDist = star.len + canvas.width * 0.5
        star.opacity =
          distanceTravelled < fadeInDist
            ? distanceTravelled / fadeInDist
            : distanceTravelled > totalDist - fadeInDist
            ? Math.max(0, (totalDist - distanceTravelled) / fadeInDist)
            : 1

        // Draw trail using gradient line
        if (star.trail.length > 1) {
          const tailX = star.x - cos * star.len
          const tailY = star.y - sin * star.len

          const grad = ctx.createLinearGradient(tailX, tailY, star.x, star.y)
          grad.addColorStop(0, `rgba(183, 228, 230, 0)`)
          grad.addColorStop(0.4, `rgba(15, 163, 163, ${star.opacity * 0.4})`)
          grad.addColorStop(0.8, `rgba(15, 163, 163, ${star.opacity * 0.85})`)
          grad.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`)

          ctx.save()
          ctx.beginPath()
          ctx.moveTo(tailX, tailY)
          ctx.lineTo(star.x, star.y)
          ctx.strokeStyle = grad
          ctx.lineWidth = star.size
          ctx.lineCap = "round"
          ctx.stroke()
          ctx.restore()
        }

        // Draw glowing head
        const headGrad = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 6
        )
        headGrad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        headGrad.addColorStop(0.3, `rgba(15, 163, 163, ${star.opacity * 0.9})`)
        headGrad.addColorStop(0.7, `rgba(15, 163, 163, ${star.opacity * 0.3})`)
        headGrad.addColorStop(1, `rgba(15, 163, 163, 0)`)

        ctx.save()
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 6, 0, Math.PI * 2)
        ctx.fillStyle = headGrad
        ctx.fill()
        ctx.restore()

        // Solid bright core
        ctx.save()
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.shadowBlur = 12
        ctx.shadowColor = "#0fa3a3"
        ctx.fill()
        ctx.restore()

        // Reset when off-screen
        if (
          star.x > canvas.width + 100 ||
          star.y > canvas.height + 100 ||
          star.opacity <= 0
        ) {
          stars[i] = createStar(canvas.width, canvas.height)
        }
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame((t) => { lastTime = t; draw(t) })

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  )
}
