
import React from "react";

function Header() {
    return (
    <div>
        <section id="welcome-section">
        <h1>Hi, I'm Vladi Kuban</h1>
        <h2><em>a web developer</em></h2>
        <h2>I want to add a <strong>value</strong> to your Business and turn ideas into a functional and delightful experience!</h2>
        <div></div>
        </section>

        <section id="skills-section">
            <h1>Experience</h1>
            <h2>I never stop learning something new and practice! Here are technologies that I've been working in recently:</h2>
            <div class="icon-bar">
                <img  src={"/icons/html.png"} alt="html-icon"></img>
                <img  src={"/icons/css.png"} alt="css-icon"></img>
                <img  src={"/icons/javascript.png"} alt="javascript-icon"></img>
                <img  src={"/icons/react.png"} alt="react-icon"></img>
                <img  src={"/icons/node.png"} alt="node-icon"></img>
                <img  src={"/icons/mongodb.png"} alt="mongodb-icon"></img>
            </div>
        </section>

    </div>
    )
}

export default Header;