const estilos = {
  boton: {
    fontfamily: "-apple-system",
    fontWeight: "bolder",
    color: "aliceblue",
    backgroundColor:"rgb(92 55 124)",
    border: "5px solid",
    borderRadius: "8px",
    fontSize: "1rem",
    padding: "7px",
  },
};

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
        style={estilos.boton}
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
