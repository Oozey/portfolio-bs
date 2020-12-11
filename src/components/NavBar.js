import React from "react"
import { NavLink } from "react-router-dom"


export default function Navbar() {
    return(
        <header className="bg-black pt-40 w-full">
            <div className="flex items-center justify-center">
                <nav className="flex">
                    <NavLink to="/" activeClassName="text-red" className="text-center items-center py-6 px-3 mr-4 text-white text-1xl font-bold tracking-widest">
                        HOME
                    </NavLink>
                    <NavLink to="/projects" activeClassName="text-red" className="inflex-flex items-center py-6 px-3 mr-4 text-white text-1xl font-bold tracking-widest">
                        PROJECTS
                    </NavLink>
                    <NavLink to="/art" activeClassName="text-red" className="inflex-flex items-center py-6 px-3 mr-4 text-white text-1l font-bold tracking-widest">
                        ART
                    </NavLink>
                    <NavLink to="/photography" activeClassName="text-red" className="inflex-flex items-center py-6 px-3 mr-4 text-white text-1xl font-bold tracking-widest">
                        PHOTOGRAPHY
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-red" className="inflex-flex items-center py-6 px-3 mr-4 text-white text-1xl font-bold tracking-widest">
                        ABOUT
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}