import React from 'react';

function Nav() {

    return (
        <header>
            <h1>
                <a href="/">Jaime Cedillo</a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <li><a href="./resume.html">Resume</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;