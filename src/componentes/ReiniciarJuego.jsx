const ReniciarJuego = (
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
  setDesbloquearJuego
) => {
  function iniciar() {
    desbloquearJuego(1);
  }

  return (
    <div>
      <div>
        jugadorSelec=0 setMostrarResultado="" compuSelec="" setResultado=0
        ganaJugador=0 setGanaJugador=0 ganaPC=0 setGanaPC=0 resultado=""
        setResultado="" resultFinal="" setResultFinal="" mostrarResultado=false
        setMostrarResultado=false compuSelec="" setCompuSelec="" jugadorSelec=""
        setJugadorSelec="" resultadoParcial="" setResultadoParcial=""
      </div>
      <p>Ya estás listo para comenzar?, entonces inicia tu juego!!👉🏻👉🏾</p>

      <button
        id="startButtonJuego"
        className="botonIniciar"
        onClick={iniciar}
        type="submit"
      >
        Iniciar Juego
      </button>
    </div>
  );
};
export { ReniciarJuego };
