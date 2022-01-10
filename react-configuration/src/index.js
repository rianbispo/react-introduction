import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function firstJSX() {
    return (
        <div className="textColor">
            Rian Bispo
        </div>
    )
}

const App = () =>{

    return  (
        <div className="App">
            {firstJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);