import React, { useEffect, useRef, useState } from "react"
import FloatingHearts from "../components/common/FloatingHearts"
import MusicPlayer from "../components/common/Music"

import leftImg from "../assets/images/chibi/boy.png"
import rightImg from "../assets/images/chibi/girl.png"
import hugImg from "../assets/images/chibi/hug.png"

export default function Home() {
  const [startHug, setStartHug] = useState(false)
  const [showHug, setShowHug] = useState(false)
  const timeoutRef = useRef(null)

  const handleHug = () => {
    if (startHug) return

    // small emotional pause
    setTimeout(() => {
      setStartHug(true)
    }, 400)

    // show hug after movement completes
    timeoutRef.current = setTimeout(() => {
      setShowHug(true)
    }, 2800)
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div className="relative min-h-screen bg-rose-50 flex flex-col items-center justify-center overflow-hidden">

      <MusicPlayer />
      <FloatingHearts />

      {/* Intro text */}
      <p className="text-sm text-rose-400 mb-4 tracking-wide z-10">
        Tap the button for a warm hug ♡
      </p>

      {/* Animation Area */}
      <div className="relative w-full min-h-[320px] sm:min-h-[380px] flex items-center justify-center">


        {/* LEFT CHARACTER */}
        {!showHug && (
          <img
            src={leftImg}
            alt="Boy"
            className={`
              absolute left-0 w-44 sm:w-52
              transition-transform duration-[2200ms] ease-in-out
              ${startHug ? "translate-x-[38vw]" : "-translate-x-full"}
            `}
          />
        )}

        {/* RIGHT CHARACTER */}
        {!showHug && (
          <img
            src={rightImg}
            alt="Girl"
            className={`
              absolute right-0 w-44 sm:w-52
              transition-transform duration-[2200ms] ease-in-out
              ${startHug ? "-translate-x-[38vw]" : "translate-x-full"}
            `}
          />
        )}

        {/* HUG IMAGE */}
        {showHug && (
          <img
            src={hugImg}
            alt="Hug"
            className="w-52 sm:w-60 scale-110 animate-[fadeIn_0.4s_ease-in-out]"
          />
        )}
      </div>

      {/* HUG BUTTON */}
      {!startHug && (
        <button
          onClick={handleHug}
          className="
            mt-6 px-8 py-3
            bg-rose-600 text-white
            rounded-full
            text-lg font-medium
            shadow-md
            hover:bg-rose-400
            transition
            animate-pulse
            focus:outline-none
            cursor-pointer
          "
        >
          Hug Me 🤍
        </button>
      )}

      {/* Sparkles */}
      {showHug && (
        <div className="flex gap-2 mb-6 mt-4">
          <span className="animate-pulse text-yellow-300">✨</span>
          <span className="animate-pulse text-pink-300 delay-150">✨</span>
          <span className="animate-pulse text-yellow-300 delay-300">✨</span>
        </div>
      )}

      {/* Birthday Message */}
      <div
        className={`
          text-center max-w-xl px-6
          transition-all duration-1000
          ${showHug ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-semibold text-rose-500 mb-4">
          Happy Birthday, My Cutie 🎂💗
        </h1>

        <p className="text-lg text-stone-500 leading-relaxed space-y-4">
          <span className="block">
            I know I didn’t give you a birthday gift that day, and I really wish I had something special to give you 🎁 
            But being there with you was my little way of saying how much you truly mean to me 🤍
          </span>

          <span className="block">
            Even without a wrapped present, my heart was so full because I got to see you smile, hear your laugh, hold your hand and spend those precious moments with you 🫶 
            Those memories with you are more valuable to me than any gift ever could be 🥹💖
          </span>

          <span className="block"> So I made this tiny corner of love just for you… to remind you of me, of us, and of how deeply I Love You ✨ 
            Because sometimes the cutest gifts aren’t found in boxes..they live in the heart 💕 </span>

          <span className="block font-medium text-rose-400">
            Choosing You Forever 💫<br />
            Love you Till The Eternity ♾️💖
          </span>
        </p>
      </div>

    </div>
  )
}
