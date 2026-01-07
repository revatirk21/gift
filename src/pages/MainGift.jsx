import React, { useState } from "react"
import FloatingHearts from "../components/common//FloatingHearts.jsx"

const questions = [
  { q: "💌 In which month did I first realise my feelings for you?", a: "october" },
  { q: "💌 What is my favourite nickname that you call me?", a: "kuchupuchu" },
  { q: "💌 What was the very first gift I gave you?", a: "jersey" },
  { q: "💌 What was the first street food we ate together?", a: "pani puri" },
  { q: "💌 What is the motto of our relationship?", a: "till the eternity" },
]

export default function MainGift() {
  const [step, setStep] = useState(0)
  const [input, setInput] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [opened, setOpened] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = () => {
    if (input.trim().toLowerCase() === questions[step].a) {
      setInput("")
      if (step + 1 === questions.length) {
        setUnlocked(true)
      } else {
        setStep(step + 1)
      }
    } else {
      alert("Think again 💭")
    }
  }

  const openGift = () => {
    setOpened(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1500)
  }

  return (
    <div className="relative min-h-screen bg-rose-50 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <FloatingHearts />

      {/* 🎉 CONFETTI */}
      {showConfetti &&
        [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti bg-rose-400 z-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: "0px",
            }}
          />
        ))}

      <h1 className="text-4xl sm:text-5xl font-semibold text-rose-500 mb-8">
        Your Surprise 🎁
      </h1>

      {/* 🔒 LOCKED QUIZ */}
      {!unlocked && (
        <>
          <div className="text-5xl mb-4 animate-pulse">🔒</div>

          <p className="text-lg text-stone-500 mb-4">
            Answer to unlock your gift 💗
          </p>

          <p className="text-stone-600 mb-3">
            {questions[step].q}
          </p>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="your answer..."
            className="
              px-4 py-2 rounded-full
              border border-rose-200
              focus:outline-none focus:ring-2 focus:ring-rose-300
              text-center
            "
          />

          <button
            onClick={handleSubmit}
            className="
              mt-4 px-6 py-2
              bg-rose-400 text-white rounded-full
              hover:bg-rose-500 transition
            "
          >
            Check 💗
          </button>

          <p className="mt-4 text-sm text-stone-400">
            {step + 1} / {questions.length}
          </p>
        </>
      )}

      {/* 🎁 UNLOCKED GIFT */}
      {unlocked && !opened && (
        <>
          <p className="text-lg text-stone-500 mb-6">
            It’s unlocked 💝
            <br />tap the gift 🎀
          </p>

          <button
            onClick={openGift}
            className="text-9xl animate-bounce hover:scale-110 transition"
          >
            🎁
          </button>
        </>
      )}

      {/* 🎥 OPENED GIFT */}
      {opened && (
        <>
          <div className="text-8xl mb-4">🎀</div>

          <p className="text-lg text-stone-500 mb-6">
            Just for you 🤍
          </p>

          <video
            controls
            autoPlay
            onPlay={() => window.pauseMusic?.()}
            className="rounded-xl shadow-lg w-full max-w-md"
          >
            <source
              src="/src/assets/video/gift.mp4"
              type="video/mp4"
            />
          </video>
        </>
      )}
    </div>
  )
}
