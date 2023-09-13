// import React from "react";
// import { JuegoEjecutarRonda } from "./JuegoEjecutarRonda";

// function EleccionUsuario({
//   opciones,
//   setJugadorSelec,
//   setMostrarResultado,
//   setCompuSelec,
//   jugadorSelec,
//   mostrarResultado,
//   compuSelec,
//   resultado,
//   setResultado,
//   puntosCompu,
//   setPuntosCompu,
//   puntosJugador,
//   setPuntosJugador,
// }) {
//   const eleccionCompu = () => {
//     const aleatorio = Math.floor(Math.random() * 3) + 1;
//     setCompuSelec(opciones[aleatorio]);
//   };

//   const eleccionUsuario = (event) => {
//     setMostrarResultado(false);
//     setJugadorSelec(event.target.value);
//     eleccionCompu();
//   }
 
//   return (
//     <div>
//       {opciones.map((item) => (
//         <button value={item} onClick={eleccionUsuario}>
//           {item}
//         </button>
//       ))}
//       <div>
//   <JuegoEjecutarRonda
//     jugadorSelec={jugadorSelec}
//     setJugadorSelec={setJugadorSelec}
//     opciones={opciones}
//     mostrarResultado={mostrarResultado}
//     setMostrarResultado={setMostrarResultado}
//     puntosCompu={puntosCompu}
//     setPuntosCompu={setPuntosCompu}
//     puntosJugador={puntosJugador}
//     setPuntosJugador={setPuntosJugador}
//     compuSelec={compuSelec}
//     setCompuSelec={setCompuSelec}
//     resultado={resultado}
//     setResultado={setResultado}
//     eleccionCompu={eleccionCompu}
//     eleccionUsuario={eleccionUsuario}
//   />
// </div>
//     </div>
    
//   );

// }

// export {EleccionUsuario};

