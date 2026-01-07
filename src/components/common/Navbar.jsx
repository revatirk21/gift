import { NavLink } from "react-router-dom"
import React from "react"

export default function Navbar() {
    const baseLink =
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"

    const getLinkStyle = (isActive) =>
        `${baseLink} ${isActive
            ? "bg-rose-500 text-white shadow-md scale-105"
            : "text-rose-600 hover:bg-rose-200 hover:text-rose-800 hover:scale-105"
        }`

    return (
        <nav className="
            flex justify-between items-center
            px-6 py-3
            bg-rose-100
            backdrop-blur-md
            rounded-full
            shadow-md
        ">
            {/* Left title */}
            <div className="flex items-center gap-2 text-rose-700 font-semibold text-lg">
                💖 <span className="hidden sm:block">NeeReva's World</span>
            </div>

            {/* Right links */}
            <div className="flex gap-1 sm:gap-2 flex-wrap">
                <NavLink to="/" className={({ isActive }) => getLinkStyle(isActive)}>
                   🤗 Just for You
                </NavLink>

                <NavLink to="/letter" className={({ isActive }) => getLinkStyle(isActive)}>
                    💌 From My Heart
                </NavLink>

                <NavLink to="/memories" className={({ isActive }) => getLinkStyle(isActive)}>
                    🌍 Our Cute World
                </NavLink>

                <NavLink to="/games" className={({ isActive }) => getLinkStyle(isActive)}>
                    🎮 Love Quest
                </NavLink>

                <NavLink to="/balloons" className={({ isActive }) => getLinkStyle(isActive)}>
                    🎈 Pop a Promise 
                </NavLink>

                <NavLink to="/maingift" className={({ isActive }) => getLinkStyle(isActive)}>
                    🎁 Wrapped with Love
                </NavLink>
            </div>
        </nav>
    )
}
