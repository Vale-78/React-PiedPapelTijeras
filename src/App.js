import "./App.css";
import React from "react";
import { Saludo } from "./componentes/Saludo";
//Iniciar juego es para iniciar y reininiar juego
import { Botones } from "./componentes/Botones";
// import { Resultados } from "./componentes/Resultados";
import { InfoTitulo } from "./componentes/InfoTitulo";
import { useState } from "react";

import { IniciarJuego } from "./componentes/IniciarJuego";

// https://github.com/uqbar-project/eg-hola-mundo-react/tree/master  ejemplo
// https://es.linkedin.com/learning/domina-react/piedra-papel-o-tijera

function App() {
  const [values, setValues] = useState("");
  const [desbloquearJuego, setDesbloquearJuego] = useState(0);
  // const [compuSelec, setCompuSelec] = useState("");
  // const [jugadorSelec, setJugadorSelec] = useState("");
  // const [puntosCompu, setPuntosCompu] = useState(0);
  // const [puntosJugador, setPuntosJugador] = useState(0);
  // const [resultado, setResultado] = useState("");
  // const [mostrarResultado, setMostrarResultado] = useState(false);

  // const agregoEmoji = (opcion) => {
  //   switch (opcion) {
  //     case "piedra":
  //       return "🪨";
  //     case "papel":
  //       return "🧻";
  //     case "tijeras":
  //       return "✂️";
  //     default:
  //       break;
  //   }
  // };
  return (
    <div className="App">
      <div className="info-container">
        <InfoTitulo />
      </div>

   
      <Saludo
        nombre={values}
        addNombre={setValues}
        desbloquearJuego={setDesbloquearJuego}
      />

      <div>

        <IniciarJuego desbloquearJuego={setDesbloquearJuego} />

        {desbloquearJuego === 1 ? <Botones /> : <></>}
       </div>
        {/* <div>
          <h2>Puntajes</h2>
          <p>Compu: {puntosCompu}</p>
          <p>Tu puntaje: {puntosJugador}</p>
        </div>
      </div>

      {mostrarResultado && (
        <div>
          <div>Compu : {agregoEmoji(compuSelec)}</div>
          <div>Tu eleccionCompu: {agregoEmoji(jugadorSelec)}</div>
          <div>
            <h4>Resultado Final</h4>
            <h4>{resultado}</h4>
          </div>
        </div>
      )} */}

      {/* <Resultados
         
          nombre={values}
          addNombre={setValues}
         
        /> */}
    </div>
  );
}

export default App;
