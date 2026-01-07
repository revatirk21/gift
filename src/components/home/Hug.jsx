import React, { useEffect, useState } from "react"
import FloatingHearts from "../components/common/FloatingHearts"

import leftImg from "../assets/images/chibi/chibi-left.png"
import rightImg from "../assets/images/chibi/chibi-right.png"

export default function Hug() {
  const [hug, setHug] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHug(true)
    }, 300) // small delay after load

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-rose-50 flex items-center justify-center overflow-hidden">
      <FloatingHearts />

      <div className="flex items-center justify-center gap-4">

        {/* Left Character */}
        <img
          src={leftImg}
          alt="Left"
          className={`
            w-40 sm:w-48
            transition-all duration-1000 ease-out
            ${hug ? "translate-x-4 scale-105" : "-translate-x-32 opacity-0"}
          `}
        />

        {/* Right Character */}
        <img
          src={rightImg}
          alt="Right"
          className={`
            w-40 sm:w-48
            transition-all duration-1000 ease-out
            ${hug ? "-translate-x-4 scale-105" : "translate-x-32 opacity-0"}
          `}
        />

      </div>

      {/* Caption */}
      <p className="
        absolute bottom-16
        text-stone-500 text-lg
        text-center px-6
      ">
        Even when we’re apart, my heart always finds yours 🤍
      </p>
    </div>
  )
}
