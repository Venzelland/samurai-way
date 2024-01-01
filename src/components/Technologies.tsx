import React from "react";

type TechnologiesType = {
    titleForBody: string
}

export function Technologies(props:TechnologiesType) {
    return (
        <div className="App">
            {props.titleForBody}
            <ul>
                <li>css</li>
                <li>html</li>
                <li>JS</li>
                <li>react</li>
            </ul>
        </div>
    )
}





