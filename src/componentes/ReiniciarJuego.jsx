const ReiniciarJuego = ({ setPuntajes, desbloquearJuego,  setMensaje}) => {
  function reestablecerPuntuaciones() {
    desbloquearJuego(1);
    console.log("presioné reiniciar");
    setPuntajes({ jugador: 0, computadora: 0 });
    setMensaje("");
  }

  return (
    <div className="botones">
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