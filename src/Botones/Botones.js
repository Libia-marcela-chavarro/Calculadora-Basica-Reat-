import React from "react";
import './Botones.css';



function Botones({ponerNumero , setVisor, ponerOperacion, calcularOperacion, invertirSigno,ponerPuntoDecimal}) {
    return (
        <React.Fragment>
            <div>
                <button onClick={() => {setVisor("0")}} type="button" className="btn btn-outline-primary">C</button>
            </div>
            <div>
                <button onClick={() => {invertirSigno()}} type="button" className="btn btn-outline-primary">±</button>
            </div>
            <div>
                <button onClick={() => {ponerOperacion('/')}} type="button" className="btn btn-outline-primary">÷</button>
            </div>
            <div>
                <button onClick={() => {ponerOperacion('*')}} type="button" className="btn btn-outline-primary">x</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('7')}} type="button" className="btn btn-outline-primary">7</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('8')}} type="button" className="btn btn-outline-primary">8</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('9')}} type="button" className="btn btn-outline-primary">9</button>
            </div>
            <div>
                <button onClick={() => {ponerOperacion('-')}} type="button" className="btn btn-outline-primary">-</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('4')}} type="button" className="btn btn-outline-primary">4</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('5')}} type="button" className="btn btn-outline-primary">5</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('6')}} type="button" className="btn btn-outline-primary">6</button>
            </div>
            <div>
                <button onClick={() => {ponerOperacion('+')}} type="button" className="btn btn-outline-primary">+</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('1')}} type="button" className="btn btn-outline-primary">1</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('2')}} type="button" className="btn btn-outline-primary">2</button>
            </div>
            <div>
                <button onClick={() => {ponerNumero('3')}} type="button" className="btn btn-outline-primary">3</button>
            </div>
            <div className="igual">
                <button onClick={() => {calcularOperacion()}} type="button" className="btn btn-outline-primary">=</button>
            </div>
            <div className="cero">
                <button onClick={() => {ponerNumero('0')}} type="button" className="btn btn-outline-primary">0</button>
            </div>
            <div className="boton" >
                <button onClick={() => {ponerPuntoDecimal()}} type="button" className="btn btn-outline-primary">.</button>
            </div>
        </React.Fragment>
    )
}

export { Botones };