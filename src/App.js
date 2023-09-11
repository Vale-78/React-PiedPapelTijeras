import "./App.css";
import React from "react";
import { Saludo } from "./componentes/Saludo";
//Iniciar juego es para iniciar y reininiar juego
import { Juego } from "./componentes/Juego";
// import { Resultados } from "./componentes/Resultados";
import { InfoTitulo } from "./componentes/InfoTitulo";
import { useState } from "react";

import { IniciarJuego } from "./componentes/IniciarJuego";

// https://github.com/uqbar-project/eg-hola-mundo-react/tree/master  ejemplo
// https://es.linkedin.com/learning/domina-react/piedra-papel-o-tijera
function App() {
  const opciones = ["piedra", "papel", "tijeras"];
  const [values, setValues] = useState("");
  const [desbloquearJuego, setDesbloquearJuego] = useState(0);
  const [compuSelec, setCompuSelec] = useState("");
  const [jugadorSelec, setJugadorSelec] = useState("");
  const [puntosCompu, setPuntosCompu] = useState(0);
  const [puntosJugador, setPuntosJugador] = useState(0);
  const [resultado, setResultado] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  return (
    <div className="App">
      <div className="info-container">
        <InfoTitulo />
      </div>

      {/* <section id="saludoContainer" className='usuarioNameContainer'> */}
      <Saludo
        nombre={values}
        addNombre={setValues}
        desbloquearJuego={setDesbloquearJuego}
      />

      <div>
        {/* <section id="inicarJuego"> */}
        <IniciarJuego desbloquearJuego={setDesbloquearJuego} />
        {desbloquearJuego === 1 ? (
          <Juego
            opciones={opciones}
            jugadorSelec={jugadorSelec}
            setJugadorSelec={setJugadorSelec}
            mostrarResultado={mostrarResultado}
            setMostrarResultado={setMostrarResultado}
            compuSelec={compuSelec}
            setCompuSelec={setCompuSelec}
            resultado={resultado}
            setResultado={setResultado}
            puntosCompu={puntosCompu}
            setPuntosCompu={setPuntosCompu}
            puntosJugador={puntosJugador}
            setPuntosJugador={setPuntosJugador}
          />
        ) : (
          <></>
        )}

        {/* <Resultados
         
          nombre={values}
          addNombre={setValues}
         
        /> */}
      </div>

      {/* <section id="seleccionar-jugada"> */}
      <div></div>

      <div className="botones-container">
        <div className="botones">
          <div className="efecto">
            <button id="Piedra">
              <img id="piedra" src="./assest/piedra.png" alt="" />
            </button>
            <button id="Papel">
              <img id="papel" src="./assest/papel.png" alt="" />
            </button>
            <button id="Tijeras">
              <img id="tijeras" src="./assest/tijeras.png" alt="" />
            </button>
          </div>
          <div className="parrafos">
            <p id="eleccionJugador" className="p1" />
            <p id="eleccionCompu" className="p2" />
            <p id="resultadoRonda" className="p3" />
            <p id="numeroGanaUsuario" className="p4" />
            <p id="numeroGanaPC" className="p5" />
            <p id="resultFinal" className="p6" />
          </div>
        </div>
      </div>
      {/* </section> */}

      {/* <section id="reiniciarJuego"> */}
      <div className="boton-reiniciar">
        <button id="resetButton" className="botonReiniciar">
          Reiniciar Juego
        </button>
      </div>
      {/* </section> */}
    </div>
  );
}

export default App;
