import { useEffect, useState } from "react"
import boy from "../../assets/images/chibi/boy.png"
import girl from "../../assets/images/chibi/girl.png"
import hug from "../../assets/images/chibi/hug.png"
import React from "react"

export default function SyncTheHearts() {
  const [boyBeat, setBoyBeat] = useState(0)
  const [girlBeat, setGirlBeat] = useState(60)

  const [sync, setSync] = useState(0)
  const [completed, setCompleted] = useState(false)

  const [drift, setDrift] = useState(0)        // 🌍 distance drift
  const [trueZone, setTrueZone] = useState(false) // 😈 false sync logic

  /* HEART RHYTHM */
  useEffect(() => {
    if (completed) return

    const i = setInterval(() => {
      setBoyBeat((b) => (b + 3) % 100)
      setGirlBeat((g) => (g + 2 + drift) % 100)

      // randomly allow true sync zone
      setTrueZone(Math.random() > 0.6)
    }, 60)

    return () => clearInterval(i)
  }, [completed, drift])

  /* TRY SYNC */
  const trySync = () => {
    if (completed) return

    const diff = Math.abs(boyBeat - girlBeat)

    // real sync
    if (diff < 8 && trueZone) {
      setSync((s) => Math.min(s + 20, 100))
      setDrift((d) => Math.max(0, d - 1))
    } else {
      // missed / false sync → drift increases
      setDrift((d) => Math.min(d + 1, 6))
    }

    if (sync >= 80) {
      setCompleted(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 px-6">

      <h2 className="text-4xl font-semibold text-rose-500 mb-6 text-center">
        Sync Our Hearts 💓
      </h2>

      {!completed && (
        <>
          {/* TRACK */}
          <div
            onClick={trySync}
            className="relative w-80 h-6 bg-white rounded-full shadow cursor-pointer mb-10"
          >
            {/* BOY HEART */}
            <span
              className="absolute top-1/2 -translate-y-1/2 text-2xl transition-all"
              style={{ left: `${boyBeat}%` }}
            >
              💗
            </span>

            {/* GIRL HEART */}
            <span
              className={`absolute top-1/2 -translate-y-1/2 text-2xl transition-all ${
                trueZone ? "text-rose-500" : "text-stone-400"
              }`}
              style={{ left: `${girlBeat}%` }}
            >
              💖
            </span>
          </div>

          {/* SYNC BAR */}
          <div className="w-64 h-3 bg-rose-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-400 transition-all"
              style={{ width: `${sync}%` }}
            />
          </div>

          {/* HELPER TEXT */}
          <p className="mt-4 text-stone-500 text-center">
            Not every moment aligns…  
            <br />
            Wait for the one that feels right 🤍
          </p>

          {/* CHARACTERS */}
          <div className="flex justify-between w-80 mt-10">
            <img src={boy} className="w-16" />
            <img src={girl} className="w-16" />
          </div>
        </>
      )}

      {/* FINAL HUG */}
      {completed && (
        <div className="flex flex-col items-center animate-fadeIn">
          <img src={hug} className="w-44 mb-6 animate-scaleIn" />
          <p className="text-xl text-rose-500 text-center leading-relaxed">
            We don’t need perfect timing…  
            <br />
            Just the willingness to try 🤍
          </p>
        </div>
      )}
    </div>
  )
}
