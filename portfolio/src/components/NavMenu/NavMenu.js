import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import './navMenu.css'

const NavMenu = () => {
    const [showNav, setShowNav] = useState(false);
    //console.log(showNav);
    return (
        <div className="navMenu">
            <div 
                className="mobileMenuIcon" 
                onClick={() => setShowNav(!showNav)} 
                role="button" 
                onKeyDown={() => setShowNav(!showNav)} 
                tabIndex={0}
            >
                <MdMenu />
            </div>
            <ul className={!showNav ? 'navItems hide-navItems' : 'navItems'}>
                <div 
                    className="closeNavIcon"
                    onClick={() => setShowNav(!showNav)} 
                    role="button" 
                    onKeyDown={() => setShowNav(!showNav)} 
                    tabIndex={0}
                >
                    <MdClose/>
                </div>
                <li>
                    <NavLink 
                        to="/"
                        onClick={() => setShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => setShowNav(!showNav)} 
                        tabIndex={0}  
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        onClick={() => setShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => setShowNav(!showNav)} 
                        tabIndex={0}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/projects" 
                        onClick={() => setShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => setShowNav(!showNav)} 
                        tabIndex={0}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        onClick={() => setShowNav(!showNav)} 
                        role="button" 
                        onKeyDown={() => setShowNav(!showNav)} 
                        tabIndex={0}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default NavMenu;