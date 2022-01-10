import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const element = 'React Render';
const element2 = <h1>Happy Codding</h1>;

const App = () => {
    return (
        <div>
            {element}
            {element2}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
