import React from "react";
import Header from "./components/header/header.js";
import Welcome from "./components/welcome/welcome.js";
import Explore from "./components/explore/explore.js";
// import Timeline from "./components/timeline/timeline.js";
// import Portfolio from "./components/portfolio/potfolio.js";
// import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="split left"></div>
            <div className="split right"></div>
            <Header />
            <Welcome />
            <Explore />
            <Footer />
        </div>
    );
}

export default App;
