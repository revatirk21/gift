import { useEffect, useState } from "react"
import boy from "../../assets/images/chibi/boy.png"
import girl from "../../assets/images/chibi/girl.png"
import hug from "../../assets/images/chibi/hug.png"
import React from "react"

/* HARDER 12x12 MAZE */
const maze = [
  [0,1,0,0,1,0,0,0,1,0,0,0],
  [0,1,0,1,1,0,1,0,1,0,1,0],
  [0,0,0,0,0,0,1,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,0,1,0],
  [0,0,0,1,0,0,0,0,1,0,0,0],
  [0,1,0,1,1,1,1,0,1,1,1,0],
  [0,1,0,1,0,0,1,0,0,0,0,0],
  [0,1,1,1,1,0,1,1,1,1,1,0],
  [0,0,0,0,1,0,0,0,0,0,1,0],
  [1,1,1,0,1,1,1,1,1,0,1,0],
  [0,0,0,1,0,0,0,0,1,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,1,2],
]

export default function AcrossTheDistance() {
  const [pos, setPos] = useState({ r: 0, c: 0 })
  const [hugged, setHugged] = useState(false)

  const move = (dr, dc) => {
    if (hugged) return

    const nr = pos.r + dr
    const nc = pos.c + dc

    if (
      nr < 0 ||
      nc < 0 ||
      nr >= maze.length ||
      nc >= maze[0].length ||
      maze[nr][nc] === 1
    ) return

    if (maze[nr][nc] === 2) {
      setHugged(true)
    }

    setPos({ r: nr, c: nc })
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") move(-1, 0)
      if (e.key === "ArrowDown") move(1, 0)
      if (e.key === "ArrowLeft") move(0, -1)
      if (e.key === "ArrowRight") move(0, 1)
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  })

  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-2xl font-semibold text-rose-500 mb-4 text-center">
        No matter how complicated the path is…  
        <br />I know you will always find me 🤍
      </h2>

      {/* MAZE */}
      <div
        className="grid gap-1 bg-rose-200 p-3 rounded-xl shadow-lg"
        style={{
          gridTemplateColumns: `repeat(${maze[0].length}, 36px)`,
        }}
      >
        {maze.map((row, r) =>
          row.map((cell, c) => {
            const isBoy = pos.r === r && pos.c === c
            const isGirl = cell === 2

            return (
              <div
                key={`${r}-${c}`}
                className={`w-9 h-9 flex items-center justify-center rounded
                  ${cell === 1 ? "bg-rose-400" : "bg-white"}
                `}
              >
                {/* BOY disappears after hug */}
                {!hugged && isBoy && (
                  <img src={boy} className="w-7" />
                )}

                {/* GIRL disappears when hug starts */}
                {!hugged && isGirl && (
                  <img src={girl} className="w-7" />
                )}

                {/* HUG stays */}
                {hugged && isGirl && (
                  <img
                    src={hug}
                    className="w-8 animate-scaleIn"
                  />
                )}
              </div>
            )
          })
        )}
      </div>

      {/* FINAL MESSAGE */}
      {hugged && (
        <p className="mt-4 text-base text-stone-500 animate-fadeIn text-center">
          Every path felt long… 
          <br />
          Until you reached me 💗
        </p>
      )}

      {!hugged && (
        <p className="mt-2 text-xs text-stone-400">
          Use arrow keys to move
        </p>
      )}
    </div>
  )
}
