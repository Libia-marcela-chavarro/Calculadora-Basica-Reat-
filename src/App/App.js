import React from "react";
import { PanelPrincipal } from '../PanelPrincipal/PanelPrincipal.js';
import { Visor } from '../Visor/';
import { PanelBotones } from '../PanelBotones/PanelBotones.js';
import { Botones } from '../Botones/Botones.js';
import './App.css';

function App() {

  const [visor, setVisor] = React.useState("0");
  const [primerNum, setPrimerNum] = React.useState(null);
  const [operacion, setOperacion] = React.useState("");

  function ponerNumero(num) {
    if (visor === "0") {
      setVisor(num);
    } else {
      setVisor(visor + num);
    }
  }
  function ponerOperacion(opc) {
    setPrimerNum(visor);
    setOperacion(opc);
    setVisor("0");
  }
  
  function calcularOperacion() {
   
    switch (operacion) {
      case '+': setVisor(primerNum + visor);
        break;
      case '-': setVisor(primerNum - visor);
        break;
      case '*': setVisor(primerNum * visor);;
        break;
      case '/': setVisor(primerNum / visor);
        break;
    }
  }
  function invertirSigno(){
    if(visor>0 ){
      setVisor(visor*-1);
  
    }else{
      setVisor(visor*-1);
  
    }
  }
  function ponerPuntoDecimal(){
    if(!visor.includes(".")){
      setVisor(visor+".")
    }
  }
  return (
    <React.Fragment>
      <PanelPrincipal>
        <Visor visor={visor} />
        <PanelBotones>
          <Botones
            ponerNumero={ponerNumero}
            setVisor={setVisor}
            ponerOperacion={ponerOperacion}
            calcularOperacion={calcularOperacion} 
            invertirSigno= {invertirSigno}
            ponerPuntoDecimal= {ponerPuntoDecimal}/>
        </PanelBotones>
      </PanelPrincipal>
    </React.Fragment>
  );
}

export default App;
