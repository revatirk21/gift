import { useEffect, useRef, useState } from "react"
import boy from "../../assets/images/chibi/boy.png"
import girl from "../../assets/images/chibi/girl.png"
import hug from "../../assets/images/chibi/hug.png"
import React from "react"

const ENEMIES = ["💔", "☁️"]
const WIN_SCORE = 15
const BOSS_HP = 15

export default function ProtectOurLove() {
  const [enemies, setEnemies] = useState([])
  const [bullets, setBullets] = useState([])
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)

  const [bossActive, setBossActive] = useState(false)
  const [bossHP, setBossHP] = useState(BOSS_HP)
  const [bossY, setBossY] = useState(180)

  const [won, setWon] = useState(false)
  const [showHug, setShowHug] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const gameRef = useRef(null)

  /* RESET GAME */
  const resetGame = () => {
    setEnemies([])
    setBullets([])
    setScore(0)
    setLives(3)
    setBossActive(false)
    setBossHP(BOSS_HP)
    setWon(false)
    setShowHug(false)
    setGameOver(false)
  }

  /* SPAWN NORMAL ENEMIES */
  useEffect(() => {
    if (bossActive || won || gameOver || showHug) return

    const spawn = setInterval(() => {
      setEnemies((e) => [
        ...e,
        {
          id: Date.now() + Math.random(),
          x: 760,
          y: Math.random() * 260 + 50,
          speed: Math.random() * 2 + 2,
          icon: ENEMIES[Math.floor(Math.random() * ENEMIES.length)],
        },
      ])
    }, 900)

    return () => clearInterval(spawn)
  }, [bossActive, won, gameOver, showHug])

  /* MOVE NORMAL ENEMIES */
  useEffect(() => {
    if (bossActive || won || gameOver || showHug) return

    const move = setInterval(() => {
      setEnemies((e) =>
        e
          .map((en) => ({ ...en, x: en.x - en.speed }))
          .filter((en) => {
            if (en.x < 140) {
              setLives((l) => Math.max(0, l - 1))
              return false
            }
            return true
          })
      )
    }, 40)

    return () => clearInterval(move)
  }, [bossActive, won, gameOver, showHug])

  /* ACTIVATE BOSS */
  useEffect(() => {
    if (score >= WIN_SCORE && !bossActive && !showHug) {
      setEnemies([])
      setBossActive(true)
    }
  }, [score, bossActive, showHug])

  /* BOSS MOVEMENT */
  useEffect(() => {
    if (!bossActive || won || gameOver || showHug) return

    const move = setInterval(() => {
      setBossY((y) =>
        Math.min(300, Math.max(40, y + (Math.random() > 0.5 ? 20 : -20)))
      )
    }, 600)

    return () => clearInterval(move)
  }, [bossActive, won, gameOver, showHug])

  /* BULLET MOVEMENT */
  useEffect(() => {
    if (showHug) return

    const moveBullets = setInterval(() => {
      setBullets((b) =>
        b
          .map((bl) => ({ ...bl, x: bl.x + 10 }))
          .filter((bl) => bl.x < 820)
      )
    }, 30)

    return () => clearInterval(moveBullets)
  }, [showHug])

  /* COLLISION */
  useEffect(() => {
    if (showHug) return

    if (bossActive) {
      setBullets((bs) =>
        bs.filter((bl) => {
          const hit =
            Math.abs(bl.x - 700) < 40 &&
            Math.abs(bl.y - bossY) < 40
          if (hit) setBossHP((hp) => hp - 1)
          return !hit
        })
      )
    }

    setEnemies((ens) =>
      ens.filter((en) => {
        const hit = bullets.some(
          (bl) =>
            Math.abs(en.x - bl.x) < 25 &&
            Math.abs(en.y - bl.y) < 25
        )
        if (hit) setScore((s) => s + 1)
        return !hit
      })
    )
  }, [bullets, bossActive, bossY, showHug])

  /* BOSS DEFEATED → CLEAN HUG */
  useEffect(() => {
    if (bossActive && bossHP <= 0) {
      setBossActive(false)
      setWon(true)

      // clear everything
      setEnemies([])
      setBullets([])

      setTimeout(() => setShowHug(true), 600)
    }
  }, [bossHP, bossActive])

  /* LOSE */
  useEffect(() => {
    if (lives <= 0) setGameOver(true)
  }, [lives])

  /* SHOOT */
  const shoot = (e) => {
    if (won || gameOver || showHug) return

    const rect = gameRef.current.getBoundingClientRect()
    const y = e.clientY - rect.top

    setBullets((b) => [
      ...b,
      { id: Date.now() + Math.random(), x: 120, y },
    ])
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="text-4xl font-semibold text-rose-500 mb-4 text-center">
        No matter what comes our way…  
        <br />I’ll fight it for you 💗
      </h2>

      <div className="flex gap-10 mb-4 text-base text-stone-600">
        <span>Score: {score}/{WIN_SCORE}</span>
        <span>{"❤️".repeat(Math.max(0, lives))}</span>
      </div>

      {/* GAME AREA */}
      <div
        ref={gameRef}
        onClick={shoot}
        className="relative w-[820px] h-[360px] bg-rose-100 rounded-3xl overflow-hidden shadow-xl cursor-crosshair"
      >
        {/* FINAL HUG */}
        {showHug && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 bg-rose-100 z-20">
            <img src={hug} className="w-40 animate-scaleIn" />
            <p className="text-xl text-rose-500 animate-fadeIn leading-relaxed">
              No matter what happens…  
              <br />
              I know you’ll always protect me 🤍
            </p>
          </div>
        )}

        {/* BOY */}
        {!showHug && (
          <img
            src={boy}
            className={`absolute top-1/2 -translate-y-1/2 w-16 transition-all duration-700 ${
              won ? "left-[45%]" : "left-4"
            }`}
          />
        )}

        {/* GIRL */}
        {!showHug && (
          <img
            src={girl}
            className={`absolute top-1/2 -translate-y-1/2 w-16 transition-all duration-700 ${
              won ? "right-[45%]" : "right-4"
            }`}
          />
        )}

        {/* DISTANCE LINE */}
        {!showHug && (
          <div className="absolute inset-y-1/2 left-24 right-24 border-t-2 border-dashed border-rose-300" />
        )}

        {/* ENEMIES */}
        {!showHug &&
          enemies.map((en) => (
            <span
              key={en.id}
              className="absolute text-3xl"
              style={{ left: en.x, top: en.y }}
            >
              {en.icon}
            </span>
          ))}

        {/* BOSS */}
        {!showHug && bossActive && (
          <>
            <span
              className="absolute text-5xl"
              style={{ left: 680, top: bossY }}
            >
              😈
            </span>

            <div className="absolute top-4 right-24 w-40 h-3 bg-rose-200 rounded-full">
              <div
                className="h-full bg-rose-500 rounded-full transition-all"
                style={{ width: `${(bossHP / BOSS_HP) * 100}%` }}
              />
            </div>
          </>
        )}

        {/* BULLETS */}
        {!showHug &&
          bullets.map((bl) => (
            <span
              key={bl.id}
              className="absolute text-2xl"
              style={{ left: bl.x, top: bl.y }}
            >
              💗
            </span>
          ))}

        {/* GAME OVER */}
        {gameOver && !showHug && (
          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center gap-4">
            <p className="text-xl text-stone-500">
              Distance won this time 💔
            </p>
            <button
              onClick={resetGame}
              className="px-6 py-2 bg-rose-400 text-white rounded-full"
            >
              Try Again 💗
            </button>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-stone-400">
        Click to shoot hearts →
      </p>
    </div>
  )
}
