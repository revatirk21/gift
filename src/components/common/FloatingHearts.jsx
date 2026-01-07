import React from "react"

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="absolute text-rose-200 opacity-40 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 6 + 10}px`, // smaller hearts
            animationDuration: `${Math.random() * 10 + 12}s`, // very slow
          }}
        >
          🩷
        </span>
      ))}
    </div>
  )
}

