const IniciarJuego = ({ desbloquearJuego }) => {
  function iniciar() {
    desbloquearJuego(1);
  }

  return (
    <div>
      <p>Ya estás listo para comenzar?, entonces inicia tu juego!!</p>
      <p>👇🏽👇🏽👇🏽</p>

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
export { IniciarJuego };
