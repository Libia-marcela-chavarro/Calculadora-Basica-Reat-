import React from "react";
import './Visor.css';

function Visor({visor}) {
    return (
        <div className="panel-visor">
            <div className="input-group input-group-lg">
                <input value={visor} type="text" id="VisorCalculadora" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" readOnly />
            </div>
        </div>
    );
}

export { Visor };