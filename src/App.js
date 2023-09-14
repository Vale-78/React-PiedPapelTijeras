import "./App.css";
import React from "react";
import { Saludo } from "./componentes/Saludo";
//Iniciar juego es para iniciar y reininiar juego
import { Botones } from "./componentes/Botones";
import { Resultados } from "./componentes/Resultados";
import { InfoTitulo } from "./componentes/InfoTitulo";
import { useState } from "react";

import { IniciarJuego } from "./componentes/IniciarJuego";
import { ReiniciarJuego } from "./componentes/ReiniciarJuego";

// https://github.com/uqbar-project/eg-hola-mundo-react/tree/master  ejemplo
// https://es.linkedin.com/learning/domina-react/piedra-papel-o-tijera

function App() {
  const [name, setName] = useState("");
  const [desbloquearJuego, setDesbloquearJuego] = useState(0);
  const [ganaJugador, setGanaJugador] = useState(0);
  const [ganaPC, setGanaPC] = useState(0);
  const [compuSelec, setCompuSelec] = useState("");
  const [jugadorSelec, setJugadorSelec] = useState("");

  const [resultFinal, setResultFinal] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultadoParcial, setResultadoParcial] = useState("");
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
            ganaJugador={ganaJugador}
            setGanaJugador={setGanaJugador}
            ganaPC={ganaPC}
            setGanaPC={setGanaPC}
            resultadoParcial={resultadoParcial}
            setResultadoParcial={setResultadoParcial}
          />
          <Botones
            tipo="papel"
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
            ganaJugador={ganaJugador}
            setGanaJugador={setGanaJugador}
            ganaPC={ganaPC}
            setGanaPC={setGanaPC}
            resultadoParcial={resultadoParcial}
            setResultadoParcial={setResultadoParcial}
          />
          <Botones
            tipo="tijeras"
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
            ganaJugador={ganaJugador}
            setGanaJugador={setGanaJugador}
            ganaPC={ganaPC}
            setGanaPC={setGanaPC}
            resultadoParcial={resultadoParcial}
            setResultadoParcial={setResultadoParcial}
          />
          {/* <IniciarJuego desbloquearJuego={setDesbloquearJuego} />
      {desbloquearJuego === 1 ? ( 
        <div></div>
      ) : (
        <></>
      )} */}
          <Resultados
            desbloquearJuego={setDesbloquearJuego}
            jugadorSelec={jugadorSelec}
            compuSelec={compuSelec}
            mostrarResultado={mostrarResultado}
            resultado={resultado}
            ganaJugador={ganaJugador}
            ganaPC={ganaPC}
            resultadoParcial={resultadoParcial}
          />
          <div>
            <h3>Resultado Final</h3>
            <h3>
              {name}
              {resultFinal}
            </h3>
          </div>

          <ReiniciarJuego
            desbloquearJuego={setDesbloquearJuego}
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
            ganaJugador={ganaJugador}
            setGanaJugador={setGanaJugador}
            ganaPC={ganaPC}
            setGanaPC={setGanaPC}
            resultadoParcial={resultadoParcial}
            setResultadoParcial={setResultadoParcial}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default App;
