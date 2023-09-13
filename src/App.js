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
  const [name, setName] = useState("");
  const [desbloquearJuego, setDesbloquearJuego] = useState(0);
  const [jugadorPuntos, setJugadorPuntos] = useState(0);
  const [compuPuntos, setCompuPuntos] = useState(0);
  const [compuSelec, setCompuSelec] = useState("");
  const [jugadorSelec, setJugadorSelec] = useState("");
  // const [puntosCompu, setPuntosCompu] = useState(0);
  // const [puntosJugador, setPuntosJugador] = useState(0);
  const [resultFinal, setResultFinal] = useState("");
  const [resultado, setResultado] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  return (
    <div className="App">
      <div className="info-container">
        <InfoTitulo />
      </div>
      <Saludo
        name={name}
        setName={setName}
        desbloquearJuego={setDesbloquearJuego}
      />
      {name}
      <IniciarJuego desbloquearJuego={setDesbloquearJuego} />
      {desbloquearJuego === 1 ? (
        <div>
          <Botones
            tipo="piedra"
            jugadorSelec={jugadorSelec}
            setJugadorSelec={setJugadorSelec}
            compuSelec={compuSelec}
            setCompuSelec={setCompuSelec}
            resultFinal={resultFinal}
            setResultFinal={setResultFinal}
            mostrarResultado={mostrarResultado}
            setMostrarResultado={setMostrarResultado}
            resultado={resultado}
            setResultado={setResultado}
            jugadorPuntos={jugadorPuntos}
            setJugadorPuntos={setJugadorPuntos}
            compuPuntos={compuPuntos}
            setCompuPuntos={setCompuPuntos}
          />
          <Botones
            tipo="papel"
            jugadorSelec={jugadorSelec}
            setJugadorSelec={setJugadorSelec}
            compuSelec={compuSelec}
            setCompuSelec={setCompuSelec}
            mostrarResultado={mostrarResultado}
            setMostrarResultado={setMostrarResultado}
            resultado={resultado}
            setResultado={setResultado}
            jugadorPuntos={jugadorPuntos}
            setJugadorPuntos={setJugadorPuntos}
            compuPuntos={compuPuntos}
            setCompuPuntos={setCompuPuntos}
          />
          <Botones
            tipo="tijeras"
            jugadorSelec={jugadorSelec}
            setJugadorSelec={setJugadorSelec}
            compuSelec={compuSelec}
            setCompuSelec={setCompuSelec}
            mostrarResultado={mostrarResultado}
            setMostrarResultado={setMostrarResultado}
            resultado={resultado}
            setResultado={setResultado}
            jugadorPuntos={jugadorPuntos}
            setJugadorPuntos={setJugadorPuntos}
            compuPuntos={compuPuntos}
            setCompuPuntos={setCompuPuntos}
          />
        </div>
      ) : (
        <></>
      )}
      <div>
        <div>
          <h2>Puntajes</h2>
          <p>Compu: {compuPuntos}</p>
          <p>Tu puntaje: {jugadorPuntos}</p>
        </div>
      </div>
      {mostrarResultado && (
        <div>
          <div>{compuSelec} </div>
          <div>{jugadorSelec} </div>
          <div>
            <h4>Resultado Final</h4>
            <h4>{resultFinal}</h4>
          </div>
        </div>
      )}
      ;
      {/* <Resultados
         
          nombre={values}
          addNombre={setValues}
         
        /> */}
    </div>
  );
}

export default App;
