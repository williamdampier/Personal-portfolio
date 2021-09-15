import React from "react";
import cl from './Navbar.module.css'


function Navbar() {
    return (
        <div className={cl.navbar}>
        <nav className={cl.navlist}>
           <a className={cl.link} href="#welcome-section">About</a>
           <a className={cl.link} href="#projects">Work</a>
           <a className={cl.link} target="_blank" href="https://github.com/williamdampier">GitHub</a>
           <a className={cl.link} href="mailto:vladimir.kuban88@gmail.com">Contact</a>
            
        </nav>
        </div>
    )
}

export default Navbar;


