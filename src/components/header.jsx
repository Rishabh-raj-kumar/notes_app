import React from "react"
import {Link} from "react-router-dom"

export default function Header(){

    return (
        <header className="flex items-center justify-between px-4 relative">
        <h1 className="text-xl uppercase font-medium tracking-wide text-gray-900">
        NOTES_APP</h1>

        <div className="md:block flex  sm:mt-0 gap-2" id="nav">
           <button className="w-24 p-1 mx-2 rounded bg-purple-600 shadow-xl shadow-purple-800
           hover:bg-purple-500 hover:text-white hover:shadow-none">
            <Link to="/">HOME</Link>
           </button>
           <button className="w-24 p-1 mx-2 rounded bg-green-600 shadow-xl shadow-green-800
            hover:bg-green-500 hover:text-white hover:shadow-none">
            <Link to="/notes">CREATE</Link>
           </button>
           <button className="w-24 p-1 mx-2 rounded bg-blue-600 shadow-xl shadow-blue-800
           hover:bg-blue-500 hover:text-white hover:shadow-none">
            <Link to="/about">ABOUT</Link>
           </button>
        </div>
        <button className="btn"
           onClick={() => {
               let nav = document.getElementById('nav');
               nav.classList.contains('active') ?
               nav.classList.remove('active') :
               nav.classList.add('active');
           }}><i class="fa-solid fa-bars"></i></button>
        </header>
    )
}