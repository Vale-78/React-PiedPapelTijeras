import "./App.css";
import React from "react";
import { Saludo } from "./componentes/Saludo";
import { InfoTitulo } from "./componentes/InfoTitulo";
import Fondo00 from "./assest/Fondo00.png";
import { useState } from "react";
import { IniciarReiniciarJuego } from "./componentes/IniciarReiniciarJuego";
import { Juego } from "./componentes/Juego";
import { PuntajeParcial } from "./componentes/PuntajeParcial";
import {ReiniciarJuego} from "./componentes/ReiniciarJuego"

function App() {
  const [name, setName] = useState("");
  const [desbloquearJuego, setDesbloquearJuego] = useState(0);
  const [puntajes, setPuntajes] = useState({ jugador: 0, computadora: 0 });
  const [ganador, setGanador] = useState("");
  const [mensaje, setMensaje] = useState("");
  const[resultParcial, setResultParcial]= useState("");

  return (
    <div className="App" style={{ backgroundImage: `url(${Fondo00})` }}>
      <div className="info-container">
        <InfoTitulo />
      </div>
      <Saludo
        name={name}
        setName={setName}
        desbloquearJuego={setDesbloquearJuego}
      />
      <IniciarReiniciarJuego
        desbloquearJuego={setDesbloquearJuego}
        setPuntajes={setPuntajes}
      />
      {desbloquearJuego === 1 ? (
        <div>
          <PuntajeParcial puntajes={puntajes} resultParcial={resultParcial} setResultParcial={setResultParcial}/>
          <Juego
            puntajes={puntajes}
            setPuntajes={setPuntajes}
            ganador={ganador}
            setGanador={setGanador}
            name={name}
            mensaje={mensaje}
            setMensaje={setMensaje}
            resultParcial={resultParcial} 
            setResultParcial={setResultParcial}
          />
          {/* <IniciarJuego desbloquearJuego={setDesbloquearJuego} />
      {desbloquearJuego === 1 ? ( 
        <div></div>
      ) : (
        <></>
      )} */}

          <div>
            <h3>Resultado Final</h3>
            <h3>
              {name} : {mensaje}
            </h3>
          </div>
      <ReiniciarJuego  desbloquearJuego={setDesbloquearJuego} 
        setPuntajes={setPuntajes}
        setMensaje={setMensaje}
        />
        </div>
      ) : (
        <></>
      )}
      
    </div>
  );
}
export default App;
