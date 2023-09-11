import { DeterminarJugadaCompu } from "./DeterminarJugadaCompu";
function JuegoEjecutarRonda({
  jugadaElegida,
  setJugadaElegida,
  jugadaCompu,
  jugadaUsuario,
  setJugadaUsuario,
  eleccionUsuario,
  tipo,
}) {
  function aumentarContador() {
    setJugadaElegida(jugadaElegida + 1);
  }
  return (
    
      <div>
      <button onClick={aumentarContador}>{tipo}</button>
      <div>
          <DeterminarJugadaCompu
            eleccionUsuario={eleccionUsuario}
            jugadaElegida={jugadaElegida}
            setJugadaElegida={setJugadaElegida}
            jugadaCompu={jugadaCompu}
          />
        </div>
    </div>
    
  );
}
export { JuegoEjecutarRonda };

