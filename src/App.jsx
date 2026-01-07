import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, { useState } from "react"

import Navbar from "./components/common/Navbar"

import Home from "./pages/Home"
import Letter from "./pages/Letter"
import Memories from "./pages/Memories"
import Games from "./pages/Games"
import Balloons from "./pages/Balloons"
import MainGift from "./pages/MainGift"
import ScratchReveal from "./pages/ScratchReveal"

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <BrowserRouter>
      <div className="bg-rose-100 min-h-screen">

        {/* Navbar only after scratch */}
        {unlocked && <Navbar />}

        <Routes>
          {/* ENTRY PAGE */}
          <Route
            path="/"
            element={
              unlocked ? (
                <Home />
              ) : (
                <ScratchReveal onReveal={() => setUnlocked(true)} />
              )
            }
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/letter"
            element={unlocked ? <Letter /> : <Navigate to="/" />}
          />
          <Route
            path="/memories"
            element={unlocked ? <Memories /> : <Navigate to="/" />}
          />
          <Route
            path="/balloons"
            element={unlocked ? <Balloons /> : <Navigate to="/" />}
          />
          <Route
            path="/games"
            element={unlocked ? <Games /> : <Navigate to="/" />}
          />
          <Route
            path="/maingift"
            element={unlocked ? <MainGift /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
