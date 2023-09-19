const IniciarReiniciarJuego = ({ setPuntajes, desbloquearJuego }) => {
  function reestablecerPuntuaciones() {
    desbloquearJuego(1);
    console.log("presioné reiniciar");
    setPuntajes({ jugador: 0, computadora: 0 });
  }

  return (
    <div>
      <button
        id="re-StartButtonJuego"
        className="botonReiniciar"
        onClick={reestablecerPuntuaciones}
        type="submit"
      >
        Iniciar Juego
      </button>
    </div>
  );
};
export { IniciarReiniciarJuego };
