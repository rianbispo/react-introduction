import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./styles.css";

const sum = (a, b) => {
    alert(a + b);
}

const App = () => {

    return (
        <div>
            <Button onClick={() => sum(10, 10)} name="Rian Bispo"/>
            <ComponentA>
                <ComponentB>
                    <br/><Button onClick={() => sum(1,2)} name="Fernanda Souza"/>
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
