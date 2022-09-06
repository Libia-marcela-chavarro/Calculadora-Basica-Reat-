import React from "react";
import './PanelPrincipal.css';

function PanelPrincipal(props) {
    return(
        <div className="ContornoCalculadora">
           {props.children}
        </div>
    )
}

export { PanelPrincipal };