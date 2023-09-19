import React from "react";
import { Botones } from "./Botones";
import { useState, useEffect } from "react";

function Juego({ puntajes, setPuntajes, mensaje, setMensaje, resultParcial, setResultParcial}) {
  const [ganador, setGanador] = useState("");

  function DeterminarGanador() {
    if (puntajes.jugador === 3) {
      setGanador("jugador");
      setMensaje("Felicitaciones, Ganaste!!!");
    } else if (puntajes.computadora === 3) {
      setGanador("computadora");
      setMensaje("Lo siento, Gana la computadora");
    }
  }
  useEffect(() => {
    DeterminarGanador(puntajes);
  });
  return (
    <div>
      <Botones tipo="piedra" puntajes={puntajes} setPuntajes={setPuntajes} ganador={ganador} resultParcial={resultParcial} setResultParcial={setResultParcial}/>
      <Botones tipo="papel" puntajes={puntajes} setPuntajes={setPuntajes} resultParcial={resultParcial} setResultParcial={setResultParcial}/>
      <Botones tipo="tijeras" puntajes={puntajes} setPuntajes={setPuntajes} resultParcial={resultParcial} setResultParcial={setResultParcial} />
    </div>
  );
}
export { Juego };
