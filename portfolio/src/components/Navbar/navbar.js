import React from "react";
import './navbar.css';
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">DM<span>.</span></h1>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <FiMessageSquare className="messageBtn"/>
                <span>Contact Me</span>
            </button>
        </nav>
    )
}

export default Navbar;