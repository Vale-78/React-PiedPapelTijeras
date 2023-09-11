function EleccionUsuario({
  opciones,
  setJugadorSelec,
  setMostrarResultado,
  setCompuSelec,
}) {
  const eleccionCompu = () => {
    const aleatorio = Math.floor(Math.random() * 3) + 1;
    setCompuSelec(opciones[aleatorio]);
  };

  const eleccionUsuario = (event) => {
    setMostrarResultado(false);
    setJugadorSelec(event.target.value);
    eleccionCompu();
  }
  return (
    <div>
      {opciones.map((item) => (
        <button value={item} onClick={eleccionUsuario}>
          {item}
        </button>
      ))}
    </div>
  );
}
export {EleccionUsuario};
