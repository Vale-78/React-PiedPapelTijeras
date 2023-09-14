const ReiniciarJuego = ({
  ganaJugador,
  setGanaJugador,
  ganaPC,
  setGanaPC,
  resultado,
  setResultado,
  resultFinal,
  setResultFinal,
  mostrarResultado,
  setMostrarResultado,
  compuSelec,
  setCompuSelec,
  jugadorSelec,
  setJugadorSelec,
  resultadoParcial,
  setResultadoParcial,
  desbloquearJuego,
  setDesbloquearJuego,
}) => {
  function reestablecerPuntuaciones() {
    console.log("presioné reiniciar");
    jugadorSelec = "";
    setMostrarResultado("");
    compuSelec = "";
    setResultado("");
    ganaJugador = 0;
    setGanaJugador(0);
    ganaPC = 0;
    setGanaPC(0);
    resultado = "";
    setResultado("");
    resultFinal = "";
    setResultFinal("");
    mostrarResultado = false;
    setMostrarResultado = false;
    setCompuSelec("");
    jugadorSelec = "";
    setJugadorSelec("");
    resultadoParcial = "";
    setResultadoParcial("");
  }

  return (
    <div>
      <button
        id="re-StartButtonJuego"
        className="botonReiniciar"
        onClick={reestablecerPuntuaciones}
        type="submit"
      >
        Reiniciar Juego
      </button>
    </div>
  );
};
export { ReiniciarJuego };
