import React, { useState } from "react"
import FloatingHearts from "../components/common/FloatingHearts.jsx"

const balloonData = [
  { id: 1, color: "bg-pink-300", promise: "I promise to always choose you 🤍" },
  { id: 2, color: "bg-rose-400", promise: "I promise to stand by you in every phase 🫶" },
  { id: 3, color: "bg-yellow-300", promise: "I promise to be your safe place 🏡" },
  { id: 4, color: "bg-fuchsia-400", promise: "I promise to communicate, not give up ✨" },
  { id: 5, color: "bg-rose-300", promise: "I promise to celebrate your wins 🧸" },
  { id: 6, color: "bg-yellow-400", promise: "I promise to support your dreams 💕" },
  { id: 7, color: "bg-pink-500", promise: "I promise to love you on hard days 🌙" },
  { id: 8, color: "bg-rose-500", promise: "I promise this love is forever 💍" },
]

export default function Balloons() {
  const [revealed, setRevealed] = useState([])

  const revealPromise = (id) => {
    if (revealed.includes(id)) return
    setRevealed((prev) => [...prev, id])
  }

  const allRevealed = revealed.length === balloonData.length

  const resetBalloons = () => {
  setRevealed([])
}


  return (
    <div className="
      relative min-h-screen overflow-hidden px-6 py-12
      bg-gradient-to-b from-rose-50 via-pink-50 to-white
    ">
      <FloatingHearts />

      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl font-semibold text-rose-500 text-center mb-2">
        Pop a Promise 🎈
      </h1>
      <p className="text-center text-stone-400 mb-12">
        pop a balloon to reveal a promise ♡
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-24 gap-x-10 place-items-center">
        {balloonData.map((item, index) => {
          const isRevealed = revealed.includes(item.id)

          return (
            <div
              key={item.id}
              className="relative w-28 h-36 flex items-center justify-center"
            >
              {/* BALLOON */}
              {!isRevealed && (
                <div
                  onClick={() => revealPromise(item.id)}
                  className="cursor-pointer relative group"
                >
                  <div
                    className={`
                      ${item.color}
                      w-24 h-32 rounded-full
                      shadow-xl
                      animate-float
                      transition-transform
                      group-hover:scale-110
                      group-active:scale-75 group-active:opacity-0
                    `}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {/* Shine */}
                    <span className="absolute top-3 left-4 w-4 h-4 bg-white/40 rounded-full" />

                    {/* Knot */}
                    <span className="
                      absolute -bottom-2 left-1/2 -translate-x-1/2
                      w-3 h-3 bg-inherit rotate-45
                    " />
                  </div>

                  {/* String */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 w-px h-12 bg-stone-300" />
                </div>
              )}

              {/* PROMISE CARD */}
              {isRevealed && (
                <div className="
                  w-28 h-28
                  bg-white
                  border border-rose-200
                  rounded-xl
                  shadow-lg
                  flex items-center justify-center
                  text-center
                  px-3
                  text-sm font-medium text-stone-600
                  animate-cardReveal
                ">
                  {item.promise}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* RESET BUTTON */}
{allRevealed && (
  <div className="mt-6 flex justify-center animate-fadeIn">
    <button
      onClick={resetBalloons}
      className="
        text-xs
        px-4 py-2
        rounded-full
        border border-rose-300
        text-rose-400
        bg-white/70
        hover:bg-rose-50
        hover:text-rose-500
        transition
        shadow-sm
      "
    >
      Reset balloons ♡
    </button>
  </div>
)}


      {/* FINAL PROMISE */}
      {allRevealed && (
        <div className="mt-16 text-center animate-fadeIn">
          <p className="text-2xl text-rose-500 font-semibold">
            And my biggest promise…
          </p>
          <p className="mt-3 text-lg text-stone-500">
            No matter what life brings, I choose you. Always. ♾️💍
          </p>
        </div>
      )}
    </div>
  )
}
