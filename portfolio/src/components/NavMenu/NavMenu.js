import React from "react";
import { NavLink } from "react-router-dom";
import './navMenu.css'

const NavMenu = () => {
    return (
        <div className="navMenu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default NavMenu;