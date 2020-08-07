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
                <i className="fas fa-inbox fa-2x"></i>
            </div>
        </div>
    );
}

export default Header;
