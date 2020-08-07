import React from "react";
import "./footer.css";
import DiscoBall from "../../images/disco-ball.png"

function Footer() {
    return (
        <span className="footer">
            <p>Powered by Disco</p>
            <img className="ball" src={DiscoBall} alt="Miniature disco ball" />
        </span>
    );
}

export default Footer;
