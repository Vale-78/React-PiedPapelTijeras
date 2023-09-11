
import { JuegoEjecutarRonda } from "./JuegoEjecutarRonda";

function Juego({ jugadaCompu, jugadaElegida, setJugadaElegida }) {
  return (
    <div>
      <p>El mejor de 5 jugadas gana. Los empates no se cuentan. Éxitos!!</p>
      {/* <button id="startButtonJuego" className="botonIniciar"onClick={iniciar} type="submit">Iniciar Juego</button> */}

      <div>
        <JuegoEjecutarRonda
          eleccionUsuario={0}
          tipo="piedra"
          jugadaElegida={jugadaElegida}
          setJugadaElegida={setJugadaElegida}
          jugadaCompu={jugadaCompu}
        />
        <JuegoEjecutarRonda
          eleccionUsuario={1}
          tipo="papel"
          jugadaElegida={jugadaElegida}
          setJugadaElegida={setJugadaElegida}
          jugadaCompu={jugadaCompu}
        />
        <JuegoEjecutarRonda
          eleccionUsuario={2}
          tipo="tijeras"
          jugadaElegida={jugadaElegida}
          setJugadaElegida={setJugadaElegida}
          jugadaCompu={jugadaCompu}
        />
      
      </div>
    </div>
  );
}
export { Juego };

// import './App.css';
// import { useState } from 'react';
// import React from 'react';
// import { Child } from './components/child';

// function App() {
//   const [contadores, setState] = useState(0);
//   return (
//     <div>
//       <Child tipo="piedra" contador={contadores} setContador={setState} />
//       <Child tipo="papel" contador={contadores} setContador={setState} />
//       <Child tipo="tijera" contador={contadores} setContador={setState} />
//       {contadores}
//     </div>
//   );
// }
// export default App;
// import React from "react";

// function determinarJugadaComputadora() {
//     return Math.floor(Math.random() * 3) + 1;
// }

// export const Child = ( { tipo, contador, setContador } ) => {
//     function aumentarContador() {
//         setContador(contador + 1);
//     }
//     return (
//         <div>
//             <button onClick={aumentarContador}>{tipo}</button>
//         </div>
//     )
// }
