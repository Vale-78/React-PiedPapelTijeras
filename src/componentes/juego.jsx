import {EleccionUsuario} from "./EleccionUsuario";
import { JuegoEjecutarRonda } from "./JuegoEjecutarRonda";

function Juego({
  opciones,
  jugadorSelec,
  setJugadorSelec,
  mostrarResultado,
  setMostrarResultado,
  compuSelec,
  setCompuSelec,
  resultado,
  setResultado,
  puntosCompu,
  setPuntosCompu,
  puntosJugador,
  setPuntosJugador,
}) {
  return (
    <div>
      <p>El mejor de 5 jugadas gana. Los empates no se cuentan. Éxitos!!</p>
    

      <div>
        <EleccionUsuario
          jugadorSelec={jugadorSelec}
          setJugadorSelec={setJugadorSelec}
          opciones={opciones}
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
        /></div>
          <div>
            <JuegoEjecutarRonda
              jugadorSelec={jugadorSelec}
              setJugadorSelec={setJugadorSelec}
              opciones={opciones}
              mostrarResultado={mostrarResultado}
              setMostrarResultado={setMostrarResultado}
              puntosCompu={puntosCompu}
              setPuntosCompu={setPuntosCompu}
              puntosJugador={puntosJugador}
              setPuntosJugador={setPuntosJugador}
              compuSelec={compuSelec}
              setCompuSelec={setCompuSelec}
              resultado={resultado}
              setResultado={setResultado}
            />
          </div>
        
      
    </div>
  );
}
export { Juego };
