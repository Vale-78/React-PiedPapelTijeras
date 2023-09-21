// import React from 'react';

import piedra from "../assest/BotonesImg/piedra.png";
import papel from "../assest/BotonesImg/papel.png";
import tijeras from "../assest/BotonesImg/tijeras.png";

const estilos = {
  botones: {
    margin: "10px",
  },   
};

function calcularJugadaComputadora() {
  const eleccion = ["piedra", "papel", "tijeras"];
  const numAleatorio = Math.floor(Math.random() * 3);
  return eleccion[numAleatorio];
}

function Botones({ tipo, puntajes, setPuntajes,resultParcial, setResultParcial }) {
  function DeterminarGanador(eleccionUsuario, eleccionCompu) {
  
    if (eleccionCompu === eleccionUsuario) {
      setResultParcial("Empate");
      return "Empate";
    } else if (
      (eleccionCompu === "piedra" && eleccionUsuario === "tijeras") ||
      (eleccionCompu === "papel" && eleccionUsuario === "piedra") ||
      (eleccionCompu === "tijeras" && eleccionUsuario === "papel")
    ) {
      setResultParcial("La compu gana")
      return "computadora";
     ;
    } else {
      setResultParcial("Ganaste!!");
      return "jugador";
    }
  }
  let imagen;
  switch (tipo) {
    case "piedra":
      imagen = piedra;
      break;
    case "papel":
      imagen = papel;
      break;
    case "tijeras":
      imagen = tijeras;
      break;
    default:
      break;
  }
  function jugar() {
    const jugadaComputadora = calcularJugadaComputadora();
    const jugadaUsuario = tipo;
    const ganadorFinal = DeterminarGanador(jugadaUsuario, jugadaComputadora);
    if (ganadorFinal === "jugador") {
      setPuntajes({
        jugador: puntajes.jugador + 1,
        computadora: puntajes.computadora,
      });
    }
    if (ganadorFinal === "computadora") {
      setPuntajes({
        jugador: puntajes.jugador,
        computadora: puntajes.computadora + 1,
      });
    }
    // reiniciar();
  }
  return (
      <div style={estilos.botones}>
        <button onClick={jugar}>
          <img src={imagen} alt={tipo} />
        </button>
      </div>
  );
}

// en boton :   style={botonStyle}
export { Botones };
