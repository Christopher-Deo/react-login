import React from "react";

export const Navigation = () => {
    return (
        <nav className="nav">
            <a href="/" className="home">
            <img className="home" alt='Home icon' src="./home icon.jpeg"/>
            </a>
            <ul>
                <li>
                    <a href="/Pricing">
                        <img className="pricing" alt="pricing icon" src="./pricing.png"/>
                    </a>
                </li>
                <li>
                    <a href="/About">
                        <img className="info" alt="information icon" src="./info icon.png"/>
                    </a>
                </li>
           </ul>
        </nav>
    );
}