import React from "react"; 
import ReactDOM from "react-dom/client";

import Header from "./src/Header"
import Body from "./src/Body"
import ResturantCard from "./src/ResturantCard"

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)