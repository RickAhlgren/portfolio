import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="info">
                <p className="name">ERIK</p>
                <p className="name">AHLGREN</p>
                <p className="title">full stack web dev</p>
            </div>
            <div className="mail">
                <a
                    href="mailto:erik.allan.ahlgren@gmail.com?subject=I'm%20in%20your%20DMs!&body=Hey%20Erik!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-inbox fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;
