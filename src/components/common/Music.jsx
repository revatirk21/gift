import { useRef } from "react"
import React from "react"

export default function Music() {
  const audioRef = useRef(null)

  const toggleMusic = () => {
    const audio = audioRef.current
    audio.paused ? audio.play() : audio.pause()
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/src/assets/music/birthday.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6
          w-14 h-14 rounded-full
          bg-rose-400 text-white
          shadow-lg
          hover:scale-110 transition
        "
      >
        🎵
      </button>
    </>
  )
}
