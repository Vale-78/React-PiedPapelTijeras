const estilos = {
  boton: {
    fontfamily: "-apple-system",
    fontWeight: "bolder",
    color: "aliceblue",
    backgroundColor:"rgb(92, 55, 124)",
    border: "5px solid",
    borderRadius: "8px",
    fontSize: "1rem",
    padding: "7px",
  },
};

const IniciarReiniciarJuego = ({ setPuntajes, desbloquearJuego }) => {
  function reestablecerPuntuaciones() {
    desbloquearJuego(1);
    console.log("presioné reiniciar");
    setPuntajes({ jugador: 0, computadora: 0 });
  }

  return (
    <div>
      <button
      style={estilos.boton}
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
