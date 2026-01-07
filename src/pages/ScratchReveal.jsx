import { useEffect, useRef, useState } from "react"
import React from "react"

export default function ScratchReveal({ onReveal }) {
  const canvasRef = useRef(null)
  const [scratching, setScratching] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // canvas size
    canvas.width = 360
    canvas.height = 200

    // draw scratch layer
    ctx.fillStyle = "#f9a8d4" // soft rose
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // enable erase mode AFTER drawing
    ctx.globalCompositeOperation = "destination-out"
  }, [])

  const getPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX ?? e.touches?.[0].clientX) - rect.left
    const y = (e.clientY ?? e.touches?.[0].clientY) - rect.top
    return { x, y }
  }

  const scratch = (e) => {
    e.preventDefault()
    if (!scratching || revealed) return

    const ctx = canvasRef.current.getContext("2d")
    const { x, y } = getPosition(e)

    ctx.beginPath()
    ctx.arc(x, y, 22, 0, Math.PI * 2)
    ctx.fill()

    checkProgress()
  }

  const checkProgress = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data

    let cleared = 0
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) cleared++
    }

    const percent = cleared / (pixels.length / 4)

    if (percent > 0.45) {
      setRevealed(true)
      setTimeout(onReveal, 400) // soft delay
    }
  }

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-6">

      {/* Instruction */}
      <p className="mb-6 text-sm tracking-wide text-rose-400/80">
        Click & drag to scratch <span className="animate-pulse">💗</span>
      </p>

      {/* Scratch Card */}
      <div
        className="relative rounded-3xl bg-rose-200/70
                   shadow-lg shadow-rose-200
                   px-10 py-14
                   flex items-center justify-center
                   transition-transform duration-300 hover:scale-[1.01]"
      >
        {/* Hidden Message */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center
                     text-center text-rose-500 font-medium"
          style={{ pointerEvents: "none" }}
        >
          <p className="text-xl leading-relaxed">
            Scratch gently…
          </p>
          <p className="text-lg mt-1">
            a little love is hiding underneath 💌
          </p>
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="rounded-2xl cursor-pointer"
          style={{ touchAction: "none" }}
          onMouseDown={(e) => {
            e.preventDefault()
            setScratching(true)
          }}
          onMouseMove={scratch}
          onMouseUp={() => setScratching(false)}
          onMouseLeave={() => setScratching(false)}
          onTouchStart={(e) => {
            e.preventDefault()
            setScratching(true)
          }}
          onTouchMove={scratch}
          onTouchEnd={() => setScratching(false)}
        />
      </div>
    </div>
  )
}
