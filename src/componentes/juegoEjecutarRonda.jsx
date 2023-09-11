const JuegoEjecutarRonda = ({
  jugadorSelec,
  setMostrarResultado,
  compuSelec,
  setResultado,
  puntosCompu,
  setPuntosCompu,
  puntosJugador,
  setPuntosJugador,
}) => {
  if (compuSelec === jugadorSelec) {
    setResultado("Empate");
  } else if (
    (compuSelec === "piedra" && jugadorSelec === "tijeras") ||
    (compuSelec === "papel" && jugadorSelec === "piedra") ||
    (compuSelec === "tijeras" && jugadorSelec === "papel")
  ) {
    setResultado("Gana la compu");
    setPuntosCompu(puntosCompu + 1);
  } else {
    setResultado("Ganaste!!!");
    setPuntosJugador(puntosJugador + 1);
  }
  setMostrarResultado(true);
};
export {JuegoEjecutarRonda};

// // import { DeterminarJugadaCompu } from "./DeterminarJugadaCompu";
// function JuegoEjecutarRonda({
//   jugadaElegida,
//   setJugadaElegida,
//   jugadaUsuario,
//   setJugadaUsuario,
//   eleccionUsuario,
//   tipo,
// }) {
//   function aumentarContador() {
//     setJugadaElegida(jugadaElegida + 1);
//   }
//   return (

//       <div>
//       <button onClick={aumentarContador}>{tipo}</button>
//       <div>
//           {/* <DeterminarJugadaCompu
//             eleccionUsuario={eleccionUsuario}
//             jugadaElegida={jugadaElegida}
//             setJugadaElegida={setJugadaElegida}
//             jugadaCompu={jugadaCompu}
//           /> */}
//         </div>
//     </div>

//   );
// }
// export { JuegoEjecutarRonda };
