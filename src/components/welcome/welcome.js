import React from "react";
import "./welcome.css";

function Welcome() {
    return (
        <div className="welcome">
            <div className="wel-kum">
                <p>WEL</p>
                <p>
                    KUM<span className="accent-punct">.</span>
                </p>
            </div>
            <div className="text-box">
                <p>
                    You've stumbled upon the website of a simple human just
                    biding his time in this world until he can transfer his
                    consciousness into a machine and spend the rest of eternity
                    consuming books and binging YouTube.
                </p>
            </div>
            <div>
                <i className="fas fa-chevron-circle-down fa-3x scroll-arrow"></i>
            </div>
        </div>
    );
}

export default Welcome;
