import React from "react";
import cl from './Navbar.module.css'


function Navbar() {
    return (
        <div className={cl.navbar}>
        <ul className={cl.navlist}>
            <li className={cl.item}><a className={cl.link} href="#about-section">About</a></li>
            <li className={cl.item}><a className={cl.link} href="#projects">Work</a></li>
            <li className={cl.item}><a className={cl.link} href="#contact-section">Contact</a></li>
            
        </ul>
        </div>
    )
}

export default Navbar;


