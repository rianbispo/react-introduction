import React, { Children } from "react";

function ComponentA(props) {
    return (
        <div>
            Compenent A
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentA;