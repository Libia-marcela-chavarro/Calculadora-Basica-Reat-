import React from "react";
import './PanelBotones.css';

function PanelBotones(props) {
    return (
        <div className="panel-botones">
            {props.children}
        </div>
    );
}

export { PanelBotones };