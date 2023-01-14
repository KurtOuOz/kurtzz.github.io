import React from "react";
import ChaCards from "./component/ChaCards";
import HeadlineCards from "./component/HeadlineCards";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
    return (
        <div >
            <Navbar/>
            <Hero></Hero>
            <HeadlineCards/>
            <ChaCards/>
        </div>
    );
}

export default App;
