function Resultados({
  ganaJugador,
  ganaPC,
  mostrarResultado,
  compuSelec,
  jugadorSelec,
  resultadoParcial,
}) {
  return (
    <div>
      <div>
        <div>
          <h3>Puntajes</h3>
          <p>Compu: {ganaPC}</p>
          <p>Tu puntaje: {ganaJugador}</p>
        </div>
      </div>
      {mostrarResultado && (
        <div>
          <div>{compuSelec} </div>
          <div>{jugadorSelec} </div>
          <div>
            <h4>{resultadoParcial}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
export { Resultados };
