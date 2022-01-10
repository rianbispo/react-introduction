import React from "react";

function ComponentB(props) {
    return (
        <div>
            Compenent B
            {props.children}
        </div>
    )
}

export default ComponentB;