import React, { useState } from "react"

import AcrossTheDistance from "../components/games/AcrossTheDistance"
import ProtectOurLove from "../components/games/ProtectOurLove"
import SyncTheHearts from "../components/games/SyncTheHearts"
import FloatingHearts from "../components/common/FloatingHearts"

export default function Games() {
  const [activeGame, setActiveGame] = useState(null)

  return (
    <div className="min-h-screen bg-rose-50 px-6 py-12 flex items-center justify-center text-center">
      <FloatingHearts />

      {/* BACK BUTTON */}
      {activeGame && (
        <button
          onClick={() => setActiveGame(null)}
          className="
            absolute top-24 left-6
            px-4 py-2
            bg-white/80 backdrop-blur
            rounded-full
            shadow
            text-stone-500
            hover:bg-rose-100
            transition
          "
        >
          ← Back to chapters
        </button>
      )}

      <div className="w-full max-w-5xl">

        {/* GAME VIEW */}
        {activeGame === "distance" && <AcrossTheDistance />}
        {activeGame === "heart" && <ProtectOurLove />}
        {activeGame === "sync" && <SyncTheHearts />}

        {/* MENU */}
        {!activeGame && (
          <>
            <h1 className="text-4xl sm:text-5xl font-semibold text-rose-500 mb-3">
              Three Little Journeys 🤍
            </h1>

            <p className="text-stone-500 mb-14">
              Each one leads back to us
            </p>

            <div className="grid gap-10 sm:grid-cols-3">

              {/* GAME 1 */}
              <div
                onClick={() => setActiveGame("distance")}
                className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer hover:scale-105 transition"
              >
                <div className="text-5xl mb-4">🌍</div>
                <h2 className="text-2xl font-semibold text-rose-500 mb-3">
                  Across the Distance
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                  No matter how confusing the path is,
                  <br />
                  we always find each other
                </p>
              </div>

              {/* GAME 2 */}
              <div
                onClick={() => setActiveGame("heart")}
                className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer hover:scale-105 transition"
              >
                <div className="text-5xl mb-4">🛡️</div>
                <h2 className="text-2xl font-semibold text-rose-500 mb-3">
                  Protect Our Love
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                  No matter what comes our way,
                  <br />
                  We will always protect each other
                </p>
              </div>

              {/* GAME 3 */}
              <div
                onClick={() => setActiveGame("sync")}
                className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer hover:scale-105 transition"
              >
                <div className="text-5xl mb-4">💓</div>
                <h2 className="text-2xl font-semibold text-rose-500 mb-3">
                  Sync Our Hearts
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Even when timing isn’t perfect,
                  <br />
                  we always find our rhythm
                </p>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  )
}
